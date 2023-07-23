import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { conversationId } = params;
  try {
    const messages = await prismadb.message.findMany({
      where: { conversationId: conversationId },
    });
    return NextResponse.json(messages);
  } catch (err) {
    console.log(err);
    return NextResponse.json("FIND_CONVERSATION_ERROR", { status: 500 });
  }
}
