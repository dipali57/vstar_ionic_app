import axios, { AxiosResponse } from 'axios';
import { LOCATION_URL } from './constants/endpoint';
import { locationRequest } from './types/locationRequest';
import { LocationResponse } from './types/locationResponse';

export const getGeoLocation = async (
  params: locationRequest
): Promise<AxiosResponse<LocationResponse, any>> => {
  return await axios.get<LocationResponse>(LOCATION_URL, {
    headers: {
      Accept: 'application/json',
    },
    params,
  });
};
