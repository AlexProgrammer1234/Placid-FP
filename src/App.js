import { Route, Routes } from "react-router-dom";
import "./App.css";
import ChatField from "./components/ChatField";
import ChatList from "./components/ChatList";
import AboutTheAuthor from "./components/AboutTheAuthor";

function App() {
  return (
    <div className="App">
      <ChatList />
      <Routes>
        <Route path="chats/testchat" element={<ChatField />}></Route>
        <Route path="info/abouttheauthor" element={<AboutTheAuthor />}></Route>
      </Routes>
    </div>
  );
}

export default App;
