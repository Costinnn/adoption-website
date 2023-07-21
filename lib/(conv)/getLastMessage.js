import prismadb from "../prismadb";

const getLastMessage = async (conversationId) => {
  const messages = await prismadb.message.findMany({
    where: { conversationId: conversationId },
  });
  return messages[messages.length - 1];
};

export default getLastMessage;
