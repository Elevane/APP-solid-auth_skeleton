import toast from "solid-toast";
import UseApi from "../../Hooks/UseApi";
import UseLocalStorage from "../../Hooks/UseLocalStorage";
import UseRoutes from "../../Hooks/UseRoutes";
import { ApiResult } from "../../Models/ApiResult";
import { AuthenticatedUser } from "../../Models/User";
import Spinner from "solidjs-material-spinner";
import { Component } from "solid-js";
import { JSX } from "solid-js";

interface Props extends JSX.HTMLEle<HTMLButtonElement> {
  loading: boolean;
}

export default function GoogleLoginButton({ loading }): Component<Props> {
  window.handleCredentialResponse = async (e) => {
    console.log(e);
    const res: ApiResult<AuthenticatedUser> = await UseApi.googleLogin(
      e.credential
    );
    console.log(res);
    if (!res.result)
      return toast.error(`Could not login with google: ${res.ErrorMessage}`);
    UseLocalStorage.saveToken(res.result.Token);
    UseRoutes.move(UseRoutes.HOME);
  };

  return <></>;
}
