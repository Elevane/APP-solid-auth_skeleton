import UseLocalStorage from "./UseLocalStorage";
import UseRoutes from "./UseRoutes";


const logout = () =>  {
    UseLocalStorage.removeToken()
    UseRoutes.move(UseRoutes.LOGIN)
}

export default {logout}