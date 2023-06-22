// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as StatusEffectData from "../structures/StatusEffectData";
export type PKTPartyStatusEffectAddNotify = {
  characterId: bigint;
  unk1: number;
  playerIdOnRefresh: bigint;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  unk4: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTPartyStatusEffectAddNotify;
  data.characterId = reader.u64();
  data.unk1 = reader.u8();
  data.playerIdOnRefresh = reader.u64();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.unk4 = reader.u64();
  return data;
}
export const name = "PKTPartyStatusEffectAddNotify";
export const opcode = 18070;
