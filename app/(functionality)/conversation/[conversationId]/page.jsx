"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { useEffect, useRef } from "react";

import GoBack from "@/utils/GoBack";
import test from "@/public/cat1.jpg";
import sendImg from "@/public/icons/send.png";
import leftImg from "@/public/icons/left.png";
import "./ConversationPage.scss";

const ConversationPage = ({ params }) => {
  const bottonRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    bottonRef.current.scrollIntoView();
  }, []);

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
      <div className="conversation-box">
        <span className="send">Hello how are you?</span>
        <span className="received">Good, thank you!</span>
        <span className="send">
          Hello how are you?Good, thank you!Good, thank you!Good, thank
          you!Good, thank you!Good, thank you!
        </span>
        <span className="received">
          Good, thank you!Good, thank you!Good, thank you!Good, thank you!Good,
          thank you!
        </span>
        <span className="received">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti sed
          aliquam asperiores hic doloribus aspernatur ab adipisci amet molestias
          ducimus?
        </span>
        <span className="send">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti sed
          aliquam asperiores hic doloribus aspernatur ab adipisci amet molestias
          ducimus?
        </span>
        <span className="received">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti sed
          aliquam asperiores hic doloribus aspernatur ab adipisci amet molestias
          ducimus?
        </span>
        <span className="send">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti sed
          aliquam asperiores hic doloribus aspernatur ab adipisci amet molestias
          ducimus?
        </span>
        <span className="received">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti sed
          aliquam asperiores hic doloribus aspernatur ab adipisci amet molestias
          ducimus?
        </span>
        <div ref={bottonRef}></div>
      </div>
      <form className="conversation-input">
        <input type="text" />
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

export default ConversationPage;
