import { InputJsonValue } from "../../types";
import { BetUpdateManyWithoutUsersInput } from "./BetUpdateManyWithoutUsersInput";
import { NotificationUpdateManyWithoutUsersInput } from "./NotificationUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  telegramId?: string | null;
  score?: number | null;
  bets?: BetUpdateManyWithoutUsersInput;
  notifications?: NotificationUpdateManyWithoutUsersInput;
};
