"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import axios from "axios";

import messageImg from "@/public/icons/message.png";

const SendMessageRedirect = ({ otherUserId, currentUserId, postId }) => {
  const router = useRouter();

  const handleConversationRedirect = async () => {
    try {
      // verify if a conversation exists,
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_URL}/api/findconversation`,
        { otherUserId, currentUserId, postId }
      );

      // /if no conversation found, user is redirected to a blank conversation page, and when he sends the first message a conversation is created
      if (res.data === "Not_found") {
        router.push(`/blankconversation/${postId}`);
        return res;
      }

      //if a conversation exists, user is redirected to that conversation
      if (res.data.id) {
        router.push(`/conversation/${res.data.id}`);
        return res;
      }

      return res;
    } catch (err) {
      console.log(err);
      return err;
    }
  };
  console.log("SMR");
  return (
    <span onClick={handleConversationRedirect}>
      Mesaj
      <Image src={messageImg} alt="message" width={15} height={15} />
    </span>
  );
};

export default SendMessageRedirect;
