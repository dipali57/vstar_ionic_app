import { FeedbackState } from "./FeedbackState";
import { HashtagState } from "./HashtagState";

export type MenuState = {
  feedback: FeedbackState;
  hashtags: HashtagState;
};
