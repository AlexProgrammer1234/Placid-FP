import { Paper } from "@mui/material";
import "./Message.css";

export default function Message({ name, text, color, time }) {
  return (
    <Paper
      sx={{
        background:
          color === "colorful"
            ? "rgba(39, 72, 245, 0.3)"
            : "rgba(255, 255, 255, 0.05)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        minWidth: "100px",
        marginBottom: "10px",
        padding: "10px",
        wordWrap: "break-word",
        display: "flex",
        flexDirection: "column",
        alignSelf: color === "colorful" ? "end" : "start",
      }}
    >
      <p className="secondaryData">{name}</p>
      <p className="primaryData">{text}</p>
      <p className="secondaryData">{time}</p>
    </Paper>
  );
}
