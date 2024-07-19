import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BetListRelationFilter } from "../bet/BetListRelationFilter";

export type MatchWhereInput = {
  id?: StringFilter;
  date?: DateTimeNullableFilter;
  winner?: StringNullableFilter;
  loser?: StringNullableFilter;
  bets?: BetListRelationFilter;
};
