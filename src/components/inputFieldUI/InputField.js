import { Paper, TextField, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { database } from "../firebaseConfiguration/FirebaseConfig";
import { ref, set, onValue } from "firebase/database";
import { useEffect, useRef } from "react";

export default function InputField({ setMessages, messages, user }) {
  const text = useRef(null);
  useEffect(() => {
    try {
      const messagesRef = ref(database, "placidChatData");

      onValue(messagesRef, (snapshot) => {
        const messagesData = snapshot.val();
        setMessages(messagesData);
      });
    } catch (e) {
      console.error(e);
    }
  }, []);

  function addMessage() {
    try {
      if (user) {
        if (text.current.value) {
          const messagesRef = ref(database, "placidChatData");
          let time = new Date();
          let updatedMessages;
          if (messages) {
            updatedMessages = [
              ...messages,
              [
                user.displayName,
                text.current.value,
                user.uid,
                time.getHours(),
                time.getMinutes(),
                user?.photoURL,
              ],
            ];
          } else {
            updatedMessages = [
              [
                user.displayName,
                text.current.value,
                user.uid,
                time.getHours(),
                time.getMinutes(),
                user?.photoURL,
              ],
            ];
          }
          set(messagesRef, updatedMessages);
          text.current.value = "";
        }
      }
    } catch (e) {
      console.error(e);
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
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          position: "absolute",
          bottom: "0",
          right: "0",
          left: "0",
          opacity: "0.9",
          margin: "20px 15px 15px 23vw",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "50vh",
        }}
        elevation={3}
      >
        <TextField
          sx={{
            marginLeft: "5px",
            width: "100%",
            "& input": {
              color: "white",
              fontFamily: `"Ubuntu", sans-serif`,
              fontStyle: "normal",
            },
            "& label": { color: "white" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "gray" },
              "&:hover fieldset": { borderColor: "white" },
              borderRadius: "50vh",
            },
          }}
          variant="outlined"
          label="Message"
          InputLabelProps={{
            style: {
              color: "white",
              fontFamily: `"Ubuntu", sans-serif`,
              fontStyle: "normal",
            },
          }}
          inputRef={text}
          autoComplete="off"
        />
        <IconButton
          sx={{ marginLeft: "5px", color: "white", padding: "20px" }}
          type="submit"
          onClick={addMessage}
        >
          <SendIcon />
        </IconButton>
      </Paper>
    </form>
  );
}
