import prismadb from "../prismadb";

export async function getUserIdByEmail(userEmail) {
  const userId = await prismadb.user.findMany({
    where: {
      email: userEmail,
    },
    select: { id: true },
  });

  return userId[0].id;
}
