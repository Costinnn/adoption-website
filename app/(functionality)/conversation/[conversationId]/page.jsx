import Image from "next/image";

import { getPost } from "@/lib/getPost";
import { getConversation } from "@/lib/getConversation";
import { getCurrentUserId } from "@/lib/getCurrentUserId";
import GoBack from "@/utils/GoBack";
import BottomScroll from "@/components/client-components/BottomScroll";
import ConversationInput from "@/components/ConversationInput";

import "./ConversationPage.scss";
import getMessages from "@/lib/getMessages";

const ConversationPage = async ({ params }) => {
  const currentConversation = await getConversation(params.conversationId);
  const currentPost = await getPost(currentConversation.postId);
  const messages = await getMessages(params.conversationId);
  const currentUserId = await getCurrentUserId();

  // console.log(currentConversation, currentPost);
  console.log("ConversationPage");
  return (
    <main className="section-narrow conversation-page">
      <div className="conversation-header">
        <GoBack width="20" height="20" customClass="go-back" />
        <Image
          className="post-img"
          src={currentPost.images[0]}
          alt="send"
          width={40}
          height={40}
        />
        <div>
          <span>{currentPost.userName}</span>
          <br />
          <span>{currentPost.title}</span>
        </div>
      </div>
      <div className="conversation-box">
        {messages.map((message) => (
          <span
            className={message.senderId === currentUserId ? "send" : "received"}
            key={message.id}
          >
            {message.body}
          </span>
        ))}

        <BottomScroll />
      </div>
      <ConversationInput conversationId={params.conversationId} />
    </main>
  );
};

export default ConversationPage;
