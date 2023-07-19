import prismadb from "@/lib/prismadb";
import { getCurrentUserId } from "./getCurrentUserId";

export async function getUserConversations() {
  const currentUserId = await getCurrentUserId();

  const conversations = await prismadb.conversation.findMany({
    where: { userIds: { has: currentUserId } },
  });

  return conversations;
}
