import { Paper } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import SchoolIcon from "@mui/icons-material/School";
import "./AboutTheAuthor.css";

export default function AboutTheAuthor() {
  return (
    <Paper
      sx={{
        margin: "10px 10px 10px 5px",
        backgroundColor: "#2121217a",
        boxShadow: "0 0 8px #212121a1",
        padding: "10px",
        overflow: "auto",
        maxHeight: "100%",
        color: "white",
        position: "relative",
      }}
    >
      <h2>About the Author</h2>
      <p className="AuthorsData"><b>Name:</b> Alex K</p>
      <p className="AuthorsData"><b>Group №</b> </p>
      <p className="AuthorsData"><b>Clasroom Link:</b> </p>
      <p className="siteLink"><b>Site Link:</b> </p>
      <div className="links">
        <GitHubIcon style={{fontSize: "35px"}}/>
        <SchoolIcon style={{fontSize: "35px"}}/>
      </div>
    </Paper>
  );
}
