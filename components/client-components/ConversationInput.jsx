"use client";

import { useState } from "react";
import Image from "next/image";
import axios from "axios";

import sendImg from "@/public/icons/send.png";

import "./ConversationInput.scss";

const ConversationInput = ({ conversationId }) => {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!message) return;

    try {
      const res = await axios.post("/api/message", {
        message,
        conversationId,
      });
      if (res.data.id) {
        setMessage("");
        setIsSent(true);
        setTimeout(() => {
          setIsSent(false);
        }, 1000);
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
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{ borderColor: isSent && "green" }}
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

export default ConversationInput;
