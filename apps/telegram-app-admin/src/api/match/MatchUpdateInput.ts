import { BetUpdateManyWithoutMatchesInput } from "./BetUpdateManyWithoutMatchesInput";

export type MatchUpdateInput = {
  date?: Date | null;
  winner?: string | null;
  loser?: string | null;
  bets?: BetUpdateManyWithoutMatchesInput;
};
