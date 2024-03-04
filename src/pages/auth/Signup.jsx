import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import OAuth from "../components/OAuth";

export default function Signup() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const result = await fetch("http://localhost:8888/user/signup", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await result.json();
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate("/signin");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-bold my-7">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          className="border p-2 rounded-lg bg-green"
          id="userName"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded-lg"
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 rounded-lg"
          id="password"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-green-700 font-bold text-black p-2 rounded-lg hover:opacity-90 disabled:opacity-80 uppercase"
        >
        Submit</button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Already have an account?</p>
        <Link to="/signin">
          <span className="text-blue-600">Sign in</span>
        </Link>
      </div>
    </div>
  );
}