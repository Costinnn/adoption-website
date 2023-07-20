import Image from "next/image";
import Link from "next/link";

import rightImg from "@/public/icons/left.png";
import { getConvImgName } from "@/lib/getConvImgName";

const MessageComponent = async ({
  postId,
  convId,
  convName,
  userName,
  lastMessage,
}) => {
  const { convImg } = await getConvImgName(postId);

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
        <span className="lastmsg">{lastMessage}</span>
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
