import { useRef } from "react";

export default function ChatBar({ project, onClick, projects }) {
  let taskIp = useRef();

  function onClickHandler() {
    taskIp.current.value = "";
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
              return <li key={i}>{el}</li>;
            })}
        </ol>
      </div>
    </section>
  );
}
