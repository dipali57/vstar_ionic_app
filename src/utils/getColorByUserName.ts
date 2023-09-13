import { UserStyleInfo } from '../redux/common/types/UserStyleInfo';

export const getColorByUserName = (
  userId: string,
  userStyleInfo: UserStyleInfo[]
) => userStyleInfo.find((item) => item.userId === userId)?.avatarBgColor;
