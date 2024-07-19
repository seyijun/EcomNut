import { SortOrder } from "../../util/SortOrder";

export type MatchOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  date?: SortOrder;
  winner?: SortOrder;
  loser?: SortOrder;
};
