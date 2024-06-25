import { Paper } from "@mui/material";
import "./Message.css";

export default function Message({ name, text }) {
  const time = new Date()
  return (
    <Paper
      sx={{
        backgroundColor: "#212121be",
        boxShadow: "0 0 8px #212121d4",
        minWidth: "100px",
        marginBottom: "10px",
        padding: "10px",
        wordWrap: "break-word",
      }}
    >
      <p className="secondaryData">{name}</p>
      <p className="primaryData">{text}</p>
      <p className="secondaryData">{`${time.getHours()}:${time.getMinutes()}`}</p>
    </Paper>
  );
}
