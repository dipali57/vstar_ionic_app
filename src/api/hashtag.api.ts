import axios, { AxiosResponse } from "axios";
import { HASHTAG_URL } from "./constants/endpoint";
import { HashtagResponse } from "./types/HashtagResponse";

export const getHashtags = async (): Promise<
  AxiosResponse<HashtagResponse, any>
> => {
  return await axios.get<HashtagResponse>(HASHTAG_URL, {
    headers: {
      Accept: "application/json",
    },
  });
};
