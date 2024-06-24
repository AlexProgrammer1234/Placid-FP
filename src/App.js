import "./App.css";
import ChatField from "./components/ChatField";
import ChatList from "./components/ChatList";

function App() {
  return (
    <div className="App">
      <ChatList />
      <ChatField />
    </div>
  );
}

export default App;
