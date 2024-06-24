import { Paper } from "@mui/material";
import { NavLink } from "react-router-dom";
import "./ChatList.css";

export default function ChatList() {
  return (
    <Paper
      sx={{
        margin: "10px 5px 10px 10px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#212121be",
        boxShadow: "0 0 8px #212121d4",
        position: "relative",
        overflow: "auto"
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
