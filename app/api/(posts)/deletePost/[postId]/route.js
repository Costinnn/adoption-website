import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  const { postId } = params;
  try {
    const deletedPost = await prismadb.post.delete({
      where: { id: postId },
    });

    return NextResponse.json(deletedPost);
  } catch (err) {
    return NextResponse.json(err);
  }
}
