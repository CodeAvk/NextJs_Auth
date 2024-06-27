"use client";
import Link from "next/link";
import React from "react";
import { FaUser, FaLock } from "react-icons/fa";

export default function LoginPage() {
  const [user, setUser] = React.useState({
    username: "",
    password: "",
  });

  const onLogin = async () => {
    try {
      // Implement your login logic here, e.g., using Axios to send login request
      console.log("Logging in with:", user);
    } catch (error) {
      console.error("Error during login", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen py-2 bg-gray-900">
      <div className="w-full max-w-md bg-gray-800 rounded-lg overflow-hidden shadow-lg">
        <h1 className="text-4xl font-bold text-center text-purple-500 bg-gray-700 py-4">
          Login
        </h1>
        <div className="p-8">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-purple-300"
          >
            Username
          </label>
          <div className="flex items-center mb-4">
            <FaUser className="text-purple-500 mr-2" />
            <input
              className="w-full p-2 border rounded-md bg-gray-700 border-purple-500 text-white placeholder-purple-500"
              id="username"
              type="text"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              placeholder="Username 👤"
            />
          </div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-purple-300"
          >
            Password
          </label>
          <div className="flex items-center mb-4">
            <FaLock className="text-purple-500 mr-2" />
            <input
              className="w-full p-2 border rounded-md bg-gray-700 border-purple-500 text-white placeholder-purple-500"
              id="password"
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="Password 🔒"
            />
          </div>
          <button
            className="w-full bg-purple-700 text-white p-2 rounded-md hover:bg-purple-800"
            onClick={onLogin}
          >
            Login
          </button>
          <div className="mt-4 text-center">
            <Link
              href="/signup"
              className="text-purple-300 hover:text-purple-500"
            >
              Don't have an account? Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
