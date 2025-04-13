import React from "react";

const Checklist = ({ name, todos, onToggle }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-auto mt-6">
      <h3 className="text-3xl text-blue-500 font-bold mb-4 border-b pb-2">
        {name}
      </h3>
      <ul className="space-y-3">
        {todos.map((todo, index) => {
          const isCompleted = todo.status === "completed";

          return (
            <li
              key={index}
              className={`flex items-center gap-3 px-4 py-2 rounded-md transition ${
                isCompleted ? "bg-green-50" : "bg-gray-50"
              } hover:bg-gray-100`}
            >
              <input
                type="checkbox"
                checked={isCompleted}
                onChange={() => onToggle(index)}
                className="h-5 w-5 text-blue-500 border-gray-300 rounded focus:ring-blue-400"
              />
              <span
                className={`text-lg ${
                  isCompleted ? "text-gray-400 line-through" : "text-gray-800"
                }`}
              >
                {todo.name}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Checklist;
