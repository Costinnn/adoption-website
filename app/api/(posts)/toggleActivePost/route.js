import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const reqData = await request.json();
    const updateActiveStatus = await prismadb.post.update({
      where: { id: reqData.postId },
      data: { isActive: { set: reqData.isActive } },
    });

    return NextResponse.json(updateActiveStatus);
  } catch (err) {
    return NextResponse.json(err);
  }
}
