import prismadb from "./prismadb";

export async function getUserFavorites(userEmail) {
  const user = await prismadb.user.findUnique({ where: { email: userEmail } });
  return user;
}
