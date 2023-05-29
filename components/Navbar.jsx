import Image from "next/image";

import logo from "../public/images/logo.png";
import add from "../public/icons/add.png";
import heart from "../public/icons/heart.png";
import user from "../public/icons/user.png";

import "./Navbar.scss";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navigation">
      <Link href="/">
        <Image src={logo} width={70} alt="logo" />
      </Link>
      <Link href="/wishlist" className="wishlist">
        <span>10</span>
        <Image src={heart} width={35} alt="wishlist" />
      </Link>
      <Link href="/account">
        <Image src={user} width={35} alt="user" />
      </Link>
      <Link href="/addPost">
        <Image src={add} width={35} alt="add" />
      </Link>
    </nav>
  );
};

export default Navbar;
