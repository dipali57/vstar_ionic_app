import { StarType } from '../../../api/types/StarType';
import { UserProfile } from '../../../api/types/UserProfile';

export type SelectedStarOptionState = {
  selectedStarType?: StarType;
  selectedUserProfiles?: UserProfile;
};
