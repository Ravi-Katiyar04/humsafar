'use client';
import React from "react";
import Link from "next/link";
import axios from "axios";

export default function LoginPage() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/login", { email, password });
      const data = response.data;
      if (data.error) {
        setError(data.error);
      } else {
        window.location.href = "/";
      }
    } catch (error) {
      setError("An error occurred");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-96"
      >
        <h2 className="text-3xl font-bold mb-4 text-center">
          Welcome to Humsafar!
        </h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <label className="block mb-2 text-lg" htmlFor="email">
          Email
        </label>
        <input
          className="block w-full px-4 py-2 mb-4 rounded-lg border-2 border-gray-300"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="block mb-2 text-lg" htmlFor="password">
          Password
        </label>
        <input
          className="block w-full px-4 py-2 mb-4 rounded-lg border-2 border-gray-300"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full">
          Login
        </button>
        <p className="mt-4 text-center">
          Don&#39;t have an account?{" "}
          <Link href="/signup" className="text-blue-500 hover:text-blue-700">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}

