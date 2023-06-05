import Link from "next/link";

import LoginForm from "@/components/LoginForm";

//LOGIN PAGE
const Login = () => {
  return (
    <main>
      <h1>Autentificare</h1>
      <LoginForm />
      <Link href="/register" className="redirect-link">
        Nu ai un cont? &#8594;
      </Link>
    </main>
  );
};

export default Login;
