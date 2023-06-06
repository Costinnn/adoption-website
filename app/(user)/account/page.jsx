"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";

import "./Account.scss";

// ACCOUNT PAGE
const Account = async () => {
  return (
    <main className="section-narrow account-page">
      <h1>Salut, Name!</h1>
      <button className="button1">Adauga un anunt</button>
      <h2>Anunturi</h2>
      <Link href="/" className="acc-link">
        Anunturi active <span>(0) &#8594;</span>
      </Link>
      <Link href="/" className="acc-link">
        Anunturi inactive <span>(0)&#8594;</span>
      </Link>
      <h2>Cont</h2>
      <Link href="/" className="acc-link">
        Schimba parola <span>&#8594;</span>
      </Link>
      <Link href="/" className="acc-link">
        Schimba numele contului <span>&#8594;</span>
      </Link>

      <button className="button2" onClick={signOut}>
        Iesi din cont
      </button>
    </main>
  );
};

export default Account;
