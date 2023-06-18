import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

// DELETE api has nothing in request body for next 13.4...
// replace POST with DELETE when the bug is fixed

export async function POST(request) {
  try {
    const reqData = await request.json();
    console.log(reqData);
    const deletedPost = await prismadb.post.delete({
      where: { id: reqData.postId },
    });

    return NextResponse.json(deletedPost);
  } catch (err) {
    return NextResponse.json(err);
  }
}
