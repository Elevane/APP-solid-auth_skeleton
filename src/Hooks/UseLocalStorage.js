const saveToken = (item) => {
  localStorage.setItem(
    import.meta.env.VITE_TOKEN_KEY,
    btoa(JSON.stringify(item))
  );
};
const getToken = () => {
  var value = localStorage.getItem(import.meta.env.VITE_TOKEN_KEY);
  return isOk(value);
};
const getItem = (key) => {
  var value = localStorage.getItem(key);
  console.log(value);
  return isOk(value);
};

const isOk = (value) => {
  if (value === undefined || value == undefined) return null;
  if (value == "") return null;

  return value;
};

export default { getItem, saveToken, getToken };
