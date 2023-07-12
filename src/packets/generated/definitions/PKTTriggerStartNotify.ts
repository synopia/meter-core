// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTTriggerStartNotify = {
  sourceId: bigint;
  triggerId: number;
  involvedPCs: bigint[];
  triggerSignalType: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTTriggerStartNotify;
  data.sourceId = reader.u64();
  data.triggerId = reader.u32();
  data.involvedPCs = reader.array(reader.u16(), () => reader.u64(), 40);
  data.triggerSignalType = reader.u32();
  return data;
}
export const name = "PKTTriggerStartNotify";
export const opcode = 47681;
