import { Paper } from "@mui/material";

export default function PageNotFound() {
  return (
    <Paper
      sx={{
        backgroundColor: "#2121217a",
        boxShadow: "0 0 8px #212121a1",
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
