import Image from "next/image";
import { headers } from "next/dist/client/components/headers";

import { getSession } from "@/lib/(user)/getSession";
import { getConvImg } from "@/lib/(conv)/getConvImg";
import { getConversation } from "@/lib/(conv)/getConversation";
import { getCurrentUserId } from "@/lib/(user)/getCurrentUserId";
import GoBack from "@/components/client-components/GoBack";
import ConversationInput from "@/components/client-components/ConversationInput";

import "./ConversationPage.scss";
import getMessages from "@/lib/(conv)/getMessages";
import MessagesBox from "@/components/MessagesBox";

const ConversationPage = async ({ params }) => {
  const session = await getSession(headers().get("cookie") ?? "");
  const currentConversation = await getConversation(params.conversationId);
  const { convImg } = await getConvImg(currentConversation.postId);
  const messages = await getMessages(params.conversationId);
  const currentUserId = await getCurrentUserId();

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
          <span>
            {session.user.name === currentConversation.owner
              ? currentConversation.client
              : currentConversation.owner}
          </span>
          <br />
          <span>{currentConversation.name}</span>
        </div>
      </div>
      <MessagesBox
        initialMessages={messages}
        currentUserId={currentUserId}
        conversationId={params.conversationId}
      />
      <ConversationInput conversationId={params.conversationId} />
    </main>
  );
};

export default ConversationPage;
