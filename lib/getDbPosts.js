import prismadb from "./prismadb";

export async function getDbPosts() {
  const posts = await prismadb.post.findMany();
  return posts;
}
