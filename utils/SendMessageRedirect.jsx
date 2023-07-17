"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useSession } from "next-auth/react";

import messageImg from "@/public/icons/message.png";

const SendMessageRedirect = async ({ otherUserEmail, currentUserEmail }) => {
  const router = useRouter();

  const handleConversationRedirect = () => {};
  console.log("SendMessageRedirects");
  return (
    <span onClick={() => console.log("hi")}>
      Mesaj
      <Image src={messageImg} alt="message" width={15} height={15} />
    </span>
  );
};

export default SendMessageRedirect;
