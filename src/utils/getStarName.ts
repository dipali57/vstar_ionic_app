import { StarType } from '../api/types/StarType';

export const getStarName = (starTypeData: StarType[], starId: number) =>
  starTypeData.find((t) => t.id === starId)?.name || '';
