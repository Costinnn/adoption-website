import prismadb from "./prismadb";

// GET user favorites DB POSTS

export async function getFavoritesPosts(favoritesList) {
  const posts = await prismadb.post.findMany({
    where: { id: { in: favoritesList } },
  });
  return posts;
}
