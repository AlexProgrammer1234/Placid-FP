import { IconButton, Paper } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import SchoolIcon from "@mui/icons-material/School";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import "./AboutTheAuthor.css";

export default function AboutTheAuthor() {
  return (
    <Paper
      sx={{
        margin: "65px 5px 5px 5px",
        backgroundColor: "#2121217a",
        boxShadow: "0 0 8px #212121a1",
        padding: "10px 10px 10px 26vw",
        overflow: "auto",
        maxHeight: "100%",
        color: "white",
        position: "relative",
      }}
    >
      <h2>About the Author</h2>
      <p className="AuthorsData">
        <b>Name:</b> Alex K
      </p>
      <p className="AuthorsData">
        <b>Group:</b> AFE_34
      </p>
      <div className="links">
        <a href="https://github.com/AlexProgrammer1234" target="_blank">
        <IconButton sx={{ color: "white", marginRight: "10px" }}>
          <GitHubIcon style={{ fontSize: "35px" }} />
        </IconButton>
        </a>
      </div>
    </Paper>
  );
}
