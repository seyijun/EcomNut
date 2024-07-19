import { SortOrder } from "../../util/SortOrder";

export type HamsterOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  strength?: SortOrder;
  speed?: SortOrder;
  health?: SortOrder;
  owner?: SortOrder;
};
