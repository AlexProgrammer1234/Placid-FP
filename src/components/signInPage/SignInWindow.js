import { Button, Paper } from "@mui/material";
import { signInWithGoogle } from "../firebaseConfiguration/FirebaseConfig";

export default function SignInWindow() {
  return (
    <Paper elevation={3}
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        position: "relative",
        margin: "5px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <Button
        variant="contained"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "white",
          color: "black",
          "&:hover": { background: "rgba(255, 255, 255, 0.394)" },
        }}
        onClick={signInWithGoogle}
      >
        Sign In with Google
      </Button>
    </Paper>
  );
}
