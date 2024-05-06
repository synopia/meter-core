import { Read } from "../../stream";
export type PKTSkillCooldownNotify = {
    skillId: number;
    cooldown1: number;
    cooldown2: number;
}
export function read(buf: Buffer): PKTSkillCooldownNotify {
    const reader = new Read(buf);
    const data = {} as PKTSkillCooldownNotify;
    reader.skip(2);
    data.cooldown1 = reader.f32();
    reader.skip(1);
    data.skillId = reader.u32();
    reader.skip(1);
    data.cooldown2 = reader.f32();
    return data;
}
export const name= "PKTSkillCooldownNotify";
export const opcode = 38902;