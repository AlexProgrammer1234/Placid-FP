import { Button, Paper } from "@mui/material";
import { signInWithGoogle } from "../firebaseConfiguration/FirebaseConfig";
import GoogleIcon from "@mui/icons-material/Google";
import logo from "../img/Logo.svg";
import "./SignInWindow.css";

export default function SignInWindow() {
  return (
    <Paper
      elevation={3}
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        margin: "5px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(70px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="logoBox">
        <img src={logo} alt="Placid logo"></img>
        <div className="glitchLogo" data-text="Placid">
          Placid
        </div>
      </div>
      <Button
        variant="contained"
        sx={{
          background: "white",
          color: "black",
          fontFamily: `"Ubuntu", sans-serif`,
          fontStyle: "normal",
          "&:hover": { background: "rgba(255, 255, 255, 0.394)" },
        }}
        onClick={signInWithGoogle}
        endIcon={<GoogleIcon />}
      >
        Sign In with
      </Button>
    </Paper>
  );
}
