import { Route, Routes } from "react-router-dom";
import "./App.css";
import ChatField from "./components/ChatField";
import ChatList from "./components/ChatList";
import AboutTheAuthor from "./components/AboutTheAuthor";
import { auth } from "./components/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import SignInWindow from "./components/SignINWindow";
import Header from "./components/Header";

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      {user ? (
        <>
        <Header user={user}/>
          <ChatList />
          <Routes>
            <Route path="chats/testchat" element={<ChatField user={user}/>}></Route>
            <Route
              path="info/abouttheauthor"
              element={<AboutTheAuthor />}
            ></Route>
          </Routes>
        </>
      ) : (
        <>
          <SignInWindow />
        </>
      )}
    </div>
  );
}

export default App;
