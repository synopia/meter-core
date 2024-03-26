import type { Read, Write } from "../../stream";

export type SkillCooldownNotify = {
  skillId: number,
  cooldown1: number,
  cooldown2: number
}

export function read(reader: Read, version: number) {
  const data = {} as SkillCooldownNotify;
  data.cooldown1 = reader.f32();
  data.cooldown2 = reader.f32();
  data.skillId = reader.u32();
  return data;
}
export function write(writer: Write, data: SkillCooldownNotify) {
  writer.f32(data.cooldown1);
  writer.f32(data.cooldown2);
  writer.u32(data.skillId);
}

export const name = "SkillCooldownNotify";
