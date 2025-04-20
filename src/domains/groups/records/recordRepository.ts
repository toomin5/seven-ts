import { prisma } from "../../../lib/prisma";
import { CustomCreateRecord } from "../../../types/record.type";


// 그룹생성
export const createRecord = async (data: CustomCreateRecord) => {
  return await prisma.record.create({
    data,
  });
};


