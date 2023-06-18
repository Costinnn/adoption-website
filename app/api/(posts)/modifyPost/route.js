import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function PATCH(request) {
  try {
    const reqData = await request.json();
    const modifiedPost = await prismadb.post.update({
      where: { id: reqData.postId },
      data: {
        title: reqData.title,
        desc: reqData.desc,
        category: reqData.category,
        images: reqData.images,
        age: reqData.age,
        gender: reqData.gender,
        breed: reqData.breed,
        city: reqData.city,
        county: reqData.county,
        phone: reqData.phone,
        email: reqData.email,
      },
    });

    return NextResponse.json(modifiedPost);
  } catch (err) {
    return NextResponse.json(err);
  }
}
