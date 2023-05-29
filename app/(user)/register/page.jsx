import Link from "next/link";

import RegisterForm from "@/components/RegisterForm";

const Login = () => {
  return (
    <main>
      <h1>Inregistrare</h1>
      <RegisterForm />
      <Link href="/login" className="redirect-link">
        Ai deja un cont? &#8594;
      </Link>
    </main>
  );
};

export default Login;
