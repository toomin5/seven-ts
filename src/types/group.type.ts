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

export interface CustomCreateGroup {
  name: string;
  email: string;
  ownerId: number;
  description?: string;
  photoUrl?: string;
  goalRep: number;
  ownerNickname: string;
  ownerPassword: string;
}

export interface CustomUpdateGroup {
  groupId: number;
  ownerId: number;
  password: string; // 비밀번호 인증 용도
  data: Partial<Group>; // 업데이트할 그룹의 데이터
}
