import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { configs } from '@/config';
import { store } from '@/store';
import { resetAuth_, setAuth_ } from '@/store/slices/authSlice';
const { baseUrl, nodeEnv } = configs;

const baseURL: string = `${baseUrl.server}${baseUrl.apiVersion}`;
const isProduction: boolean = nodeEnv === 'production';

interface TokenResponse {
  accessToken: string;
  refreshToken: string;
  role: string;
  message: string;
  status: number;
  success: boolean;
}

interface InternalAxiosRequestConfig extends AxiosRequestConfig {
  _retry?: boolean;
}

class APIService {
  private readonly axiosInstance: AxiosInstance;
  private abortController: AbortController;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL,
      headers: { 'Content-Type': 'application/json' },
      withCredentials: isProduction,
    });

    this.abortController = new AbortController();
    this.setupRequestInterceptors();
    this.setupResponseInterceptors();
  }

  private setupRequestInterceptors() {
    this.axiosInstance.interceptors.request.use(
      config => {
        const { accessToken, role } = this.getStoredCredentials();
        if (accessToken && role) {
          config.headers.Authorization = `Bearer ${accessToken}`;
          config.headers.role = role;
        }
        return config;
      },
      async error => Promise.reject(error)
    );
  }

  private setupResponseInterceptors() {
    this.axiosInstance.interceptors.response.use(
      response => response,
      async (error: AxiosError) => {
        const originalRequest = error.config as InternalAxiosRequestConfig;
        if (
          [401, 403].includes(error.response?.status ?? 0)
          // && !originalRequest._retry
        ) {
          // originalRequest._retry = true;
          await this.refreshToken();
          return this.axiosInstance(originalRequest);
        }
        return Promise.reject(error);
      }
    );
  }

  private getStoredCredentials() {
    // Use useSelector to access authentication state from the Redux store
    const { accessToken, role } = store.getState().auth;
    return { accessToken, role };
  }

  private updateStoredCredentials(accessToken: string, refreshToken: string, role: string) {
    // Dispatch the setCredentials action to update the Redux store
    store.dispatch(setAuth_({ accessToken, refreshToken, role }));

    this.axiosInstance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    this.axiosInstance.defaults.headers.common.role = role;
  }

  private clearStoredCredentials() {
    // Dispatch the clearCredentials action to update the Redux store
    store.dispatch(resetAuth_());
  }

  private async refreshToken() {
    try {
      // Use useSelector to access authentication state from the Redux store
      const { refreshToken: RefreshToken, role: Role } = store.getState().auth;

      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RefreshToken}`,
        'role': Role,
      };
      const response = await axios.post<TokenResponse>(
        `${baseURL}/auth/refresh`,
        {},
        { headers, withCredentials: isProduction, signal: this.abortController.signal }
      );
      if (response.data && response.data.status === 200 && response.data.success) {
        const { accessToken, refreshToken, role } = response.data;
        this.updateStoredCredentials(accessToken, refreshToken, role);
      }
    } catch (error) {
      this.handleError(error as AxiosError);
    }
  }

  private responseData<T>(response: AxiosResponse<T>): T {
    return response.data;
  }

  private handleError(error: AxiosError): never {
    const status = error.response?.status;
    if ([401, 403].includes(status ?? 0) && typeof window !== 'undefined') {
      this.clearStoredCredentials();
    }
    throw error;
  }

  async get<T>(
    url: string,
    params: Record<string, unknown> = {},
    headers: Record<string, string> = {},
    configOverrides: AxiosRequestConfig = {}
  ): Promise<T> {
    try {
      const response = await this.axiosInstance.request<T>({
        method: 'get',
        url,
        params,
        headers,
        ...configOverrides,
        signal: this.abortController.signal,
      });
      return this.responseData(response);
    } catch (error) {
      this.handleError(error as AxiosError);
    }
  }

  async post<T>(
    url: string,
    data: unknown = {},
    headers: Record<string, string> = {},
    configOverrides: AxiosRequestConfig = {}
  ): Promise<T> {
    try {
      const response = await this.axiosInstance.post<T>(url, data, {
        headers,
        ...configOverrides,
        signal: this.abortController.signal,
      });
      return this.responseData(response);
    } catch (error) {
      this.handleError(error as AxiosError);
    }
  }

  async put<T>(
    url: string,
    data: Record<string, unknown> = {},
    headers: Record<string, string> = {},
    configOverrides: AxiosRequestConfig = {}
  ): Promise<T> {
    try {
      const response = await this.axiosInstance.put<T>(url, data, {
        headers,
        ...configOverrides,
        signal: this.abortController.signal,
      });
      return this.responseData(response);
    } catch (error) {
      this.handleError(error as AxiosError);
    }
  }

  async patch<T>(
    url: string,
    data: Record<string, unknown> = {},
    headers: Record<string, string> = {},
    configOverrides: AxiosRequestConfig = {}
  ): Promise<T> {
    try {
      const response = await this.axiosInstance.patch<T>(url, data, {
        headers,
        ...configOverrides,
        signal: this.abortController.signal,
      });
      return this.responseData(response);
    } catch (error) {
      this.handleError(error as AxiosError);
    }
  }

  async delete<T>(
    url: string,
    data: Record<string, unknown> = {},
    headers: Record<string, string> = {},
    configOverrides: AxiosRequestConfig = {}
  ): Promise<T> {
    try {
      const response = await this.axiosInstance.request<T>({
        method: 'delete',
        url,
        data,
        headers,
        ...configOverrides,
        signal: this.abortController.signal,
      });
      return this.responseData(response);
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

/**
//! Cleanup function to abort the request when the component unmounts
    return () => {
      apiService.abortRequest();
    };
 */
