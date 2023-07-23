import Image from "next/image";
import Link from "next/link";

import { getConvImg } from "@/lib/(conv)/getConvImg";
import getLastMessage from "@/lib/(conv)/getLastMessage";
import { getCurrentUserId } from "@/lib/(user)/getCurrentUserId";
import MsgCompStatus from "./subcomponents/MsgCompStatus";

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
        <MsgCompStatus
          conversationId={convId}
          currentUserId={currentUserId}
          initialLastMessage={lastMessage}
        />
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
