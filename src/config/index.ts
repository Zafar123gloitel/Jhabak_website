export const configs = {
  nodeEnv: process.env.NODE_ENV as string,
  baseUrl: {
    client: process.env.NEXT_PUBLIC_CLIENT_BASE_URL as string,
    server: process.env.NEXT_PUBLIC_SERVER_BASE_URL as string,
    apiVersion: process.env.NEXT_PUBLIC_API_VERSION ?? '/api/v1',
  },
};
