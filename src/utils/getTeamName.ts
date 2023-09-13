import { UserProfile } from '../api/types/UserProfile';

export const getTeamName = (userData: UserProfile[], userId: string) =>
  userData.find((u) => u.id === userId)?.team || '';
