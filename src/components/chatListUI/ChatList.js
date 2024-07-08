import { Paper } from "@mui/material";
import { NavLink } from "react-router-dom";
import "./ChatList.css";

export default function ChatList() {
  return (
    <Paper
    elevation={3}
      sx={{
        margin: "70px 0 10px 15px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        overflow: "auto",
        position: "absolute",
        top: "5px",
        left: "0",
        bottom: "5px",
        zIndex: "10",
        width: "20vw",
      }}
    >
      <NavLink className="chatListBtns" to={"chats/placidchat/demo"}>
        Placid Chat
      </NavLink>
      <NavLink className="chatListBtns info" to={"info/author"}>
        About The Author
      </NavLink>
    </Paper>
  );
}
