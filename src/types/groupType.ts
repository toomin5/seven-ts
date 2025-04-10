export interface Group {
  name: string;
  email: string;
  ownerId: number;
  description?: string;
  photoUrl?: string;
  goalRep: number;
  ownerNickname: string;
  ownerPassword: string;
}
