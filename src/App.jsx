import DataBar from "./components/DataBar";
import TaskInput from "./components/TaskInput";

import { useState, useRef } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [value, setValue] = useState("");
  // let ip = useRef();

  function onChangeHandler(e) {
    setValue(e.target.value);
  }

  function onClickHandler() {
    if (value.trim() === "") {
      return;
    }
    setTasks((prevTasks) => {
      return [...prevTasks, value];
    });
    console.log(tasks);
    setValue("");
  }

  function onSubmitHandler(e) {
    e.preventDefault(); // Prevents page refresh on form submission
    onClickHandler();
  }

  return (
    <section>
      <h1 className="my-8 text-center text-5xl font-bold">taskies</h1>
      <section className="flex flex-col justify-center items-center py-3">
        <TaskInput
          value={value}
          onChange={onChangeHandler}
          onSubmit={onSubmitHandler}
        />
      </section>
      <DataBar tasks={tasks} />
    </section>
  );
}

export default App;
