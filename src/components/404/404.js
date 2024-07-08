import { Paper } from "@mui/material";

export default function PageNotFound() {
  return (
    <Paper
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.01)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        position: "relative",
        margin: "65px 5px 5px 5px",
        paddingLeft: "22vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontSize: "2vw",
      }}
    >
      Select a page
    </Paper>
  );
}
