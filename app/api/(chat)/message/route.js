import prismadb from "@/lib/prismadb";
import { getSession } from "@/lib/getSession";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req) {
  const session = await getSession(headers().get("cookie") ?? "");
  const body = req.json();
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
        sender: { connect: { id: session.user.id } },
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
    return NextResponse.json(newMessage);
  } catch (err) {
    console.log(err);
    return NextResponse.json("MESSAGE_ERROR", { status: 500 });
  }
}
