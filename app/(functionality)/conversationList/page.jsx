import Link from "next/link";

import { getUserConversations } from "@/lib/getUserConversations";
import { getUserPosts } from "@/lib/getUserPosts";
import MessageComponent from "@/utils/MessageComponent";

import testImg from "@/public/cat1.jpg";

import "./ConversationList.scss";

const ConversationList = async () => {
  const conversations = await getUserConversations();
  const userPosts = await getUserPosts();

  let sendMessages = [];
  let receivedMessages = [];

  const separateConversations = () => {
    conversations.forEach((conv) => {
      let isreceived = false;
      userPosts.forEach((post) => {
        if (conv.postId === post.id) {
          receivedMessages.push(conv);
          isreceived = true;
          return;
        }
      });

      if (!isreceived) {
        sendMessages.push(conv);
      }
    });
  };

  separateConversations();

  // console.log(sendMessages, "sended");
  // console.log(receivedMessages, "received");

  return (
    <main className="section-narrow conversationlist-page">
      <h1>Conversatii</h1>
      <h2>Mesaje trimise</h2>
      <div className="messages-container">
        {sendMessages.map((conv) => (
          <MessageComponent
            key={conv.id}
            postId={conv.postId}
            convImg={testImg}
            convId={conv.id}
            convName={conv.name}
            userName={conv.owner}
            lastMessage={"This is last message..."}
          />
        ))}
      </div>
      <h2>Mesaje primite</h2>
      <div className="messages-container">
        {receivedMessages.map((conv) => (
          <MessageComponent
            key={conv.id}
            postId={conv.postId}
            convImg={testImg}
            convId={conv.id}
            convName={conv.name}
            userName={conv.client}
            lastMessage={"This is last message..."}
          />
        ))}
      </div>
    </main>
  );
};

export default ConversationList;
