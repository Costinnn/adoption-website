import prismadb from "./prismadb";
import { getSession } from "./getSession";
import { headers } from "next/headers";

// GET USER favoritesId array

export async function getFavoriteIds() {
  const session = await getSession(headers().get("cookie") ?? "");
  const user = await prismadb.user.findUnique({
    where: { email: session.user.email },
    select: { favoritesId: true },
  });
  return user;
}
