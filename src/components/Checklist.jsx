import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTask, updateTask } from "../store/features/taskSlice";

const Checklist = ({ name, todos, category, onUpdate }) => {
  const dispatch = useDispatch();

  const [task, setTask] = useState("");

  const handleCreateTask = async () => {
    await dispatch(
      createTask({ name: task, ChecklistId: category, status: false })
    );
    onUpdate();
  };

  const onToggle = async (id, status) => {
    const update = await dispatch(
      updateTask({ taskId: id, task_status: !status })
    );

    onUpdate();
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mx-auto mt-6">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
        <h2 className="text-3xl text-blue-500 font-bold">{name}</h2>
        <div className="flex flex-col sm:flex-row items-stretch gap-4 w-full sm:w-auto">
          <input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 sm:w-64"
            type="text"
            placeholder="Category name"
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-md transition duration-200 disabled:opacity-50"
            disabled={!task?.trim()}
            onClick={handleCreateTask}
          >
            Create Task
          </button>
        </div>
      </div>
      <h3 className="text-3xl text-blue-500 font-bold mb-4 border-b pb-2"></h3>
      <ul className="space-y-3">
        {todos.map((todo, index) => {
          const isCompleted = todo.task_status;

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
                onChange={() => onToggle(todo.id, todo.task_status)}
                className="h-5 w-5 text-blue-500 border-gray-300 rounded focus:ring-blue-400"
              />
              <span
                className={`text-lg ${
                  isCompleted ? "text-gray-400 line-through" : "text-gray-800"
                }`}
              >
                {todo.task_name}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Checklist;
