import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { BetListRelationFilter } from "../bet/BetListRelationFilter";
import { NotificationListRelationFilter } from "../notification/NotificationListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  telegramId?: StringNullableFilter;
  score?: IntNullableFilter;
  bets?: BetListRelationFilter;
  notifications?: NotificationListRelationFilter;
};
