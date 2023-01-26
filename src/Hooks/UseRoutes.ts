const move = (route: string): void => {
  window.location.href = `/${route}`;
};

const LOGIN = "login";
const HOME = "";
const CREATEACCOUNT = "createAccount";

export default { move, LOGIN, HOME, CREATEACCOUNT };
