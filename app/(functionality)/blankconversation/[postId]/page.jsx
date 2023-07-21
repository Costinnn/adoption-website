import Image from "next/image";
import { headers } from "next/headers";

import GoBack from "@/components/client-components/GoBack";
import { getPost } from "@/lib/(post)/getPost";
import { getUserIdByEmail } from "@/lib/(user)/getUserIdByEmail";
import { getSession } from "@/lib/(user)/getSession";
import BlankConversationInput from "@/components/client-components/BlankConversationInput";

import "../../conversation/[conversationId]/ConversationPage.scss";

const BlankConversation = async ({ params }) => {
  const currentPost = await getPost(params.postId);
  const session = await getSession(headers().get("cookie") ?? "");
  const otherUserId = await getUserIdByEmail(currentPost.userEmail);
  const currentUserId = await getUserIdByEmail(session.user.email);

  console.log("BlankConversation");

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
      <div className="conversation-box"></div>
      <BlankConversationInput
        otherUserId={otherUserId}
        currentUserId={currentUserId}
        postId={params.postId}
        postName={currentPost.title}
        postOwner={currentPost.userName}
        postClient={session.user.name}
      />
    </main>
  );
};

export default BlankConversation;
