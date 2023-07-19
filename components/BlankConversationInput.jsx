"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";

import sendImg from "@/public/icons/send.png";

import "./ConversationInput.scss";
import { useState } from "react";

const BlankConversationInput = ({ otherUserId, currentUserId, postId }) => {
  const router = useRouter();
  const [firstMessage, setFirstMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // create new conversation
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_URL}/api/conversation`,
        { otherUserId, currentUserId, postId }
      );
      console.log(res,'ConvInput');
      router.push(`/conversation/${res.data.id}`);
    } catch (err) {
      console.log(err);
      return err;
    }

    // create message
  };

  return (
    <form className="conversation-input" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        value={firstMessage}
        onChange={(e) => setFirstMessage(e.target.value)}
      />
      <button>
        <Image
          className="send"
          src={sendImg}
          alt="send"
          width={17}
          height={17}
        />
      </button>
    </form>
  );
};

export default BlankConversationInput;
