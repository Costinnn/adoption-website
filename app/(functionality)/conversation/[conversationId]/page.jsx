import Image from "next/image";

import { getPost } from "@/lib/getPost";
import { getConversation } from "@/lib/getConversation";
import GoBack from "@/utils/GoBack";
import ConversationInput from "@/components/ConversationInput";
import BottomScroll from "@/components/client-components/BottomScroll";

import "./ConversationPage.scss";

const ConversationPage = async ({ params }) => {
  const currentConversation = await getConversation(params.conversationId);
  const currentPost = await getPost(currentConversation.postId);
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
        <span className="send">Hello how are you?</span>
        <span className="received">Good, thank you!</span>
        <span className="send">
          Hello how are you?Good, thank you!Good, thank you!Good, thank
          you!Good, thank you!Good, thank you!
        </span>
        <span className="received">
          Good, thank you!Good, thank you!Good, thank you!Good, thank you!Good,
          thank you!
        </span>
        <span className="received">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti sed
          aliquam asperiores hic doloribus aspernatur ab adipisci amet molestias
          ducimus?
        </span>
        <span className="send">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti sed
          aliquam asperiores hic doloribus aspernatur ab adipisci amet molestias
          ducimus?
        </span>
        <span className="received">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti sed
          aliquam asperiores hic doloribus aspernatur ab adipisci amet molestias
          ducimus?
        </span>
        <span className="send">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti sed
          aliquam asperiores hic doloribus aspernatur ab adipisci amet molestias
          ducimus?
        </span>
        <span className="received">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti sed
          aliquam asperiores hic doloribus aspernatur ab adipisci amet molestias
          ducimus?
        </span>
        <BottomScroll />
      </div>
      <ConversationInput />
    </main>
  );
};

export default ConversationPage;
