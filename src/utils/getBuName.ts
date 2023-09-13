import { UserProfile } from '../api/types/UserProfile';

export const getBuName = (userData: UserProfile[], userId: string) =>
  userData.find((u) => u.id === userId)?.bu || '';
