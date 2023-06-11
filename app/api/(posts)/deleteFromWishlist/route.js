import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const reqData = await request.json();
    
    // create a copy of favoritesId array
    const favoritesIdData = await prismadb.user.findUnique({
      where: { email: reqData.userEmail },
      select: { favoritesId: true },
    });

    // set old favoritesId array with the filtered new one
    const updateFavorites = await prismadb.user.update({
      where: { email: reqData.userEmail },
      data: {
        favoritesId: {
          set: favoritesIdData.favoritesId.filter(
            (item) => item !== reqData.postId
          ),
        },
      },
    });

    return NextResponse.json(updateFavorites);
  } catch (err) {
    return NextResponse.json(err);
  }
}
