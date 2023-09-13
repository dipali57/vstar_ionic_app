export interface PostStarRequestType {
  senderId: string;
  receiverId?: string;
  starType?: number;
  comment: string;
  time: number;
  location: PlaceDetailType;
}

type PlaceDetailType = {
  lat: number;
  lng: number;
  placeName: string;
};
