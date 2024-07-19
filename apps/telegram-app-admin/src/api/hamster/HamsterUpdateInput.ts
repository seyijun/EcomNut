import { BetUpdateManyWithoutHamstersInput } from "./BetUpdateManyWithoutHamstersInput";

export type HamsterUpdateInput = {
  name?: string | null;
  strength?: number | null;
  speed?: number | null;
  health?: number | null;
  owner?: string | null;
  bets?: BetUpdateManyWithoutHamstersInput;
};
