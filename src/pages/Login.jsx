import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../store/features/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/home");
    }
  }, [navigate]);

  console.log(useSelector((state) => state.auth));

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { loading, error } = useSelector((state) => state.auth);

  const handleLogin = async () => {
    try {
      const resultAction = await dispatch(loginUser({ username, password }));

      if (loginUser.fulfilled.match(resultAction)) {
        navigate("/home");
      } else {
        console.error("Login failed:", resultAction.payload);
      }
    } catch (err) {
      console.error("Unexpected error:", err);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-100 to-white">
      <div className="bg-white shadow-xl rounded-xl px-10 py-12 w-full max-w-sm">
        <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-6">
          Welcome Back 👋
        </h1>
        <input
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          placeholder="Username"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="password"
          placeholder="Password"
        />

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        <button
          onClick={handleLogin}
          disabled={loading}
          className={`w-full ${
            loading ? "bg-blue-300" : "bg-blue-500 hover:bg-blue-600"
          } text-white font-semibold py-3 rounded-md transition duration-200`}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Login;
