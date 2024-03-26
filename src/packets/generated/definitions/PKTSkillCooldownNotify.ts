import { Read } from "../../stream";
export type PKTSkillCooldownNotify = {
    skillId: number;
    cooldown1: number;
    cooldown2: number;
}
export function read(buf: Buffer): PKTSkillCooldownNotify {
    const reader = new Read(buf);
    const data = {} as PKTSkillCooldownNotify;
    reader.skip(4);
    data.cooldown1 = reader.f32();
    data.cooldown2 = reader.f32();
    data.skillId = reader.u32();
    return data;
}
export const name= "PKTSkillCooldownNotify";
export const opcode = 49035;