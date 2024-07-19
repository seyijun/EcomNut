import { Match as TMatch } from "../api/match/Match";

export const MATCH_TITLE_FIELD = "winner";

export const MatchTitle = (record: TMatch): string => {
  return record.winner?.toString() || String(record.id);
};
