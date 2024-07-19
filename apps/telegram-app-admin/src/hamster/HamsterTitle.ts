import { Hamster as THamster } from "../api/hamster/Hamster";

export const HAMSTER_TITLE_FIELD = "name";

export const HamsterTitle = (record: THamster): string => {
  return record.name?.toString() || String(record.id);
};
