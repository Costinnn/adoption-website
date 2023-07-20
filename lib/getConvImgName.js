import prismadb from "./prismadb";

export async function getConvImgName(postId) {
  const posts = await prismadb.post.findUnique({
    where: { id: postId },
    select: { images: true, userName: true },
  });
  return { convImg: posts.images[0], userName: posts.userName };
}
