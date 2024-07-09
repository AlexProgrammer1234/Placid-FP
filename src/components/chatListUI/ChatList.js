import { Paper, useMediaQuery } from "@mui/material";
import { NavLink } from "react-router-dom";
import "./ChatList.css";
import InfoIcon from "@mui/icons-material/Info";

export default function ChatList() {
  const isSmallScreen = useMediaQuery("(max-width: 1200px)");
  
  return (
    <Paper
      elevation={isSmallScreen ? 0 : 3}
      sx={{
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        background: isSmallScreen ? "none" : "rgba(255, 255, 255, 0.05)",
        border: isSmallScreen ? "none" : "1px solid rgba(255, 255, 255, 0.1)",
        overflow: "auto",
        position: "absolute",
        top: "5px",
        left: "0",
        bottom: "5px",
        zIndex: "10",
        width: isSmallScreen ? "50px" : "20vw",
        margin: isSmallScreen ? "60px 0 0 5px" : " 70px 0 10px 15px",
      }}
    >
      <NavLink className="chatListBtns" to={"chats/placidchat/demo"}>
        {isSmallScreen ? "PC" : "Placid Chat"}
      </NavLink>
      <NavLink className="chatListBtns info" to={"info/author"}>
        {isSmallScreen ? (
          <InfoIcon sx={{ fontSize: "30px" }} />
        ) : (
          "About the Author"
        )}
      </NavLink>
    </Paper>
  );
}
