import { Paper } from "@mui/material";
import Message from "../messageUI/Message";
import InputField from "../inputFieldUI/InputField";
import { useState } from "react";

export default function ChatField({ user }) {
  const [messages, setMessages] = useState([]);

  return (
    <Paper
      elevation={0}
      sx={{
        maxHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "none",
        position: "relative",
        zIndex: "1",
        marginTop: "60px",
      }}
    >
      <Paper
        sx={{
          margin: "5px 5px 5px 5px",
          backgroundColor: "#2121217a",
          boxShadow: "0 0 8px #212121a1",
          padding: "10px",
          overflow: "auto",
          paddingBottom: "105px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "end",
          paddingLeft: "23vw",
        }}
      >
        {messages?.map((e, index) => {
          return (
            <Message
              key={index}
              name={e[0]}
              text={e[1]}
              color={user.uid === e[2] ? "colorful" : "default"}
            />
          );
        })}
      </Paper>
      <InputField setMessages={setMessages} messages={messages} user={user} />
    </Paper>
  );
}
