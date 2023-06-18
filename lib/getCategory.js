import prismadb from "./prismadb";

// GET all category DB POSTS

export async function getCategory(categoryName) {
  const posts = await prismadb.post.findMany({
    where: { category: categoryName },
  });
  return posts;
}
