import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

async function connectDB() {
  try {
    await prisma.$connect();
    console.log("Database connected successfully!");
  } catch (err) {
    console.error("Failed to connect to database:", err);
    process.exit(1);
  }
}

connectDB();
