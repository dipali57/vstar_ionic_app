import { LocationState } from './LocationState';
import { PostStarState } from './PostStarState';
import { SelectedStarOptionState } from './SelectedStarOptionState';

export type PostState = {
  selectedStarOptions: SelectedStarOptionState;
  postStarState: PostStarState;
  locationState: LocationState;
};
