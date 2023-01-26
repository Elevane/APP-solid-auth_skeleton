const saveToken = (item: string): void => {
  localStorage.setItem(
    import.meta.env.VITE_TOKEN_KEY,
    btoa(JSON.stringify(item))
  );
};
const getToken = (): string => {
  const value: string = localStorage.getItem(import.meta.env.VITE_TOKEN_KEY);
  return value;
};
const getItem = (key: string): any => {
  const value: string = localStorage.getItem(key);
  return value;
};

const removeToken = (): void => {
  localStorage.removeItem(import.meta.env.VITE_TOKEN_KEY);
};

export default { getItem, saveToken, getToken, removeToken };
