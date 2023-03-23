import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useUserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import Message from "./Message";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState({});
  const { user, login, failed } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    user ? navigate("/") : navigate("/login");
  }, [user, navigate]);

  useEffect(()=>{
    if (failed) setMessage({
      message: "Usuario y Contrasena incorrecto",
      severity: "error",
      duration: 2000,
      reset: new Date(),
    });
  }, [failed])

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email.trim() && password.trim()) login({ email, password });
    else
      setMessage({
        message: "Usuario y Contrasena requirido",
        severity: "error",
        duration: 2000,
        reset: new Date(),
      });
  };

  return (
    <Container component="main" maxWidth="sm">
      {message && (
        <Message
          {...message}
          style={{ minWidth: "360px", maxWidth: "600px", margin: "auto" }}
        />
      )}
      <Box
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          px: 4,
          py: 6,
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Log In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
