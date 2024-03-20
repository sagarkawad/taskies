import ChatSidebar from "./components/ChatSideBar";
import ChatBar from "./components/ChatBar";

import { useState, useRef } from "react";

function App() {
  //
  //{project 1: ["task 1", "task 2", "task 3"],
  // project 2: ["task 10", "task 13", "task 20"]};
  const [projects, setProjects] = useState({});
  const [project, setProject] = useState("");

  function onClickHandler() {
    setProjects((prevData) => {
      return { ...prevData, [project]: [] };
    });
    setProject("");
    console.log(projects);
  }

  function onChangeHandler(e) {
    setProject(e.target.value);
  }

  function projectHandler(e) {
    setProject(e.target.textContent);
    console.log(project);
  }

  return (
    <>
      <ChatSidebar
        onClick={onClickHandler}
        onChange={onChangeHandler}
        value={project}
        projects={projects}
        projectHandler={projectHandler}
      />
      <ChatBar project={project} />
    </>
  );
}

export default App;
