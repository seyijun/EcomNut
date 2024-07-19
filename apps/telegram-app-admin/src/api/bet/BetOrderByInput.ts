import { SortOrder } from "../../util/SortOrder";

export type BetOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  amount?: SortOrder;
  userId?: SortOrder;
  matchId?: SortOrder;
  hamsterId?: SortOrder;
};
