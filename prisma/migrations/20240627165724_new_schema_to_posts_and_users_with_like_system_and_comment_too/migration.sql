/*
  Warnings:

  - Added the required column `UserId` to the `Posts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Posts" ADD COLUMN     "UserId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Likes" (
    "id" SERIAL NOT NULL,
    "PostId" TEXT NOT NULL,
    "UserId" TEXT NOT NULL,

    CONSTRAINT "Likes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comments" (
    "id" SERIAL NOT NULL,
    "PostId" TEXT NOT NULL,
    "UserId" TEXT NOT NULL,
    "comment" TEXT NOT NULL,

    CONSTRAINT "Comments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Likes_PostId_UserId_key" ON "Likes"("PostId", "UserId");

-- AddForeignKey
ALTER TABLE "Posts" ADD CONSTRAINT "Posts_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Likes" ADD CONSTRAINT "Likes_PostId_fkey" FOREIGN KEY ("PostId") REFERENCES "Posts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Likes" ADD CONSTRAINT "Likes_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_PostId_fkey" FOREIGN KEY ("PostId") REFERENCES "Posts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
