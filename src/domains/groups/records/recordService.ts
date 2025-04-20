import { createRecord, updateRecord } from "./recordRepository";
import { Record } from "@prisma/client";

export async function createRecordService(
  data: Partial<Pick<Record, "photos" | "description">> &
    Omit<Record, "id" | "updatedAt" | "createdAt">
) {
  const record = await createRecord(data);
  return record;
}

export async function updateRecordService(
  recordId: number,
  data: Partial<Record>
) {
  const record = await updateRecord(recordId, data);
  return record;
}
