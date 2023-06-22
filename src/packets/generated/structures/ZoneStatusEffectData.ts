// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type ZoneStatusEffectData = {
  target: number;
  stackCount: number;
  id: number;
  instanceId: number;
};
export function read(reader: Read) {
  const data = {} as ZoneStatusEffectData;
  data.target = reader.u8();
  reader.skip(4);
  data.stackCount = reader.u8();
  data.id = reader.u32();
  data.instanceId = reader.u32();
  return data;
}
