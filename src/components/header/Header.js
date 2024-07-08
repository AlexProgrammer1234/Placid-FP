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
        backgroundColor: "#212121be",
        boxShadow: "0 0 8px #212121d4",
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
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
        }}
        onClick={logout}
      >
        Sign Out
      </Button>
    </Paper>
  );
}
