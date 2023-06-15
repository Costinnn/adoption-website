// import { PrismaClient } from "@prisma/client";

// const client = global.prismadb || new PrismaClient();
// if (process.env.NODE_ENV === "production") global.prismadb = client;

// export default client;

//-----------------------------
import { PrismaClient } from "@prisma/client";

let prisma;

if (process.env.NODE_ENV === "PROD") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;
//-----------------------------

// import { PrismaClient } from '@prisma/client'

// const globalForPrisma = global as unknown as {
//   prisma: PrismaClient | undefined
// }

// export const prisma =
//   globalForPrisma.prisma ??
//   new PrismaClient({
//     log: ['query'],
//   })

// if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
