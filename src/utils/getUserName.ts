import { UserProfile } from '../api/types/UserProfile';

export const getUserName = (userData: UserProfile[], userId: string) =>
  userData.find((u) => u.id === userId)?.name || '';
