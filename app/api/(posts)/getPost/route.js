import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const body = await request.json();
    console.log("------------------", body, "------------------");
    // const reqData = await request.json();
    // console.log(reqData, "IN API");
    // const post = await prismadb.post.findUnique({
    //   where: { id: reqData },
    // });
    return NextResponse.json("here");
  } catch (err) {
    console.log(err);
    return NextResponse.json(err);
  }
}
