import Image from "next/image";
import Link from "next/link";

import { getSession } from "@/lib/getSession";
import { headers } from "next/dist/client/components/headers";

import logo from "../public/images/logo.png";
import add from "../public/icons/add.png";
import heart from "../public/icons/heart.png";
import userImg from "../public/icons/user.png";

import "./Navbar.scss";

const Navbar = async () => {
  const session = await getSession(headers().get("cookie") ?? "");

  return (
    <nav className="navigation">
      <Link href="/">
        <Image src={logo} width={70} alt="logo" />
      </Link>
      {session && (
        <Link href="/wishlist" className="wishlist">
          <Image src={heart} width={35} alt="wishlist" />
        </Link>
      )}

      <Link href="/account">
        <Image src={userImg} width={35} alt="user" />
      </Link>
      {session && (
        <Link href="/addPost">
          <Image src={add} width={35} alt="add" />
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
