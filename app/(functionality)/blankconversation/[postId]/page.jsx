import Image from "next/image";
import { headers } from "next/headers";

import GoBack from "@/utils/GoBack";
import { getPost } from "@/lib/getPost";
import { getUserIdByEmail } from "@/lib/getUserIdByEmail";
import { getSession } from "@/lib/getSession";
import ConversationInput from "@/components/ConversationInput";

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
      <ConversationInput
        otherUserId={otherUserId}
        currentUserId={currentUserId}
        postId={params.postId}
      />
    </main>
  );
};

export default BlankConversation;