import axios, { AxiosResponse } from 'axios';
import { RECEIVER_RANK_URL, SENDER_RANK_URL } from './constants/endpoint';
import { UserRankType } from './types/UserRankType';

export const getSenderRank = async (): Promise<
  AxiosResponse<UserRankType[], any>
> => {
  return await axios.get<Array<UserRankType>>(SENDER_RANK_URL, {
    headers: {
      Accept: 'application/json',
    },
  });
};

export const getReceiverRank = async (): Promise<
  AxiosResponse<UserRankType[], any>
> => {
  return await axios.get<Array<UserRankType>>(RECEIVER_RANK_URL, {
    headers: {
      Accept: 'application/json',
    },
  });
};
