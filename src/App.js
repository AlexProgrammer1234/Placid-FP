import { Route, Routes } from "react-router-dom";
import "./App.css";
import PlacidChatField from "./components/chatFieldUI/PlacidChatField";
import ChatList from "./components/chatListUI/ChatList";
import AboutTheAuthor from "./components/aboutAuthorPage/AboutTheAuthor";
import { auth } from "./components/firebaseConfiguration/FirebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import SignInWindow from "./components/signInPage/SignInWindow";
import Header from "./components/header/Header";
import PageNotFound from "./components/404/404";
import Loader from "./components/loader/Loader";
import { useState } from "react";

function App() {
  const [user] = useAuthState(auth);
  const [showStartUp, setShowStartUp] = useState(true);

  setTimeout(() => {
    setShowStartUp(false);
  }, 5000);

  if (!showStartUp) {
    return (
      <div className="App">
        {user ? (
          <>
            <Header user={user} />
            <ChatList />
            <Routes>
              <Route
                path="chats/placidchat/demo"
                element={<PlacidChatField user={user} />}
              ></Route>
              <Route path="info/author" element={<AboutTheAuthor />}></Route>
              <Route path="*" element={<PageNotFound />}></Route>
            </Routes>
          </>
        ) : (
          <>
            <SignInWindow />
          </>
        )}
      </div>
    );
  } else if (showStartUp) {
    return <Loader />;
  }
}

export default App;
