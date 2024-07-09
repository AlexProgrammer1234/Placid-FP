import { Button, Paper } from "@mui/material";
import { logout } from "../firebaseConfiguration/FirebaseConfig";
import "./UserMenu.css";

export default function UserMenu({ user }) {
  return (
    <Paper
      sx={{
        position: "absolute",
        top: "70px",
        right: "10px",
        zIndex: "999",
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        padding: "5px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        width: "200px",
      }}
    >
      <p className="userInfo">{user?.displayName}</p>
      <p className="userInfo email">{user?.email}</p>
      <Button
        variant="contained"
        sx={{
          background: "white",
          color: "black",
          "&:hover": { background: "rgba(255, 255, 255, 0.394)" },
          fontFamily: `"Ubuntu", sans-serif`,
          fontStyle: "normal",
          width: "100%",
        }}
        onClick={logout}
      >
        Sign Out
      </Button>
    </Paper>
  );
}
