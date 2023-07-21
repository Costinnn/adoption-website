import prismadb from "../prismadb";

const getMessages = async (conversationId) => {
  const messages = await prismadb.message.findMany({
    where: { conversationId: conversationId },
  });
  return messages;
};

export default getMessages;
