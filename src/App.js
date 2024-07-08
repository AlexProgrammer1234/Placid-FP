import { Route, Routes } from "react-router-dom";
import "./App.css";
import ChatField from "./components/chatFieldUI/ChatField";
import ChatList from "./components/chatListUI/ChatList";
import AboutTheAuthor from "./components/aboutAuthorPage/AboutTheAuthor";
import { auth } from "./components/firebaseConfiguration/FirebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import SignInWindow from "./components/signInPage/SignInWindow";
import Header from "./components/header/Header";
import PageNotFound from "./components/404/404";

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      {!user ? (
        <>
          <Header user={user} />
          <ChatList />
          <Routes>
            <Route
              path="chats/demo"
              element={<ChatField user={user} />}
            ></Route>
            <Route
              path="info/author"
              element={<AboutTheAuthor />}
            ></Route>
            <Route
              path="*"
              element={<PageNotFound />}
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
