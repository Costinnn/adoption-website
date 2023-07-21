import prismadb from "@/lib/prismadb";
import { pusherServer } from "@/lib/pusher";

import { getCurrentUserId } from "@/lib/(user)/getCurrentUserId";
import { NextResponse } from "next/server";

export async function POST(req) {
  const currentUserId = await getCurrentUserId();

  const body = await req.json();
  const { message, image, conversationId } = body;

  try {
    const newMessage = await prismadb.message.create({
      data: {
        body: message,
        image: image,
        conversation: {
          connect: {
            id: conversationId,
          },
        },
        sender: { connect: { id: currentUserId } },
      },
      include: {
        sender: true,
      },
    });

    // const updatedConversation = await prismadb.conversation.update({
    //   where: {
    //     id: conversationId,
    //   },
    //   data: {
    //     messages: {
    //       connect: {
    //         id: newMessage.id,
    //       },
    //     },
    //   },
    // });

    await pusherServer.trigger(conversationId, "message:new", newMessage);

    return NextResponse.json(newMessage);
  } catch (err) {
    console.log(err);
    return NextResponse.json("MESSAGE_ERROR", { status: 500 });
  }
}
