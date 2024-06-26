// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTTriggerBossBattleStatus = {
  unk2_m: boolean;
  step: number;
  triggerId: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTTriggerBossBattleStatus;
  data.unk2_m = reader.bool();
  reader.skip(1);
  data.step = reader.u32();
  data.triggerId = reader.u32();
  return data;
}
export const name = "PKTTriggerBossBattleStatus";
export const opcode = 55703;
