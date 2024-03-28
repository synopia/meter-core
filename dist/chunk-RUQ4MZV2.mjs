// src/pkt-stream.ts
import { TypedEmitter } from "tiny-typed-emitter";

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
var Write = class {
  /** Buffer */
  b;
  /** Offset */
  o;
  constructor(max = 65535) {
    this.b = Buffer.allocUnsafe(max);
    this.o = 0;
  }
  get value() {
    return this.b.subarray(0, this.o);
  }
  skip(length = 0) {
    this.o += length;
  }
  bool(value = false) {
    this.u8(value ? 1 : 0);
    return value;
  }
  u8(value = 0) {
    this.b.writeUInt8(value, this.o++);
  }
  i8(value = 0) {
    this.b.writeInt8(value, this.o++);
  }
  u16(value = 0) {
    this.o = this.b.writeUInt16LE(value, this.o);
  }
  i16(value = 0) {
    this.o = this.b.writeInt16LE(value, this.o);
  }
  u32(value = 0) {
    this.o = this.b.writeUInt32LE(value, this.o);
  }
  i32(value = 0) {
    this.o = this.b.writeInt32LE(value, this.o);
  }
  f32(value = 0) {
    this.o = this.b.writeFloatLE(value, this.o);
  }
  u64(value = 0n) {
    this.o = this.b.writeBigUInt64LE(BigInt(value), this.o);
  }
  i64(value = 0n) {
    this.o = this.b.writeBigInt64LE(BigInt(value), this.o);
  }
  string(value = "", maxLength = 0) {
    this.u16(value.length);
    if (value.length <= maxLength)
      this.o += this.b.write(value, this.o, "utf16le");
  }
  /**
   * @param opts.length Used when Buffer should be fixed length -> no header
   * @param opts.maxLen Used when Buffer has a max number of chunk -> chunk count is written as header
   * @param opts.lenType Required if maxLen, Used to specify header size possible values: ["u8", "u16", "u32"]
   * @param opts.multiplier Default: 1, Used to specify chunk size, Buffer size should be a multiple of multiplier, defaults to 1
   * @param opts If empty, fallback to opts.length = Buffer.length
   */
  bytes(value = Buffer.alloc(0), opts = {}) {
    if (opts.maxLen) {
      const chunkSize = opts.multiplier ?? 1;
      if (value.length % chunkSize)
        throw new Error(
          `Error writing bytes, chunkSize should be a multiple of intut value size, got ${value.length}%${chunkSize}`
        );
      const count = value.length / chunkSize;
      if (count > opts.maxLen)
        throw new Error(`Error writing bytes, input value size exceeded maxLen, got ${count} > ${opts.maxLen}`);
      if (!opts.lenType)
        throw new Error(`Error writing bytes, invalid lenType when writing chunks, got ${opts.lenType}`);
      this[opts.lenType](count);
    } else if (opts.length && value.length !== opts.length) {
      throw new Error(
        `Error writing bytes, input value size doesn't match opts.length, ${value.length} !== ${opts.lenType}`
      );
    }
    this.o += value.copy(this.b, this.o);
  }
  /**
   *
   * @param opts.maxLen Max size of array, size is set to 0 if overflow
   * @param opts.lenTypeUsed to specify header size possible values: ["u8", "u16", "u32"]
   */
  array(value = [], opts, callbackfn) {
    if (value === void 0 || value.length > opts.maxLen) {
      this[opts.lenType](0);
      return;
    }
    this[opts.lenType](value.length);
    value.forEach(callbackfn);
  }
};

// src/packets/generated/definitions/PKTSkillCooldownNotify.ts
function read(buf) {
  const reader = new Read(buf);
  const data = {};
  reader.skip(6);
  data.cooldown2 = reader.f32();
  reader.skip(1);
  data.cooldown1 = reader.f32();
  data.skillId = reader.u32();
  return data;
}
var name = "PKTSkillCooldownNotify";
var opcode = 43413;

// src/packets/generated/structures/AbilityData.ts
function read2(reader) {
  const data = {};
  data.level = reader.u8();
  data.points = reader.u16();
  data.id = reader.u32();
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
var opcode2 = 32675;

// src/packets/generated/structures/ActiveAbility.ts
function read4(reader) {
  const data = {};
  data.featureType = reader.u16();
  data.level = reader.u32();
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
var opcode3 = 1154;

// src/packets/generated/definitions/PKTAddonSkillFeatureChangeNotify.ts
function read6(buf) {
  const reader = new Read(buf);
  const data = {};
  data.addonFeatureIdList = reader.bytes(reader.u16(), 200, 4);
  data.objectId = reader.u64();
  data.addonSkillFeatureList = reader.array(
    reader.u16(),
    () => {
      const c = {};
      c.skillId = reader.u32();
      c.addonSkillFeatureIdList = reader.array(reader.u16(), () => reader.u32(), 5);
      return c;
    },
    200
  );
  return data;
}
var name4 = "PKTAddonSkillFeatureChangeNotify";
var opcode4 = 11929;

// src/packets/generated/definitions/PKTAuthTokenResult.ts
function read7(buf) {
  const reader = new Read(buf);
  const data = {};
  data.packetResultCode = reader.u32();
  data.unk1_m = reader.bytes(reader.u32(), 688);
  return data;
}
var name5 = "PKTAuthTokenResult";
var opcode5 = 34403;

// src/packets/generated/definitions/PKTBlockSkillStateNotify.ts
function read8(buf) {
  const reader = new Read(buf);
  const data = {};
  reader.skip(1);
  data.paralyzationMaxPoint = reader.u32();
  reader.skip(2);
  data.type = reader.u8();
  data.paralyzationPoint = reader.u32();
  data.objectId = reader.u64();
  return data;
}
var name6 = "PKTBlockSkillStateNotify";
var opcode6 = 45172;

// src/packets/generated/definitions/PKTCounterAttackNotify.ts
function read9(buf) {
  const reader = new Read(buf);
  const data = {};
  data.targetId = reader.u64();
  reader.skip(1);
  data.type = reader.u32();
  reader.skip(2);
  data.sourceId = reader.u64();
  return data;
}
var name7 = "PKTCounterAttackNotify";
var opcode7 = 32191;

// src/packets/generated/definitions/PKTDeathNotify.ts
function read10(buf) {
  const reader = new Read(buf);
  const data = {};
  if (reader.bool())
    data.deathType = reader.u8();
  data.durabilityDecrement = reader.u8();
  data.targetId = reader.u64();
  data.effectId = reader.u32();
  if (reader.bool())
    data.damageAttr = reader.u8();
  data.unk2_m = reader.u32();
  if (reader.bool())
    data.abnormalStatusType = reader.u8();
  data.sourceId = reader.u64();
  data.directionYaw = reader.u16();
  data.unk0_m = reader.u64();
  return data;
}
var name8 = "PKTDeathNotify";
var opcode8 = 17693;

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
function dateToBigint(date) {
  let result = 0n;
  result |= BigInt(date.getUTCMilliseconds()) << 38n;
  result |= BigInt(date.getUTCSeconds()) << 32n;
  result |= BigInt(date.getUTCMinutes()) << 26n;
  result |= BigInt(date.getUTCHours()) << 21n;
  result |= BigInt(date.getUTCDate()) << 16n;
  result |= BigInt(date.getUTCMonth() + 1) << 12n;
  result |= BigInt(date.getUTCFullYear() < 2e3 ? date.getUTCFullYear() - 1900 : date.getUTCFullYear());
  return result;
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
function write(writer, date = bigintToDate(0x1181fn)) {
  if (date.getUTCFullYear() >= 2079) {
    writer.u16(Number(dateToBigint(date) & 0xffffn));
  } else
    writer.i64(dateToBigint(date));
}

// src/packets/generated/structures/EquipItemData.ts
function read12(reader) {
  const data = {};
  data.id = reader.u32();
  data.level = reader.u16();
  data.unk2 = reader.u8();
  data.itemTint = reader.bytes(reader.u16(), 5, 14);
  data.slot = reader.u16();
  if (reader.bool())
    data.unk6_0 = reader.u8();
  data.expireTime = read11(reader);
  return data;
}

// src/packets/generated/definitions/PKTEquipChangeNotify.ts
function read13(buf) {
  const reader = new Read(buf);
  const data = {};
  data.objectId = reader.u64();
  data.equipItemDataList = reader.array(reader.u16(), () => read12(reader), 33);
  data.unk2 = reader.u32();
  data.unk3 = reader.u32();
  return data;
}
var name9 = "PKTEquipChangeNotify";
var opcode9 = 53204;

// src/packets/generated/definitions/PKTEquipLifeToolChangeNotify.ts
function read14(buf) {
  const reader = new Read(buf);
  const data = {};
  data.objectId = reader.u64();
  data.equipLifeToolDataList = reader.array(reader.u16(), () => read12(reader), 9);
  return data;
}
var name10 = "PKTEquipLifeToolChangeNotify";
var opcode10 = 51254;

// src/packets/generated/definitions/PKTIdentityStanceChangeNotify.ts
function read15(buf) {
  const reader = new Read(buf);
  const data = {};
  data.stance = reader.u8();
  reader.skip(1);
  data.objectId = reader.u64();
  reader.skip(2);
  return data;
}
var name11 = "PKTIdentityStanceChangeNotify";
var opcode11 = 17838;

// src/packets/generated/definitions/PKTInitAbility.ts
function read16(buf) {
  const reader = new Read(buf);
  const data = {};
  data.abilityDataList = reader.array(reader.u16(), () => read2(reader), 100);
  data.struct_137 = reader.bytes(reader.u16(), 353, 48);
  return data;
}
var name12 = "PKTInitAbility";
var opcode12 = 53450;

// src/packets/generated/definitions/PKTInitEnv.ts
function read17(buf) {
  const reader = new Read(buf);
  const data = {};
  data.unk0 = reader.u32();
  data.unk1 = reader.u8();
  data.unk2 = reader.u32();
  data.struct_595 = reader.string(128);
  data.playerId = reader.u64();
  data.unk5 = reader.u64();
  data.lostArkDateTime = read11(reader);
  data.struct_30 = reader.array(
    reader.u16(),
    () => {
      const i = {};
      i.struct_578 = reader.string(32);
      i.struct_595 = reader.string(128);
      i.versionString = reader.string(64);
      return i;
    },
    64
  );
  return data;
}
var name13 = "PKTInitEnv";
var opcode13 = 16937;

// src/packets/generated/structures/StatusEffectData.ts
function read18(reader) {
  const data = {};
  data.occurTime = read11(reader);
  data.totalTime = reader.f32();
  data.struct_446 = reader.bytes(reader.u16(), 8, 7);
  data.stackCount = reader.u8();
  data.effectInstanceId = reader.u32();
  if (reader.bool())
    data.value = reader.bytes(16);
  data.skillLevel = reader.u8();
  data.sourceId = reader.u64();
  data.endTick = reader.u64();
  if (reader.bool())
    data.unk11_0 = reader.u64();
  data.statusEffectId = reader.u32();
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
function write2(writer, value = 0n) {
  const tempBuf = Buffer.alloc(8);
  const negative = value < 0n;
  tempBuf.writeBigInt64LE((negative ? -value : value) >> 4n);
  let size = 0;
  for (const [i, byte] of tempBuf.entries()) {
    if (byte != 0)
      size = i + 1;
  }
  if (size > 7)
    throw new Error("Value is too large");
  writer.u8(Number((negative ? -value : value) & 0xfn) << 4 | (size & 7) << 1 | (negative ? 1 : 0));
  writer.bytes(tempBuf.subarray(0, size), { length: size });
}

// src/packets/generated/structures/PeriodUpdateStatData.ts
function read20(reader) {
  const data = {};
  data.unk0 = reader.u8();
  data.unk1 = reader.u8();
  data.unk2 = read19(reader);
  data.unk3 = reader.u8();
  data.unk4 = reader.u64();
  data.unk5 = reader.u16();
  data.unk6 = read19(reader);
  return data;
}

// src/packets/generated/definitions/PKTInitPC.ts
function read21(buf) {
  const reader = new Read(buf);
  const data = {};
  data.unk0 = reader.u32();
  data.gearLevel = reader.f32();
  data.unk2 = reader.u32();
  data.unk3 = reader.u8();
  data.unk4 = reader.u64();
  data.struct_341 = reader.string(7);
  data.characterId = reader.u64();
  data.unk7 = reader.u8();
  data.unk8 = reader.u8();
  data.unk9 = reader.u8();
  data.unk10 = reader.u8();
  data.level = reader.u16();
  data.unk12 = reader.u16();
  data.unk13 = reader.u8();
  data.playerId = reader.u64();
  data.unk15 = reader.u32();
  data.unk16 = reader.u32();
  data.unk17 = reader.u16();
  data.unk18 = reader.u8();
  if (reader.bool())
    data.unk20_0 = reader.u32();
  data.unk21 = reader.bytes(120);
  data.unk22 = reader.u8();
  data.unk23 = reader.u32();
  data.unk24 = reader.u8();
  data.name = reader.string(20);
  data.unk26 = reader.u64();
  data.unk27 = reader.u8();
  data.struct_105 = reader.bytes(reader.u16(), 64);
  data.unk29 = reader.bytes(25);
  data.classId = reader.u16();
  data.unk31 = reader.u32();
  data.unk32 = reader.u32();
  data.unk33 = reader.u8();
  data.struct_230 = reader.bytes(reader.u16(), 3, 17);
  data.unk35 = reader.u64();
  data.unk36 = reader.u8();
  data.statusEffectDatas = reader.array(reader.u16(), () => read18(reader), 80);
  data.unk38 = reader.u64();
  data.unk39 = reader.u8();
  data.unk40 = reader.u16();
  data.unk41 = reader.u8();
  data.periodUpdateStatDataList = reader.array(reader.u16(), () => read20(reader), 5);
  data.unk43 = reader.u64();
  data.unk44 = reader.u8();
  data.unk45 = reader.u8();
  data.unk46 = reader.u8();
  data.unk47 = reader.u32();
  data.unk48 = reader.u8();
  data.unk49 = reader.u16();
  data.unk50 = reader.u8();
  data.unk51 = reader.u32();
  data.struct_345 = reader.bytes(reader.u16(), 104, 30);
  data.unk53 = reader.u32();
  data.unk54 = reader.u8();
  data.unk55 = reader.bytes(35);
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
  data.unk57 = reader.u32();
  return data;
}
var name14 = "PKTInitPC";
var opcode14 = 17550;

// src/packets/generated/structures/Struct_147.ts
function read22(reader) {
  const data = {};
  const unk0 = reader.u16();
  if (unk0 === 1)
    data.unk1_0 = reader.bytes(unk0);
  return data;
}

// src/packets/generated/structures/Struct_658.ts
function read23(reader) {
  const data = {};
  data.unk0 = reader.u8();
  data.unk1 = reader.u8();
  data.unk2 = reader.u32();
  data.unk3 = reader.u32();
  data.unk4 = reader.u8();
  data.struct_147 = read22(reader);
  data.unk6 = reader.u8();
  data.struct_148 = reader.bytes(reader.u16(), 3, 9);
  return data;
}

// src/packets/generated/structures/Struct_665.ts
function read24(reader) {
  const data = {};
  data.unk0 = reader.u16();
  data.unk1 = reader.u32();
  data.unk2 = reader.u32();
  data.unk3 = reader.u32();
  data.unk4 = reader.u32();
  data.struct_241 = reader.bytes(reader.u16(), 10, 18);
  data.struct_263 = reader.bytes(reader.u16(), 2, 9);
  data.unk7 = reader.u8();
  data.struct_149 = reader.bytes(reader.u16(), 10, 9);
  data.struct_397 = reader.bytes(reader.u16(), 2, 10);
  data.unk10 = reader.u64();
  data.unk11 = reader.u32();
  data.struct_239 = reader.array(reader.u16(), () => read23(reader), 3);
  data.unk13 = reader.u32();
  return data;
}

// src/packets/generated/structures/Struct_749.ts
function read25(reader) {
  const data = {};
  data.unk0 = reader.u8();
  data.unk1 = reader.u16();
  data.struct_98 = reader.bytes(reader.u32(), 51);
  data.unk3 = reader.u16();
  data.unk4 = reader.u8();
  data.unk5 = reader.u16();
  data.unk6 = reader.bytes(3);
  data.unk7 = reader.u8();
  return data;
}

// src/packets/generated/structures/Struct_790.ts
function read26(reader) {
  const data = {};
  data.unk0 = reader.u8();
  data.unk1 = reader.bytes(reader.u16(), 7);
  data.unk2 = reader.bytes(reader.u16(), 7);
  if (reader.bool())
    data.struct_749 = read25(reader);
  return data;
}

// src/packets/generated/structures/Struct_664.ts
function read27(reader) {
  const data = {};
  data.struct_440 = reader.bytes(reader.u16(), 3, 10);
  data.unk1 = reader.u8();
  data.unk2 = reader.u32();
  data.struct_274 = reader.bytes(reader.u16(), 3, 21);
  if (reader.bool())
    data.unk5_0 = reader.bytes(10);
  data.unk6 = reader.u32();
  if (reader.bool())
    data.struct_790 = read26(reader);
  data.unk9 = reader.u32();
  data.unk10 = reader.u32();
  data.itemTint = reader.bytes(reader.u16(), 5, 14);
  if (reader.bool())
    data.unk13_0 = reader.bytes(9);
  data.unk14 = reader.u32();
  if (reader.bool()) {
    data.unk1_0 = reader.u32();
    data.struct_197 = reader.bytes(reader.u16(), 5, 30);
    data.unk1_2 = reader.u32();
  }
  data.struct_237 = reader.bytes(reader.u16(), 3, 7);
  if (reader.bool())
    data.struct_234 = reader.bytes(reader.u16(), 2, 32);
  data.struct_276 = reader.bytes(reader.u16(), 10, 29);
  data.unk20 = reader.u32();
  return data;
}

// src/packets/generated/structures/BossKillData.ts
function read28(reader) {
  const data = {};
  data.npcId = reader.u32();
  data.isDead = reader.bool();
  return data;
}

// src/packets/generated/structures/Struct_610.ts
function read29(reader) {
  const data = {};
  data.unk0 = reader.u8();
  data.struct_0 = reader.array(
    reader.u16(),
    () => {
      const o = {};
      o.unk1_0_0 = reader.u32();
      o.struct_525 = reader.bytes(reader.u16(), 10);
      return o;
    },
    3
  );
  data.bossKillDataList = reader.array(reader.u16(), () => read28(reader), 3);
  data.unk3 = reader.u8();
  data.unk4 = reader.u32();
  return data;
}

// src/packets/generated/structures/Struct_657.ts
function read30(reader) {
  const data = {};
  data.unk0 = reader.u8();
  data.struct_23 = reader.array(
    reader.u16(),
    () => {
      const q = {};
      q.unk1_0_0 = reader.u16();
      q.unk1_0_1 = reader.u8();
      q.struct_236 = reader.string(2);
      return q;
    },
    20
  );
  data.struct_237 = reader.bytes(reader.u16(), 3, 7);
  data.struct_511 = reader.bytes(reader.u16(), 5, 7);
  data.unk4 = reader.u8();
  data.unk5 = reader.u8();
  return data;
}

// src/packets/generated/structures/Struct_565.ts
function read31(reader) {
  const data = {};
  const unk0 = reader.u8();
  if (unk0 === 1)
    data.struct_665 = read24(reader);
  if (unk0 === 2) {
    data.unk2_0 = reader.u8();
    data.struct_1 = reader.array(
      reader.u16(),
      () => {
        const m = {};
        m.unk1_0_0 = reader.u32();
        m.unk1_0_1 = reader.u8();
        m.struct_525 = reader.bytes(reader.u16(), 10);
        m.unk1_0_3 = reader.u8();
        return m;
      },
      3
    );
    data.struct_133 = reader.bytes(reader.u16(), 3, 6);
  }
  if (unk0 === 3)
    data.unk3_0 = reader.bytes(26);
  if (unk0 === 4) {
    data.unk4_0 = reader.bytes(reader.u16(), 10, 13);
    data.unk4_1 = reader.bytes(reader.u16(), 10, 13);
    data.unk4_2 = reader.u32();
  }
  if (unk0 === 5)
    data.struct_664 = read27(reader);
  if (unk0 === 6)
    data.struct_610 = read29(reader);
  if (unk0 === 7)
    data.unk7_0 = reader.bytes(9);
  if (unk0 === 8)
    data.struct_657 = read30(reader);
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
    data.struct_565 = read31(reader);
    data.unk1_15 = reader.u32();
  }
  return data;
}

// src/packets/generated/definitions/PKTInitItem.ts
function read33(buf) {
  const reader = new Read(buf);
  const data = {};
  data.storageType = reader.u8();
  data.itemDataList = reader.array(reader.u16(), () => read32(reader), 80);
  return data;
}
var name15 = "PKTInitItem";
var opcode15 = 30984;

// src/packets/generated/structures/Struct_754.ts
function read34(reader) {
  const data = {};
  data.unk0 = reader.u32();
  if (reader.bool())
    data.unk2_0 = reader.u32();
  data.unk3 = reader.u32();
  data.unk4 = reader.u32();
  if (reader.bool())
    data.unk6_0 = reader.bytes(9);
  return data;
}

// src/packets/generated/definitions/PKTInitLocal.ts
function read35(buf) {
  const reader = new Read(buf);
  const data = {};
  data.unk0 = reader.u8();
  data.statusEffectDatas = reader.array(reader.u16(), () => read18(reader), 80);
  data.unk2 = reader.u8();
  data.struct_230 = reader.bytes(reader.u16(), 3, 17);
  data.unk4 = reader.u64();
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
  data.struct_424 = reader.array(reader.u16(), () => read34(reader), 300);
  data.unk7 = reader.u32();
  data.struct_345 = reader.bytes(reader.u16(), 104, 30);
  data.unk9 = reader.u8();
  data.struct_137 = reader.bytes(reader.u16(), 353, 48);
  data.addonSkillFeatureList = reader.array(
    reader.u16(),
    () => {
      const v = {};
      v.skillId = reader.u32();
      v.addonSkillFeatureIdList = reader.array(reader.u16(), () => reader.u32(), 5);
      return v;
    },
    200
  );
  data.addonFeatureIdList = reader.bytes(reader.u16(), 200, 4);
  data.unk13 = reader.u64();
  if (reader.bool())
    data.unk15_0 = reader.u32();
  data.abilityDataList = reader.array(reader.u16(), () => read2(reader), 100);
  return data;
}
var name16 = "PKTInitLocal";
var opcode16 = 48680;

// src/packets/generated/definitions/PKTMigrationExecute.ts
function read36(buf) {
  const reader = new Read(buf);
  const data = {};
  data.account_CharacterId1 = reader.u64();
  data.unk1 = reader.u32();
  data.serverAddr = reader.string(256);
  data.account_CharacterId2 = reader.u64();
  return data;
}
var name17 = "PKTMigrationExecute";
var opcode17 = 21930;

// src/packets/generated/structures/Struct_733.ts
function read37(reader) {
  const data = {};
  data.lookData = reader.bytes(reader.u32(), 512);
  data.unk1 = reader.u64();
  data.unk2 = reader.u8();
  data.unk3 = reader.u16();
  data.lostArkString = reader.string(20);
  data.unk5 = reader.u8();
  data.unk6 = reader.u8();
  data.equipItemDataList = reader.array(reader.u16(), () => read12(reader), 33);
  data.unk8 = reader.u64();
  return data;
}

// src/packets/common/Angle.ts
function read38(reader, version = 0) {
  return reader.u16() * (2 * Math.PI) / 65536;
}
function write3(writer, data = 0) {
  writer.u16(Math.round(data * 65536 / (2 * Math.PI)) % 65536);
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
function write4(writer, data = { x: 0, y: 0, z: 0 }) {
  writer.u64(
    BigInt(Math.round(data.x ?? 0) >>> 0 & 2097151) | BigInt(Math.round(data.y ?? 0) >>> 0 & 2097151) << 21n | BigInt(Math.round(data.z ?? 0) >>> 0 & 2097151) << 42n
  );
}

// src/packets/generated/structures/NpcData.ts
function read40(reader) {
  const data = {};
  if (reader.bool())
    data.unk1_0 = reader.u16();
  data.unk2 = reader.u8();
  data.objectId = reader.u64();
  data.periodUpdateStatDataList = reader.array(reader.u16(), () => read20(reader), 5);
  if (reader.bool())
    data.struct_275 = reader.bytes(reader.u16(), 12, 12);
  if (reader.bool())
    data.unk8_0 = reader.u8();
  data.statusEffectDatas = reader.array(reader.u16(), () => read18(reader), 80);
  data.directionYaw = read38(reader);
  if (reader.bool())
    data.unk12_0 = reader.u8();
  if (reader.bool())
    data.struct_342 = reader.bytes(reader.u16(), 11, 9);
  data.unk15 = reader.u8();
  if (reader.bool())
    data.unk17_0 = reader.u32();
  if (reader.bool())
    data.unk19_0 = reader.u8();
  data.unk20 = reader.u8();
  if (reader.bool())
    data.unk22_0 = reader.u64();
  if (reader.bool())
    data.balanceLevel = reader.u16();
  if (reader.bool())
    data.unk26_0 = reader.u32();
  if (reader.bool())
    data.unk28_0 = reader.u8();
  if (reader.bool())
    data.unk30_0 = reader.u8();
  if (reader.bool())
    data.struct_733 = read37(reader);
  data.typeId = reader.u32();
  if (reader.bool())
    data.unk35_0 = reader.u8();
  if (reader.bool())
    data.transitIndex = reader.u32();
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
  data.position = read39(reader);
  data.unk40 = reader.u8();
  data.unk41 = reader.u8();
  data.level = reader.u16();
  if (reader.bool())
    data.unk44_0 = reader.u32();
  data.unk45 = reader.u8();
  data.spawnIndex = reader.u32();
  if (reader.bool())
    data.unk48_0 = reader.u8();
  if (reader.bool())
    data.unk50_0 = reader.u32();
  return data;
}

// src/packets/generated/definitions/PKTNewNpc.ts
function read41(buf) {
  const reader = new Read(buf);
  const data = {};
  if (reader.bool()) {
    data.unk1_0 = reader.string(20);
    data.unk1_1 = reader.string(20);
  }
  if (reader.bool())
    data.unk2_0 = reader.u64();
  data.npcStruct = read40(reader);
  if (reader.bool())
    data.unk5_0 = reader.u8();
  data.unk6 = reader.u8();
  return data;
}
var name18 = "PKTNewNpc";
var opcode18 = 26150;

// src/packets/generated/definitions/PKTNewNpcSummon.ts
function read42(buf) {
  const reader = new Read(buf);
  const data = {};
  reader.skip(21);
  data.ownerId = reader.u64();
  reader.skip(14);
  data.npcData = read40(reader);
  data.publishReason = reader.u8();
  return data;
}
var name19 = "PKTNewNpcSummon";
var opcode19 = 13454;

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
  data.name = reader.string(20);
  data.unk4_m = reader.u32();
  data.identityData = reader.bytes(25);
  data.classId = reader.u16();
  data.unk4 = reader.u32();
  data.avatarHide = reader.u8();
  data.unk6 = reader.u32();
  data.guildName = reader.string(20);
  data.periodUpdateStatDataList = reader.array(reader.u16(), () => read20(reader), 5);
  data.unk29_m = reader.u8();
  data.unk0_m = reader.bytes(5);
  data.maxItemLevel = reader.f32();
  data.unk7_m = reader.u32();
  data.avgItemLevel = reader.f32();
  data.firstHonorTitleId = reader.u16();
  data.unk17_m = reader.u8();
  data.unk1_m = reader.u8();
  data.unk17 = reader.u8();
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const I = {};
      I.statType = reader.u8();
      I.value = read19(reader);
      return I;
    },
    153
  );
  data.guildId = reader.u64();
  data.unk32_m = reader.u8();
  data.unk5_m = reader.u32();
  data.addonFeatureIdList = reader.bytes(reader.u16(), 200, 4);
  data.unk23 = reader.u64();
  data.petId = reader.u32();
  data.playerId = reader.u64();
  data.equipItemDataList = reader.array(reader.u16(), () => read12(reader), 33);
  data.heading = read38(reader);
  data.unk23_m = reader.u8();
  data.position = read39(reader);
  data.unk25_m = reader.u8();
  data.statusEffectDatas = reader.array(reader.u16(), () => read18(reader), 80);
  data.addonSkillFeatureList = reader.array(
    reader.u16(),
    () => {
      const L = {};
      L.skillId = reader.u32();
      L.addonSkillFeatureIdList = reader.array(reader.u16(), () => reader.u32(), 5);
      return L;
    },
    200
  );
  data.unk2_m = reader.u8();
  data.unk34 = reader.u32();
  data.lookData = reader.bytes(reader.u32(), 512);
  data.unk36 = reader.u8();
  data.equipLifeToolDataList = reader.array(reader.u16(), () => read12(reader), 9);
  data.worldId = reader.u8();
  data.rvRLevel = reader.u16();
  data.characterId = reader.u64();
  data.unk41 = reader.u8();
  data.unk45_m = reader.u32();
  data.level = reader.u16();
  data.secondHonorTitleId = reader.u16();
  if (reader.bool())
    data.grabbedData = reader.bytes(12);
  return data;
}

// src/packets/generated/definitions/PKTNewPC.ts
function read45(buf) {
  const reader = new Read(buf);
  const data = {};
  if (reader.bool())
    data.unk5_0_m = reader.bytes(20);
  if (reader.bool())
    data.trackMoveInfo = read43(reader);
  data.unk2_m = reader.u8();
  data.pcStruct = read44(reader);
  if (reader.bool()) {
    data.struct_60 = reader.array(
      reader.u16(),
      () => {
        const P = {};
        P.unk1_0_0 = reader.u64();
        P.itemTint = reader.bytes(reader.u16(), 5, 14);
        P.unk1_0_2 = reader.u32();
        return P;
      },
      5
    );
  }
  if (reader.bool()) {
    data.unk1_0 = reader.u32();
    data.itemTint = reader.bytes(reader.u16(), 5, 14);
    data.unk1_2 = reader.u64();
  }
  if (reader.bool())
    data.unk4_0_m = reader.bytes(12);
  if (reader.bool())
    data.unk3_0_m = reader.u32();
  data.unk0_m = reader.u8();
  return data;
}
var name20 = "PKTNewPC";
var opcode20 = 21297;

// src/packets/common/TripodIndex.ts
function read46(reader, version = 0) {
  return {
    first: reader.u8(),
    second: reader.u8(),
    third: reader.u8()
  };
}
function write5(writer, data) {
  writer.u8(data.first);
  writer.u8(data.second);
  writer.u8(data.third);
}

// src/packets/common/TripodLevel.ts
function read47(reader, version = 0) {
  return {
    first: reader.u16(),
    second: reader.u16(),
    third: reader.u16()
  };
}
function write6(writer, data) {
  writer.u16(data.first);
  writer.u16(data.second);
  writer.u16(data.third);
}

// src/packets/generated/structures/ProjectileInfo.ts
function read48(reader) {
  const data = {};
  data.tripodIndex = read46(reader);
  data.skillLevel = reader.u8();
  data.unk2 = reader.u32();
  data.unk3 = reader.u64();
  data.projectileId = reader.u64();
  data.unk5 = reader.u16();
  data.skillEffect = reader.u32();
  data.unk7 = reader.u32();
  data.unk8 = reader.u64();
  if (reader.bool())
    data.struct_342 = reader.bytes(reader.u16(), 11, 9);
  data.ownerId = reader.u64();
  data.unk12 = reader.u8();
  data.unk13 = reader.u32();
  data.unk14 = reader.u16();
  if (reader.bool())
    data.unk16_0 = reader.u64();
  data.skillId = reader.u32();
  if (reader.bool())
    data.unk19_0 = reader.u32();
  data.unk20 = reader.u8();
  data.chainSkillEffect = reader.u32();
  data.targetObjectId = reader.u64();
  data.tripodLevel = read47(reader);
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
var opcode21 = 45071;

// src/packets/generated/structures/TrapData.ts
function read50(reader) {
  const data = {};
  data.skillId = reader.u32();
  data.unk1 = reader.u8();
  data.position = read39(reader);
  data.unk3 = reader.u16();
  data.ownerId = reader.u64();
  data.unk5 = reader.u8();
  data.objectId = reader.u64();
  data.unk7 = reader.u8();
  data.skillEffect = reader.u32();
  data.unk9 = reader.u32();
  if (reader.bool())
    data.struct_342 = reader.bytes(reader.u16(), 11, 9);
  data.unk12 = reader.u32();
  data.unk13 = reader.u32();
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
var opcode22 = 5934;

// src/packets/generated/definitions/PKTParalyzationStateNotify.ts
function read52(buf) {
  const reader = new Read(buf);
  const data = {};
  data.hitCheckTime = reader.u32();
  data.paralyzationMaxPoint = reader.u32();
  data.paralyzationPoint = reader.u32();
  reader.skip(1);
  data.objectId = reader.u64();
  data.noHitCheckTime = reader.u32();
  reader.skip(1);
  data.decreasePoint = reader.u32();
  data.enable = reader.bool();
  return data;
}
var name23 = "PKTParalyzationStateNotify";
var opcode23 = 8116;

// src/packets/generated/structures/PartyMemberData.ts
function read53(reader) {
  const data = {};
  data.transitIndex = reader.u32();
  data.unk1 = reader.u8();
  data.unk2 = reader.u8();
  data.unk3 = reader.u8();
  data.zoneInstId = reader.u64();
  data.zoneId = reader.u32();
  data.unk6 = reader.u8();
  data.name = reader.string(20);
  data.characterLevel = reader.u16();
  data.gearLevel = reader.f32();
  data.partyMemberNumber = reader.u8();
  data.characterId = reader.u64();
  data.worldId = reader.u8();
  data.position = read39(reader);
  data.maxHp = read19(reader);
  data.curHp = read19(reader);
  data.auths = reader.u8();
  data.unk17 = reader.u16();
  data.classId = reader.u16();
  data.unk19 = reader.u8();
  return data;
}

// src/packets/generated/definitions/PKTPartyInfo.ts
function read54(buf) {
  const reader = new Read(buf);
  const data = {};
  data.lootGrade = reader.u32();
  data.raidInstanceId = reader.u32();
  data.partyInstanceId = reader.u32();
  data.memberDatas = reader.array(reader.u16(), () => read53(reader), 40);
  data.partyType = reader.u8();
  data.partyLootType = reader.u8();
  return data;
}
var name24 = "PKTPartyInfo";
var opcode24 = 36411;

// src/packets/generated/definitions/PKTPartyLeaveResult.ts
function read55(buf) {
  const reader = new Read(buf);
  const data = {};
  data.partyLeaveType = reader.u8();
  data.name = reader.string(20);
  data.partyInstanceId = reader.u32();
  return data;
}
var name25 = "PKTPartyLeaveResult";
var opcode25 = 238;

// src/packets/generated/definitions/PKTPartyPassiveStatusEffectAddNotify.ts
function read56(buf) {
  const reader = new Read(buf);
  const data = {};
  data.objectId = reader.u64();
  data.unk0_m = reader.u8();
  data.passiveStatusEffectList = reader.array(reader.u16(), () => reader.u32(), 10);
  return data;
}
var name26 = "PKTPartyPassiveStatusEffectAddNotify";
var opcode26 = 25251;

// src/packets/generated/definitions/PKTPartyPassiveStatusEffectRemoveNotify.ts
function read57(buf) {
  const reader = new Read(buf);
  const data = {};
  data.objectId = reader.u64();
  data.passiveStatusEffectList = reader.array(reader.u16(), () => reader.u32(), 10);
  return data;
}
var name27 = "PKTPartyPassiveStatusEffectRemoveNotify";
var opcode27 = 58476;

// src/packets/generated/definitions/PKTPartyStatusEffectAddNotify.ts
function read58(buf) {
  const reader = new Read(buf);
  const data = {};
  data.unk0 = reader.u8();
  data.playerIdOnRefresh = reader.u64();
  data.unk2 = reader.u64();
  data.characterId = reader.u64();
  data.statusEffectDatas = reader.array(reader.u16(), () => read18(reader), 80);
  return data;
}
var name28 = "PKTPartyStatusEffectAddNotify";
var opcode28 = 27097;

// src/packets/generated/definitions/PKTPartyStatusEffectRemoveNotify.ts
function read59(buf) {
  const reader = new Read(buf);
  const data = {};
  data.unk0 = reader.u64();
  data.characterId = reader.u64();
  data.reason = reader.u8();
  data.statusEffectIds = reader.array(reader.u16(), () => reader.u32(), 80);
  return data;
}
var name29 = "PKTPartyStatusEffectRemoveNotify";
var opcode29 = 51033;

// src/packets/generated/definitions/PKTPartyStatusEffectResultNotify.ts
function read60(buf) {
  const reader = new Read(buf);
  const data = {};
  reader.skip(13);
  data.raidInstanceId = reader.u32();
  reader.skip(8);
  data.characterId = reader.u64();
  reader.skip(1);
  data.partyInstanceId = reader.u32();
  reader.skip(5);
  return data;
}
var name30 = "PKTPartyStatusEffectResultNotify";
var opcode30 = 4215;

// src/packets/generated/definitions/PKTPassiveStatusEffectAddNotify.ts
function read61(buf) {
  const reader = new Read(buf);
  const data = {};
  data.passiveStatusEffectList = reader.array(reader.u16(), () => reader.u32(), 10);
  return data;
}
var name31 = "PKTPassiveStatusEffectAddNotify";
var opcode31 = 9409;

// src/packets/generated/definitions/PKTPassiveStatusEffectRemoveNotify.ts
function read62(buf) {
  const reader = new Read(buf);
  const data = {};
  data.passiveStatusEffectList = reader.array(reader.u16(), () => reader.u32(), 10);
  return data;
}
var name32 = "PKTPassiveStatusEffectRemoveNotify";
var opcode32 = 25070;

// src/packets/generated/definitions/PKTRaidBegin.ts
function read63(buf) {
  const reader = new Read(buf);
  const data = {};
  data.initBraveHeartCount = reader.u8();
  data.startTick = reader.u64();
  data.endTick = reader.u64();
  data.braveHeartCount = reader.u8();
  data.unk1_m = reader.bool();
  data.unk6_m = reader.u64();
  data.unk4_m = reader.u64();
  data.raidResult = reader.u8();
  data.bossKillDataList = reader.array(reader.u16(), () => read28(reader), 3);
  data.unk11_m = reader.bool();
  data.unk0_m = reader.bool();
  data.totalTime = reader.u64();
  data.unk5_m = reader.u64();
  data.raidId = reader.u32();
  return data;
}
var name33 = "PKTRaidBegin";
var opcode33 = 46280;

// src/packets/generated/definitions/PKTRaidBossKillNotify.ts
function read64(buf) {
  const reader = new Read(buf);
  const data = {};
  data.typeId = reader.u32();
  reader.skip(1);
  return data;
}
var name34 = "PKTRaidBossKillNotify";
var opcode34 = 54487;

// src/packets/generated/definitions/PKTRaidResult.ts
function read65(buf) {
  const reader = new Read(buf);
  const data = {};
  data.unk0 = reader.u8();
  data.unk1 = reader.u8();
  data.unk2 = reader.u64();
  data.struct_51 = reader.array(
    reader.u16(),
    () => {
      const Y = {};
      Y.unk1_0_0 = read19(reader);
      Y.unk1_0_1 = reader.u32();
      Y.unk1_0_2 = read19(reader);
      Y.struct_531 = reader.bytes(reader.u16(), 3);
      return Y;
    },
    3
  );
  data.raidResult = reader.u8();
  data.unk5 = reader.u64();
  data.unk6 = reader.u64();
  data.unk7 = reader.u64();
  return data;
}
var name35 = "PKTRaidResult";
var opcode35 = 50274;

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
var opcode36 = 32288;

// src/packets/generated/definitions/PKTSkillCancelNotify.ts
function read68(buf) {
  const reader = new Read(buf);
  const data = {};
  data.caster = reader.u64();
  reader.skip(1);
  data.newPosition = read39(reader);
  data.newDirectionYaw = read38(reader);
  data.skillId = reader.u32();
  reader.skip(2);
  data.cancelReason = reader.u8();
  return data;
}
var name37 = "PKTSkillCancelNotify";
var opcode37 = 57929;

// src/packets/generated/definitions/PKTSkillCastNotify.ts
function read69(buf) {
  const reader = new Read(buf);
  const data = {};
  data.caster = reader.u64();
  data.skillId = reader.u32();
  reader.skip(1);
  data.skillLevel = reader.u8();
  reader.skip(1);
  return data;
}
var name38 = "PKTSkillCastNotify";
var opcode38 = 48101;

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
function write7(writer, data) {
  const flag = (data.moveTime === void 0 ? 0 : 1 << 0) | (data.standUpTime === void 0 ? 0 : 1 << 1) | (data.downTime === void 0 ? 0 : 1 << 2) | (data.freezeTime === void 0 ? 0 : 1 << 3) | (data.moveHeight === void 0 ? 0 : 1 << 4) | (data.farmostDist === void 0 ? 0 : 1 << 5) | (data.flag40 === void 0 ? 0 : 1 << 6);
  writer.u8(flag);
  if (flag & 1)
    writer.u32(data.moveTime);
  if (flag & 2)
    writer.u32(data.standUpTime);
  if (flag & 4)
    writer.u32(data.downTime);
  if (flag & 8)
    writer.u32(data.freezeTime);
  if (flag & 16)
    writer.u32(data.moveHeight);
  if (flag & 32)
    writer.u32(data.farmostDist);
  if (flag & 64)
    writer.bytes(data.flag40, { maxLen: 6, lenType: "u16" });
}

// src/packets/generated/structures/SkillDamageEvent.ts
function read71(reader) {
  const data = {};
  data.maxHp = read19(reader);
  data.damageType = reader.u8();
  data.damage = read19(reader);
  data.unk3_m = reader.u16();
  data.curHp = read19(reader);
  data.targetId = reader.u64();
  data.modifier = reader.u8();
  if (reader.bool())
    data.damageAttr = reader.u8();
  return data;
}

// src/packets/generated/structures/SkillDamageAbnormalMoveEvent.ts
function read72(reader) {
  const data = {};
  data.unk8_m = reader.u16();
  data.unk2_m = reader.u64();
  data.unk3_m = reader.u16();
  data.unk1_m = reader.u8();
  data.unk4_m = reader.u16();
  data.skillMoveOptionData = read70(reader);
  data.position = read39(reader);
  data.skillDamageEvent = read71(reader);
  data.destination = read39(reader);
  return data;
}

// src/packets/generated/definitions/PKTSkillDamageAbnormalMoveNotify.ts
function read73(buf) {
  const reader = new Read(buf);
  const data = {};
  data.skillEffectId = reader.u32();
  data.unk2_m = reader.u32();
  data.skillId = reader.u32();
  data.skillDamageAbnormalMoveEvents = reader.array(reader.u16(), () => read72(reader), 50);
  data.sourceId = reader.u64();
  data.unk1_m = reader.u8();
  return data;
}
var name39 = "PKTSkillDamageAbnormalMoveNotify";
var opcode39 = 2222;

// src/packets/generated/definitions/PKTSkillDamageNotify.ts
function read74(buf) {
  const reader = new Read(buf);
  const data = {};
  data.skillId = reader.u32();
  data.skillDamageEvents = reader.array(reader.u16(), () => read71(reader), 50);
  if (reader.bool())
    data.unk3_0 = reader.u32();
  data.sourceId = reader.u64();
  if (reader.bool())
    data.skillEffectId = reader.u32();
  data.skillLevel = reader.u8();
  return data;
}
var name40 = "PKTSkillDamageNotify";
var opcode40 = 15734;

// src/packets/generated/definitions/PKTSkillStageNotify.ts
function read75(buf) {
  const reader = new Read(buf);
  const data = {};
  reader.skip(4);
  data.skillId = reader.u32();
  reader.skip(12);
  data.stage = reader.u8();
  reader.skip(17);
  data.sourceId = reader.u64();
  reader.skip(8);
  return data;
}
var name41 = "PKTSkillStageNotify";
var opcode41 = 43936;

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
    data.tripodIndex = read46(reader);
  if (flag & 64)
    data.tripodLevel = read47(reader);
  return data;
}
function write8(writer, data) {
  const flag = (data.layerIndex === void 0 ? 0 : 1 << 0) | (data.startStageIndex === void 0 ? 0 : 1 << 1) | (data.transitIndex === void 0 ? 0 : 1 << 2) | (data.stageStartTime === void 0 ? 0 : 1 << 3) | (data.farmostDistance === void 0 ? 0 : 1 << 4) | (data.tripodIndex === void 0 ? 0 : 1 << 5) | (data.tripodLevel === void 0 ? 0 : 1 << 6);
  writer.u8(flag);
  if (flag & 1)
    writer.u8(data.layerIndex);
  if (flag & 2)
    writer.u8(data.startStageIndex);
  if (flag & 4)
    writer.u32(data.transitIndex);
  if (flag & 8)
    writer.u32(data.stageStartTime);
  if (flag & 16)
    writer.u32(data.farmostDistance);
  if (flag & 32)
    write5(writer, data.tripodIndex);
  if (flag & 64)
    write6(writer, data.tripodLevel);
}

// src/packets/generated/definitions/PKTSkillStartNotify.ts
function read77(buf) {
  const reader = new Read(buf);
  const data = {};
  data.sourceId = reader.u64();
  data.skillId = reader.u32();
  data.aimTargetPosition = read39(reader);
  if (reader.bool())
    data.unk1_m = reader.u32();
  data.newDirectionYaw = read38(reader);
  if (reader.bool())
    data.aiStateId = reader.u32();
  data.newPosition = read39(reader);
  data.curPosition = read39(reader);
  if (reader.bool())
    data.pitchRotation = read38(reader);
  data.skillLevel = reader.u8();
  data.curDirectionYaw = read38(reader);
  data.skillOptionData = read76(reader);
  return data;
}
var name42 = "PKTSkillStartNotify";
var opcode42 = 22915;

// src/packets/generated/definitions/PKTStatChangeOriginNotify.ts
function read78(buf) {
  const reader = new Read(buf);
  const data = {};
  if (reader.bool())
    data.unk1_0 = reader.u32();
  data.objectId = reader.u64();
  data.unk3 = reader.array(
    reader.u16(),
    () => {
      const a = {};
      a.statType = reader.u8();
      a.value = read19(reader);
      return a;
    },
    153
  );
  data.unk4 = reader.array(
    reader.u16(),
    () => {
      const b = {};
      b.statType = reader.u8();
      b.value = read19(reader);
      return b;
    },
    153
  );
  data.unk5 = reader.u8();
  return data;
}
var name43 = "PKTStatChangeOriginNotify";
var opcode43 = 55718;

// src/packets/generated/definitions/PKTStatusEffectAddNotify.ts
function read79(buf) {
  const reader = new Read(buf);
  const data = {};
  data.objectId = reader.u64();
  data.new = reader.bool();
  if (reader.bool())
    data.unk3_0 = reader.u64();
  data.statusEffectData = read18(reader);
  data.unk5 = reader.u64();
  return data;
}
var name44 = "PKTStatusEffectAddNotify";
var opcode44 = 2816;

// src/packets/generated/definitions/PKTStatusEffectRemoveNotify.ts
function read80(buf) {
  const reader = new Read(buf);
  const data = {};
  data.reason = reader.u8();
  data.statusEffectIds = reader.array(reader.u16(), () => reader.u32(), 80);
  data.objectId = reader.u64();
  return data;
}
var name45 = "PKTStatusEffectRemoveNotify";
var opcode45 = 35019;

// src/packets/generated/definitions/PKTStatusEffectDurationNotify.ts
function read81(buf) {
  const reader = new Read(buf);
  const data = {};
  reader.skip(3);
  data.targetId = reader.u64();
  data.expirationTick = reader.u64();
  data.effectInstanceId = reader.u32();
  return data;
}
var name46 = "PKTStatusEffectDurationNotify";
var opcode46 = 13129;

// src/packets/generated/definitions/PKTStatusEffectSyncDataNotify.ts
function read82(buf) {
  const reader = new Read(buf);
  const data = {};
  data.objectId = reader.u64();
  data.characterId = reader.u64();
  reader.skip(2);
  data.value = reader.u32();
  reader.skip(4);
  data.effectInstanceId = reader.u32();
  reader.skip(1);
  return data;
}
var name47 = "PKTStatusEffectSyncDataNotify";
var opcode47 = 21211;

// src/packets/generated/definitions/PKTTriggerBossBattleStatus.ts
function read83(buf) {
  const reader = new Read(buf);
  const data = {};
  reader.skip(1);
  data.step = reader.u32();
  data.triggerId = reader.u32();
  data.unk2_m = reader.bool();
  return data;
}
var name48 = "PKTTriggerBossBattleStatus";
var opcode48 = 56184;

// src/packets/generated/definitions/PKTTriggerFinishNotify.ts
function read84(buf) {
  const reader = new Read(buf);
  const data = {};
  data.involvedPCs = reader.array(reader.u16(), () => reader.u64(), 40);
  data.triggerId = reader.u32();
  data.packetResultCode = reader.u32();
  data.unk0_m = reader.u32();
  return data;
}
var name49 = "PKTTriggerFinishNotify";
var opcode49 = 57434;

// src/packets/generated/definitions/PKTTriggerStartNotify.ts
function read85(buf) {
  const reader = new Read(buf);
  const data = {};
  data.sourceId = reader.u64();
  data.involvedPCs = reader.array(reader.u16(), () => reader.u64(), 40);
  data.triggerSignalType = reader.u32();
  data.triggerId = reader.u32();
  return data;
}
var name50 = "PKTTriggerStartNotify";
var opcode50 = 59991;

// src/packets/generated/definitions/PKTTroopMemberUpdateMinNotify.ts
function read86(buf) {
  const reader = new Read(buf);
  const data = {};
  data.position = reader.u64();
  data.maxHp = read19(reader);
  data.curHp = read19(reader);
  data.statusEffectDatas = reader.array(reader.u16(), () => read18(reader), 80);
  data.characterId = reader.u64();
  data.unk0_m = reader.u32();
  return data;
}
var name51 = "PKTTroopMemberUpdateMinNotify";
var opcode51 = 52233;

// src/packets/generated/definitions/PKTIdentityGaugeChangeNotify.ts
function read87(buf) {
  const reader = new Read(buf);
  const data = {};
  reader.skip(1);
  data.playerId = reader.u64();
  reader.skip(1);
  data.identityGauge1 = reader.u32();
  data.identityGauge2 = reader.u32();
  data.identityGauge3 = reader.u32();
  reader.skip(1);
  return data;
}
var name52 = "PKTIdentityGaugeChangeNotify";
var opcode52 = 51434;

// src/packets/generated/definitions/PKTZoneMemberLoadStatusNotify.ts
function read88(buf) {
  const reader = new Read(buf);
  const data = {};
  data.totalMembers = reader.array(reader.u16(), () => reader.u64(), 40);
  data.firstPCEnterTick = reader.u64();
  data.zoneId = reader.u32();
  data.zoneInstId = reader.u64();
  data.completeMembers = reader.array(reader.u16(), () => reader.u64(), 40);
  data.loadComplete = reader.bool();
  data.zoneLevel = reader.u8();
  return data;
}
var name53 = "PKTZoneMemberLoadStatusNotify";
var opcode53 = 58728;

// src/packets/generated/definitions/PKTZoneObjectUnpublishNotify.ts
function read89(buf) {
  const reader = new Read(buf);
  const data = {};
  reader.skip(1);
  data.objectId = reader.u64();
  return data;
}
var name54 = "PKTZoneObjectUnpublishNotify";
var opcode54 = 37585;

// src/packets/generated/structures/ZoneStatusEffectData.ts
function read90(reader) {
  const data = {};
  data.target = reader.u8();
  data.instanceId = reader.u32();
  reader.skip(4);
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
var opcode55 = 52575;

// src/packets/generated/definitions/PKTZoneStatusEffectRemoveNotify.ts
function read92(buf) {
  const reader = new Read(buf);
  const data = {};
  reader.skip(2);
  data.statusEffectId = reader.u32();
  return data;
}
var name56 = "PKTZoneStatusEffectRemoveNotify";
var opcode56 = 2142;

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
var PKTStream = class extends TypedEmitter {
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

export {
  Read,
  Write,
  opcode,
  opcode2,
  opcode3,
  opcode4,
  opcode6 as opcode5,
  opcode7 as opcode6,
  opcode8 as opcode7,
  read11 as read,
  write,
  opcode9 as opcode8,
  opcode10 as opcode9,
  opcode11 as opcode10,
  opcode12 as opcode11,
  opcode13 as opcode12,
  read19 as read2,
  write2,
  opcode14 as opcode13,
  opcode15 as opcode14,
  opcode16 as opcode15,
  opcode17 as opcode16,
  read38 as read3,
  write3,
  read39 as read4,
  write4,
  opcode18 as opcode17,
  opcode19 as opcode18,
  opcode20 as opcode19,
  read46 as read5,
  write5,
  read47 as read6,
  write6,
  opcode21 as opcode20,
  opcode22 as opcode21,
  opcode23 as opcode22,
  opcode24 as opcode23,
  opcode25 as opcode24,
  opcode26 as opcode25,
  opcode27 as opcode26,
  opcode28 as opcode27,
  opcode29 as opcode28,
  opcode30 as opcode29,
  opcode31 as opcode30,
  opcode32 as opcode31,
  opcode33 as opcode32,
  opcode34 as opcode33,
  opcode35 as opcode34,
  opcode36 as opcode35,
  opcode37 as opcode36,
  opcode38 as opcode37,
  read70 as read7,
  write7,
  opcode39 as opcode38,
  opcode40 as opcode39,
  opcode41 as opcode40,
  read76 as read8,
  write8,
  opcode42 as opcode41,
  opcode44 as opcode42,
  opcode45 as opcode43,
  opcode46 as opcode44,
  opcode47 as opcode45,
  opcode48 as opcode46,
  opcode49 as opcode47,
  opcode50 as opcode48,
  opcode51 as opcode49,
  opcode52 as opcode50,
  opcode53 as opcode51,
  opcode54 as opcode52,
  opcode55 as opcode53,
  opcode56 as opcode54,
  mapping,
  PKTStream,
  PKT
};
