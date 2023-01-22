import { FaceOutlined } from "@suid/icons-material";
import { Box, Avatar, Typography, TextField, Link, Grid, Button, Icon } from "@suid/material"
import { createSignal } from "solid-js"
import Spinner from 'solidjs-material-spinner';
import UseApi from "../../Hooks/UseApi";

export default function Login() {
  const [email, setEmail] = createSignal("")
  const [password, setPassword] = createSignal("")
  const [loading, setLoading] = createSignal(false)


  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault();
    var res = await UseApi.login(email(), password())
    console.log(res)
  }

  return (
    <Box >
          <Avatar sx={{ m: 1, bgcolor: 'primary.mainz' }}>
           <Icon><FaceOutlined></FaceOutlined></Icon>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box style={{width : '400px'}} component="form" onSubmit={(e) => handleSubmit(e)} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            <Button
            disabled={loading()}
              type="submit"
              fullWidth
              class="button"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              { loading() ? <Spinner radius="25" stroke="3" color="#fff"/> : "Sign in"}
            </Button>
            <Grid container>
              <Grid item>
                <Link variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
  )
}
