import { getUserConversations } from "@/lib/getUserConversations";
import { getUserPosts } from "@/lib/getUserPosts";
import Link from "next/link";

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
      <div>
        {sendMessages.map((conv) => (
          <Link href={`/conversation/${conv.id}`} key={conv.id}>
            Sended conversation {conv.id}
          </Link>
        ))}
      </div>
      <h2>Mesaje primite</h2>
      <div>
        {receivedMessages.map((conv) => (
          <Link href={`/conversation/${conv.id}`} key={conv.id}>
            Received conversation {conv.id}
          </Link>
        ))}
      </div>
    </main>
  );
};

export default ConversationList;
