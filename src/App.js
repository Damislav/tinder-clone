import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TinderCards from "./components/TinderCards";
import SwipeButton from "./components/SwipeButton";

import Chats from "./components/Chats";
import ChatScreen from "./components/ChatScreen";
import Chat from "./components/Chat";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButton />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
