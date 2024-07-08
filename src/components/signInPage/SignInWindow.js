import { Button, Paper } from "@mui/material";
import { signInWithGoogle } from "../firebaseConfiguration/FirebaseConfig";

export default function SignInWindow() {
  return (
    <Paper
      sx={{
        backgroundColor: "#212121be",
        boxShadow: "0 0 8px #212121d4",
        position: "relative",
        margin: "15px",
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
