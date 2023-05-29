"use client";
import "./FormStyle.scss";

const LoginForm = () => {
  return (
    <form className="logregform">
      <label htmlFor="email">Email:</label>
      <input type="text" id="email" name="email" />

      <label htmlFor="password">Parola:</label>
      <input type="text" id="password" name="password" />

      <button className="button1">Logheaza-te</button>
    </form>
  );
};

export default LoginForm;
