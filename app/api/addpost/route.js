import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const reqData = await request.json();
    const newPost = await prismadb.post.create({
      data: { ...reqData },
    });

    return NextResponse.json(newPost);
  } catch (err) {
    return NextResponse.json(err);
  }
}

