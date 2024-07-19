import { Bet } from "../bet/Bet";

export type Hamster = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  strength: number | null;
  speed: number | null;
  health: number | null;
  owner: string | null;
  bets?: Array<Bet>;
};
