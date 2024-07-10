import { Paper, useMediaQuery } from "@mui/material";

export default function PageNotFound() {
  const isSmallScreen = useMediaQuery("(max-width: 1200px)");

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
        fontSize: isSmallScreen ? "30px" : "2vw",
      }}
    >
      Select a page
    </Paper>
  );
}
