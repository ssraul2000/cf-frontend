export const TOKEN = "@CF:TOKEN";

export const getToken = () => localStorage.getItem(TOKEN);
export const isAuthenticated = () => localStorage.getItem(TOKEN) !== null;
export const login = token => localStorage.setItem(TOKEN, token);

export const logout = () => {
  localStorage.removeItem(TOKEN);
};
