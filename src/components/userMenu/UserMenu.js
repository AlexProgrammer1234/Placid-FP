import { Button, Paper, useMediaQuery } from "@mui/material";
import { logout } from "../firebaseConfiguration/FirebaseConfig";
import "./UserMenu.css";

export default function UserMenu({ user }) {
  const isSmallScreen = useMediaQuery("(max-width: 1200px)");

  return (
    <Paper
      sx={{
        position: "absolute",
        top: isSmallScreen ? "65px" : "70px",
        right: isSmallScreen ? "5px" : "10px",
        left: isSmallScreen ? "5px" : "",
        bottom: isSmallScreen ? "5px" : "",
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        padding: "5px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        width: isSmallScreen ? "auto" : "200px",
        display: "flex",
        zIndex: "999",
        flexDirection: "column",
        textAlign: isSmallScreen ? "center" : "end",
        backdropFilter: isSmallScreen ? "blur(20px)" : "",
      }}
    >
      <p className="userInfo">{user?.displayName}</p>
      <p className="userInfo email">{user?.email}</p>
      <Button
        variant="contained"
        sx={{
          background: "white",
          color: "black",
          "&:hover": { background: "rgba(255, 255, 255, 0.7)" },
          fontFamily: `"Ubuntu", sans-serif`,
          fontStyle: "normal",
          fontSize: "18px",
          position: isSmallScreen ? "absolute" : "",
          bottom: isSmallScreen ? "5px" : "",
          left: isSmallScreen ? "5px" : "",
          right: isSmallScreen ? "5px" : "",
        }}
        onClick={logout}
      >
        Sign Out
      </Button>
    </Paper>
  );
}
