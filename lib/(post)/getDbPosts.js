import prismadb from "../prismadb";

// GET all DB POSTS

export async function getDbPosts() {
  const posts = await prismadb.post.findMany();
  return posts;
}
