export const configs = {
  nodeEnv: process.env.NODE_ENV as string,
  baseUrl: {
    client: process.env.NEXT_PUBLIC_CLIENT_BASE_URL as string,
    server: process.env.NEXT_PUBLIC_SERVER_BASE_URL as string,
    accesskey: process.env.NEXT_PUBLIC_ACCESS_KEY as string,
    refreshkey: process.env.NEXT_PUBLIC_REFRESH_KEY as string,
    role: process.env.NEXT_PUBLIC_ROLE as string,
  },
};
