import { ApiLoadState } from "../../../api/types/local/ApiLoadState";

// Define a type for the slice state
export interface PostStarState {
  apiState: ApiLoadState;
  data: any;
  error: string;
}
