import prismadb from "./prismadb";

// GET DB POST

export async function getPost(postId) {
  const posts = await prismadb.post.findUnique({
    where: { id: postId },
  });
  return posts;
}
