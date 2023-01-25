import toast from "solid-toast";
import UseApi from "../../Hooks/UseApi";
import UseLocalStorage from "../../Hooks/UseLocalStorage";
import UseRoutes from "../../Hooks/UseRoutes";
import { ApiResult } from "../../Models/ApiResult";
import { AuthenticatedUser } from "../../Models/User";
import { Component, Setter } from "solid-js";
import Spinner from "solidjs-material-spinner";

const GoogleLoginButton: Component = ({}) => {
  window.handleCredentialResponse = async (e) => {
    const res: ApiResult<AuthenticatedUser> = await UseApi.googleLogin(
      e.credential
    );
    if (!res.result)
      return toast.error(`Could not login with google: ${res.ErrorMessage}`);
    UseLocalStorage.saveToken(res.result.Token);
    UseRoutes.move(UseRoutes.HOME);
  };
  return (
    <div style={{ "padding-bottom": "20px" }}>
      <div
        data-width="600"
        id="g_id_onload"
        data-client_id={import.meta.env.VITE_GOOGLE_CLIENT_ID}
        data-context="signin"
        data-ux_mode="popup"
        data-callback="handleCredentialResponse"
        data-auto_prompt="false"
      ></div>
      <div
        data-width="600"
        class="g_id_signin"
        data-type="standard"
        data-shape="rectangular"
        data-theme="filled_blue"
        data-text="continue_with"
        data-size="large"
        data-logo_alignment="left"
      ></div>
    </div>
  );
};
export default GoogleLoginButton;
