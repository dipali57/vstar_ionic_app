export interface GetStarRequestType {
  id?: number;
  senderId?: string;
  receiverId?: string;
  starType?: number;
  comment?: string;
  time?: number;
  _page?: number;
  _sort?: string;
  _order?: string;
  _limit?: number;
}
