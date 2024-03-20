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
    console.log(projects);
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

  const removeTasksFromProject = (projectName, tasksToRemove) => {
    setProjects((prevProjects) => {
      // Check if the project exists
      if (prevProjects.hasOwnProperty(projectName)) {
        // Filter out the tasks to remove from the project's tasks array
        const updatedTasks = prevProjects[projectName].filter(
          (task) => !tasksToRemove.includes(task)
        );
        // Update the project's tasks array with the filtered tasks
        return {
          ...prevProjects,
          [projectName]: updatedTasks,
        };
      } else {
        // If the project doesn't exist, do nothing (or you can throw an error)
        return prevProjects;
      }
    });
  };

  function modifyTask(projectName, oldTask, newTask) {
    setProjects((prevProjects) => {
      // Check if the project exists
      if (prevProjects.hasOwnProperty(projectName)) {
        // Map over the tasks array of the project and replace the old task with the new task
        const updatedTasks = prevProjects[projectName].map((task) =>
          task === oldTask ? newTask : task
        );
        // Update the project's tasks array with the modified tasks
        return {
          ...prevProjects,
          [projectName]: updatedTasks,
        };
      } else {
        // If the project doesn't exist, do nothing (or you can throw an error)
        return prevProjects;
      }
    });
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
      <ChatBar
        project={project}
        onClick={addTasksToProject}
        projects={projects}
        deleteHandler={removeTasksFromProject}
        modifyTask={modifyTask}
      />
    </>
  );
}

export default App;
