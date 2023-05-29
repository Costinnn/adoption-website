import Link from "next/link";
import "./Account.scss";

const Account = () => {
  return (
    <main className="section-narrow account-page">
      <h1>Salut, Name!</h1>
      <button className="button1">Adauga un anunt</button>
      <h2>Anunturi</h2>
      <Link href="/" className="acc-link">
        Anunturi active <span>&#8594;</span>
      </Link>
      <Link href="/" className="acc-link">
        Anunturi active <span>&#8594;</span>
      </Link>
      <h2>Cont</h2>
      <Link href="/" className="acc-link">
        Anunturi active <span>&#8594;</span>
      </Link>
      <Link href="/" className="acc-link">
        Anunturi active <span>&#8594;</span>
      </Link>

      <button className="button2">Iesi din cont</button>
    </main>
  );
};

export default Account;
