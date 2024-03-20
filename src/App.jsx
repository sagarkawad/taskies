import ChatSidebar from "./components/ChatSidebar.jsx";
import ChatBar from "./components/ChatBar.jsx";

import { useState, useRef } from "react";

function App() {
  //
  //{project 1: ["task 1", "task 2", "task 3"],
  // project 2: ["task 10", "task 13", "task 20"]};
  const [projects, setProjects] = useState({});
  const [tasks, setTasks] = useState([]);
  const [project, setProject] = useState("");
  let ip = useRef();

  // Function to add new tasks to a project
  const addTasksToProject = (projectName, newTasks) => {
    setProjects((prevProjects) => {
      // Check if the project already exists
      if (prevProjects.hasOwnProperty(projectName)) {
        // If project exists, add the new tasks to its tasks array
        return {
          ...prevProjects,
          [projectName]: [...prevProjects[projectName], ...newTasks],
        };
      } else {
        // If project doesn't exist, create a new key-value pair with the tasks
        return {
          ...prevProjects,
          [projectName]: newTasks,
        };
      }
    });
  };

  function onClickHandler() {
    addTasksToProject(ip.current.value, []);
    console.log(projects);
    ip.current.value = "";
  }

  function projectSelector(e) {
    console.log(e.target.textContent);
    setProject(e.target.textContent);
  }

  return (
    <>
      <ChatSidebar
        onClick={onClickHandler}
        project={project}
        ref2={ip}
        projects={projects}
        projectSelector={projectSelector}
      />
      <ChatBar project={project} />
    </>
  );
}

export default App;
