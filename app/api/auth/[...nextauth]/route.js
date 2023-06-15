import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prismadb from "@/lib/prismadb";
import { compare } from "bcrypt";

export const authOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        // 1. Verify content of credentials
        if (!credentials.email || !credentials.password) {
          throw new Error("Email and password required");
        }

        // 2. Search email in DB
        const user = await prismadb.user.findUnique({
          where: {
            email: credentials.email,
          },
        });
        if (!user) {
          throw new Error("Email does not exist");
        }

        // 3. Verify if password is correct
        const isCorrectPassword = await compare(
          credentials.password,
          user.hashedPassword
        );
        if (!isCorrectPassword) {
          throw new Error("Incorrect password");
        }

        // 4. If all good return user
        if (user && isCorrectPassword) return user;

        // OR

        // 4. If something wrong return null
        return null;
      },
    }),
  ],
  callbacks: {
    // function to update session when user changes it's account details
    // triggered by update() function from useSession()
    async jwt({ token, trigger, session }) {
      if (trigger === "update") {
        return { ...token, ...session.user };
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
  adapter: PrismaAdapter(prismadb),
  pages: {
    signIn: "/login",
  },
};

const authHandler = NextAuth(authOptions);

export { authHandler as GET, authHandler as POST };
