import { IconButton, Paper, useMediaQuery } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import SchoolIcon from "@mui/icons-material/School";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import "./AboutTheAuthor.css";

export default function AboutTheAuthor() {
  const isSmallScreen = useMediaQuery("(max-width: 1200px)");

  return (
    <Paper
      sx={{
        margin: isSmallScreen ? "65px 5px 5px 80px" : "65px 5px 5px 5px",
        backgroundColor: "rgba(255, 255, 255, 0.01)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        padding: isSmallScreen ? "10px 10px 10px 30px" : "10px 10px 10px 26vw",
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
        <a
          href="https://github.com/AlexProgrammer1234"
          target="_blank"
          rel="noreferrer"
        >
          <IconButton sx={{ color: "white" }}>
            <GitHubIcon style={{ fontSize: "30px" }} />
          </IconButton>
        </a>
        <a
          href="https://classroom.google.com/c/NjIxNzEzMDc0ODU2"
          target="_blank"
          rel="noreferrer"
        >
          <IconButton sx={{ color: "white" }}>
            <SchoolIcon style={{ fontSize: "30px" }} />
          </IconButton>
        </a>
        <a
          href="https://trello.com/invite/b/6edIIctf/ATTI985ae529e617def5ad5b4fbcc179cf93ECD37706/кобилянський-олексій-afe34-фінальний-проект"
          target="_blank"
          rel="noreferrer"
        >
          <IconButton sx={{ color: "white", marginRight: "10px" }}>
            <DashboardCustomizeIcon style={{ fontSize: "30px" }} />
          </IconButton>
        </a>
      </div>
    </Paper>
  );
}
