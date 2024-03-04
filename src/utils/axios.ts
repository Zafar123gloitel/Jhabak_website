// import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
// import { configs } from '@/configs';
// import { getCookies, setAccessAndRefreshCookies, clearAccessAndRefreshCookies, getRoleCookies } from './cookies.utils';

// const accessToken = configs.baseUrl.accesskey;
// const refreshToken = configs.baseUrl.refreshkey;
// const role = configs.baseUrl.role;
// type CustomHeaders = Record<string, string | boolean>;

// class APIService {
//   private readonly axiosInstance;

//   constructor() {
//     this.axiosInstance = axios.create({
//       baseURL: configs.baseUrl.server,
//       headers: { 'Content-Type': 'application/json' },
//     });

//     this.axiosInstance.interceptors.request.use(
//       (config: AxiosRequestConfig) => {
//         const controller = new AbortController();
//         config.signal = controller.signal;

//         if (typeof window !== 'undefined') {
//           const _accessToken: string | undefined = getCookies(accessToken);
//           const user_role: string | undefined = getRoleCookies(role);

//           if (_accessToken != null && user_role != null) {
//             config.headers.Authorization = `Bearer ${_accessToken}`;
//             config.headers[role] = user_role;
//           }
//         }

//         return config;
//       },
//       async (error: AxiosError) => {
//         return await Promise.reject(error);
//       }
//     );

//     this.axiosInstance.interceptors.response.use(
//       (response: AxiosResponse) => response,
//       async (error: AxiosError) => {
//         const originalRequest = error.config;

//         if ([401, 403].includes(error.response?.status || 0)) {
//           originalRequest._retry = true;

//           const refreshCookies = getCookies(refreshToken);
//           const user_role: string | undefined = getRoleCookies(role);
//           const headers = {
//             Authorization: `Bearer ${refreshCookies}`,
//             role: user_role,
//           };

//           try {
//             const response = await this.axiosInstance.post(
//               `${this.axiosInstance.defaults.baseURL}/auth/refresh`,
//               null,
//               { headers, withCredentials: true }
//             );

//             const { accessToken, refreshToken, role } = response.data;
//             setAccessAndRefreshCookies(accessToken, refreshToken, role);
//             this.axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

//             return this.axiosInstance(originalRequest);
//           } catch (error) {
//             clearAccessAndRefreshCookies();
//           }
//         }

//         return Promise.reject(error);
//       }
//     );
//   }

//   private responseData<T>(response: AxiosResponse<T>): T {
//     return response.data;
//   }

//   private handleError(error: AxiosError): void {
//     const status = error.response?.status;

//     if ((status === 401 || status === 403) && typeof window !== 'undefined') {
//       window.localStorage.removeItem('token');
//     }
//     throw error;
//   }

//   private async makeRequest<T>(
//     method: string,
//     url: string,
//     data: unknown = {},
//     headers: CustomHeaders = {},
//     configOverrides: AxiosRequestConfig = {}
//   ): Promise<unknown> {
//     try {
//       const response = await this.axiosInstance.request<T>({
//         method,
//         url,
//         data,
//         headers,
//         ...configOverrides,
//       });
//       return this.responseData<T>(response);
//     } catch (error) {
//       this.handleError(error as AxiosError);
//     }
//   }

//   async get<T>(
//     url: string,
//     data: unknown = {},
//     headers: CustomHeaders = {},
//     configOverrides: AxiosRequestConfig = {}
//   ): Promise<unknown> {
//     return this.makeRequest<T>('get', url, data, headers, configOverrides);
//   }

//   async post<T>(
//     url: string,
//     data: unknown = {},
//     headers: CustomHeaders = {},
//     configOverrides: AxiosRequestConfig = {}
//   ): Promise<unknown> {
//     return this.makeRequest<T>('post', url, data, headers, configOverrides);
//   }

//   async put<T>(
//     url: string,
//     data: unknown = {},
//     headers: CustomHeaders = {},
//     configOverrides: AxiosRequestConfig = {}
//   ): Promise<unknown> {
//     return this.makeRequest<T>('put', url, data, headers, configOverrides);
//   }

//   async patch<T>(
//     url: string,
//     data: unknown = {},
//     headers: CustomHeaders = {},
//     configOverrides: AxiosRequestConfig = {}
//   ): Promise<unknown> {
//     return this.makeRequest<T>('patch', url, data, headers, configOverrides);
//   }

//   async delete<T>(
//     url: string,
//     headers: CustomHeaders = {},
//     data: unknown = {},
//     configOverrides: AxiosRequestConfig = {}
//   ): Promise<unknown> {
//     return this.makeRequest<T>('delete', url, data, headers, configOverrides);
//   }
// }

// export const apiService = new APIService();
