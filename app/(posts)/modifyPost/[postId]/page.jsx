import ModifyForm from "@/components/ModifyForm";
import { getPost } from "@/lib/(post)/getPost";

const ModifyPost = async ({ params }) => {
  const currentPost = await getPost(params.postId);
  return (
    <main className="section-narrow modify-post">
      <h1>Modifica anuntul</h1>
      <ModifyForm currentPost={currentPost} />
    </main>
  );
};

export default ModifyPost;
