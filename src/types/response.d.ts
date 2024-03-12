export type TSort = 'desc' | 'asc'; // union

export interface IPaginationOptions {
  page: number;
  limit: number;
  sort: TSort;
  ignoreOption: Record<string, number>;
}

export interface IPagination {
  page?: number;
  limit?: number;
  search?: string;
}

// * for response

export interface IMessageResponse {
  status: number;
  success: boolean;
  message: string;
}

export interface IPayloadResponse<T> extends IMessageResponse {
  payload: T;
}

export interface IPayloadWithTokensResponse<T> extends IMessageResponse {
  payload: T;
  refreshToken: string;
  accessToken: string;
}

export interface IPayloadWithAccessTokenResponse<T> extends IMessageResponse {
  payload: T;
  accessToken: string;
}
