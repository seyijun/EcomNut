import { JsonValue } from "type-fest";
import { Bet } from "../bet/Bet";
import { Notification } from "../notification/Notification";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  telegramId: string | null;
  score: number | null;
  bets?: Array<Bet>;
  notifications?: Array<Notification>;
};
