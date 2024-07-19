import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationWhereInput = {
  id?: StringFilter;
  isRead?: BooleanNullableFilter;
  content?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
