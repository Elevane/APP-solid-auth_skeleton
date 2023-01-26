import UseLocalStorage from "./UseLocalStorage";
import UseRoutes from "./UseRoutes";

const logout = (): void => {
  UseLocalStorage.removeToken();
  UseRoutes.move(UseRoutes.LOGIN);
};

export default { logout };
