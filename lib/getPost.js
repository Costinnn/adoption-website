import prismadb from "./prismadb";

// GET all DB POSTS

export async function getPost(postId) {
  const posts = await prismadb.post.findUnique({
    where: { id: postId },
  });
  return posts;
}
