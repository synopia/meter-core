var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name57 in all)
    __defProp(target, name57, { get: all[name57], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/pkt-stream.ts
var pkt_stream_exports = {};
__export(pkt_stream_exports, {
  PKT: () => PKT,
  PKTStream: () => PKTStream
});
module.exports = __toCommonJS(pkt_stream_exports);
var import_tiny_typed_emitter = require("tiny-typed-emitter");

// src/packets/stream.ts
var Read = class {
  /** Buffer */
  b;
  /** Offset */
  o;
  constructor(buf) {
    this.b = buf;
    this.o = 0;
  }
  skip(length = 0) {
    this.o += length;
  }
  bool() {
    return this.u8() === 1;
  }
  u8() {
    return this.b.readUint8(this.o++);
  }
  i8() {
    return this.b.readInt8(this.o++);
  }
  u16() {
    const value = this.b.readUint16LE(this.o);
    this.o += 2;
    return value;
  }
  i16() {
    const value = this.b.readInt16LE(this.o);
    this.o += 2;
    return value;
  }
  u32() {
    const value = this.b.readUint32LE(this.o);
    this.o += 4;
    return value;
  }
  i32() {
    const value = this.b.readInt32LE(this.o);
    this.o += 4;
    return value;
  }
  f32() {
    const value = this.b.readFloatLE(this.o);
    this.o += 4;
    return value;
  }
  u64() {
    const value = this.b.readBigUint64LE(this.o);
    this.o += 8;
    return value;
  }
  i64() {
    const value = this.b.readBigInt64LE(this.o);
    this.o += 8;
    return value;
  }
  string(maxLength) {
    let length = this.u16();
    if (length <= maxLength) {
      length = length * 2;
      const value = this.b.toString("utf16le", this.o, this.o + length);
      this.o += length;
      return value;
    }
    return "";
  }
  bytes(length = 0, maxLength, multiplier) {
    if (maxLength && length > maxLength)
      return Buffer.alloc(0);
    if (multiplier)
      length = length * multiplier;
    const value = Buffer.from(this.b.subarray(this.o, this.o + length));
    this.o += length;
    return value;
  }
  array(length, callbackfn, maxLength) {
    if (maxLength && length > maxLength)
      return [];
    return new Array(length).fill(void 0).map(callbackfn);
  }
};

// src/packets/generated/definitions/PKTSkillCooldownNotify.ts
function read(buf) {
  const reader = new Read(buf);
  const data = {};
  reader.skip(2);
  data.cooldown1 = reader.f32();
  reader.skip(1);
  data.skillId = reader.u32();
  reader.skip(1);
  data.cooldown2 = reader.f32();
  return data;
}
var name = "PKTSkillCooldownNotify";
var opcode = 38902;

// src/packets/generated/structures/AbilityData.ts
function read2(reader) {
  const data = {};
  data.level = reader.u8();
  data.id = reader.u32();
  data.points = reader.u16();
  return data;
}

// src/packets/generated/definitions/PKTAbilityChangeNotify.ts
function read3(buf) {
  const reader = new Read(buf);
  const data = {};
  data.abilityDataList = reader.array(reader.u16(), () => read2(reader), 100);
  return data;
}
var name2 = "PKTAbilityChangeNotify";
var opcode2 = 15874;

// src/packets/generated/structures/ActiveAbility.ts
function read4(reader) {
  const data = {};
  data.level = reader.u32();
  data.featureType = reader.u16();
  return data;
}

// src/packets/generated/definitions/PKTActiveAbilityNotify.ts
function read5(buf) {
  const reader = new Read(buf);
  const data = {};
  data.objectId = reader.u64();
  data.activeAbilityList = reader.array(reader.u16(), () => read4(reader), 60);
  return data;
}
var name3 = "PKTActiveAbilityNotify";
var opcode3 = 3507;

// src/packets/generated/definitions/PKTAddonSkillFeatureChangeNotify.ts
function read6(buf) {
  const reader = new Read(buf);
  const data = {};
  data.objectId = reader.u64();
  data.addonSkillFeatureList = reader.array(
    reader.u16(),
    () => {
      const c = {};
      c.addonSkillFeatureIdList = reader.array(reader.u16(), () => reader.u32(), 5);
      c.skillId = reader.u32();
      return c;
    },
    200
  );
  data.addonFeatureIdList = reader.bytes(reader.u16(), 200, 4);
  return data;
}
var name4 = "PKTAddonSkillFeatureChangeNotify";
var opcode4 = 40396;

// src/packets/generated/definitions/PKTAuthTokenResult.ts
function read7(buf) {
  const reader = new Read(buf);
  const data = {};
  data.packetResultCode = reader.u32();
  data.unk1_m = reader.bytes(reader.u32(), 688);
  return data;
}
var name5 = "PKTAuthTokenResult";
var opcode5 = 9743;

// src/packets/generated/definitions/PKTBlockSkillStateNotify.ts
function read8(buf) {
  const reader = new Read(buf);
  const data = {};
  data.objectId = reader.u64();
  data.paralyzationMaxPoint = reader.u32();
  reader.skip(1);
  data.paralyzationPoint = reader.u32();
  data.type = reader.u8();
  return data;
}
var name6 = "PKTBlockSkillStateNotify";
var opcode6 = 43294;

// src/packets/generated/definitions/PKTCounterAttackNotify.ts
function read9(buf) {
  const reader = new Read(buf);
  const data = {};
  data.type = reader.u32();
  data.targetId = reader.u64();
  data.sourceId = reader.u64();
  reader.skip(2);
  return data;
}
var name7 = "PKTCounterAttackNotify";
var opcode7 = 50518;

// src/packets/generated/definitions/PKTDeathNotify.ts
function read10(buf) {
  const reader = new Read(buf);
  const data = {};
  data.targetId = reader.u64();
  data.unk2_m = reader.u32();
  if (reader.bool())
    data.damageAttr = reader.u8();
  data.effectId = reader.u32();
  data.unk0_m = reader.u64();
  data.directionYaw = reader.u16();
  if (reader.bool())
    data.deathType = reader.u8();
  data.durabilityDecrement = reader.u8();
  data.sourceId = reader.u64();
  if (reader.bool())
    data.abnormalStatusType = reader.u8();
  return data;
}
var name8 = "PKTDeathNotify";
var opcode8 = 47719;

// src/packets/common/LostArkDateTime.ts
var daysInMonths = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function IsLeapYear(y) {
  return !(y % 4 || !(y % 100) && y % 400);
}
function isValidDate(year, month, day) {
  if (year > 99) {
    if (year < 1752 || year == 1752 && (month < 9 || month == 9 && day << 14)) {
      return false;
    }
  } else {
    year += 1900;
  }
  return day > 0 && /* 
  month > 0 &&*/
  month <= 12 && (day <= daysInMonths[month] || day == 29 && month == 2 && IsLeapYear(year));
}
function bigintToDate(value) {
  let LODWORD = Number(value & 0xffffffffn);
  let HIDWORD = Number(value >> 32n & 0xffffffffn);
  let year = LODWORD & 4095;
  let month = (LODWORD & 65535) >> 12;
  let day = LODWORD >> 16 & 31;
  if (isValidDate(year, month, day)) {
  } else {
    year = month = day = 0;
  }
  let h = LODWORD >> 21 & 31;
  let m = LODWORD >> 26 & 63;
  let s = HIDWORD & 63;
  let ms = HIDWORD >> 6 & 16383;
  if (h < 24 && m < 60 && s < 60 && ms < 1e3) {
  } else {
    h = 24;
    m = s = ms = 0;
  }
  return new Date(Date.UTC(year <= 99 ? year + 1900 : year, month - 1, day, h, m, s, ms));
}
function read11(reader, version = 0) {
  const s = reader.u16();
  if ((s & 4095) < 2079) {
    reader.o -= 2;
    return bigintToDate(reader.i64());
  } else {
    return bigintToDate(BigInt(s) & 0xfffn | 0x11000n);
  }
}

// src/packets/generated/structures/EquipItemData.ts
function read12(reader) {
  const data = {};
  if (reader.bool())
    data.unk1_0 = reader.u8();
  data.id = reader.u32();
  data.expireTime = read11(reader);
  data.itemTint = reader.bytes(reader.u16(), 5, 14);
  data.unk5 = reader.u8();
  data.level = reader.u16();
  data.slot = reader.u16();
  return data;
}

// src/packets/generated/definitions/PKTEquipChangeNotify.ts
function read13(buf) {
  const reader = new Read(buf);
  const data = {};
  data.unk0 = reader.u32();
  data.equipItemDataList = reader.array(reader.u16(), () => read12(reader), 33);
  data.unk2 = reader.u32();
  data.objectId = reader.u64();
  return data;
}
var name9 = "PKTEquipChangeNotify";
var opcode9 = 37232;

// src/packets/generated/definitions/PKTEquipLifeToolChangeNotify.ts
function read14(buf) {
  const reader = new Read(buf);
  const data = {};
  data.objectId = reader.u64();
  data.equipLifeToolDataList = reader.array(reader.u16(), () => read12(reader), 9);
  return data;
}
var name10 = "PKTEquipLifeToolChangeNotify";
var opcode10 = 36609;

// src/packets/generated/definitions/PKTIdentityStanceChangeNotify.ts
function read15(buf) {
  const reader = new Read(buf);
  const data = {};
  data.stance = reader.u8();
  data.objectId = reader.u64();
  reader.skip(2);
  return data;
}
var name11 = "PKTIdentityStanceChangeNotify";
var opcode11 = 13939;

// src/packets/generated/definitions/PKTInitAbility.ts
function read16(buf) {
  const reader = new Read(buf);
  const data = {};
  data.abilityDataList = reader.array(reader.u16(), () => read2(reader), 100);
  data.struct_137 = reader.bytes(reader.u16(), 353, 48);
  return data;
}
var name12 = "PKTInitAbility";
var opcode12 = 37053;

// src/packets/generated/definitions/PKTInitEnv.ts
function read17(buf) {
  const reader = new Read(buf);
  const data = {};
  data.lostArkDateTime = read11(reader);
  data.struct_597 = reader.string(128);
  data.unk2 = reader.u8();
  data.struct_31 = reader.array(
    reader.u16(),
    () => {
      const i = {};
      i.versionString = reader.string(64);
      i.struct_597 = reader.string(128);
      i.struct_580 = reader.string(32);
      return i;
    },
    64
  );
  data.unk4 = reader.u32();
  data.playerId = reader.u64();
  data.unk6 = reader.u64();
  data.unk7 = reader.u32();
  return data;
}
var name13 = "PKTInitEnv";
var opcode13 = 15335;

// src/packets/generated/structures/StatusEffectData.ts
function read18(reader) {
  const data = {};
  data.sourceId = reader.u64();
  data.statusEffectId = reader.u32();
  data.totalTime = reader.f32();
  data.effectInstanceId = reader.u32();
  data.endTick = reader.u64();
  data.struct_443 = reader.bytes(reader.u16(), 8, 7);
  if (reader.bool())
    data.unk7_0 = reader.u64();
  data.occurTime = read11(reader);
  data.skillLevel = reader.u8();
  if (reader.bool())
    data.value = reader.bytes(16);
  data.stackCount = reader.u8();
  return data;
}

// src/packets/common/ReadNBytesInt64.ts
function bytesToInt64(value) {
  if (value.length === 0)
    return 0n;
  if (value.length > 8)
    throw new Error("Value is too large");
  const buf = Buffer.alloc(8);
  value.copy(buf);
  return buf.readBigInt64LE();
}
function read19(reader, version = 0) {
  const flag = reader.u8();
  const bytes = reader.bytes(flag >> 1 & 7);
  const result = bytesToInt64(bytes) << 4n | BigInt(flag >> 4);
  return (flag & 1) === 0 ? result : -result;
}

// src/packets/generated/structures/PeriodUpdateStatData.ts
function read20(reader) {
  const data = {};
  data.unk0 = reader.u16();
  data.unk1 = read19(reader);
  data.unk2 = read19(reader);
  data.unk3 = reader.u8();
  data.unk4 = reader.u8();
  data.unk5 = reader.u8();
  data.unk6 = reader.u64();
  return data;
}

// src/packets/generated/definitions/PKTInitPC.ts
function read21(buf) {
  const reader = new Read(buf);
  const data = {};
  data.unk0 = reader.u64();
  data.name = reader.string(20);
  data.gearLevel = reader.f32();
  data.unk3 = reader.u8();
  data.unk4 = reader.u8();
  data.unk5 = reader.u32();
  data.unk6 = reader.u8();
  data.unk7 = reader.u8();
  data.statusEffectDatas = reader.array(reader.u16(), () => read18(reader), 80);
  data.unk9 = reader.u16();
  data.unk10 = reader.u8();
  data.unk11 = reader.u8();
  data.struct_368 = reader.string(7);
  data.unk13 = reader.u32();
  data.struct_105 = reader.bytes(reader.u16(), 64);
  data.unk15 = reader.u8();
  data.unk16 = reader.u64();
  data.unk17 = reader.bytes(35);
  data.unk18 = reader.u8();
  data.struct_226 = reader.bytes(reader.u16(), 3, 17);
  data.unk20 = reader.u64();
  data.unk21 = reader.u32();
  data.unk22 = reader.u8();
  data.classId = reader.u16();
  data.unk24 = reader.bytes(120);
  data.unk25 = reader.u64();
  data.unk26 = reader.u8();
  data.unk27 = reader.u8();
  data.unk28 = reader.u8();
  data.unk29 = reader.bytes(25);
  data.unk30 = reader.u8();
  data.unk31 = reader.u64();
  if (reader.bool())
    data.unk33_0 = reader.u32();
  data.unk34 = reader.u32();
  data.unk35 = reader.u8();
  data.level = reader.u16();
  data.unk37 = reader.u8();
  data.unk38 = reader.u32();
  data.unk39 = reader.u8();
  data.unk40 = reader.u16();
  data.unk41 = reader.u32();
  data.unk42 = reader.u8();
  data.unk43 = reader.u32();
  data.playerId = reader.u64();
  data.unk45 = reader.u32();
  data.characterId = reader.u64();
  data.unk47 = reader.u16();
  data.unk48 = reader.u8();
  data.unk49 = reader.u16();
  data.unk50 = reader.u32();
  data.unk51 = reader.u32();
  data.unk52 = reader.u8();
  data.periodUpdateStatDataList = reader.array(reader.u16(), () => read20(reader), 5);
  data.unk54 = reader.u8();
  data.struct_342 = reader.bytes(reader.u16(), 104, 30);
  data.unk56 = reader.u32();
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const l = {};
      l.statType = reader.u8();
      l.value = read19(reader);
      return l;
    },
    153
  );
  return data;
}
var name14 = "PKTInitPC";
var opcode14 = 54555;

// src/packets/generated/structures/Struct_145.ts
function read22(reader) {
  const data = {};
  const unk0 = reader.u16();
  if (unk0 === 1)
    data.unk1_0 = reader.bytes(unk0);
  return data;
}

// src/packets/generated/structures/Struct_660.ts
function read23(reader) {
  const data = {};
  data.unk0 = reader.u8();
  data.unk1 = reader.u8();
  data.unk2 = reader.u8();
  data.unk3 = reader.u8();
  data.unk4 = reader.u32();
  data.unk5 = reader.u32();
  data.struct_145 = read22(reader);
  data.struct_146 = reader.bytes(reader.u16(), 3, 9);
  return data;
}

// src/packets/generated/structures/Struct_667.ts
function read24(reader) {
  const data = {};
  data.struct_393 = reader.bytes(reader.u16(), 2, 10);
  data.unk1 = reader.u32();
  data.struct_147 = reader.bytes(reader.u16(), 10, 9);
  data.struct_237 = reader.bytes(reader.u16(), 10, 18);
  data.unk4 = reader.u32();
  data.struct_235 = reader.array(reader.u16(), () => read23(reader), 3);
  data.unk6 = reader.u32();
  data.unk7 = reader.u32();
  data.unk8 = reader.u8();
  data.unk9 = reader.u32();
  data.struct_258 = reader.bytes(reader.u16(), 2, 9);
  data.unk11 = reader.u32();
  data.unk12 = reader.u16();
  data.unk13 = reader.u64();
  return data;
}

// src/packets/generated/structures/Struct_751.ts
function read25(reader) {
  const data = {};
  data.struct_99 = reader.bytes(reader.u32(), 51);
  data.unk1 = reader.u8();
  data.unk2 = reader.bytes(3);
  data.unk3 = reader.u8();
  data.unk4 = reader.u8();
  data.unk5 = reader.u16();
  data.unk6 = reader.u16();
  data.unk7 = reader.u16();
  return data;
}

// src/packets/generated/structures/Struct_792.ts
function read26(reader) {
  const data = {};
  if (reader.bool())
    data.struct_751 = read25(reader);
  data.unk2 = reader.bytes(reader.u16(), 7);
  data.unk3 = reader.bytes(reader.u16(), 7);
  data.unk4 = reader.u8();
  return data;
}

// src/packets/generated/structures/Struct_666.ts
function read27(reader) {
  const data = {};
  data.unk0 = reader.u32();
  data.unk1 = reader.u32();
  if (reader.bool())
    data.unk3_0 = reader.bytes(9);
  data.unk4 = reader.u32();
  data.struct_271 = reader.bytes(reader.u16(), 10, 29);
  data.unk6 = reader.u8();
  data.unk7 = reader.u32();
  if (reader.bool()) {
    data.unk1_0 = reader.u32();
    data.struct_190 = reader.bytes(reader.u16(), 5, 30);
    data.unk1_2 = reader.u32();
  }
  if (reader.bool())
    data.struct_231 = reader.bytes(reader.u16(), 2, 32);
  data.struct_438 = reader.bytes(reader.u16(), 3, 10);
  data.struct_269 = reader.bytes(reader.u16(), 3, 21);
  data.itemTint = reader.bytes(reader.u16(), 5, 14);
  data.unk14 = reader.u32();
  if (reader.bool())
    data.unk16_0 = reader.bytes(10);
  if (reader.bool())
    data.struct_792 = read26(reader);
  data.struct_495 = reader.bytes(reader.u16(), 3, 7);
  data.unk20 = reader.u32();
  return data;
}

// src/packets/generated/structures/BossKillData.ts
function read28(reader) {
  const data = {};
  data.isDead = reader.bool();
  data.npcId = reader.u32();
  return data;
}

// src/packets/generated/structures/Struct_612.ts
function read29(reader) {
  const data = {};
  data.unk0 = reader.u8();
  data.bossKillDataList = reader.array(reader.u16(), () => read28(reader), 3);
  data.struct_1 = reader.array(
    reader.u16(),
    () => {
      const p = {};
      p.unk1_0_0 = reader.u32();
      p.struct_524 = reader.bytes(reader.u16(), 10);
      return p;
    },
    3
  );
  data.unk3 = reader.u8();
  data.unk4 = reader.u32();
  return data;
}

// src/packets/generated/structures/Struct_659.ts
function read30(reader) {
  const data = {};
  data.unk0 = reader.u8();
  data.struct_495 = reader.bytes(reader.u16(), 3, 7);
  data.unk2 = reader.u8();
  data.unk3 = reader.u8();
  data.struct_234 = reader.bytes(reader.u16(), 5, 7);
  data.struct_24 = reader.array(
    reader.u16(),
    () => {
      const q = {};
      q.unk1_0_0 = reader.u8();
      q.unk1_0_1 = reader.u16();
      q.struct_233 = reader.string(2);
      return q;
    },
    20
  );
  return data;
}

// src/packets/generated/structures/Struct_567.ts
function read31(reader) {
  const data = {};
  const unk0 = reader.u8();
  if (unk0 === 1)
    data.struct_667 = read24(reader);
  if (unk0 === 2) {
    data.unk2_0 = reader.u8();
    data.struct_2 = reader.array(
      reader.u16(),
      () => {
        const m = {};
        m.struct_524 = reader.bytes(reader.u16(), 10);
        m.unk1_0_1 = reader.u32();
        m.unk1_0_2 = reader.u8();
        m.unk1_0_3 = reader.u8();
        return m;
      },
      3
    );
    data.struct_134 = reader.bytes(reader.u16(), 3, 6);
  }
  if (unk0 === 3)
    data.unk3_0 = reader.bytes(26);
  if (unk0 === 4) {
    data.unk4_0 = reader.bytes(reader.u16(), 10, 13);
    data.unk4_1 = reader.bytes(reader.u16(), 10, 13);
    data.unk4_2 = reader.u32();
  }
  if (unk0 === 5)
    data.struct_666 = read27(reader);
  if (unk0 === 6)
    data.struct_612 = read29(reader);
  if (unk0 === 7)
    data.unk7_0 = reader.bytes(9);
  if (unk0 === 8)
    data.struct_659 = read30(reader);
  if (unk0 === 9)
    data.unk9_0 = reader.u8();
  return data;
}

// src/packets/generated/structures/ItemData.ts
function read32(reader) {
  const data = {};
  const count = reader.u32();
  if (count > 0) {
    data.serialNumber = reader.u64();
    data.id = reader.u32();
    data.level = reader.u16();
    data.slot = reader.u16();
    data.durability = reader.u32();
    data.unk1_6_m = reader.u32();
    data.flag = reader.u32();
    data.expireTime = read11(reader);
    data.lockUpdateTime = read11(reader);
    if (reader.bool())
      data.unk1_10_0 = reader.bytes(9);
    data.unk1_11 = reader.u8();
    data.unk1_12 = reader.u8();
    data.unk1_13 = reader.u32();
    data.struct_567 = read31(reader);
    data.unk1_15 = reader.u32();
  }
  return data;
}

// src/packets/generated/definitions/PKTInitItem.ts
function read33(buf) {
  const reader = new Read(buf);
  const data = {};
  data.itemDataList = reader.array(reader.u16(), () => read32(reader), 80);
  data.storageType = reader.u8();
  return data;
}
var name15 = "PKTInitItem";
var opcode15 = 31937;

// src/packets/generated/structures/Struct_756.ts
function read34(reader) {
  const data = {};
  data.unk0 = reader.u32();
  if (reader.bool())
    data.unk2_0 = reader.u32();
  data.unk3 = reader.u32();
  if (reader.bool())
    data.unk5_0 = reader.bytes(9);
  data.unk6 = reader.u32();
  return data;
}

// src/packets/generated/definitions/PKTInitLocal.ts
function read35(buf) {
  const reader = new Read(buf);
  const data = {};
  data.unk0 = reader.u8();
  data.struct_226 = reader.bytes(reader.u16(), 3, 17);
  data.unk2 = reader.u64();
  data.struct_422 = reader.array(reader.u16(), () => read34(reader), 300);
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const t = {};
      t.statType = reader.u8();
      t.value = read19(reader);
      return t;
    },
    153
  );
  data.unk5 = reader.u32();
  data.unk6 = reader.u8();
  data.statusEffectDatas = reader.array(reader.u16(), () => read18(reader), 80);
  data.unk8 = reader.u64();
  data.struct_137 = reader.bytes(reader.u16(), 353, 48);
  data.addonFeatureIdList = reader.bytes(reader.u16(), 200, 4);
  data.unk11 = reader.u8();
  if (reader.bool())
    data.unk13_0 = reader.u32();
  data.abilityDataList = reader.array(reader.u16(), () => read2(reader), 100);
  data.struct_342 = reader.bytes(reader.u16(), 104, 30);
  data.addonSkillFeatureList = reader.array(
    reader.u16(),
    () => {
      const w = {};
      w.addonSkillFeatureIdList = reader.array(reader.u16(), () => reader.u32(), 5);
      w.skillId = reader.u32();
      return w;
    },
    200
  );
  return data;
}
var name16 = "PKTInitLocal";
var opcode16 = 12070;

// src/packets/generated/definitions/PKTMigrationExecute.ts
function read36(buf) {
  const reader = new Read(buf);
  const data = {};
  data.account_CharacterId1 = reader.u64();
  data.serverAddr = reader.string(256);
  data.account_CharacterId2 = reader.u64();
  data.unk3 = reader.u32();
  return data;
}
var name17 = "PKTMigrationExecute";
var opcode17 = 44024;

// src/packets/generated/structures/Struct_735.ts
function read37(reader) {
  const data = {};
  data.equipItemDataList = reader.array(reader.u16(), () => read12(reader), 33);
  data.lostArkString = reader.string(20);
  data.lookData = reader.bytes(reader.u32(), 512);
  data.unk3 = reader.u8();
  data.unk4 = reader.u64();
  data.unk5 = reader.u8();
  data.unk6 = reader.u64();
  data.unk7 = reader.u8();
  data.unk8 = reader.u16();
  return data;
}

// src/packets/common/Angle.ts
function read38(reader, version = 0) {
  return reader.u16() * (2 * Math.PI) / 65536;
}

// src/packets/common/Vector3F.ts
function i21(n) {
  if (n >> 20 === 1)
    return -((~n >>> 0) + 1 & 2097151);
  return n;
}
function read39(reader, version = 0) {
  let b = reader.u64();
  return {
    x: i21(Number(b & 0x1fffffn)),
    y: i21(Number(b >> 21n & 0x1fffffn)),
    z: i21(Number(b >> 42n & 0x1fffffn))
  };
}

// src/packets/generated/structures/NpcData.ts
function read40(reader) {
  const data = {};
  data.statusEffectDatas = reader.array(reader.u16(), () => read18(reader), 80);
  if (reader.bool())
    data.unk2_0 = reader.u8();
  if (reader.bool())
    data.balanceLevel = reader.u16();
  data.periodUpdateStatDataList = reader.array(reader.u16(), () => read20(reader), 5);
  if (reader.bool())
    data.unk7_0 = reader.u32();
  data.unk8 = reader.u8();
  if (reader.bool())
    data.unk10_0 = reader.u8();
  if (reader.bool())
    data.unk12_0 = reader.u32();
  if (reader.bool())
    data.struct_337 = reader.bytes(reader.u16(), 11, 9);
  if (reader.bool())
    data.unk16_0 = reader.u8();
  if (reader.bool())
    data.transitIndex = reader.u32();
  data.typeId = reader.u32();
  if (reader.bool())
    data.unk21_0 = reader.u32();
  data.unk22 = reader.u8();
  if (reader.bool())
    data.unk24_0 = reader.u32();
  data.unk25 = reader.u8();
  data.unk26 = reader.u8();
  data.directionYaw = read38(reader);
  data.objectId = reader.u64();
  if (reader.bool())
    data.unk30_0 = reader.u8();
  if (reader.bool())
    data.unk32_0 = reader.u8();
  if (reader.bool())
    data.unk34_0 = reader.u8();
  data.unk35 = reader.u8();
  if (reader.bool())
    data.unk37_0 = reader.u64();
  data.position = read39(reader);
  data.spawnIndex = reader.u32();
  if (reader.bool())
    data.unk41_0 = reader.u8();
  if (reader.bool())
    data.struct_735 = read37(reader);
  data.unk44 = reader.u8();
  if (reader.bool())
    data.unk46_0 = reader.u16();
  if (reader.bool())
    data.struct_270 = reader.bytes(reader.u16(), 12, 12);
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const F = {};
      F.statType = reader.u8();
      F.value = read19(reader);
      return F;
    },
    153
  );
  data.level = reader.u16();
  return data;
}

// src/packets/generated/definitions/PKTNewNpc.ts
function read41(buf) {
  const reader = new Read(buf);
  const data = {};
  data.unk0 = reader.u8();
  if (reader.bool()) {
    data.unk1_0 = reader.string(20);
    data.unk1_1 = reader.string(20);
  }
  data.npcStruct = read40(reader);
  if (reader.bool())
    data.unk4_0 = reader.u8();
  if (reader.bool())
    data.unk6_0 = reader.u64();
  return data;
}
var name18 = "PKTNewNpc";
var opcode18 = 17051;

// src/packets/generated/definitions/PKTNewNpcSummon.ts
function read42(buf) {
  const reader = new Read(buf);
  const data = {};
  data.npcData = read40(reader);
  reader.skip(12);
  data.ownerId = reader.u64();
  reader.skip(23);
  data.publishReason = reader.u8();
  return data;
}
var name19 = "PKTNewNpcSummon";
var opcode19 = 9395;

// src/packets/generated/structures/TrackMoveInfo.ts
function read43(reader) {
  const data = {};
  data.unk0 = reader.u32();
  if (reader.bool())
    data.unk2_0 = reader.bytes(12);
  data.unk3 = reader.u32();
  data.unk4 = reader.bytes(12);
  return data;
}

// src/packets/generated/structures/PCStruct.ts
function read44(reader) {
  const data = {};
  if (reader.bool())
    data.grabbedData = reader.bytes(12);
  data.guildName = reader.string(20);
  data.characterId = reader.u64();
  data.avatarHide = reader.u8();
  data.position = read39(reader);
  data.unk7_m = reader.u32();
  data.level = reader.u16();
  data.unk4_m = reader.u32();
  data.heading = read38(reader);
  data.worldId = reader.u8();
  data.addonSkillFeatureList = reader.array(
    reader.u16(),
    () => {
      const H = {};
      H.addonSkillFeatureIdList = reader.array(reader.u16(), () => reader.u32(), 5);
      H.skillId = reader.u32();
      return H;
    },
    200
  );
  data.guildId = reader.u64();
  data.avgItemLevel = reader.f32();
  data.equipLifeToolDataList = reader.array(reader.u16(), () => read12(reader), 9);
  data.unk15 = reader.u64();
  data.name = reader.string(20);
  data.addonFeatureIdList = reader.bytes(reader.u16(), 200, 4);
  data.statusEffectDatas = reader.array(reader.u16(), () => read18(reader), 80);
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const M = {};
      M.statType = reader.u8();
      M.value = read19(reader);
      return M;
    },
    153
  );
  data.unk23_m = reader.u8();
  data.secondHonorTitleId = reader.u16();
  data.unk0_m = reader.bytes(5);
  data.unk23 = reader.u32();
  data.unk1_m = reader.u8();
  data.unk45_m = reader.u32();
  data.playerId = reader.u64();
  data.lookData = reader.bytes(reader.u32(), 512);
  data.unk5_m = reader.u32();
  data.firstHonorTitleId = reader.u16();
  data.periodUpdateStatDataList = reader.array(reader.u16(), () => read20(reader), 5);
  data.unk31 = reader.u8();
  data.unk2_m = reader.u8();
  data.unk33 = reader.u32();
  data.unk17_m = reader.u8();
  data.equipItemDataList = reader.array(reader.u16(), () => read12(reader), 33);
  data.unk36 = reader.u32();
  data.rvRLevel = reader.u16();
  data.maxItemLevel = reader.f32();
  data.unk25_m = reader.u8();
  data.petId = reader.u32();
  data.unk32_m = reader.u8();
  data.identityData = reader.bytes(25);
  data.unk29_m = reader.u8();
  data.unk44 = reader.u8();
  data.classId = reader.u16();
  data.unk46 = reader.u8();
  return data;
}

// src/packets/generated/definitions/PKTNewPC.ts
function read45(buf) {
  const reader = new Read(buf);
  const data = {};
  if (reader.bool())
    data.unk5_0_m = reader.bytes(20);
  if (reader.bool()) {
    data.unk1_0 = reader.u64();
    data.unk1_1 = reader.u32();
    data.itemTint = reader.bytes(reader.u16(), 5, 14);
  }
  if (reader.bool())
    data.unk4_0_m = reader.bytes(12);
  data.unk0_m = reader.u8();
  if (reader.bool())
    data.trackMoveInfo = read43(reader);
  if (reader.bool())
    data.unk3_0_m = reader.u32();
  data.unk2_m = reader.u8();
  data.pcStruct = read44(reader);
  if (reader.bool()) {
    data.struct_61 = reader.array(
      reader.u16(),
      () => {
        const P = {};
        P.itemTint = reader.bytes(reader.u16(), 5, 14);
        P.unk1_0_1 = reader.u32();
        P.unk1_0_2 = reader.u64();
        return P;
      },
      5
    );
  }
  return data;
}
var name20 = "PKTNewPC";
var opcode20 = 7231;

// src/packets/common/TripodLevel.ts
function read46(reader, version = 0) {
  return {
    first: reader.u16(),
    second: reader.u16(),
    third: reader.u16()
  };
}

// src/packets/common/TripodIndex.ts
function read47(reader, version = 0) {
  return {
    first: reader.u8(),
    second: reader.u8(),
    third: reader.u8()
  };
}

// src/packets/generated/structures/ProjectileInfo.ts
function read48(reader) {
  const data = {};
  data.unk0 = reader.u32();
  data.tripodLevel = read46(reader);
  data.chainSkillEffect = reader.u32();
  data.unk3 = reader.u32();
  data.unk4 = reader.u64();
  data.unk5 = reader.u32();
  data.ownerId = reader.u64();
  data.unk7 = reader.u8();
  data.unk8 = reader.u16();
  data.skillEffect = reader.u32();
  if (reader.bool())
    data.struct_337 = reader.bytes(reader.u16(), 11, 9);
  data.skillId = reader.u32();
  data.tripodIndex = read47(reader);
  data.projectileId = reader.u64();
  data.skillLevel = reader.u8();
  data.targetObjectId = reader.u64();
  data.unk17 = reader.u16();
  data.unk18 = reader.u8();
  if (reader.bool())
    data.unk20_0 = reader.u32();
  if (reader.bool())
    data.unk22_0 = reader.u64();
  data.unk23 = reader.u64();
  return data;
}

// src/packets/generated/definitions/PKTNewProjectile.ts
function read49(buf) {
  const reader = new Read(buf);
  const data = {};
  data.projectileInfo = read48(reader);
  return data;
}
var name21 = "PKTNewProjectile";
var opcode21 = 1647;

// src/packets/generated/structures/TrapData.ts
function read50(reader) {
  const data = {};
  data.ownerId = reader.u64();
  data.skillId = reader.u32();
  data.position = read39(reader);
  data.unk3 = reader.u16();
  data.unk4 = reader.u32();
  data.unk5 = reader.u8();
  data.skillEffect = reader.u32();
  data.objectId = reader.u64();
  data.unk8 = reader.u32();
  data.unk9 = reader.u8();
  data.unk10 = reader.u32();
  data.unk11 = reader.u8();
  if (reader.bool())
    data.struct_337 = reader.bytes(reader.u16(), 11, 9);
  return data;
}

// src/packets/generated/definitions/PKTNewTrap.ts
function read51(buf) {
  const reader = new Read(buf);
  const data = {};
  data.unk0 = reader.u8();
  data.trapData = read50(reader);
  data.unk2 = reader.u8();
  return data;
}
var name22 = "PKTNewTrap";
var opcode22 = 10128;

// src/packets/generated/definitions/PKTParalyzationStateNotify.ts
function read52(buf) {
  const reader = new Read(buf);
  const data = {};
  data.paralyzationPoint = reader.u32();
  data.decreasePoint = reader.u32();
  reader.skip(1);
  data.noHitCheckTime = reader.u32();
  reader.skip(1);
  data.enable = reader.bool();
  data.objectId = reader.u64();
  data.hitCheckTime = reader.u32();
  data.paralyzationMaxPoint = reader.u32();
  return data;
}
var name23 = "PKTParalyzationStateNotify";
var opcode23 = 2363;

// src/packets/generated/structures/PartyMemberData.ts
function read53(reader) {
  const data = {};
  data.unk0 = reader.u8();
  data.zoneInstId = reader.u64();
  data.name = reader.string(20);
  data.characterLevel = reader.u16();
  data.maxHp = read19(reader);
  data.gearLevel = reader.f32();
  data.characterId = reader.u64();
  data.position = read39(reader);
  data.auths = reader.u8();
  data.unk9 = reader.u8();
  data.curHp = read19(reader);
  data.worldId = reader.u8();
  data.unk12 = reader.u8();
  data.unk13 = reader.u8();
  data.unk14 = reader.u8();
  data.partyMemberNumber = reader.u8();
  data.zoneId = reader.u32();
  data.unk17 = reader.u16();
  data.transitIndex = reader.u32();
  data.classId = reader.u16();
  return data;
}

// src/packets/generated/definitions/PKTPartyInfo.ts
function read54(buf) {
  const reader = new Read(buf);
  const data = {};
  data.partyInstanceId = reader.u32();
  data.raidInstanceId = reader.u32();
  data.partyLootType = reader.u8();
  data.lootGrade = reader.u32();
  data.partyType = reader.u8();
  data.memberDatas = reader.array(reader.u16(), () => read53(reader), 40);
  return data;
}
var name24 = "PKTPartyInfo";
var opcode24 = 941;

// src/packets/generated/definitions/PKTPartyLeaveResult.ts
function read55(buf) {
  const reader = new Read(buf);
  const data = {};
  data.partyInstanceId = reader.u32();
  data.partyLeaveType = reader.u8();
  data.name = reader.string(20);
  return data;
}
var name25 = "PKTPartyLeaveResult";
var opcode25 = 28645;

// src/packets/generated/definitions/PKTPartyPassiveStatusEffectAddNotify.ts
function read56(buf) {
  const reader = new Read(buf);
  const data = {};
  data.unk0_m = reader.u8();
  data.objectId = reader.u64();
  data.passiveStatusEffectList = reader.array(reader.u16(), () => reader.u32(), 10);
  return data;
}
var name26 = "PKTPartyPassiveStatusEffectAddNotify";
var opcode26 = 44618;

// src/packets/generated/definitions/PKTPartyPassiveStatusEffectRemoveNotify.ts
function read57(buf) {
  const reader = new Read(buf);
  const data = {};
  data.objectId = reader.u64();
  data.passiveStatusEffectList = reader.array(reader.u16(), () => reader.u32(), 10);
  return data;
}
var name27 = "PKTPartyPassiveStatusEffectRemoveNotify";
var opcode27 = 21010;

// src/packets/generated/definitions/PKTPartyStatusEffectAddNotify.ts
function read58(buf) {
  const reader = new Read(buf);
  const data = {};
  data.unk0 = reader.u64();
  data.characterId = reader.u64();
  data.playerIdOnRefresh = reader.u64();
  data.unk3 = reader.u8();
  data.statusEffectDatas = reader.array(reader.u16(), () => read18(reader), 80);
  return data;
}
var name28 = "PKTPartyStatusEffectAddNotify";
var opcode28 = 29227;

// src/packets/generated/definitions/PKTPartyStatusEffectRemoveNotify.ts
function read59(buf) {
  const reader = new Read(buf);
  const data = {};
  data.characterId = reader.u64();
  data.statusEffectIds = reader.array(reader.u16(), () => reader.u32(), 80);
  data.reason = reader.u8();
  data.unk3 = reader.u64();
  return data;
}
var name29 = "PKTPartyStatusEffectRemoveNotify";
var opcode29 = 52833;

// src/packets/generated/definitions/PKTPartyStatusEffectResultNotify.ts
function read60(buf) {
  const reader = new Read(buf);
  const data = {};
  reader.skip(1);
  data.raidInstanceId = reader.u32();
  reader.skip(21);
  data.partyInstanceId = reader.u32();
  data.characterId = reader.u64();
  reader.skip(4);
  return data;
}
var name30 = "PKTPartyStatusEffectResultNotify";
var opcode30 = 58067;

// src/packets/generated/definitions/PKTPassiveStatusEffectAddNotify.ts
function read61(buf) {
  const reader = new Read(buf);
  const data = {};
  data.passiveStatusEffectList = reader.array(reader.u16(), () => reader.u32(), 10);
  return data;
}
var name31 = "PKTPassiveStatusEffectAddNotify";
var opcode31 = 50673;

// src/packets/generated/definitions/PKTPassiveStatusEffectRemoveNotify.ts
function read62(buf) {
  const reader = new Read(buf);
  const data = {};
  data.passiveStatusEffectList = reader.array(reader.u16(), () => reader.u32(), 10);
  return data;
}
var name32 = "PKTPassiveStatusEffectRemoveNotify";
var opcode32 = 5480;

// src/packets/generated/definitions/PKTRaidBegin.ts
function read63(buf) {
  const reader = new Read(buf);
  const data = {};
  data.initBraveHeartCount = reader.u8();
  data.unk0_m = reader.bool();
  data.unk4_m = reader.u64();
  data.unk5_m = reader.u64();
  data.raidResult = reader.u8();
  data.unk1_m = reader.bool();
  data.startTick = reader.u64();
  data.unk6_m = reader.u64();
  data.unk11_m = reader.bool();
  data.totalTime = reader.u64();
  data.bossKillDataList = reader.array(reader.u16(), () => read28(reader), 3);
  data.braveHeartCount = reader.u8();
  data.raidId = reader.u32();
  data.endTick = reader.u64();
  return data;
}
var name33 = "PKTRaidBegin";
var opcode33 = 26077;

// src/packets/generated/definitions/PKTRaidBossKillNotify.ts
function read64(buf) {
  const reader = new Read(buf);
  const data = {};
  reader.skip(1);
  data.typeId = reader.u32();
  reader.skip(2);
  return data;
}
var name34 = "PKTRaidBossKillNotify";
var opcode34 = 33189;

// src/packets/generated/definitions/PKTRaidResult.ts
function read65(buf) {
  const reader = new Read(buf);
  const data = {};
  data.unk0 = reader.u64();
  data.unk1 = reader.u64();
  data.unk2 = reader.u8();
  data.unk3 = reader.u64();
  data.unk4 = reader.u8();
  data.struct_52 = reader.array(
    reader.u16(),
    () => {
      const Y = {};
      Y.unk1_0_0 = read19(reader);
      Y.unk1_0_1 = read19(reader);
      Y.struct_530 = reader.bytes(reader.u16(), 3);
      Y.unk1_0_3 = reader.u32();
      return Y;
    },
    3
  );
  data.raidResult = reader.u8();
  data.unk7 = reader.u64();
  return data;
}
var name35 = "PKTRaidResult";
var opcode35 = 29676;

// src/packets/generated/structures/UnpublishObject.ts
function read66(reader) {
  const data = {};
  data.objectId = reader.u64();
  data.unpublishReason = reader.u8();
  return data;
}

// src/packets/generated/definitions/PKTRemoveObject.ts
function read67(buf) {
  const reader = new Read(buf);
  const data = {};
  data.unpublishedObjects = reader.array(reader.u16(), () => read66(reader), 200);
  return data;
}
var name36 = "PKTRemoveObject";
var opcode36 = 36542;

// src/packets/generated/definitions/PKTSkillCancelNotify.ts
function read68(buf) {
  const reader = new Read(buf);
  const data = {};
  reader.skip(1);
  data.skillId = reader.u32();
  data.newDirectionYaw = read38(reader);
  data.cancelReason = reader.u8();
  data.caster = reader.u64();
  reader.skip(1);
  data.newPosition = read39(reader);
  return data;
}
var name37 = "PKTSkillCancelNotify";
var opcode37 = 54544;

// src/packets/generated/definitions/PKTSkillCastNotify.ts
function read69(buf) {
  const reader = new Read(buf);
  const data = {};
  reader.skip(1);
  data.skillId = reader.u32();
  reader.skip(2);
  data.caster = reader.u64();
  data.skillLevel = reader.u8();
  return data;
}
var name38 = "PKTSkillCastNotify";
var opcode38 = 30918;

// src/packets/common/SkillMoveOptionData.ts
function read70(reader, version = 0) {
  const data = {};
  const flag = reader.u8();
  if (flag & 1)
    data.moveTime = reader.u32();
  if (flag & 2)
    data.standUpTime = reader.u32();
  if (flag & 4)
    data.downTime = reader.u32();
  if (flag & 8)
    data.freezeTime = reader.u32();
  if (flag & 16)
    data.moveHeight = reader.u32();
  if (flag & 32)
    data.farmostDist = reader.u32();
  if (flag & 64)
    data.flag40 = reader.bytes(reader.u16(), 6);
  return data;
}

// src/packets/generated/structures/SkillDamageEvent.ts
function read71(reader) {
  const data = {};
  data.unk3_m = reader.u16();
  data.damageType = reader.u8();
  data.maxHp = read19(reader);
  data.modifier = reader.u8();
  if (reader.bool())
    data.damageAttr = reader.u8();
  data.curHp = read19(reader);
  data.damage = read19(reader);
  data.targetId = reader.u64();
  return data;
}

// src/packets/generated/structures/SkillDamageAbnormalMoveEvent.ts
function read72(reader) {
  const data = {};
  data.skillMoveOptionData = read70(reader);
  data.unk8_m = reader.u16();
  data.position = read39(reader);
  data.unk4_m = reader.u16();
  data.unk1_m = reader.u8();
  data.unk3_m = reader.u16();
  data.destination = read39(reader);
  data.skillDamageEvent = read71(reader);
  data.unk2_m = reader.u64();
  return data;
}

// src/packets/generated/definitions/PKTSkillDamageAbnormalMoveNotify.ts
function read73(buf) {
  const reader = new Read(buf);
  const data = {};
  data.unk2_m = reader.u32();
  data.unk1_m = reader.u8();
  data.skillDamageAbnormalMoveEvents = reader.array(reader.u16(), () => read72(reader), 50);
  data.sourceId = reader.u64();
  data.skillEffectId = reader.u32();
  data.skillId = reader.u32();
  return data;
}
var name39 = "PKTSkillDamageAbnormalMoveNotify";
var opcode39 = 24311;

// src/packets/generated/definitions/PKTSkillDamageNotify.ts
function read74(buf) {
  const reader = new Read(buf);
  const data = {};
  if (reader.bool())
    data.unk1_0 = reader.u32();
  if (reader.bool())
    data.skillEffectId = reader.u32();
  data.sourceId = reader.u64();
  data.skillLevel = reader.u8();
  data.skillId = reader.u32();
  data.skillDamageEvents = reader.array(reader.u16(), () => read71(reader), 50);
  return data;
}
var name40 = "PKTSkillDamageNotify";
var opcode40 = 28204;

// src/packets/generated/definitions/PKTSkillStageNotify.ts
function read75(buf) {
  const reader = new Read(buf);
  const data = {};
  data.stage = reader.u8();
  reader.skip(4);
  data.skillId = reader.u32();
  reader.skip(16);
  data.sourceId = reader.u64();
  reader.skip(19);
  return data;
}
var name41 = "PKTSkillStageNotify";
var opcode41 = 18388;

// src/packets/common/SkillOptionData.ts
function read76(reader, version = 0) {
  const data = {};
  const flag = reader.u8();
  if (flag & 1)
    data.layerIndex = reader.u8();
  if (flag & 2)
    data.startStageIndex = reader.u8();
  if (flag & 4)
    data.transitIndex = reader.u32();
  if (flag & 8)
    data.stageStartTime = reader.u32();
  if (flag & 16)
    data.farmostDistance = reader.u32();
  if (flag & 32)
    data.tripodIndex = read47(reader);
  if (flag & 64)
    data.tripodLevel = read46(reader);
  return data;
}

// src/packets/generated/definitions/PKTSkillStartNotify.ts
function read77(buf) {
  const reader = new Read(buf);
  const data = {};
  if (reader.bool())
    data.pitchRotation = read38(reader);
  data.newDirectionYaw = read38(reader);
  data.curPosition = read39(reader);
  data.sourceId = reader.u64();
  if (reader.bool())
    data.unk1_m = reader.u32();
  data.curDirectionYaw = read38(reader);
  data.skillId = reader.u32();
  data.skillLevel = reader.u8();
  data.skillOptionData = read76(reader);
  data.aimTargetPosition = read39(reader);
  data.newPosition = read39(reader);
  if (reader.bool())
    data.aiStateId = reader.u32();
  return data;
}
var name42 = "PKTSkillStartNotify";
var opcode42 = 12220;

// src/packets/generated/definitions/PKTStatChangeOriginNotify.ts
function read78(buf) {
  const reader = new Read(buf);
  const data = {};
  data.objectId = reader.u64();
  data.unk1 = reader.array(
    reader.u16(),
    () => {
      const a = {};
      a.statType = reader.u8();
      a.value = read19(reader);
      return a;
    },
    153
  );
  data.unk2 = reader.u8();
  data.unk3 = reader.array(
    reader.u16(),
    () => {
      const b = {};
      b.statType = reader.u8();
      b.value = read19(reader);
      return b;
    },
    153
  );
  if (reader.bool())
    data.unk5_0 = reader.u32();
  return data;
}
var name43 = "PKTStatChangeOriginNotify";
var opcode43 = 26564;

// src/packets/generated/definitions/PKTStatusEffectAddNotify.ts
function read79(buf) {
  const reader = new Read(buf);
  const data = {};
  data.objectId = reader.u64();
  data.unk1 = reader.u64();
  if (reader.bool())
    data.unk3_0 = reader.u64();
  data.new = reader.bool();
  data.statusEffectData = read18(reader);
  return data;
}
var name44 = "PKTStatusEffectAddNotify";
var opcode44 = 50563;

// src/packets/generated/definitions/PKTStatusEffectRemoveNotify.ts
function read80(buf) {
  const reader = new Read(buf);
  const data = {};
  data.reason = reader.u8();
  data.objectId = reader.u64();
  data.statusEffectIds = reader.array(reader.u16(), () => reader.u32(), 80);
  return data;
}
var name45 = "PKTStatusEffectRemoveNotify";
var opcode45 = 39777;

// src/packets/generated/definitions/PKTStatusEffectDurationNotify.ts
function read81(buf) {
  const reader = new Read(buf);
  const data = {};
  data.targetId = reader.u64();
  data.expirationTick = reader.u64();
  reader.skip(1);
  data.effectInstanceId = reader.u32();
  reader.skip(1);
  return data;
}
var name46 = "PKTStatusEffectDurationNotify";
var opcode46 = 50833;

// src/packets/generated/definitions/PKTStatusEffectSyncDataNotify.ts
function read82(buf) {
  const reader = new Read(buf);
  const data = {};
  data.value = reader.u32();
  reader.skip(4);
  data.objectId = reader.u64();
  reader.skip(1);
  data.characterId = reader.u64();
  data.effectInstanceId = reader.u32();
  return data;
}
var name47 = "PKTStatusEffectSyncDataNotify";
var opcode47 = 25745;

// src/packets/generated/definitions/PKTTriggerBossBattleStatus.ts
function read83(buf) {
  const reader = new Read(buf);
  const data = {};
  data.unk2_m = reader.bool();
  reader.skip(1);
  data.step = reader.u32();
  data.triggerId = reader.u32();
  return data;
}
var name48 = "PKTTriggerBossBattleStatus";
var opcode48 = 55703;

// src/packets/generated/definitions/PKTTriggerFinishNotify.ts
function read84(buf) {
  const reader = new Read(buf);
  const data = {};
  data.involvedPCs = reader.array(reader.u16(), () => reader.u64(), 40);
  data.triggerId = reader.u32();
  data.unk0_m = reader.u32();
  data.packetResultCode = reader.u32();
  return data;
}
var name49 = "PKTTriggerFinishNotify";
var opcode49 = 33396;

// src/packets/generated/definitions/PKTTriggerStartNotify.ts
function read85(buf) {
  const reader = new Read(buf);
  const data = {};
  data.involvedPCs = reader.array(reader.u16(), () => reader.u64(), 40);
  data.triggerSignalType = reader.u32();
  data.triggerId = reader.u32();
  data.sourceId = reader.u64();
  return data;
}
var name50 = "PKTTriggerStartNotify";
var opcode50 = 40913;

// src/packets/generated/definitions/PKTTroopMemberUpdateMinNotify.ts
function read86(buf) {
  const reader = new Read(buf);
  const data = {};
  data.unk0_m = reader.u32();
  data.position = reader.u64();
  data.maxHp = read19(reader);
  data.curHp = read19(reader);
  data.characterId = reader.u64();
  data.statusEffectDatas = reader.array(reader.u16(), () => read18(reader), 80);
  return data;
}
var name51 = "PKTTroopMemberUpdateMinNotify";
var opcode51 = 16583;

// src/packets/generated/definitions/PKTIdentityGaugeChangeNotify.ts
function read87(buf) {
  const reader = new Read(buf);
  const data = {};
  reader.skip(2);
  data.identityGauge1 = reader.u32();
  data.identityGauge2 = reader.u32();
  data.identityGauge3 = reader.u32();
  data.playerId = reader.u64();
  return data;
}
var name52 = "PKTIdentityGaugeChangeNotify";
var opcode52 = 1029;

// src/packets/generated/definitions/PKTZoneMemberLoadStatusNotify.ts
function read88(buf) {
  const reader = new Read(buf);
  const data = {};
  data.firstPCEnterTick = reader.u64();
  data.zoneInstId = reader.u64();
  data.loadComplete = reader.bool();
  data.totalMembers = reader.array(reader.u16(), () => reader.u64(), 40);
  data.zoneId = reader.u32();
  data.zoneLevel = reader.u8();
  data.completeMembers = reader.array(reader.u16(), () => reader.u64(), 40);
  return data;
}
var name53 = "PKTZoneMemberLoadStatusNotify";
var opcode53 = 25608;

// src/packets/generated/definitions/PKTZoneObjectUnpublishNotify.ts
function read89(buf) {
  const reader = new Read(buf);
  const data = {};
  data.objectId = reader.u64();
  reader.skip(3);
  return data;
}
var name54 = "PKTZoneObjectUnpublishNotify";
var opcode54 = 51409;

// src/packets/generated/structures/ZoneStatusEffectData.ts
function read90(reader) {
  const data = {};
  data.target = reader.u8();
  reader.skip(4);
  data.instanceId = reader.u32();
  data.id = reader.u32();
  data.stackCount = reader.u8();
  return data;
}

// src/packets/generated/definitions/PKTZoneStatusEffectAddNotify.ts
function read91(buf) {
  const reader = new Read(buf);
  const data = {};
  data.zoneStatusEffectDataList = reader.array(reader.u16(), () => read90(reader), 4);
  return data;
}
var name55 = "PKTZoneStatusEffectAddNotify";
var opcode55 = 16635;

// src/packets/generated/definitions/PKTZoneStatusEffectRemoveNotify.ts
function read92(buf) {
  const reader = new Read(buf);
  const data = {};
  data.statusEffectId = reader.u32();
  reader.skip(2);
  return data;
}
var name56 = "PKTZoneStatusEffectRemoveNotify";
var opcode56 = 43975;

// src/packets/generated/mapping.ts
var mapping = /* @__PURE__ */ new Map([
  [opcode, [name, read]],
  [opcode2, [name2, read3]],
  [opcode3, [name3, read5]],
  [
    opcode4,
    [name4, read6]
  ],
  [opcode5, [name5, read7]],
  [opcode6, [name6, read8]],
  [opcode7, [name7, read9]],
  [opcode8, [name8, read10]],
  [opcode9, [name9, read13]],
  [opcode10, [name10, read14]],
  [opcode11, [name11, read15]],
  [opcode12, [name12, read16]],
  [opcode13, [name13, read17]],
  [opcode14, [name14, read21]],
  [opcode15, [name15, read33]],
  [opcode16, [name16, read35]],
  [opcode17, [name17, read36]],
  [opcode18, [name18, read41]],
  [opcode19, [name19, read42]],
  [opcode20, [name20, read45]],
  [opcode21, [name21, read49]],
  [opcode22, [name22, read51]],
  [opcode23, [name23, read52]],
  [opcode24, [name24, read54]],
  [opcode25, [name25, read55]],
  [
    opcode26,
    [name26, read56]
  ],
  [
    opcode27,
    [name27, read57]
  ],
  [opcode28, [name28, read58]],
  [
    opcode29,
    [name29, read59]
  ],
  [
    opcode30,
    [name30, read60]
  ],
  [
    opcode31,
    [name31, read61]
  ],
  [
    opcode32,
    [name32, read62]
  ],
  [opcode33, [name33, read63]],
  [opcode34, [name34, read64]],
  [opcode35, [name35, read65]],
  [opcode36, [name36, read67]],
  [opcode37, [name37, read68]],
  [opcode38, [name38, read69]],
  [
    opcode39,
    [name39, read73]
  ],
  [opcode40, [name40, read74]],
  [opcode41, [name41, read75]],
  [opcode42, [name42, read77]],
  [opcode43, [name43, read78]],
  [opcode44, [name44, read79]],
  [opcode45, [name45, read80]],
  [opcode46, [name46, read81]],
  [opcode47, [name47, read82]],
  [opcode48, [name48, read83]],
  [opcode49, [name49, read84]],
  [opcode50, [name50, read85]],
  [opcode51, [name51, read86]],
  [opcode52, [name52, read87]],
  [opcode53, [name53, read88]],
  [opcode54, [name54, read89]],
  [opcode55, [name55, read91]],
  [
    opcode56,
    [name56, read92]
  ]
]);

// src/pkt-stream.ts
var PKTStream = class extends import_tiny_typed_emitter.TypedEmitter {
  #decompressor;
  constructor(decompressor) {
    super();
    this.#decompressor = decompressor;
  }
  /**
   * @returns `false` if packet is malformed
   */
  read(buf) {
    try {
      if (buf.length < 8)
        return false;
      const xor = buf.readUInt8(7);
      if (xor > 2)
        return false;
      const compression = buf.readUInt8(6);
      if (compression > 3)
        return false;
      const data = buf.subarray(8);
      const opcode57 = buf.readUInt16LE(4);
      const pkt = mapping.get(opcode57);
      if (pkt) {
        const [name57, read93] = pkt;
        this.emit(
          name57,
          new PKT(Buffer.from(data), opcode57, compression, Boolean(xor), this.#decompressor, read93)
        );
      }
      this.emit("*", data, opcode57, compression, Boolean(xor));
    } catch (e) {
      return false;
    }
  }
};
var PKT = class {
  #data;
  #opcode;
  #compression;
  #xor;
  #decompressor;
  #read;
  constructor(data, opcode57, compression, xor, decompressor, read93) {
    this.#data = data;
    this.#opcode = opcode57;
    this.#compression = compression;
    this.#xor = xor;
    this.#decompressor = decompressor;
    this.#read = read93;
  }
  // in case we listen for it more than once
  #cached;
  get parsed() {
    if (!this.#cached) {
      try {
        this.#cached = this.#read(this.#decompressor.decrypt(this.#data, this.#opcode, this.#compression, this.#xor));
      } catch (e) {
        console.error(`[meter-core/pkt-stream] - ${e}`);
        return void 0;
      }
    }
    return this.#cached;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  PKT,
  PKTStream
});
