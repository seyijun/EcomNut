import { InputJsonValue } from "../../types";
import { BetCreateNestedManyWithoutUsersInput } from "./BetCreateNestedManyWithoutUsersInput";
import { NotificationCreateNestedManyWithoutUsersInput } from "./NotificationCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  telegramId?: string | null;
  score?: number | null;
  bets?: BetCreateNestedManyWithoutUsersInput;
  notifications?: NotificationCreateNestedManyWithoutUsersInput;
};
