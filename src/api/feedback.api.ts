import axios, { AxiosResponse } from "axios";
import { FeedbackRequest } from "./types/FeedbackRequest";
import { FEEDBACK_URL } from "./constants/endpoint";

export const postFeedback = async (
  params: FeedbackRequest
): Promise<AxiosResponse<any, any>> => {
  return await axios.post<any>(FEEDBACK_URL, params);
};
