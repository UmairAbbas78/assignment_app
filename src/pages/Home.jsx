import React, { useEffect, useState } from "react";
import Checklist from "../components/Checklist";
import { useDispatch } from "react-redux";
import { createCategory, getAllTasks } from "../store/features/taskSlice";
import { jwtDecode } from "jwt-decode";

const Home = () => {
  const dispatch = useDispatch();

  const [category, setCategory] = useState("");
  const [allTasks, setAllTasks] = useState([]);
  const [username, setUserName] = useState("User");

  const fetchTodos = async () => {
    const result = await dispatch(getAllTasks());
    if (result.meta.requestStatus === "fulfilled") {
      setAllTasks(result.payload);
    } else {
      console.error("Failed to fetch tasks:", result.payload);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const name = jwtDecode(token).username;
    setUserName(name);
    if (!token) {
      window.location.href = "/";
    }

    fetchTodos();
  }, []);

  const handleCategory = async () => {
    await dispatch(createCategory(category));
    fetchTodos();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start py-12 px-6 bg-gradient-to-br from-blue-100 to-white">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800">
            {`Welcome, ${username} 👋`}
          </h2>

          <div className="flex flex-col sm:flex-row items-stretch gap-4 w-full sm:w-auto">
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full sm:w-64"
              type="text"
              placeholder="Category name"
            />
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-md transition duration-200 disabled:opacity-50"
              disabled={!category?.trim()}
              onClick={handleCategory}
            >
              Create Category
            </button>
          </div>
        </div>

        {allTasks?.map((task) => {
          return (
            <Checklist
              key={task.id}
              name={task.checklist_name}
              todos={task.Tasks}
              category={task.id}
              onUpdate={fetchTodos}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
