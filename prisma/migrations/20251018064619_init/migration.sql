-- CreateTable
CREATE TABLE "Game" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Variants" (
    "id" TEXT NOT NULL,
    "variantAmount" TEXT NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "Variants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Gamevariants" (
    "id" TEXT NOT NULL,
    "gameId" TEXT NOT NULL,
    "variantId" TEXT NOT NULL,

    CONSTRAINT "Gamevariants_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Gamevariants" ADD CONSTRAINT "Gamevariants_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Gamevariants" ADD CONSTRAINT "Gamevariants_variantId_fkey" FOREIGN KEY ("variantId") REFERENCES "Variants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
