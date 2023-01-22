import { toast } from "solid-toast";
import { CreateUserRequest, LoginUserRequest } from "../Models/User";
import UseLocalStorage from "./UseLocalStorage";

const request = async (method: string, url: string, body: Object) => {
  try {
    const token = UseLocalStorage.getToken();
    const response = await fetch(import.meta.env.VITE_BASEURL + url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Accept: "*/*",
        Authorization: token,
      },
      body: JSON.stringify(body),
    });

    const data = await handleError(response);
    return data;
  } catch (error) {
    toast.error(`${error && error.message}`);
  }
};

const handleError = async (response) => {
  if (!response.ok) {
    const errormessage = await response.json();
    if (errormessage) throw Error(`${errormessage.errorMessage}`);
  }
  return response.json();
};

const api = "/api";
const authapi = `${api}/auth`;

const register = async (user: CreateUserRequest) => {
  return await request("POST", `${authapi}/register`, user);
};

const login = async (user: LoginUserRequest) => {
  return await request("POST", `${authapi}/authenticate`, user);
};

export default { login, register };
