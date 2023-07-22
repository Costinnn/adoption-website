import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";
import { getCurrentUserId } from "@/lib/(user)/getCurrentUserId";
import { pusherServer } from "@/lib/pusher";

export async function POST(req) {
  const { conversationId } = await req.json();
  const currentUserId = await getCurrentUserId();
  try {
    const convMessages = await prismadb.message.findMany({
      where: { conversationId: conversationId },
    });

    const lastMessage = convMessages[Number(convMessages.length) - 1];

    if (currentUserId !== lastMessage.senderId && !lastMessage.seen) {
      const updatedSeenMessages = await prismadb.message.update({
        where: {
          id: lastMessage.id,
        },
        data: { seen: true },
      });

      await pusherServer.trigger(
        conversationId,
        "message:seen",
        updatedSeenMessages
      );
      // console.log("SEEN TRIGGERED");

      return NextResponse.json(updatedSeenMessages);
    }

    return new NextResponse("NO_MESSAGE_TO_UPDATE", { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse("SEEN_ERROR", { status: 500 });
  }
}
