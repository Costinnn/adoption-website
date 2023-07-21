import prismadb from "../prismadb";
import { getSession } from "../(user)/getSession";
import { headers } from "next/headers";

// GET user active DB POSTS

export async function getUserPosts() {
  const session = await getSession(headers().get("cookie") ?? "");
  const posts = await prismadb.post.findMany({
    where: { userEmail: session.user.email },
  });

  return posts;
}
