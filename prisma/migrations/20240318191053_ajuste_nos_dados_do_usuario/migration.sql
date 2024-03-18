/*
  Warnings:

  - You are about to drop the column `birthday` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `cpf` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[cpf]` on the table `Enrollment` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `birthday` to the `Enrollment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cpf` to the `Enrollment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Enrollment` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "User_cpf_key";

-- AlterTable
ALTER TABLE "Enrollment" ADD COLUMN     "birthday" TEXT NOT NULL,
ADD COLUMN     "cpf" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "birthday",
DROP COLUMN "cpf",
DROP COLUMN "phone";

-- CreateIndex
CREATE UNIQUE INDEX "Enrollment_cpf_key" ON "Enrollment"("cpf");
