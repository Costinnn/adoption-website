import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
  const {
    otherUserId,
    currentUserId,
    postId,
    postName,
    postClient,
    postOwner,
  } = body;
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
    // create new conversation if one does not exist
    if (conversationExists) {
      return NextResponse.json(conversationExists);
    }
    const newConversation = await prismadb.conversation.create({
      data: {
        users: {
          connect: [
            {
              id: currentUserId,
            },
            {
              id: otherUserId,
            },
          ],
        },
        post: { connect: { id: postId } },
        name: postName,
        postOwner: { connect: { name: postOwner } },
        postClient: { connect: { name: postClient } },
      },
      include: {
        users: true,
        post: true,
      },
    });
    return NextResponse.json(newConversation);
  } catch (err) {
    console.log(err);
    return NextResponse.json("CONVERSATION_ERROR", { status: 500 });
  }
}
