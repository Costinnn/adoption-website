import Image from "next/image";
import Link from "next/link";

import { getConvImg } from "@/lib/(conv)/getConvImg";
import getLastMessage from "@/lib/(conv)/getLastMessage";
import { getCurrentUserId } from "@/lib/(user)/getCurrentUserId";

import rightImg from "@/public/icons/left.png";
import seenImg from "@/public/icons/seen.png";
import unseenImg from "@/public/icons/unseen.png";

const MessageComponent = async ({ postId, convId, convName, userName }) => {
  const { convImg } = await getConvImg(postId);
  const lastMessage = await getLastMessage(convId);
  const currentUserId = await getCurrentUserId();

  return (
    <Link href={`/conversation/${convId}`} className="message-component">
      <Image
        className="postimg"
        src={convImg}
        alt="post-image"
        width={50}
        height={50}
      />
      <div className="info">
        <span className="username">{userName}</span>
        <span className="convname">{convName}</span>
        {/* SENDED MESSAGES */}
        {currentUserId === lastMessage.senderId && (
          <span className="lastmsg">
            {lastMessage.seen ? (
              <Image src={seenImg} width={17} height={17} alt="seen" />
            ) : (
              <Image src={unseenImg} width={17} height={17} alt="unseen" />
            )}
            {lastMessage?.body.slice(0, 30)}
            {lastMessage?.body.length > 31 ? " ..." : ""}
          </span>
        )}
        {/* RECEIVED MESSAGES */}
        {currentUserId !== lastMessage.senderId && (
          <span className={`lastmsg ${lastMessage.seen ? "seen" : ""}`}>
            {lastMessage?.body.slice(0, 30)}
            {lastMessage?.body.length > 31 ? " ..." : ""}
          </span>
        )}
      </div>
      <Image
        className="rightimg"
        src={rightImg}
        alt="back"
        width={20}
        height={20}
      />
    </Link>
  );
};

export default MessageComponent;
