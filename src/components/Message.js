import { Paper } from "@mui/material";
import "./Message.css";

export default function Message() {
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
      <p className="secondaryData">Test</p>
      <p className="primaryData">Test</p>
      <p className="secondaryData">Test</p>
    </Paper>
  );
}
