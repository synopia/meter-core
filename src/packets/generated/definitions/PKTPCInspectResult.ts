// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as ItemData from "../structures/ItemData";
import * as AbilityData from "../structures/AbilityData";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type PKTPCInspectResult = {
  unk0: number;
  serverAddr: string;
  unk2: number;
  unk3: number;
  unk4: Buffer;
  struct_135: Buffer;
  unk6: number;
  passiveStatusEffectList: number[];
  unk8: Buffer;
  unk9: number;
  unk10: string;
  struct_289: Buffer;
  unk12: number;
  lookData: Buffer;
  struct_413: Buffer;
  struct_307: ItemData.ItemData[];
  struct_556: string;
  unk17: number;
  unk18: number;
  unk19: number;
  unk20: string;
  unk21: number;
  struct_298: Buffer;
  struct_297: Buffer;
  struct_389: Buffer;
  unk25: number;
  unk26: number;
  unk27: number;
  struct_487: Buffer;
  unk29: number;
  unk30: bigint;
  struct_518: Buffer;
  struct_114: Buffer;
  unk33: Buffer;
  struct_310: ItemData.ItemData[];
  unk35: Buffer;
  unk36: number;
  unk37: Buffer;
  unk38: number;
  unk39: number;
  abilityDataList: AbilityData.AbilityData[];
  unk41: number;
  unk42: number;
  statPair: { statType: number; value: bigint }[];
  unk44: number;
  struct_525: Buffer;
  unk46: number;
  unk47: number;
  struct_197: Buffer;
  struct_308: ItemData.ItemData[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTPCInspectResult;
  data.unk0 = reader.u16();
  data.serverAddr = reader.string(256);
  data.unk2 = reader.u8();
  data.unk3 = reader.u16();
  data.unk4 = reader.bytes(12);
  data.struct_135 = reader.bytes(reader.u16(), 6, 4);
  data.unk6 = reader.u16();
  data.passiveStatusEffectList = reader.array(reader.u16(), () => reader.u32(), 10);
  data.unk8 = reader.bytes(10);
  data.unk9 = reader.u8();
  data.unk10 = reader.string(20);
  data.struct_289 = reader.bytes(reader.u16(), 5, 9);
  data.unk12 = reader.u32();
  data.lookData = reader.bytes(reader.u32(), 512);
  data.struct_413 = reader.bytes(reader.u16(), 5, 5);
  data.struct_307 = reader.array(reader.u16(), () => ItemData.read(reader), 9);
  data.struct_556 = reader.string(22);
  data.unk17 = reader.u16();
  data.unk18 = reader.u16();
  data.unk19 = reader.u16();
  data.unk20 = reader.string(20);
  data.unk21 = reader.u16();
  data.struct_298 = reader.bytes(reader.u16(), 140, 5);
  data.struct_297 = reader.bytes(reader.u16(), 32, 5);
  data.struct_389 = reader.bytes(reader.u16(), 16, 5);
  data.unk25 = reader.u16();
  data.unk26 = reader.u32();
  data.unk27 = reader.u8();
  data.struct_487 = reader.bytes(reader.u16(), 30, 7);
  data.unk29 = reader.u32();
  data.unk30 = reader.u64();
  data.struct_518 = reader.bytes(reader.u16(), 26);
  data.struct_114 = reader.bytes(reader.u16(), 26, 4);
  data.unk33 = reader.bytes(24);
  data.struct_310 = reader.array(reader.u16(), () => ItemData.read(reader), 11);
  data.unk35 = reader.bytes(20);
  data.unk36 = reader.u16();
  data.unk37 = reader.bytes(20);
  data.unk38 = reader.u8();
  data.unk39 = reader.u8();
  data.abilityDataList = reader.array(reader.u16(), () => AbilityData.read(reader), 100);
  data.unk41 = reader.u8();
  data.unk42 = reader.u8();
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const m = {} as { statType: number; value: bigint };
      m.statType = reader.u8();
      m.value = ReadNBytesInt64.read(reader);
      return m;
    },
    152
  );
  data.unk44 = reader.u8();
  data.struct_525 = reader.bytes(reader.u16(), 6, 8);
  data.unk46 = reader.u32();
  data.unk47 = reader.u8();
  data.struct_197 = reader.bytes(reader.u16(), 11, 13);
  data.struct_308 = reader.array(reader.u16(), () => ItemData.read(reader), 32);
  return data;
}
export const name = "PKTPCInspectResult";
export const opcode = 32682;