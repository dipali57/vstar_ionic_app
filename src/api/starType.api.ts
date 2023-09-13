import axios, { AxiosResponse } from "axios";
import { STAR_TYPE_URL } from "./constants/endpoint";
import { StarType } from "./types/StarType";

export const getStarType = async (): Promise<
  AxiosResponse<StarType[], any>
> => {
  return await axios.get<Array<StarType>>(STAR_TYPE_URL, {
    headers: {
      Accept: "application/json",
    },
  });
};
