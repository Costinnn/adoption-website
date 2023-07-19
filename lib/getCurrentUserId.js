import prismadb from "./prismadb";
import { getSession } from "./getSession";
import { headers } from "next/dist/client/components/headers";

export async function getCurrentUserId() {
  const session = await getSession(headers().get("cookie") ?? "");
  const userId = await prismadb.user.findMany({
    where: {
      email: session.user.email,
    },
    select: { id: true },
  });

  return userId[0].id;
}
