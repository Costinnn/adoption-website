import prismadb from "@/lib/prismadb";
import { getSession } from "@/lib/getSession";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req) {
  const session = await getSession(headers().get("cookie") ?? "");
  const body = req.json();
  const { otherUserId } = body;

  try {
    // verify existing conversation
    const verifyExistingConversation = await prismadb.conversation.findMany({
      where: {
        OR: [
          {
            userIds: {
              equals: [session.user.id, otherUserId],
            },
          },
          {
            userIds: {
              equals: [otherUserId, session.user.id],
            },
          },
        ],
      },
    });

    const conversationExists = verifyExistingConversation[0];

    // create new conversation if one does not exist

    if (conversationExists) {
      return NextResponse.json(conversationExists);
    }

    const newConversation = await prismadb.conversation.create({
      data: {
        users: {
          connect: [
            {
              id: session.user.id,
            },
            {
              id: otherUserId,
            },
          ],
        },
      },
      include: {
        users: true,
      },
    });
    return NextResponse.json(newConversation);
  } catch (err) {
    console.log(err);
    return NextResponse.json("CONVERSATION_ERROR", { status: 500 });
  }
}
