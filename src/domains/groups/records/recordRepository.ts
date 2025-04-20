import { prisma } from "../../../lib/prisma";
import { Record } from "@prisma/client";

export async function createRecord(
  data: Partial<Pick<Record, "photos" | "description">> &
    Omit<Record, "id" | "updatedAt" | "createdAt">
) {
  const newRecord = await prisma.record.create({
    data,
  });
  return newRecord;
}

export async function updateRecord(recordId: number, data: Partial<Record>) {
  const updateRecord = await prisma.record.update({
    where: { id: recordId },
    data,
  });
  return updateRecord;
}
