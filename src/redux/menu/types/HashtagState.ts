import { HashTag } from "../../../api/types/Hashtag";
import { ApiLoadState } from "../../../api/types/local/ApiLoadState";

export type HashtagState = {
  apiState: ApiLoadState;
  data: HashTag[];
  error: string;
};
