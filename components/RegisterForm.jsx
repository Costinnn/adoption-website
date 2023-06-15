"use client";

import { useState } from "react";
import axios from "axios";

import "./FormStyle.scss";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/register", {
        email,
        name,
        password,
      });

      if (res.data.id) {
        console.log(`${name} registered with success!`);
        setFeedback(`User ${name} created!`);
      } else {
        setFeedback(res.data.error);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="logregform">
      <label htmlFor="email">Email:</label>
      <input
        type="text"
        id="email"
        name="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="name">Nume:</label>
      <input
        type="text"
        id="name"
        name="name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="password">Parola:</label>
      <input
        type="password"
        id="password"
        name="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {/* 
      <label htmlFor="password2">Confirma parola:</label>
      <input type="text" id="password2" name="password2" /> */}
      {feedback && <span>{feedback}</span>}
      <button className="button1">Inregistreaza-te</button>
    </form>
  );
};

export default RegisterForm;
