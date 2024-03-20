import ChatSidebar from "./components/ChatSideBar";
import ChatBar from "./components/ChatBar";

import { useState, useRef } from "react";

function App() {
  //
  //{project 1: ["task 1", "task 2", "task 3"],
  // project 2: ["task 10", "task 13", "task 20"]};
  const [projects, setProjects] = useState({});

  return (
    <>
      <ChatSidebar />
      <ChatBar />
    </>
  );
}

export default App;
