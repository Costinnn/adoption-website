"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

import GoBack from "@/utils/GoBack";

import test from "@/public/cat1.jpg";
import sendImg from "@/public/icons/send.png";
import "./[conversationId]/ConversationPage.scss";


const Conversation = () => {
  const [firstMessage, setFirstMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // create new conversation
    // create message
  };

  return (
    <main className="section-narrow conversation-page">
      <div className="conversation-header">
        <GoBack width="20" height="20" customClass="go-back" />
        <Image
          className="post-img"
          src={test}
          alt="send"
          width={40}
          height={40}
        />
        <div>
          <span>userX</span>
          <br />
          <span>Anunt XAX</span>
        </div>
      </div>
      <div className="conversation-box"></div>
      <form className="conversation-input" onSubmit={handleSubmit}>
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
    </main>
  );
};

export default Conversation;
