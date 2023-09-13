import { ApiLoadState } from '../../../api/types/local/ApiLoadState';
import { UserProfile } from '../../../api/types/UserProfile';

export type AuthorizedUser = {
  apiState: ApiLoadState;
  data: UserProfile[];
  error?: string;
};
