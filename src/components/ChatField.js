import { Paper } from "@mui/material";
import Message from "./Message";
import InputField from "./InputField";

export default function ChatField() {
  return (
    <Paper
      elevation={0}
      sx={{
        maxHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "none",
        position: "relative",
      }}
    >
      <Paper
        sx={{
          margin: "10px 10px 10px 5px",
          backgroundColor: "#2121217a",
          boxShadow: "0 0 8px #212121a1",
          padding: "10px",
          overflow: "auto",
          paddingBottom: "105px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "end",
        }}
      >
        <Message />
      </Paper>
      <InputField />
    </Paper>
  );
}