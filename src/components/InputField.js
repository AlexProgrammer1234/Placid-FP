import { Paper, TextField, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import "./InputField.css";

export default function InputField() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      action="#"
    >
      <Paper
        sx={{
          padding: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#212121be",
          position: "absolute",
          bottom: "0",
          right: "0",
          left: "0",
          opacity: "0.9",
          margin: "20px 20px 20px 15px",
          boxShadow: "0 0 8px #212121d4",
        }}
        elevation={6}
      >
        <TextField
          sx={{
            width: "30%",
            "& input": { color: "white" },
            "& label": { color: "white" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "gray" },
              "&:hover fieldset": { borderColor: "white" },
            },
          }}
          variant="outlined"
          label="Name"
          InputLabelProps={{ style: { color: "white" } }}
        />
        <TextField
          sx={{
            marginLeft: "15px",
            width: "80%",
            "& input": { color: "white" },
            "& label": { color: "white" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "gray" },
              "&:hover fieldset": { borderColor: "white" },
            },
          }}
          variant="outlined"
          label="Message"
          InputLabelProps={{ style: { color: "white" } }}
        />
        <IconButton
          aria-label="delete"
          sx={{ marginLeft: "15px", color: "white", padding: "20px" }}
          type="submit"
        >
          <SendIcon />
        </IconButton>
      </Paper>
    </form>
  );
}
