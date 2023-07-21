import Image from "next/image";

import { getConvImgName } from "@/lib/(conv)/getConvImgName";
import { getConversation } from "@/lib/(conv)/getConversation";
import { getCurrentUserId } from "@/lib/(user)/getCurrentUserId";
import GoBack from "@/components/client-components/GoBack";
import ConversationInput from "@/components/client-components/ConversationInput";

import "./ConversationPage.scss";
import getMessages from "@/lib/(conv)/getMessages";
import MessagesBox from "@/components/MessagesBox";

const ConversationPage = async ({ params }) => {
  const currentConversation = await getConversation(params.conversationId);
  const { convImg, userName } = await getConvImgName(
    currentConversation.postId
  );
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
          src={convImg}
          alt="send"
          width={40}
          height={40}
        />
        <div>
          <span>{userName}</span>
          <br />
          <span>{currentConversation.name}</span>
        </div>
      </div>
      <MessagesBox
        initialMessages={messages}
        currentUserId={currentUserId}
        conversationId={params.conversationId}
      />
      {/* <div className="conversation-box">
        {messages.map((message) => (
          <span
            className={message.senderId === currentUserId ? "send" : "received"}
            key={message.id}
          >
            {message.body}
          </span>
        ))}

        <BottomScroll />
      </div> */}
      <ConversationInput conversationId={params.conversationId} />
    </main>
  );
};

export default ConversationPage;
