// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type Struct_145 = {
  unk1_0?: Buffer;
};
export function read(reader: Read) {
  const data = {} as Struct_145;
  const unk0 = reader.u16();
  if (unk0 === 1) data.unk1_0 = reader.bytes(unk0);
  return data;
}
