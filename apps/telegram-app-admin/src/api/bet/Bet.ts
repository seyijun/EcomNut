import { User } from "../user/User";
import { Match } from "../match/Match";
import { Hamster } from "../hamster/Hamster";

export type Bet = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  amount: number | null;
  user?: User | null;
  match?: Match | null;
  hamster?: Hamster | null;
};
