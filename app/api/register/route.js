import bcrypt from "bcrypt";
import prismadb from "@/lib/prismadb";
import { NextResponse, NextRequest } from "next/server";

// REGISTER API ROUTE
export async function POST(request) {
  try {
    const reqData = await request.json();
    const { email, name, password } = reqData;

    // 1. Search for email in DB
    const existingUser = await prismadb.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return NextResponse.json({ error: "Email taken!" });
    }

    // 2. If no email found in DB, create User
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prismadb.user.create({
      data: {
        email,
        name,
        hashedPassword,
        image: "",
        emailVerified: new Date(),
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ error: `Something went wrong: ${error}` });
  }
}
