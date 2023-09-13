import { UserRankState } from './UserRankState';

export interface LeaderBoardState {
  sender: UserRankState;
  receiver: UserRankState;
}
