// TaskInput.js

import React from "react";

function TaskInput({ value, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="flex">
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="border border-gray-300 rounded-l p-2"
      />
      <button type="submit" className="border border-gray-300 rounded-r p-2">
        +
      </button>
    </form>
  );
}

export default TaskInput;
