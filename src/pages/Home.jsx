import React, { useState } from "react";
import Checklist from "../components/Checklist";

const Home = () => {
  const [todos, setTodos] = useState([
    { name: "Cook meat", status: "pending" },
    { name: "Wash dishes", status: "completed" },
  ]);

  const toggleTodoStatus = (index) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) =>
        i === index
          ? {
              ...todo,
              status: todo.status === "completed" ? "pending" : "completed",
            }
          : todo
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start py-12 px-6 bg-gradient-to-br from-blue-100 to-white">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
          Welcome, User! 👋
        </h2>

        <Checklist
          name="Checklist 1"
          todos={todos}
          onToggle={toggleTodoStatus}
        />
      </div>
    </div>
  );
};

export default Home;
