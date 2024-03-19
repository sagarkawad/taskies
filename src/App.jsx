import DataBar from "./components/DataBar";

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

  return (
    <section>
      <h1 className="my-8 text-center text-5xl font-bold">taskies</h1>
      <section className="flex flex-col justify-center items-center py-3">
        <div>
          <input type="text" value={value} onChange={onChangeHandler} />
          <button className="w-8 border" onClick={onClickHandler}>
            +
          </button>
        </div>
      </section>
      <DataBar tasks={tasks} />
    </section>
  );
}

export default App;
