import { Paper } from "@mui/material";
import { NavLink } from "react-router-dom";
import "./ChatList.css";

export default function ChatList() {
  return (
    <Paper
      sx={{
        margin: "70px 0 15px 15px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#212121be",
        boxShadow: "0 0 8px #212121d4",
        overflow: "auto",
        position: "absolute",
        top: "5px",
        left: "0",
        bottom: "5px",
        zIndex: "10",
        width: "20vw",
      }}
    >
      <NavLink className="chatListBtns" to={"chats/testchat"}>
        Test Chat
      </NavLink>
      <NavLink className="chatListBtns info" to={"info/abouttheauthor"}>
        About The Author
      </NavLink>
    </Paper>
  );
}
