import { useRef, useState } from "react";

export default function ChatBar({
  project,
  onClick,
  projects,
  deleteHandler,
  modifyTask,
}) {
  let taskIp = useRef();

  function onClickHandler() {
    taskIp.current.value = "";
  }

  const [activeItems, setActiveItems] = useState([]);
  const textRefs = useRef([]);

  const handleToggle = (index) => {
    const updatedActiveItems = [...activeItems];
    updatedActiveItems[index] = !updatedActiveItems[index];
    setActiveItems(updatedActiveItems);
  };

  const textStriker = (index) => {
    handleToggle(index); // Toggle the active state for the clicked item
  };

  function selectHandler(el) {
    console.log(el);
  }

  return (
    <section className="flex flex-col justify-center items-center pt-36">
      <h1 className="text-white font-bold mb-6">{project}</h1>
      <div>
        <input type="text" ref={taskIp} />
        <button
          className="border w-8"
          onClick={() => {
            onClick(project, [taskIp.current.value]);
            onClickHandler();
          }}
        >
          +
        </button>
      </div>
      <div>
        <ol className="text-white">
          {Object.keys(projects).length !== 0 &&
            project != "" &&
            projects[project].map((el, i) => {
              return (
                <li
                  key={i}
                  ref={(ref) => (textRefs.current[i] = ref)}
                  className={activeItems[i] ? "line-through" : ""}
                >
                  {el} <button onClick={() => textStriker(i)}>✔️</button>
                  <button
                    onClick={() => {
                      deleteHandler(project, [el]);
                    }}
                  >
                    ❌
                  </button>
                  {/* <button
                    onClick={() => {
                      selectHandler(el);
                    }}
                  >
                    🔤
                  </button> */}
                </li>
              );
            })}
        </ol>
      </div>
    </section>
  );
}
