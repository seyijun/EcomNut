import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { MatchWhereUniqueInput } from "../match/MatchWhereUniqueInput";
import { HamsterWhereUniqueInput } from "../hamster/HamsterWhereUniqueInput";

export type BetWhereInput = {
  id?: StringFilter;
  amount?: IntNullableFilter;
  user?: UserWhereUniqueInput;
  match?: MatchWhereUniqueInput;
  hamster?: HamsterWhereUniqueInput;
};
