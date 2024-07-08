import { Paper, Button } from "@mui/material";
import { logout } from "../firebaseConfiguration/FirebaseConfig";
import "./Header.css";

export default function Header({ user }) {
  return (
    <Paper
      sx={{
        position: "absolute",
        top: "5px",
        left: "5px",
        right: "5px",
        height: "50px",
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
        border: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <p className="userName">{user?.displayName}</p>
      <Button
        variant="contained"
        sx={{
          background: "white",
          color: "black",
          "&:hover": { background: "rgba(255, 255, 255, 0.394)" },
          margin: "5px",
          fontFamily: `"Ubuntu", sans-serif`,
          fontStyle: "normal",
        }}
        onClick={logout}
      >
        Sign Out
      </Button>
    </Paper>
  );
}
