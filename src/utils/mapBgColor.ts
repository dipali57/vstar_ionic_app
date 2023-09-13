import { UserProfile } from '../api/types/UserProfile';
import { UserStyleInfo } from '../redux/common/types/UserStyleInfo';
import '../components/ProfileAvatar/ProfileAvatar.css';

export const mapBgColor = (users: UserProfile[]): UserStyleInfo[] =>
  users.map(
    (user: UserProfile, index): UserStyleInfo => ({
      userId: user.id,
      avatarBgColor: `avatar-p${(index % 10) + 1}`,
    })
  );
