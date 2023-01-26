import { FaceOutlined } from "@suid/icons-material";
import {
  Box,
  Avatar,
  Typography,
  TextField,
  Link,
  Grid,
  Icon,
  Button,
} from "@suid/material";
import { Component, createSignal } from "solid-js";
import toast from "solid-toast";
import Spinner from "solidjs-material-spinner";
import UseApi from "../../Hooks/UseApi";
import UseLocalStorage from "../../Hooks/UseLocalStorage";
import UseRoutes from "../../Hooks/UseRoutes";
import { ApiResult } from "../../Models/ApiResult";
import { AuthenticatedUser, LoginUserRequest } from "../../Models/User";
import GoogleLoginButton from "./GoogleLoginButton";

const Login: Component = () => {
  const [userLogin, setUserLogin] = createSignal<LoginUserRequest>(null);
  const [loading, setLoading] = createSignal<boolean>(false);

  const handleSubmit = async (e: Event): Promise<void> => {
    setLoading(true);
    e.preventDefault();
    const res: ApiResult<AuthenticatedUser> = await UseApi.login(userLogin());
    setLoading(false);
    if (!res.result) toast.error(`Could not login: ${res.ErrorMessage}`);
    else {
      UseRoutes.move(UseRoutes.HOME);
      UseLocalStorage.saveToken(res.result.Token);
    }
  };

  return (
    <Box>
      <Avatar sx={{ m: 1, bgcolor: "primary.mainz" }}>
        <Icon>
          <FaceOutlined></FaceOutlined>
        </Icon>
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>

      <Box
        style={{ width: "400px" }}
        component="form"
        onSubmit={(e) => handleSubmit(e)}
        noValidate
        sx={{ mt: 1 }}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          onChange={(e) =>
            setUserLogin({ ...userLogin(), Email: e.target.value })
          }
        />

        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          onChange={(e) =>
            setUserLogin({ ...userLogin(), Password: e.target.value })
          }
          autoComplete="current-password"
        />
        <Button
          disabled={loading()}
          type="submit"
          id="google_button"
          fullWidth
          class="button"
          variant="contained"
          sx={{ mt: 1, mb: 2 }}
        >
          {loading() ? (
            <Spinner radius="25" stroke="3" color="#fff" />
          ) : (
            "Sign in"
          )}
        </Button>
        <GoogleLoginButton></GoogleLoginButton>

        <Grid container>
          <Grid item>
            <Link
              style={{ cursor: "pointer" }}
              onClick={() => UseRoutes.move(UseRoutes.CREATEACCOUNT)}
              variant="body2"
            >
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Login;
