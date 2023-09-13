import axios, { AxiosResponse } from 'axios';
import { STAR_URL } from './constants/endpoint';
import { StarResponseType } from './types/StarResponseType';
import { PostStarRequestType } from './types/PostStarRequestType';
import { GetStarRequestType } from './types/GetStarRequestType';

export const getStars = async (
  params: GetStarRequestType
): Promise<AxiosResponse<StarResponseType, any>> => {
  return await axios.get<StarResponseType>(STAR_URL, {
    headers: {
      Accept: 'application/json',
    },
    params,
  });
};

export const postStar = async (
  params: PostStarRequestType
): Promise<AxiosResponse<any, any>> => {
  return await axios.post<any>(STAR_URL, params);
};
