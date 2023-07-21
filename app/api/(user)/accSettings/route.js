import bcrypt from "bcrypt";
import prismadb from "@/lib/prismadb";
import { getSession } from "@/lib/(user)/getSession";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function PATCH(request) {
  const session = await getSession(headers().get("cookie") ?? "");
  try {
    const reqData = await request.json();
    const { fieldToUpdate, inputData } = reqData;

    // UPDATE NAME
    if (fieldToUpdate === "name") {
      const updatedField = await prismadb.user.update({
        where: { email: session.user.email },
        data: { name: { set: inputData } },
      });
      return NextResponse.json(updatedField);

      // UPDATE PASSWORD
    } else if (fieldToUpdate === "password") {
      const hashedPassword = await bcrypt.hash(inputData, 12);
      const updatedField = await prismadb.user.update({
        where: { email: session.user.email },
        data: { hashedPassword: { set: hashedPassword } },
      });
      return NextResponse.json(updatedField);
    } else {
      return NextResponse.json("No case matched!");
    }
  } catch (error) {
    return NextResponse.json({ error: `Something went wrong: ${error}` });
  }
}
