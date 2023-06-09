"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

import "./FormStyle.scss";

const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/",
      });
      if (res.error) {
        setFeedback(res.error);
      } else {
        router.push("/account");
        router.refresh("/account");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="logregform" onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input
        type="text"
        id="email"
        name="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
      {feedback && <span>{feedback}</span>}
      <button className="button1">Logheaza-te</button>
    </form>
  );
};

export default LoginForm;
