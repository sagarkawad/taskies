// ChatSidebar.js
import { useState, forwardRef } from "react";

const ChatSidebar = function ChatSidebar({
  onClick,
  projects,
  ref2,
  projectSelector,
}) {
  const [flag, setFlag] = useState(true);

  function onClickHandler() {
    setFlag((prevState) => !prevState);
  }

  return (
    <>
      <div
        className="rounded-full w-6 bg-white text-center"
        onClick={onClickHandler}
      >
        T
      </div>
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-white overflow-y-auto shadow-lg ${
          flag ? "invisible" : ""
        }`}
      >
        <div className="p-4 border-b border-gray-700 flex justify-between">
          <h1 className="text-xl font-semibold">Task</h1>
          <button onClick={onClickHandler}>X</button>
        </div>
        <div className="p-4">
          {Object.keys(projects).map((key, index) => (
            <div className="flex justify-between" key={index}>
              <h1
                onClick={(e) => {
                  projectSelector(e);
                  onClickHandler();
                }}
              >
                {key}
              </h1>
              <button>❌</button>
            </div>
          ))}
        </div>
        <div className="flex fixed bottom-0">
          <input type="text" className="text-black" ref={ref2} />
          <button className="border w-8" onClick={onClick}>
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatSidebar;
