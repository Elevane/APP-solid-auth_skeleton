import { Box, Avatar, Typography, TextField, Link, Grid, Button } from "@suid/material"
import { createSignal } from "solid-js"
import Spinner from 'solidjs-material-spinner';


export default function Login() {
  const [email, setEmail] = createSignal("")
  const [password, setPassword] = createSignal("")
  const [loading, setLoading] = createSignal(false)


  const handleSubmit = (e) => {
    setLoading(true)
    e.preventDefault();
  }
  
  return (
    <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.mainz' }}>
           
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
              type="submit"
              fullWidth
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
