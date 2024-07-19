import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { BetListRelationFilter } from "../bet/BetListRelationFilter";

export type HamsterWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  strength?: IntNullableFilter;
  speed?: IntNullableFilter;
  health?: IntNullableFilter;
  owner?: StringNullableFilter;
  bets?: BetListRelationFilter;
};
