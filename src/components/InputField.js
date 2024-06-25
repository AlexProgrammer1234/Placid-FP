import { Paper, TextField, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import "./InputField.css";
import { database } from "./firebaseConfig";
import { ref, set, onValue } from "firebase/database";
import { useEffect, useRef } from "react";

export default function InputField({ setMessages, messages, user }) {
  const name = useRef(null);
  const text = useRef(null);
  useEffect(() => {
    const messagesRef = ref(database, "arrayData");

    onValue(messagesRef, (snapshot) => {
      const messagesData = snapshot.val();
      setMessages(messagesData);
    });
  }, []);

  function addMessage() {
    if (user) {
      if (text.current.value) {
        const messagesRef = ref(database, "arrayData");
        let updatedMessages;
        if (messages) {
          updatedMessages = [
            ...messages,
            [user.displayName, text.current.value, user.uid],
          ];
        } else {
          updatedMessages = [[user.displayName, text.current.value, user.uid]];
        }
        set(messagesRef, updatedMessages);
        text.current.value = "";
      }
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
          padding: "10px 0 10px 0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#212121be",
          position: "absolute",
          bottom: "0",
          right: "0",
          left: "0",
          opacity: "0.9",
          margin: "20px 20px 20px 23vw",
          boxShadow: "0 0 8px #212121d4",
        }}
        elevation={6}
      >
        <TextField
          sx={{
            marginLeft: "15px",
            width: "100%",
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
