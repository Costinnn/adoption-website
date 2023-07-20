"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";

import sendImg from "@/public/icons/send.png";

import "./ConversationInput.scss";
import { useState } from "react";

const BlankConversationInput = ({
  otherUserId,
  currentUserId,
  postId,
  postName,
  postOwner,
  postClient,
}) => {
  const router = useRouter();
  const [firstMessage, setFirstMessage] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!firstMessage) return;

    try {
      // create new conversation
      const convRes = await axios.post(
        `${process.env.NEXT_PUBLIC_URL}/api/conversation`,
        { otherUserId, currentUserId, postId, postName, postClient, postOwner }
      );

      // send first message
      if (convRes.data.id) {
        const msgRes = await axios.post("/api/message", {
          message: firstMessage,
          conversationId: convRes.data.id,
        });

        if (msgRes.data.id) {
          setFirstMessage("");
          setIsSent(true);
          setTimeout(() => {
            setIsSent(false);

            // redirect to conversation page
            router.push(`/conversation/${convRes.data.id}`);
          }, 500);
        }
      }
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  return (
    <form className="conversation-input" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        value={firstMessage}
        onChange={(e) => setFirstMessage(e.target.value)}
      />
      <button style={{ backgroundColor: isSent && "green" }}>
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
