import prismadb from "@/lib/prismadb";

export async function getConversation(conversationId) {
  const conversation = await prismadb.conversation.findUnique({
    where: { id: conversationId },
  });

  return conversation;
}
