import { BetCreateNestedManyWithoutMatchesInput } from "./BetCreateNestedManyWithoutMatchesInput";

export type MatchCreateInput = {
  date?: Date | null;
  winner?: string | null;
  loser?: string | null;
  bets?: BetCreateNestedManyWithoutMatchesInput;
};
