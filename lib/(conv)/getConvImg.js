import prismadb from "../prismadb";

export async function getConvImg(postId) {
  const posts = await prismadb.post.findUnique({
    where: { id: postId },
    select: { images: true },
  });
  return { convImg: posts.images[0] };
}
