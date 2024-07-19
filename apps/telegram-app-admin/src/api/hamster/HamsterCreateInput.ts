import { BetCreateNestedManyWithoutHamstersInput } from "./BetCreateNestedManyWithoutHamstersInput";

export type HamsterCreateInput = {
  name?: string | null;
  strength?: number | null;
  speed?: number | null;
  health?: number | null;
  owner?: string | null;
  bets?: BetCreateNestedManyWithoutHamstersInput;
};
