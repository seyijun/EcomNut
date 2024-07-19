import { HamsterWhereInput } from "./HamsterWhereInput";
import { HamsterOrderByInput } from "./HamsterOrderByInput";

export type HamsterFindManyArgs = {
  where?: HamsterWhereInput;
  orderBy?: Array<HamsterOrderByInput>;
  skip?: number;
  take?: number;
};
