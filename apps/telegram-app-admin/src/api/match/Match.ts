import { Bet } from "../bet/Bet";

export type Match = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  date: Date | null;
  winner: string | null;
  loser: string | null;
  bets?: Array<Bet>;
};
