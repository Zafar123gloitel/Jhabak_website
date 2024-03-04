import axios, {
  type AxiosRequestConfig,
  type AxiosResponse,
  type AxiosError,
  type InternalAxiosRequestConfig,
  AxiosInstance,
} from 'axios';
import { configs } from '@/config';
import { getCookies, setAccessAndRefreshCookies, clearAccessAndRefreshCookies, getRoleCookies } from './cookies.utils';

const accessToken = configs.baseUrl.accesskey;
const refreshToken = configs.baseUrl.refreshkey;
const role = configs.baseUrl.role;
type CustomHeaders = Record<string, string | boolean>;
class APIService {
  private readonly axiosInstance: AxiosInstance;
  private abortController: AbortController;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: configs.baseUrl.server,
      headers: { 'Content-Type': 'application/json' },
      // withCredentials: configs.nodeEnv === 'production',
    });
    this.abortController = new AbortController();
    this.axiosInstance.interceptors.request.use(
      (config: InternalAxiosRequestConfig<unknown>) => {
        if (typeof window !== 'undefined') {
          // const accessToken: string | null = window.localStorage.getItem('token');
          const _accessToken: string | undefined = getCookies(accessToken);
          const user_role: string | undefined = getRoleCookies(role);
          if (_accessToken != null && user_role != null) {
            config.headers.Authorization = `Bearer ${_accessToken}`;
            config.headers[role] = user_role;
          }
        }
        return config;
      },
      async (error: AxiosError) => {
        return await Promise.reject(error);
      }
    );

    this.axiosInstance.interceptors.response.use(
      response => response,
      async error => {
        const originalRequest = error.config;
        // if (error.response.status === 401 || error.response.status === 403) {
        if ([401, 403].includes(error.response.status)) {
          originalRequest._retry = true;
          const refreshCookies = getCookies(refreshToken);
          const user_role: string | undefined = getRoleCookies(role);
          const headers = {
            Authorization: `Bearer ${refreshCookies}`,
            role: user_role,
          };
          try {
            const response = await this.axiosInstance.post(
              `${this.axiosInstance}/auth/refresh`,
              // { refreshToken },
              headers,
              { withCredentials: true, signal: this.abortController.signal }
            );
            const { accessToken, refreshToken, role } = response.data;
            setAccessAndRefreshCookies(accessToken, refreshToken, role);
            // setCookie('accessToken', accessToken, 3600); // expires in 1 hour
            this.axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
            return this.axiosInstance(originalRequest);
          } catch (error) {
            // deleteCookie('accessToken');
            // deleteCookie('refreshToken');
            clearAccessAndRefreshCookies();
            // handle refresh token failure
          }
        }
        return Promise.reject(error);
      }
    );
  }

  private responseData<T>(response: AxiosResponse<T>): T {
    return response.data;
  }

  private handleError(error: AxiosError): void {
    const status = error.response?.status;

    if ((status === 401 || status === 403) && typeof window !== 'undefined') {
      window.localStorage.removeItem('token');
    }
    throw error;
  }

  async get<T>(
    url: string,
    data: unknown = {},
    headers: CustomHeaders = {},
    configOverrides: AxiosRequestConfig = {}
  ): Promise<unknown> {
    try {
      const response = await this.axiosInstance.request<T>({
        method: 'get',
        url,
        data,
        headers,
        ...configOverrides,
        signal: this.abortController.signal,
      });
      return this.responseData<T>(response);
    } catch (error) {
      this.handleError(error as AxiosError);
    }
  }

  async post<T>(
    url: string,
    data: unknown = {},
    headers: CustomHeaders = {},
    configOverrides: AxiosRequestConfig = {}
  ): Promise<unknown> {
    try {
      const response = await this.axiosInstance.request<T>({
        method: 'post',
        url,
        data,
        headers,
        ...configOverrides,
        signal: this.abortController.signal,
      });
      return this.responseData<T>(response);
    } catch (error) {
      this.handleError(error as AxiosError);
    }
  }

  async put<T>(
    url: string,
    data: unknown = {},
    headers: CustomHeaders = {},
    configOverrides: AxiosRequestConfig = {}
  ): Promise<unknown> {
    try {
      const response = await this.axiosInstance.request<T>({
        method: 'put',
        url,
        data,
        headers,
        ...configOverrides,
        signal: this.abortController.signal,
      });
      return this.responseData<T>(response);
    } catch (error) {
      this.handleError(error as AxiosError);
    }
  }

  async patch<T>(
    url: string,
    data: unknown = {},
    headers: CustomHeaders = {},
    configOverrides: AxiosRequestConfig = {}
  ): Promise<unknown> {
    try {
      const response = await this.axiosInstance.request<T>({
        method: 'patch',
        url,
        data,
        headers,
        ...configOverrides,
        signal: this.abortController.signal,
      });
      return this.responseData<T>(response);
    } catch (error) {
      this.handleError(error as AxiosError);
    }
  }

  async delete<T>(
    url: string,
    headers: CustomHeaders = {},
    data: unknown = {},
    configOverrides: AxiosRequestConfig = {}
  ): Promise<unknown> {
    try {
      const response = await this.axiosInstance.request<T>({
        method: 'delete',
        url,
        data,
        headers,
        ...configOverrides,
        signal: this.abortController.signal,
      });
      return this.responseData<T>(response);
    } catch (error) {
      this.handleError(error as AxiosError);
    }
  }

  abortRequest() {
    this.abortController.abort();
    this.abortController = new AbortController();
  }
}

export const apiService = new APIService();
