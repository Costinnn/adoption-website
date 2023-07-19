import Link from "next/link";

import { headers } from "next/headers";
import { getSession } from "@/lib/getSession";

import SignoutBtn from "@/components/client-components/SignoutBtn";

import "./Account.scss";

// ACCOUNT PAGE
const Account = async () => {
  const session = await getSession(headers().get("cookie") ?? "");

  return (
    <main className="section-narrow account-page">
      <h1>Salut, {session.user.name}!</h1>
      <Link href="/addPost" className="button1">
        Adauga un anunt
      </Link>
      <h2>Anunturi</h2>
      <Link href="/activePosts" className="acc-link">
        Anunturi active <span> &#8594;</span>
      </Link>
      <Link href="/inactivePosts" className="acc-link">
        Anunturi inactive <span> &#8594;</span>
      </Link>
      <Link href="/wishlist" className="acc-link">
        Anunturi apreciate <span> &#8594;</span>
      </Link>
      <h2>Cont</h2>
      <Link href="/conversationList" className="acc-link">
        Mesaje <span>&#8594;</span>
      </Link>
      <Link href="/accSettings/password" className="acc-link">
        Schimba parola <span>&#8594;</span>
      </Link>
      <Link href="/accSettings/name" className="acc-link">
        Schimba numele contului <span>&#8594;</span>
      </Link>
      <SignoutBtn />
    </main>
  );
};

export default Account;
