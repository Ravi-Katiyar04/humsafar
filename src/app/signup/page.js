'use client';
import axios from "axios";
import Link from "next/link";
import React from "react";
export default function SignupPage() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/api/signup", {
                name,
                email,
                password,
            });
            const data = response.data;
            if (data.error) {
                setError(data.error);
            } else {
                window.location.href = "/login";
            }
        } catch (error) {
            setError("An error occurred");
        }
    };

    return (
        <div className="h-screen bg-gray-100 flex items-center justify-center">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-12 rounded-lg shadow-lg max-w-md"
            >
                <h2 className="text-3xl font-bold mb-4 text-center">Sign up</h2>
                {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
                <label className="block mb-2 font-semibold" htmlFor="name">
                    Name
                </label>
                <input
                    className="block w-full px-4 py-2 mb-4 border rounded-lg"
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label className="block mb-2 font-semibold" htmlFor="email">
                    Email
                </label>
                <input
                    className="block w-full px-4 py-2 mb-4 border rounded-lg"
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label className="block mb-2 font-semibold" htmlFor="password">
                    Password
                </label>
                <input
                    className="block w-full px-4 py-2 mb-4 border rounded-lg"
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full"
                    type="submit"
                >
                    Sign up
                </button>
                <p className="mt-4 text-center">
                    Already have an account?{" "}
                    <Link href="/login" className="text-blue-500 hover:underline">
                        Log in
                    </Link>
                </p>
            </form>
        </div>
    );
}

