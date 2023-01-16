// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as StatusEffectData from "../structures/StatusEffectData";
import * as Struct_678 from "../structures/Struct_678";
export type PKTInitPC = {
  Unk0: Buffer;
  Unk1: number;
  Unk2: number;
  ClassId: number;
  Unk4: bigint;
  Unk5: number;
  Unk6: number;
  Unk7: number;
  Unk8: number;
  Level: number;
  statPair: { Value: bigint; StatType: number }[];
  Unk11: number;
  Unk12: number;
  Unk13: number;
  Unk14: number;
  Unk15: number;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  Unk17: number;
  struct_325: Buffer;
  Unk19: bigint;
  Unk20: number;
  Unk21: number;
  Unk22: number;
  Unk23: number;
  Unk24: number;
  Unk25: number;
  Unk26: number;
  Unk27: number;
  PlayerId: bigint;
  Unk29: number;
  Name: string;
  Unk31: number;
  Unk32: number;
  Unk33: number;
  struct_373: Struct_678.Struct_678[];
  Unk35: number;
  Unk36_0?: number;
  Unk37: number;
  Unk38: number;
  Unk39: bigint;
  CharacterId: bigint;
  struct_320: string;
  Unk42: number;
  Unk43: number;
  Unk44: number;
  struct_219: Buffer;
  Unk46: bigint;
  Unk47: number;
  Unk48: number;
  Unk49: number;
  GearLevel: number;
  Unk51: number;
  struct_92: Buffer;
  Unk53: Buffer;
  Unk54: number;
  Unk55: number;
  Unk56: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTInitPC;
  data.Unk0 = reader.bytes(25);
  data.Unk1 = reader.u16();
  data.Unk2 = reader.u32();
  data.ClassId = reader.u16();
  data.Unk4 = reader.u64();
  data.Unk5 = reader.u32();
  data.Unk6 = reader.u8();
  data.Unk7 = reader.u16();
  data.Unk8 = reader.u16();
  reader.skip(66);
  data.Level = reader.u16();
  reader.skip(44);
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const F = {} as any;
      F.Value = ReadNBytesInt64.read(reader);
      F.StatType = reader.u8();
      return F;
    },
    152
  );
  data.Unk11 = reader.u32();
  data.Unk12 = reader.u8();
  data.Unk13 = reader.u16();
  data.Unk14 = reader.u32();
  data.Unk15 = reader.u8();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.Unk17 = reader.u8();
  data.struct_325 = reader.bytes(reader.u16(), 104, 30);
  data.Unk19 = reader.u64();
  data.Unk20 = reader.u32();
  data.Unk21 = reader.u8();
  data.Unk22 = reader.u8();
  data.Unk23 = reader.u32();
  data.Unk24 = reader.u8();
  data.Unk25 = reader.u32();
  data.Unk26 = reader.u8();
  data.Unk27 = reader.u8();
  data.PlayerId = reader.u64();
  data.Unk29 = reader.u16();
  data.Name = reader.string(20);
  data.Unk31 = reader.u8();
  data.Unk32 = reader.u32();
  data.Unk33 = reader.u8();
  data.struct_373 = reader.array(reader.u16(), () => Struct_678.read(reader), 5);
  data.Unk35 = reader.u8();
  if (reader.bool()) data.Unk36_0 = reader.u32();
  data.Unk37 = reader.u32();
  data.Unk38 = reader.u8();
  data.Unk39 = reader.u64();
  data.CharacterId = reader.u64();
  data.struct_320 = reader.string(7);
  data.Unk42 = reader.u8();
  data.Unk43 = reader.u8();
  data.Unk44 = reader.u32();
  data.struct_219 = reader.bytes(reader.u16(), 3, 17);
  data.Unk46 = reader.u64();
  data.Unk47 = reader.u8();
  data.Unk48 = reader.u8();
  data.Unk49 = reader.u32();
  data.GearLevel = reader.u32();
  data.Unk51 = reader.u8();
  data.struct_92 = reader.bytes(reader.u16(), 57);
  data.Unk53 = reader.bytes(35);
  data.Unk54 = reader.u8();
  data.Unk55 = reader.u8();
  data.Unk56 = reader.u32();
  return data;
}
export const name = "PKTInitPC";
export const opcode = 44217;
