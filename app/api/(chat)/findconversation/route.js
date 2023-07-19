import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
  const { otherUserId, currentUserId, postId } = body;
 
  try {
    // verify existing conversation
    const verifyExistingConversation = await prismadb.conversation.findMany({
      where: {
        OR: [
          {
            userIds: {
              equals: [currentUserId, otherUserId],
            },
          },
          {
            userIds: {
              equals: [otherUserId, currentUserId],
            },
          },
        ],
        postId: { equals: postId },
      },
    });

    const conversationExists = verifyExistingConversation[0];

    if (conversationExists) {
      return NextResponse.json(conversationExists);
    }

    return NextResponse.json("Not_found", { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json("FIND_CONVERSATION_ERROR", { status: 500 });
  }
}
