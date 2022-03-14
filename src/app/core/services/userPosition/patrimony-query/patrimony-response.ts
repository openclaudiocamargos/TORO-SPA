import { PatrimonyPosition } from "./patrimony-position";

export interface PatrimonyResponse {
  checkingAccountAmount: number;
  positions: PatrimonyPosition[];
  consolidated: number;
}
