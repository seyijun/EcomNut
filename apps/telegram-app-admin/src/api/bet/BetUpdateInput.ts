import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { MatchWhereUniqueInput } from "../match/MatchWhereUniqueInput";
import { HamsterWhereUniqueInput } from "../hamster/HamsterWhereUniqueInput";

export type BetUpdateInput = {
  amount?: number | null;
  user?: UserWhereUniqueInput | null;
  match?: MatchWhereUniqueInput | null;
  hamster?: HamsterWhereUniqueInput | null;
};
