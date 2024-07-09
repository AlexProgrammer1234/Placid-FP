import { Paper, useMediaQuery } from "@mui/material";
import Message from "../messageUI/Message";
import InputField from "../inputFieldUI/InputField";
import { useState } from "react";

export default function PlacidChatField({ user }) {
  const [messages, setMessages] = useState([]);
  const isSmallScreen = useMediaQuery("(max-width:1200px)");

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
        elevation={3}
        sx={{
          margin: "5px 5px 5px 5px",
          backgroundColor: "rgba(255, 255, 255, 0.01)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          padding: "10px",
          overflow: "auto",
          paddingBottom: "105px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "end",
          paddingLeft: isSmallScreen ? "10px" : "23vw",
          marginLeft: isSmallScreen ? "80px" : "0",
        }}
      >
        {messages?.map((e, index) => {
          return (
            <Message
              key={index}
              name={e[0]}
              text={e[1]}
              color={user.uid === e[2] ? "colorful" : "default"}
              time={`${e[3]}:${e[4] < 10 ? `0${e[4]}` : e[4]}`}
              userAccountIcon={e[5]}
            />
          );
        })}
      </Paper>
      <InputField setMessages={setMessages} messages={messages} user={user} />
    </Paper>
  );
}
