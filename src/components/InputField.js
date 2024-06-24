import { Paper, TextField, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import "./InputField.css";
import { database } from "./firebaseConfig";
import { ref, set, onValue } from "firebase/database";
import { useEffect, useRef } from "react";

export default function InputField({ setMessages, messages }) {
  const name = useRef(null);
  const text = useRef(null);
  useEffect(() => {
    const messagesRef = ref(database, "arrayData");

    onValue(messagesRef, (snapshot) => {
      const messagesData = snapshot.val() || [];
      setMessages(messagesData);
    });
  });

  function addMessage() {
    if (name.current.value && text.current.value) {
      const messagesRef = ref(database, "arrayData");
      const updatedMessages = [
        ...messages,
        [name.current.value, text.current.value],
      ];
      set(messagesRef, updatedMessages);
      text.current.value = "";
    }
  }
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
          inputRef={name}
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
          inputRef={text}
        />
        <IconButton
          aria-label="delete"
          sx={{ marginLeft: "15px", color: "white", padding: "20px" }}
          type="submit"
          onClick={addMessage}
        >
          <SendIcon />
        </IconButton>
      </Paper>
    </form>
  );
}
