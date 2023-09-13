import { ApiLoadState } from "../../../api/types/local/ApiLoadState";

export type FeedbackState = {
  apiState: ApiLoadState;
  data: any;
  error: string;
};
