import { toast } from "solid-toast";
import {
  AuthenticatedUser,
  CreateUserRequest,
  GoogleLoginUserRequest,
  LoginUserRequest,
} from "../Models/User";
import UseLocalStorage from "./UseLocalStorage";
import jwtDecode from "jwt-decode";
import { GoogleOAuthResponse } from "../Models/GoogleOAuthResponse";
import { ApiResult } from "../Models/ApiResult";

const request = async (method: string, url: string, body: Object) => {
  try {
    const token: string = UseLocalStorage.getToken();
    const response: Response = await fetch(import.meta.env.VITE_BASEURL + url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Accept: "*/*",
        Authorization: token,
      },
      body: JSON.stringify(body),
    });

    const data: any = await handleError(response);
    return data;
  } catch (error: any) {
    toast.error(`${error && error.message}`);
  }
};

const handleError: any = async (response) => {
  if (!response.ok) {
    const errormessage = await response.json();
    if (errormessage) throw Error(`${errormessage.errorMessage}`);
  }
  return response.json();
};

const api = "/api";
const authapi = `${api}/auth`;

const register = async (
  user: CreateUserRequest
): Promise<ApiResult<AuthenticatedUser>> => {
  return await request("POST", `${authapi}/register`, user);
};

const login = async (
  user: LoginUserRequest
): Promise<ApiResult<AuthenticatedUser>> => {
  return await request("POST", `${authapi}/authenticate`, user);
};

const googleLogin = async (
  token: string
): Promise<ApiResult<AuthenticatedUser>> => {
  const data: GoogleOAuthResponse = jwtDecode(token);
  const user: GoogleLoginUserRequest = {
    Email: data.email,
    GoogleToken: data.sub,
    Username: data.name,
  };
  return await request("POST", `${authapi}/authenticate/google`, user);
};

export default { login, register, googleLogin };
