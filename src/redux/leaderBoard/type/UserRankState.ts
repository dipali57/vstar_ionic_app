import { ApiLoadState } from '../../../api/types/local/ApiLoadState';
import { UserRankType } from '../../../api/types/UserRankType';

export interface UserRankState {
  apiState: ApiLoadState;
  data: Array<UserRankType>;
  error: string;
}
