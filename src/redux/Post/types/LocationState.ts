import { Location } from '../../../api/types/Location';
import { ApiLoadState } from '../../../api/types/local/ApiLoadState';

export interface LocationState {
  apiState: ApiLoadState;
  data: Location;
  error: string;
}
