import { Paper, useMediaQuery } from "@mui/material";
import "./Message.css";

export default function Message({ name, text, color, time, userAccountIcon }) {
  const isSmallScreen = useMediaQuery("(max-width: 1200px)");

  return (
    <Paper
      elevation={0}
      sx={{
        background: "none",
        alignSelf: color === "colorful" ? "end" : "start",
        maxWidth: isSmallScreen ? "60vw" : "30vw",
      }}
      className="message"
    >
      <div>
        <img
          className="messageUserIcon"
          src={userAccountIcon}
          alt="Account icon"
        />
      </div>
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
        }}
      >
        <p className="secondaryData">{name}</p>
        <p className="primaryData">{text}</p>
        <p className="secondaryData">{time}</p>
      </Paper>
    </Paper>
  );
}
