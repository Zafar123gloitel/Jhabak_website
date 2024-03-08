import Cookies from 'js-cookie';

const accessToken = 'accessToken';
const refreshToken = 'refreshToken';
const role = 'role';

export const setCookies = (key: string, token: string, expires = 7) => {
  Cookies.set(key, token, { expires });
};
export const setRoleCookies = (key: string, role: string) => {
  Cookies.set(key, role);
};
export const getCookies = (key: string) => {
  return Cookies.get(key);
};
export const getRoleCookies = (key: string) => {
  return Cookies.get(key);
};
export const clearCookies = (key: string): void => {
  Cookies.remove(key);
};
export const setAccessCookies = (token: string) => {
  setCookies(accessToken, token);
};
export const clearAccessCookies = () => {
  clearCookies(accessToken);
};
export const setRefreshCookies = (token: string) => {
  setCookies(refreshToken, token);
};
export const clearRefreshCookies = () => {
  clearCookies(refreshToken);
};
export const setAccessAndRefreshCookies = (_accessToken: string, _refreshToken: string, _role: string) => {
  setCookies(accessToken, _accessToken);
  setCookies(refreshToken, _refreshToken);
  setRoleCookies(role, _role);
};
export const clearAccessAndRefreshCookies = () => {
  clearCookies(accessToken);
  clearCookies(refreshToken);
  clearCookies(role);
};
