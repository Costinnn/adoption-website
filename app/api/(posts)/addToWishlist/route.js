import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const reqData = await request.json();
    const updateFavorites = await prismadb.user.update({
      where: { email: reqData.userEmail },
      data: { favoritesId: { push: reqData.postId } },
    });

    return NextResponse.json(updateFavorites);
  } catch (err) {
    return NextResponse.json(err);
  }
}
