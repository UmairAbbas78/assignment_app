import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/home");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-100 to-white">
      <div className="bg-white shadow-xl rounded-xl px-10 py-12 w-full max-w-sm">
        <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-6">
          Welcome Back 👋
        </h1>
        <input
          className="w-full border border-gray-300 rounded-md p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          placeholder="Username"
        />
        <input
          className="w-full border border-gray-300 rounded-md p-3 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="password"
          placeholder="Password"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-md transition duration-200"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
