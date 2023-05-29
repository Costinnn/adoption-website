"use client";
import "./FormStyle.scss";

const RegisterForm = () => {
  return (
    <form className="logregform">
      <label htmlFor="email">Email:</label>
      <input type="text" id="email" name="email" />

      <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="username" />

      <label htmlFor="password">Parola:</label>
      <input type="text" id="password" name="password" />

      <label htmlFor="password2">Confirma parola:</label>
      <input type="text" id="password2" name="password2" />

      <button className="button1">Inregistreaza-te</button>
    </form>
  );
};

export default RegisterForm;
