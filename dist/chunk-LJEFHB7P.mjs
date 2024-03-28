import {
  PacketBuffer
} from "./chunk-32GW4DAM.mjs";
import {
  PKT,
  Read,
  Write,
  mapping,
  opcode,
  opcode10,
  opcode11,
  opcode12,
  opcode13,
  opcode14,
  opcode15,
  opcode16,
  opcode17,
  opcode18,
  opcode19,
  opcode2,
  opcode20,
  opcode21,
  opcode22,
  opcode23,
  opcode24,
  opcode25,
  opcode26,
  opcode27,
  opcode28,
  opcode29,
  opcode3,
  opcode30,
  opcode31,
  opcode32,
  opcode33,
  opcode34,
  opcode35,
  opcode36,
  opcode37,
  opcode38,
  opcode39,
  opcode4,
  opcode40,
  opcode41,
  opcode42,
  opcode43,
  opcode44,
  opcode45,
  opcode46,
  opcode47,
  opcode48,
  opcode49,
  opcode5,
  opcode50,
  opcode51,
  opcode52,
  opcode53,
  opcode54,
  opcode6,
  opcode7,
  opcode8,
  opcode9,
  read,
  read2,
  read3,
  read4,
  read5,
  read6,
  read7,
  read8,
  write,
  write2,
  write3,
  write4,
  write5,
  write6,
  write7,
  write8
} from "./chunk-RUQ4MZV2.mjs";

// src/logger/logger.ts
import { TypedEmitter } from "tiny-typed-emitter";

// src/packets/log/codeMapping.ts
var codeMapping = /* @__PURE__ */ new Map([
  [opcode, [101 /* SkillCooldownNotify */]],
  [opcode2, [0 /* AbilityChangeNotify */]],
  [opcode3, [1 /* ActiveAbilityNotify */]],
  [opcode4, [2 /* AddonSkillFeatureChangeNotify */]],
  [opcode5, [4 /* BlockSkillStateNotify */]],
  [opcode6, [5 /* CounterAttackNotify */]],
  [opcode7, [6 /* DeathNotify */]],
  [opcode11, [7 /* InitAbility */]],
  [opcode12, [8 /* InitEnv */]],
  [opcode13, [9 /* InitPC */]],
  [opcode15, [10 /* InitLocal */]],
  [opcode16, [11 /* MigrationExecute */]],
  [opcode17, [12 /* NewNpc */]],
  [opcode18, [13 /* NewNpcSummon */]],
  [opcode19, [14 /* NewPC */]],
  [opcode20, [15 /* NewProjectile */]],
  [opcode22, [16 /* ParalyzationStateNotify */]],
  [opcode23, [17 /* PartyInfo */]],
  [opcode24, [18 /* PartyLeaveResult */]],
  [opcode25, [19 /* PartyPassiveStatusEffectAddNotify */]],
  [opcode26, [20 /* PartyPassiveStatusEffectRemoveNotify */]],
  [opcode27, [21 /* PartyStatusEffectAddNotify */]],
  [opcode28, [22 /* PartyStatusEffectRemoveNotify */]],
  [opcode29, [23 /* PartyStatusEffectResultNotify */]],
  [opcode30, [24 /* PassiveStatusEffectAddNotify */]],
  [opcode31, [25 /* PassiveStatusEffectRemoveNotify */]],
  [opcode33, [26 /* RaidBossKillNotify */]],
  [opcode34, [27 /* RaidResult */]],
  [opcode35, [28 /* RemoveObject */]],
  [opcode38, [29 /* SkillDamageAbnormalMoveNotify */]],
  [opcode39, [30 /* SkillDamageNotify */]],
  [opcode40, [31 /* SkillStageNotify */]],
  [opcode41, [32 /* SkillStartNotify */]],
  [opcode42, [34 /* StatusEffectAddNotify */]],
  [opcode43, [35 /* StatusEffectRemoveNotify */]],
  [opcode44, [36 /* StatusEffectDurationNotify */]],
  [opcode45, [37 /* StatusEffectSyncDataNotify */]],
  [opcode46, [38 /* TriggerBossBattleStatus */]],
  [opcode47, [39 /* TriggerFinishNotify */]],
  [opcode48, [40 /* TriggerStartNotify */]],
  [opcode49, [41 /* TroopMemberUpdateMinNotify */]],
  [opcode50, [42 /* IdentityGaugeChangeNotify */]],
  [opcode52, [43 /* ZoneObjectUnpublishNotify */]],
  [opcode53, [44 /* ZoneStatusEffectAddNotify */]],
  [opcode54, [45 /* ZoneStatusEffectRemoveNotify */]],
  [opcode37, [46 /* SkillCastNotify */]],
  [opcode10, [47 /* IdentityStanceChangeNotify */]],
  [opcode8, [48 /* EquipChangeNotify */]],
  [opcode9, [49 /* EquipLifeToolChangeNotify */]],
  [opcode14, [50 /* InitItem */]],
  [opcode32, [52 /* RaidBegin */]],
  [opcode51, [51 /* ZoneMemberLoadStatusNotify */]],
  [opcode21, [53 /* NewTrap */]],
  [opcode36, [54 /* SkillCancelNotify */]]
]);

// src/packets/log/definitions/SkillCooldownNotify.ts
function read9(reader, version2) {
  const data = {};
  data.cooldown1 = reader.f32();
  data.cooldown2 = reader.f32();
  data.skillId = reader.u32();
  return data;
}
function write9(writer, data) {
  writer.f32(data.cooldown1);
  writer.f32(data.cooldown2);
  writer.u32(data.skillId);
}
var name = "SkillCooldownNotify";

// src/packets/log/structures/AbilityData.ts
function read10(reader, version2) {
  const data = {};
  data.points = reader.u16();
  data.id = reader.u32();
  data.level = reader.u8();
  return data;
}
function write10(writer, data) {
  writer.u16(data.points);
  writer.u32(data.id);
  writer.u8(data.level);
}

// src/packets/log/definitions/AbilityChangeNotify.ts
function read11(reader, version2) {
  const data = {};
  data.abilityDataList = reader.array(reader.u16(), () => read10(reader, version2), 100);
  return data;
}
function write11(writer, data) {
  writer.array(data.abilityDataList, { maxLen: 100, lenType: "u16" }, (obj) => {
    write10(writer, obj);
  });
}
var name2 = "AbilityChangeNotify";

// src/packets/log/structures/ActiveAbility.ts
function read12(reader, version2) {
  const data = {};
  data.featureType = reader.u16();
  data.level = reader.u32();
  return data;
}
function write12(writer, data) {
  writer.u16(data.featureType);
  writer.u32(data.level);
}

// src/packets/log/definitions/ActiveAbilityNotify.ts
function read13(reader, version2) {
  const data = {};
  data.activeAbilityList = reader.array(reader.u16(), () => read12(reader, version2), 60);
  data.objectId = reader.u64();
  return data;
}
function write13(writer, data) {
  writer.array(data.activeAbilityList, { maxLen: 60, lenType: "u16" }, (obj) => {
    write12(writer, obj);
  });
  writer.u64(data.objectId);
}
var name3 = "ActiveAbilityNotify";

// src/packets/log/definitions/AddonSkillFeatureChangeNotify.ts
function read14(reader, version2) {
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
  return data;
}
function write14(writer, data) {
  writer.u64(data.objectId);
  writer.array(
    data.addonSkillFeatureList,
    { maxLen: 200, lenType: "u16" },
    (obj) => {
      writer.array(obj.addonSkillFeatureIdList, { maxLen: 5, lenType: "u16" }, (obj2) => {
        writer.u32(obj2);
      });
      writer.u32(obj.skillId);
    }
  );
}
var name4 = "AddonSkillFeatureChangeNotify";

// src/packets/log/definitions/BlockSkillStateNotify.ts
function read15(reader, version2) {
  const data = {};
  data.paralyzationMaxPoint = reader.u32();
  data.type = reader.u8();
  data.objectId = reader.u64();
  data.paralyzationPoint = reader.u32();
  return data;
}
function write15(writer, data) {
  writer.u32(data.paralyzationMaxPoint);
  writer.u8(data.type);
  writer.u64(data.objectId);
  writer.u32(data.paralyzationPoint);
}
var name5 = "BlockSkillStateNotify";

// src/packets/log/definitions/CounterAttackNotify.ts
function read16(reader, version2) {
  const data = {};
  data.sourceId = reader.u64();
  data.targetId = reader.u64();
  data.type = reader.u32();
  return data;
}
function write16(writer, data) {
  writer.u64(data.sourceId);
  writer.u64(data.targetId);
  writer.u32(data.type);
}
var name6 = "CounterAttackNotify";

// src/packets/log/definitions/DeathNotify.ts
function read17(reader, version2) {
  const data = {};
  data.sourceId = reader.u64();
  data.targetId = reader.u64();
  if (version2 >= 4) {
    data.effectId = reader.u32();
    data.directionYaw = reader.u16();
    data.deathType = reader.u8();
    data.durabilityDecrement = reader.u8();
    data.abnormalStatusType = reader.u8();
    data.damageAttr = reader.u8();
    data.unk0_m = reader.u64();
    data.unk2_m = reader.u32();
  } else {
    data.effectId = 0;
    data.directionYaw = 0;
    data.deathType = 0;
    data.durabilityDecrement = 0;
    data.abnormalStatusType = 0;
    data.damageAttr = 0;
    data.unk0_m = 0n;
    data.unk2_m = 0;
  }
  return data;
}
function write17(writer, data) {
  writer.u64(data.sourceId);
  writer.u64(data.targetId);
  writer.u32(data.effectId);
  writer.u16(data.directionYaw);
  writer.u8(data.deathType ?? 0);
  writer.u8(data.durabilityDecrement);
  writer.u8(data.abnormalStatusType ?? 0);
  writer.u8(data.damageAttr ?? 0);
  writer.u64(data.unk0_m);
  writer.u32(data.unk2_m);
}
var name7 = "DeathNotify";

// src/packets/log/definitions/InitAbility.ts
function read18(reader, version2) {
  const data = {};
  data.abilityDataList = reader.array(reader.u16(), () => read10(reader, version2), 100);
  return data;
}
function write18(writer, data) {
  writer.array(data.abilityDataList, { maxLen: 100, lenType: "u16" }, (obj) => {
    write10(writer, obj);
  });
}
var name8 = "InitAbility";

// src/packets/log/definitions/InitEnv.ts
function read19(reader, version2) {
  const data = {};
  data.playerId = reader.u64();
  return data;
}
function write19(writer, data) {
  writer.u64(data.playerId);
}
var name9 = "InitEnv";

// src/packets/log/structures/StatusEffectData.ts
function read20(reader, version2) {
  const data = {};
  data.skillLevel = reader.u8();
  data.occurTime = read(reader, version2);
  data.statusEffectId = reader.u32();
  data.sourceId = reader.u64();
  data.totalTime = reader.f32();
  data.endTick = reader.u64();
  if (reader.bool())
    data.value = reader.bytes(16);
  data.effectInstanceId = reader.u32();
  if (version2 >= 1) {
    data.stackCount = reader.u8();
  } else {
    data.stackCount = 1;
  }
  return data;
}
function write20(writer, data) {
  writer.u8(data.skillLevel);
  write(writer, data.occurTime);
  writer.u32(data.statusEffectId);
  writer.u64(data.sourceId);
  writer.f32(data.totalTime);
  writer.u64(data.endTick);
  if (writer.bool(data.value !== void 0)) {
    writer.bytes(data.value, { length: 16 });
  }
  writer.u32(data.effectInstanceId);
  writer.u8(data.stackCount);
}

// src/packets/log/definitions/InitPC.ts
function read21(reader, version2) {
  const data = {};
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const h = {};
      h.StatType = reader.u8();
      h.Value = read2(reader, version2);
      return h;
    },
    152
  );
  data.name = reader.string(20);
  data.level = reader.u16();
  data.statusEffectDatas = reader.array(reader.u16(), () => read20(reader, version2), 80);
  data.characterId = reader.u64();
  data.gearLevel = reader.f32();
  data.playerId = reader.u64();
  data.classId = reader.u16();
  return data;
}
function write21(writer, data) {
  writer.array(data.statPair, { maxLen: 152, lenType: "u16" }, (obj) => {
    writer.u8(obj.statType);
    write2(writer, obj.value);
  });
  writer.string(data.name, 20);
  writer.u16(data.level);
  writer.array(data.statusEffectDatas, { maxLen: 80, lenType: "u16" }, (obj) => {
    write20(writer, obj);
  });
  writer.u64(data.characterId);
  writer.f32(data.gearLevel);
  writer.u64(data.playerId);
  writer.u16(data.classId);
}
var name10 = "InitPC";

// src/packets/log/definitions/InitLocal.ts
function read22(reader, version2) {
  const data = {};
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const l = {};
      l.statType = reader.u8();
      l.value = read2(reader, version2);
      return l;
    },
    152
  );
  data.statusEffectDatas = reader.array(reader.u16(), () => read20(reader, version2), 80);
  data.addonSkillFeatureList = reader.array(
    reader.u16(),
    () => {
      const n = {};
      n.addonSkillFeatureIdList = reader.array(reader.u16(), () => reader.u32(), 5);
      n.skillId = reader.u32();
      return n;
    },
    200
  );
  data.abilityDataList = reader.array(reader.u16(), () => read10(reader, version2), 100);
  return data;
}
function write22(writer, data) {
  writer.array(data.statPair, { maxLen: 152, lenType: "u16" }, (obj) => {
    writer.u8(obj.statType);
    write2(writer, obj.value);
  });
  writer.array(data.statusEffectDatas, { maxLen: 80, lenType: "u16" }, (obj) => {
    write20(writer, obj);
  });
  writer.array(
    data.addonSkillFeatureList,
    { maxLen: 200, lenType: "u16" },
    (obj) => {
      writer.array(obj.addonSkillFeatureIdList, { maxLen: 5, lenType: "u16" }, (obj2) => {
        writer.u32(obj2);
      });
      writer.u32(obj.skillId);
    }
  );
  writer.array(data.abilityDataList, { maxLen: 100, lenType: "u16" }, (obj) => {
    write10(writer, obj);
  });
}
var name11 = "InitLocal";

// src/packets/log/definitions/MigrationExecute.ts
function read23(reader, version2) {
  const data = {};
  data.account_CharacterId1 = reader.u64();
  data.serverAddr = reader.string(256);
  data.account_CharacterId2 = reader.u64();
  return data;
}
function write23(writer, data) {
  writer.u64(data.account_CharacterId1);
  writer.string(data.serverAddr, 256);
  writer.u64(data.account_CharacterId2);
}
var name12 = "MigrationExecute";

// src/packets/log/structures/NpcData.ts
function read24(reader, version2) {
  const data = {};
  data.spawnIndex = reader.u32();
  data.objectId = reader.u64();
  if (reader.bool())
    data.transitIndex = reader.u32();
  data.position = read4(reader, version2);
  data.statusEffectDatas = reader.array(reader.u16(), () => read20(reader, version2), 80);
  data.directionYaw = read3(reader, version2);
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const x = {};
      x.statType = reader.u8();
      x.value = read2(reader, version2);
      return x;
    },
    152
  );
  data.typeId = reader.u32();
  if (version2 >= 1) {
    data.level = reader.u16();
    if (reader.bool())
      data.balanceLevel = reader.u16();
  } else {
    data.level = 0;
  }
  return data;
}
function write24(writer, data) {
  writer.u32(data.spawnIndex);
  writer.u64(data.objectId);
  if (writer.bool(data.transitIndex !== void 0))
    writer.u32(data.transitIndex);
  write4(writer, data.position);
  writer.array(data.statusEffectDatas, { maxLen: 80, lenType: "u16" }, (obj) => {
    write20(writer, obj);
  });
  write3(writer, data.directionYaw);
  writer.array(data.statPair, { maxLen: 152, lenType: "u16" }, (obj) => {
    writer.u8(obj.statType);
    write2(writer, obj.value);
  });
  writer.u32(data.typeId);
  writer.u16(data.level);
  if (writer.bool(data.balanceLevel !== void 0))
    writer.u16(data.balanceLevel);
}

// src/packets/log/definitions/NewNpc.ts
function read25(reader, version2) {
  const data = {};
  data.npcStruct = read24(reader, version2);
  return data;
}
function write25(writer, data) {
  write24(writer, data.npcStruct);
}
var name13 = "NewNpc";

// src/packets/log/definitions/NewNpcSummon.ts
function read26(reader, version2) {
  const data = {};
  data.publishReason = reader.u8();
  data.ownerId = reader.u64();
  data.npcData = read24(reader, version2);
  return data;
}
function write26(writer, data) {
  writer.u8(data.publishReason);
  writer.u64(data.ownerId);
  write24(writer, data.npcData);
}
var name14 = "NewNpcSummon";

// src/packets/log/structures/EquipItemData.ts
function read27(reader, version2) {
  const data = {};
  data.slot = reader.u16();
  data.level = reader.u16();
  data.itemTint = reader.bytes(reader.u16(), 3, 14);
  data.expireTime = read(reader);
  data.id = reader.u32();
  return data;
}
function write27(writer, data) {
  writer.u16(data.slot);
  writer.u16(data.level);
  writer.bytes(data.itemTint, { maxLen: 3, lenType: "u16", multiplier: 14 });
  write(writer, data.expireTime);
  writer.u32(data.id);
}

// src/packets/log/structures/PCStruct.ts
function read28(reader, version2) {
  const data = {};
  data.maxItemLevel = reader.f32();
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const z = {};
      z.statType = reader.u8();
      z.value = read2(reader, version2);
      return z;
    },
    152
  );
  data.name = reader.string(20);
  data.heading = read3(reader, version2);
  data.characterId = reader.u64();
  data.playerId = reader.u64();
  data.addonSkillFeatureList = reader.array(
    reader.u16(),
    () => {
      const C = {};
      C.addonSkillFeatureIdList = reader.array(reader.u16(), () => reader.u32(), 5);
      C.skillId = reader.u32();
      return C;
    },
    200
  );
  data.classId = reader.u16();
  data.level = reader.u16();
  data.statusEffectDatas = reader.array(reader.u16(), () => read20(reader, version2), 80);
  if (version2 >= 1) {
    data.avgItemLevel = reader.f32();
    data.position = read4(reader);
    data.equipItemDataList = reader.array(reader.u16(), () => read27(reader, version2), 32);
    data.equipLifeToolDataList = reader.array(reader.u16(), () => read27(reader, version2), 9);
    data.guildName = reader.string(20);
    if (version2 >= 2) {
      data.guildId = reader.u64();
    } else {
      data.guildId = BigInt(reader.u32());
    }
  } else {
    data.avgItemLevel = data.maxItemLevel;
    data.position = { x: 0, y: 0, z: 0 };
    data.equipItemDataList = [];
    data.equipLifeToolDataList = [];
    data.guildName = "";
    data.guildId = 0n;
  }
  return data;
}
function write28(writer, data) {
  writer.f32(data.maxItemLevel);
  writer.array(data.statPair, { maxLen: 152, lenType: "u16" }, (obj) => {
    writer.u8(obj.statType);
    write2(writer, obj.value);
  });
  writer.string(data.name, 20);
  write3(writer, data.heading);
  writer.u64(data.characterId);
  writer.u64(data.playerId);
  writer.array(
    data.addonSkillFeatureList,
    { maxLen: 200, lenType: "u16" },
    (obj) => {
      writer.array(obj.addonSkillFeatureIdList, { maxLen: 5, lenType: "u16" }, (obj2) => {
        writer.u32(obj2);
      });
      writer.u32(obj.skillId);
    }
  );
  writer.u16(data.classId);
  writer.u16(data.level);
  writer.array(data.statusEffectDatas, { maxLen: 80, lenType: "u16" }, (obj) => {
    write20(writer, obj);
  });
  writer.f32(data.avgItemLevel);
  write4(writer, data.position);
  writer.array(data.equipItemDataList, { maxLen: 32, lenType: "u16" }, (obj) => {
    write27(writer, obj);
  });
  writer.array(data.equipLifeToolDataList, { maxLen: 9, lenType: "u16" }, (obj) => {
    write27(writer, obj);
  });
  writer.string(data.guildName, 20);
  writer.u64(data.guildId);
}

// src/packets/log/definitions/NewPC.ts
function read29(reader, version2) {
  const data = {};
  data.pcStruct = read28(reader, version2);
  return data;
}
function write29(writer, data) {
  write28(writer, data.pcStruct);
}
var name15 = "NewPC";

// src/packets/log/structures/ProjectileInfo.ts
function read30(reader, version2) {
  const data = {};
  data.tripodIndex = read5(reader, version2);
  data.chainSkillEffect = reader.u32();
  data.skillEffect = reader.u32();
  data.skillId = reader.u32();
  data.targetObjectId = reader.u64();
  data.ownerId = reader.u64();
  data.skillLevel = reader.u8();
  data.projectileId = reader.u64();
  data.tripodLevel = read6(reader, version2);
  return data;
}
function write30(writer, data) {
  write5(writer, data.tripodIndex);
  writer.u32(data.chainSkillEffect);
  writer.u32(data.skillEffect);
  writer.u32(data.skillId);
  writer.u64(data.targetObjectId);
  writer.u64(data.ownerId);
  writer.u8(data.skillLevel);
  writer.u64(data.projectileId);
  write6(writer, data.tripodLevel);
}

// src/packets/log/definitions/NewProjectile.ts
function read31(reader, version2) {
  const data = {};
  data.projectileInfo = read30(reader, version2);
  return data;
}
function write31(writer, data) {
  write30(writer, data.projectileInfo);
}
var name16 = "NewProjectile";

// src/packets/log/definitions/ParalyzationStateNotify.ts
function read32(reader, version2) {
  const data = {};
  data.enable = reader.bool();
  data.paralyzationPoint = reader.u32();
  data.decreasePoint = reader.u32();
  data.paralyzationMaxPoint = reader.u32();
  data.noHitCheckTime = reader.u32();
  data.hitCheckTime = reader.u32();
  data.objectId = reader.u64();
  return data;
}
function write32(writer, data) {
  writer.bool(data.enable);
  writer.u32(data.paralyzationPoint);
  writer.u32(data.decreasePoint);
  writer.u32(data.paralyzationMaxPoint);
  writer.u32(data.noHitCheckTime);
  writer.u32(data.hitCheckTime);
  writer.u64(data.objectId);
}
var name17 = "ParalyzationStateNotify";

// src/packets/log/structures/PartyMemberData.ts
function read33(reader, version2) {
  const data = {};
  data.maxHp = read2(reader, version2);
  data.characterId = reader.u64();
  data.position = read4(reader, version2);
  data.transitIndex = reader.u32();
  data.curHp = read2(reader, version2);
  data.characterLevel = reader.u16();
  data.gearLevel = reader.f32();
  data.zoneId = reader.u32();
  data.partyMemberNumber = reader.u8();
  data.name = reader.string(20);
  data.zoneInstId = reader.u64();
  data.worldId = reader.u8();
  data.classId = reader.u16();
  data.auths = reader.u8();
  return data;
}
function write33(writer, data) {
  write2(writer, data.maxHp);
  writer.u64(data.characterId);
  write4(writer, data.position);
  writer.u32(data.transitIndex);
  write2(writer, data.curHp);
  writer.u16(data.characterLevel);
  writer.f32(data.gearLevel);
  writer.u32(data.zoneId);
  writer.u8(data.partyMemberNumber);
  writer.string(data.name, 20);
  writer.u64(data.zoneInstId);
  writer.u8(data.worldId);
  writer.u16(data.classId);
  writer.u8(data.auths);
}

// src/packets/log/definitions/PartyInfo.ts
function read34(reader, version2) {
  const data = {};
  data.raidInstanceId = reader.u32();
  data.lootGrade = reader.u32();
  data.partyType = reader.u8();
  data.partyInstanceId = reader.u32();
  data.partyLootType = reader.u8();
  data.memberDatas = reader.array(reader.u16(), () => read33(reader, version2), 40);
  return data;
}
function write34(writer, data) {
  writer.u32(data.raidInstanceId);
  writer.u32(data.lootGrade);
  writer.u8(data.partyType);
  writer.u32(data.partyInstanceId);
  writer.u8(data.partyLootType);
  writer.array(data.memberDatas, { maxLen: 40, lenType: "u16" }, (obj) => {
    write33(writer, obj);
  });
}
var name18 = "PartyInfo";

// src/packets/log/definitions/PartyLeaveResult.ts
function read35(reader, version2) {
  const data = {};
  data.partyLeaveType = reader.u8();
  data.partyInstanceId = reader.u32();
  data.name = reader.string(20);
  return data;
}
function write35(writer, data) {
  writer.u8(data.partyLeaveType);
  writer.u32(data.partyInstanceId);
  writer.string(data.name, 20);
}
var name19 = "PartyLeaveResult";

// src/packets/log/definitions/PartyPassiveStatusEffectAddNotify.ts
function read36(reader, version2) {
  const data = {};
  data.objectId = reader.u64();
  data.passiveStatusEffectList = reader.array(reader.u16(), () => reader.u32(), 10);
  data.unk0_m = reader.u8();
  return data;
}
function write36(writer, data) {
  writer.u64(data.objectId);
  writer.array(data.passiveStatusEffectList, { maxLen: 10, lenType: "u16" }, (obj) => {
    writer.u32(obj);
  });
  writer.u8(data.unk0_m);
}
var name20 = "PartyPassiveStatusEffectAddNotify";

// src/packets/log/definitions/PartyPassiveStatusEffectRemoveNotify.ts
function read37(reader, version2) {
  const data = {};
  data.objectId = reader.u64();
  data.passiveStatusEffectList = reader.array(reader.u16(), () => reader.u32(), 10);
  return data;
}
function write37(writer, data) {
  writer.u64(data.objectId);
  writer.array(data.passiveStatusEffectList, { maxLen: 10, lenType: "u16" }, (obj) => {
    writer.u32(obj);
  });
}
var name21 = "PartyPassiveStatusEffectRemoveNotify";

// src/packets/log/definitions/PartyStatusEffectAddNotify.ts
function read38(reader, version2) {
  const data = {};
  data.characterId = reader.u64();
  data.statusEffectDatas = reader.array(reader.u16(), () => read20(reader, version2), 80);
  data.playerIdOnRefresh = reader.u64();
  return data;
}
function write38(writer, data) {
  writer.u64(data.characterId);
  writer.array(data.statusEffectDatas, { maxLen: 80, lenType: "u16" }, (obj) => {
    write20(writer, obj);
  });
  writer.u64(data.playerIdOnRefresh);
}
var name22 = "PartyStatusEffectAddNotify";

// src/packets/log/definitions/PartyStatusEffectRemoveNotify.ts
function read39(reader, version2) {
  const data = {};
  data.characterId = reader.u64();
  data.statusEffectIds = reader.array(reader.u16(), () => reader.u32(), 80);
  data.reason = reader.u8();
  return data;
}
function write39(writer, data) {
  writer.u64(data.characterId);
  writer.array(data.statusEffectIds, { maxLen: 80, lenType: "u16" }, (obj) => {
    writer.u32(obj);
  });
  writer.u8(data.reason);
}
var name23 = "PartyStatusEffectRemoveNotify";

// src/packets/log/definitions/PartyStatusEffectResultNotify.ts
function read40(reader, version2) {
  const data = {};
  data.partyInstanceId = reader.u32();
  data.raidInstanceId = reader.u32();
  data.characterId = reader.u64();
  return data;
}
function write40(writer, data) {
  writer.u32(data.partyInstanceId);
  writer.u32(data.raidInstanceId);
  writer.u64(data.characterId);
}
var name24 = "PartyStatusEffectResultNotify";

// src/packets/log/definitions/PassiveStatusEffectAddNotify.ts
function read41(reader, version2) {
  const data = {};
  data.passiveStatusEffectList = reader.array(reader.u16(), () => reader.u32(), 10);
  return data;
}
function write41(writer, data) {
  writer.array(data.passiveStatusEffectList, { maxLen: 10, lenType: "u16" }, (obj) => {
    writer.u32(obj);
  });
}
var name25 = "PassiveStatusEffectAddNotify";

// src/packets/log/definitions/PassiveStatusEffectRemoveNotify.ts
function read42(reader, version2) {
  const data = {};
  data.passiveStatusEffectList = reader.array(reader.u16(), () => reader.u32(), 10);
  return data;
}
function write42(writer, data) {
  writer.array(data.passiveStatusEffectList, { maxLen: 10, lenType: "u16" }, (obj) => {
    writer.u32(obj);
  });
}
var name26 = "PassiveStatusEffectRemoveNotify";

// src/packets/log/definitions/RaidBossKillNotify.ts
function read43(reader, version2) {
  const data = {};
  if (version2 >= 4)
    data.typeId = reader.u32();
  else
    data.typeId = 0;
  return data;
}
function write43(writer, data) {
  writer.u32(data.typeId);
}
var name27 = "RaidBossKillNotify";

// src/packets/log/definitions/RaidResult.ts
function read44(reader, version2) {
  const data = {};
  if (version2 >= 3) {
    data.raidResult = reader.u8();
  } else {
    data.raidResult = 0;
  }
  return data;
}
function write44(writer, data) {
  writer.u8(data.raidResult);
}
var name28 = "RaidResult";

// src/packets/log/structures/UnpublishObject.ts
function read45(reader, version2) {
  const data = {};
  data.unpublishReason = reader.u8();
  data.objectId = reader.u64();
  return data;
}
function write45(writer, data) {
  writer.u8(data.unpublishReason);
  writer.u64(data.objectId);
}

// src/packets/log/definitions/RemoveObject.ts
function read46(reader, version2) {
  const data = {};
  data.unpublishedObjects = reader.array(reader.u16(), () => read45(reader, version2), 200);
  return data;
}
function write46(writer, data) {
  writer.array(data.unpublishedObjects, { maxLen: 200, lenType: "u16" }, (obj) => {
    write45(writer, obj);
  });
}
var name29 = "RemoveObject";

// src/packets/log/structures/SkillDamageEvent.ts
function read47(reader, version2) {
  const data = {};
  data.modifier = reader.u8();
  data.targetId = reader.u64();
  data.damageType = reader.u8();
  if (reader.bool())
    data.damageAttr = reader.u8();
  data.curHp = read2(reader, version2);
  data.unk3_m = reader.u16();
  data.maxHp = read2(reader, version2);
  data.damage = read2(reader, version2);
  return data;
}
function write47(writer, data) {
  writer.u8(data.modifier);
  writer.u64(data.targetId);
  writer.u8(data.damageType);
  if (writer.bool(data.damageAttr !== void 0))
    writer.u8(data.damageAttr);
  write2(writer, data.curHp);
  writer.u16(data.unk3_m);
  write2(writer, data.maxHp);
  write2(writer, data.damage);
}

// src/packets/log/structures/SkillDamageAbnormalMoveEvent.ts
function read48(reader, version2) {
  const data = {};
  data.skillMoveOptionData = read7(reader, version2);
  data.destination = read4(reader, version2);
  data.position = read4(reader, version2);
  data.skillDamageEvent = read47(reader, version2);
  return data;
}
function write48(writer, data) {
  write7(writer, data.skillMoveOptionData);
  write4(writer, data.destination);
  write4(writer, data.position);
  write47(writer, data.skillDamageEvent);
}

// src/packets/log/definitions/SkillDamageAbnormalMoveNotify.ts
function read49(reader, version2) {
  const data = {};
  data.skillId = reader.u32();
  data.skillDamageAbnormalMoveEvents = reader.array(
    reader.u16(),
    () => read48(reader, version2),
    50
  );
  data.skillEffectId = reader.u32();
  data.sourceId = reader.u64();
  return data;
}
function write49(writer, data) {
  writer.u32(data.skillId);
  writer.array(
    data.skillDamageAbnormalMoveEvents,
    { maxLen: 50, lenType: "u16" },
    (obj) => {
      write48(writer, obj);
    }
  );
  writer.u32(data.skillEffectId);
  writer.u64(data.sourceId);
}
var name30 = "SkillDamageAbnormalMoveNotify";

// src/packets/log/definitions/SkillDamageNotify.ts
function read50(reader, version2) {
  const data = {};
  data.skillLevel = reader.u8();
  data.sourceId = reader.u64();
  data.skillId = reader.u32();
  data.skillDamageEvents = reader.array(reader.u16(), () => read47(reader, version2), 50);
  data.skillEffectId = reader.u32();
  return data;
}
function write50(writer, data) {
  writer.u8(data.skillLevel);
  writer.u64(data.sourceId);
  writer.u32(data.skillId);
  writer.array(data.skillDamageEvents, { maxLen: 50, lenType: "u16" }, (obj) => {
    write47(writer, obj);
  });
  writer.u32(data.skillEffectId ?? 0);
}
var name31 = "SkillDamageNotify";

// src/packets/log/definitions/SkillStageNotify.ts
function read51(reader, version2) {
  const data = {};
  data.sourceId = reader.u64();
  data.skillId = reader.u32();
  data.stage = reader.u8();
  return data;
}
function write51(writer, data) {
  writer.u64(data.sourceId);
  writer.u32(data.skillId);
  writer.u8(data.stage);
}
var name32 = "SkillStageNotify";

// src/packets/log/definitions/SkillStartNotify.ts
function read52(reader, version2) {
  const data = {};
  data.sourceId = reader.u64();
  data.curDirectionYaw = read3(reader, version2);
  data.newDirectionYaw = read3(reader, version2);
  data.aimTargetPosition = read4(reader, version2);
  if (reader.bool())
    data.pitchRotation = read3(reader, version2);
  if (reader.bool())
    data.aiStateId = reader.u32();
  data.curPosition = read4(reader, version2);
  if (reader.bool())
    data.unk1_m = reader.u32();
  data.skillLevel = reader.u8();
  data.newPosition = read4(reader, version2);
  data.skillId = reader.u32();
  data.skillOptionData = read8(reader, version2);
  return data;
}
function write52(writer, data) {
  writer.u64(data.sourceId);
  write3(writer, data.curDirectionYaw);
  write3(writer, data.newDirectionYaw);
  write4(writer, data.aimTargetPosition);
  if (writer.bool(data.pitchRotation !== void 0))
    write3(writer, data.pitchRotation);
  if (writer.bool(data.aiStateId !== void 0))
    writer.u32(data.aiStateId);
  write4(writer, data.curPosition);
  if (writer.bool(data.unk1_m !== void 0))
    writer.u32(data.unk1_m);
  writer.u8(data.skillLevel);
  write4(writer, data.newPosition);
  writer.u32(data.skillId);
  write8(writer, data.skillOptionData);
}
var name33 = "SkillStartNotify";

// src/packets/log/definitions/StatusEffectAddNotify.ts
function read53(reader, version2) {
  const data = {};
  data.statusEffectData = read20(reader, version2);
  data.objectId = reader.u64();
  data.new = reader.bool();
  return data;
}
function write53(writer, data) {
  write20(writer, data.statusEffectData);
  writer.u64(data.objectId);
  writer.bool(data.new);
}
var name34 = "StatusEffectAddNotify";

// src/packets/log/definitions/StatusEffectRemoveNotify.ts
function read54(reader, version2) {
  const data = {};
  data.statusEffectIds = reader.array(reader.u16(), () => reader.u32(), 80);
  data.objectId = reader.u64();
  data.reason = reader.u8();
  return data;
}
function write54(writer, data) {
  writer.array(data.statusEffectIds, { maxLen: 80, lenType: "u16" }, (obj) => {
    writer.u32(obj);
  });
  writer.u64(data.objectId);
  writer.u8(data.reason);
}
var name35 = "StatusEffectRemoveNotify";

// src/packets/log/definitions/StatusEffectDurationNotify.ts
function read55(reader, version2) {
  const data = {};
  data.effectInstanceId = reader.u32();
  data.targetId = reader.u64();
  data.expirationTick = reader.u64();
  return data;
}
function write55(writer, data) {
  writer.u32(data.effectInstanceId);
  writer.u64(data.targetId);
  writer.u64(data.expirationTick);
}
var name36 = "StatusEffectDurationNotify";

// src/packets/log/definitions/StatusEffectSyncDataNotify.ts
function read56(reader, version2) {
  const data = {};
  data.objectId = reader.u64();
  data.effectInstanceId = reader.u32();
  data.characterId = reader.u64();
  data.value = reader.u32();
  return data;
}
function write56(writer, data) {
  writer.u64(data.objectId);
  writer.u32(data.effectInstanceId);
  writer.u64(data.characterId);
  writer.u32(data.value);
}
var name37 = "StatusEffectSyncDataNotify";

// src/packets/log/definitions/TriggerBossBattleStatus.ts
function read57(reader, version2) {
  const data = {};
  data.step = reader.u32();
  data.unk2_m = reader.bool();
  data.triggerId = reader.u32();
  return data;
}
function write57(writer, data) {
  writer.u32(data.step);
  writer.bool(data.unk2_m);
  writer.u32(data.triggerId);
}
var name38 = "TriggerBossBattleStatus";

// src/packets/log/definitions/TriggerFinishNotify.ts
function read58(reader, version2) {
  const data = {};
  data.packetResultCode = reader.u32();
  data.triggerId = reader.u32();
  data.unk0_m = reader.u32();
  data.involvedPCs = reader.array(reader.u16(), () => reader.u64(), 40);
  return data;
}
function write58(writer, data) {
  writer.u32(data.packetResultCode);
  writer.u32(data.triggerId);
  writer.u32(data.unk0_m);
  writer.array(data.involvedPCs, { maxLen: 40, lenType: "u16" }, (obj) => {
    writer.u64(obj);
  });
}
var name39 = "TriggerFinishNotify";

// src/packets/log/definitions/TriggerStartNotify.ts
function read59(reader, version2) {
  const data = {};
  data.triggerId = reader.u32();
  data.triggerSignalType = reader.u32();
  data.sourceId = reader.u64();
  data.involvedPCs = reader.array(reader.u16(), () => reader.u64(), 40);
  return data;
}
function write59(writer, data) {
  writer.u32(data.triggerId);
  writer.u32(data.triggerSignalType);
  writer.u64(data.sourceId);
  writer.array(data.involvedPCs, { maxLen: 40, lenType: "u16" }, (obj) => {
    writer.u64(obj);
  });
}
var name40 = "TriggerStartNotify";

// src/packets/log/definitions/TroopMemberUpdateMinNotify.ts
function read60(reader, version2) {
  const data = {};
  data.maxHp = read2(reader, version2);
  data.characterId = reader.u64();
  data.unk0_m = reader.u32();
  data.statusEffectDatas = reader.array(reader.u16(), () => read20(reader, version2), 80);
  data.position = reader.u64();
  data.curHp = read2(reader, version2);
  return data;
}
function write60(writer, data) {
  write2(writer, data.maxHp);
  writer.u64(data.characterId);
  writer.u32(data.unk0_m);
  writer.array(data.statusEffectDatas, { maxLen: 80, lenType: "u16" }, (obj) => {
    write20(writer, obj);
  });
  writer.u64(data.position);
  write2(writer, data.curHp);
}
var name41 = "TroopMemberUpdateMinNotify";

// src/packets/log/definitions/IdentityGaugeChangeNotify.ts
function read61(reader, version2) {
  const data = {};
  data.identityGauge1 = reader.u32();
  data.identityGauge2 = reader.u32();
  data.identityGauge3 = reader.u32();
  data.playerId = reader.u64();
  return data;
}
function write61(writer, data) {
  writer.u32(data.identityGauge1);
  writer.u32(data.identityGauge2);
  writer.u32(data.identityGauge3);
  writer.u64(data.playerId);
}
var name42 = "IdentityGaugeChangeNotify";

// src/packets/log/definitions/ZoneObjectUnpublishNotify.ts
function read62(reader, version2) {
  const data = {};
  data.objectId = reader.u64();
  return data;
}
function write62(writer, data) {
  writer.u64(data.objectId);
}
var name43 = "ZoneObjectUnpublishNotify";

// src/packets/log/structures/ZoneStatusEffectData.ts
function read63(reader, version2) {
  const data = {};
  data.stackCount = reader.u8();
  data.target = reader.u8();
  data.id = reader.u32();
  return data;
}
function write63(writer, data) {
  writer.u8(data.stackCount);
  writer.u8(data.target);
  writer.u32(data.id);
}

// src/packets/log/definitions/ZoneStatusEffectAddNotify.ts
function read64(reader, version2) {
  const data = {};
  data.zoneStatusEffectDataList = reader.array(reader.u16(), () => read63(reader, version2), 4);
  return data;
}
function write64(writer, data) {
  writer.array(
    data.zoneStatusEffectDataList,
    { maxLen: 4, lenType: "u16" },
    (obj) => {
      write63(writer, obj);
    }
  );
}
var name44 = "ZoneStatusEffectAddNotify";

// src/packets/log/definitions/ZoneStatusEffectRemoveNotify.ts
function read65(reader, version2) {
  const data = {};
  data.statusEffectId = reader.u32();
  return data;
}
function write65(writer, data) {
  writer.u32(data.statusEffectId);
}
var name45 = "ZoneStatusEffectRemoveNotify";

// src/packets/log/definitions/SkillCastNotify.ts
function read66(reader, version2) {
  const data = {};
  data.skillLevel = reader.u8();
  data.caster = reader.u64();
  data.skillId = reader.u32();
  return data;
}
function write66(writer, data) {
  writer.u8(data.skillLevel);
  writer.u64(data.caster);
  writer.u32(data.skillId);
}
var name46 = "SkillCastNotify";

// src/packets/log/definitions/IdentityStanceChangeNotify.ts
function read67(reader, version2) {
  const data = {};
  data.objectId = reader.u64();
  data.stance = reader.u8();
  return data;
}
function write67(writer, data) {
  writer.u64(data.objectId);
  writer.u8(data.stance);
}
var name47 = "IdentityStanceChangeNotify";

// src/packets/log/definitions/EquipChangeNotify.ts
function read68(reader, version2) {
  const data = {};
  data.objectId = reader.u64();
  data.equipItemDataList = reader.array(reader.u16(), () => read27(reader, version2), 32);
  return data;
}
function write68(writer, data) {
  writer.u64(data.objectId);
  writer.array(data.equipItemDataList, { maxLen: 32, lenType: "u16" }, (obj) => {
    write27(writer, obj);
  });
}
var name48 = "EquipChangeNotify";

// src/packets/log/definitions/EquipLifeToolChangeNotify.ts
function read69(reader, version2) {
  const data = {};
  data.objectId = reader.u64();
  data.equipLifeToolDataList = reader.array(reader.u16(), () => read27(reader, version2), 9);
  return data;
}
function write69(writer, data) {
  writer.u64(data.objectId);
  writer.array(data.equipLifeToolDataList, { maxLen: 9, lenType: "u16" }, (obj) => {
    write27(writer, obj);
  });
}
var name49 = "EquipLifeToolChangeNotify";

// src/packets/log/structures/ItemData.ts
function read70(reader, version2) {
  const data = {};
  if (reader.bool()) {
    data.serialNumber = reader.u64();
    data.id = reader.u32();
    data.level = reader.u16();
    data.slot = reader.u16();
    data.durability = reader.u32();
    data.unk1_6_m = reader.u32();
    data.flag = reader.u32();
    data.expireTime = read(reader);
    data.lockUpdateTime = read(reader);
  }
  return data;
}
function write70(writer, data) {
  if (writer.bool(data.slot !== void 0)) {
    writer.u64(data.serialNumber);
    writer.u32(data.id);
    writer.u16(data.level);
    writer.u16(data.slot);
    writer.u32(data.durability);
    writer.u32(data.unk1_6_m);
    writer.u32(data.flag);
    write(writer, data.expireTime);
    write(writer, data.lockUpdateTime);
  }
}

// src/packets/log/definitions/InitItem.ts
function read71(reader, version2) {
  const data = {};
  data.itemDataList = reader.array(reader.u16(), () => read70(reader, version2), 80);
  data.storageType = reader.u8();
  return data;
}
function write71(writer, data) {
  writer.array(
    [1 /* equip */, 20 /* account_equip */].includes(data.storageType) ? data.itemDataList : [],
    // We only log StorageType.Equip because we don't want to fill log files with full player inventory & stash
    { maxLen: 80, lenType: "u16" },
    (obj) => {
      write70(writer, obj);
    }
  );
  writer.u8(data.storageType);
}
var name50 = "InitItem";

// src/packets/log/structures/BossKillData.ts
function read72(reader, version2) {
  const data = {};
  data.npcId = reader.u32();
  data.isDead = reader.bool();
  return data;
}
function write72(writer, data) {
  writer.u32(data.npcId);
  writer.bool(data.isDead);
}

// src/packets/log/definitions/RaidBegin.ts
function read73(reader, version2) {
  const data = {};
  data.raidResult = reader.u8();
  data.raidId = reader.u32();
  data.totalTime = reader.u64();
  data.bossKillDataList = reader.array(reader.u16(), () => read72(reader, version2), 3);
  data.endTick = reader.u64();
  data.startTick = reader.u64();
  return data;
}
function write73(writer, data) {
  writer.u8(data.raidResult);
  writer.u32(data.raidId);
  writer.u64(data.totalTime);
  writer.array(data.bossKillDataList, { maxLen: 3, lenType: "u16" }, (obj) => {
    write72(writer, obj);
  });
  writer.u64(data.endTick);
  writer.u64(data.startTick);
}
var name51 = "RaidBegin";

// src/packets/log/definitions/ZoneMemberLoadStatusNotify.ts
function read74(reader, version2) {
  const data = {};
  data.zoneInstId = reader.u64();
  data.zoneId = reader.u32();
  data.loadComplete = reader.bool();
  data.completeMembers = reader.array(reader.u16(), () => reader.u64(), 40);
  data.totalMembers = reader.array(reader.u16(), () => reader.u64(), 40);
  data.firstPCEnterTick = reader.u64();
  data.zoneLevel = reader.u8();
  return data;
}
function write74(writer, data) {
  writer.u64(data.zoneInstId);
  writer.u32(data.zoneId);
  writer.bool(data.loadComplete);
  writer.array(data.completeMembers, { maxLen: 40, lenType: "u16" }, (obj) => {
    writer.u64(obj);
  });
  writer.array(data.totalMembers, { maxLen: 40, lenType: "u16" }, (obj) => {
    writer.u64(obj);
  });
  writer.u64(data.firstPCEnterTick);
  writer.u8(data.zoneLevel);
}
var name52 = "ZoneMemberLoadStatusNotify";

// src/packets/log/structures/TrapData.ts
function read75(reader, version2) {
  const data = {};
  data.position = read4(reader);
  data.objectId = reader.u64();
  data.ownerId = reader.u64();
  data.skillId = reader.u32();
  data.skillEffect = reader.u32();
  return data;
}
function write75(writer, data) {
  write4(writer, data.position);
  writer.u64(data.objectId);
  writer.u64(data.ownerId);
  writer.u32(data.skillId);
  writer.u32(data.skillEffect);
}

// src/packets/log/definitions/NewTrap.ts
function read76(reader, version2) {
  const data = {};
  data.trapData = read75(reader, version2);
  return data;
}
function write76(writer, data) {
  write75(writer, data.trapData);
}
var name53 = "NewTrap";

// src/packets/log/definitions/SkillCancelNotify.ts
function read77(reader, version2) {
  const data = {};
  data.skillId = reader.u32();
  data.caster = reader.u64();
  data.newDirectionYaw = read3(reader);
  data.cancelReason = reader.u8();
  data.newPosition = read4(reader);
  return data;
}
function write77(writer, data) {
  writer.u32(data.skillId);
  writer.u64(data.caster);
  write3(writer, data.newDirectionYaw);
  writer.u8(data.cancelReason);
  write4(writer, data.newPosition);
}
var name54 = "SkillCancelNotify";

// src/packets/log/app/APP_StatApi.ts
function read78(reader, version2) {
  const data = {};
  data.players = reader.array(
    reader.u8(),
    () => {
      const l = {};
      l.name = reader.string(20);
      l.stats = reader.array(
        reader.u8(),
        () => {
          const i = {};
          i.id = reader.u8();
          i.value = reader.u32();
          return i;
        },
        100
      );
      if (version2 >= 4) {
        l.elixirs = reader.array(
          reader.u8(),
          () => {
            const i = {};
            i.slot = reader.u8();
            i.entries = reader.array(reader.u8(), () => {
              const j = {};
              j.level = reader.u8();
              j.id = reader.u32();
              return j;
            });
            return i;
          },
          32
        );
      }
      if (version2 >= 5) {
        l.gems = reader.array(reader.u8(), () => {
          const i = {};
          i.id = reader.u32();
          i.skillId = reader.u32();
          i.type = reader.u8();
          i.value = reader.u16();
        });
      }
      return l;
    },
    24
  );
  return data;
}
function write78(writer, data) {
  writer.array(data.players, { maxLen: 24, lenType: "u8" }, (obj) => {
    writer.string(obj.name, 20);
    writer.array(obj.stats, { maxLen: 100, lenType: "u8" }, (obj2) => {
      writer.u8(obj2.id);
      writer.u32(obj2.value);
    });
    writer.array(
      obj.elixirs,
      { maxLen: 32, lenType: "u8" },
      (obj3) => {
        writer.u8(obj3.slot);
        writer.array(obj3.entries, { maxLen: 5, lenType: "u8" }, (obj4) => {
          writer.u8(obj4.level);
          writer.u32(obj4.id);
        });
      }
    );
    writer.array(
      obj.gems,
      { maxLen: 20, lenType: "u8" },
      //20 in case they ever change gems count
      (obj4) => {
        writer.u32(obj4.id);
        writer.u32(obj4.skillId);
        writer.u8(obj4.type);
        writer.u16(obj4.value);
      }
    );
  });
}
var name55 = "APP_StatApi";

// src/packets/log/logMapping.ts
var logMapping = /* @__PURE__ */ new Map([
  [101 /* SkillCooldownNotify */, [name, read9, write9]],
  [0 /* AbilityChangeNotify */, [name2, read11, write11]],
  [1 /* ActiveAbilityNotify */, [name3, read13, write13]],
  [
    2 /* AddonSkillFeatureChangeNotify */,
    [name4, read14, write14]
  ],
  [
    4 /* BlockSkillStateNotify */,
    [name5, read15, write15]
  ],
  [5 /* CounterAttackNotify */, [name6, read16, write16]],
  [6 /* DeathNotify */, [name7, read17, write17]],
  [7 /* InitAbility */, [name8, read18, write18]],
  [8 /* InitEnv */, [name9, read19, write19]],
  [9 /* InitPC */, [name10, read21, write21]],
  [10 /* InitLocal */, [name11, read22, write22]],
  [11 /* MigrationExecute */, [name12, read23, write23]],
  [12 /* NewNpc */, [name13, read25, write25]],
  [13 /* NewNpcSummon */, [name14, read26, write26]],
  [14 /* NewPC */, [name15, read29, write29]],
  [15 /* NewProjectile */, [name16, read31, write31]],
  [
    16 /* ParalyzationStateNotify */,
    [name17, read32, write32]
  ],
  [17 /* PartyInfo */, [name18, read34, write34]],
  [18 /* PartyLeaveResult */, [name19, read35, write35]],
  [
    19 /* PartyPassiveStatusEffectAddNotify */,
    [
      name20,
      read36,
      write36
    ]
  ],
  [
    20 /* PartyPassiveStatusEffectRemoveNotify */,
    [
      name21,
      read37,
      write37
    ]
  ],
  [
    21 /* PartyStatusEffectAddNotify */,
    [name22, read38, write38]
  ],
  [
    22 /* PartyStatusEffectRemoveNotify */,
    [name23, read39, write39]
  ],
  [
    23 /* PartyStatusEffectResultNotify */,
    [name24, read40, write40]
  ],
  [
    24 /* PassiveStatusEffectAddNotify */,
    [name25, read41, write41]
  ],
  [
    25 /* PassiveStatusEffectRemoveNotify */,
    [
      name26,
      read42,
      write42
    ]
  ],
  [26 /* RaidBossKillNotify */, [name27, read43, write43]],
  [27 /* RaidResult */, [name28, read44, write44]],
  [28 /* RemoveObject */, [name29, read46, write46]],
  [
    29 /* SkillDamageAbnormalMoveNotify */,
    [name30, read49, write49]
  ],
  [30 /* SkillDamageNotify */, [name31, read50, write50]],
  [31 /* SkillStageNotify */, [name32, read51, write51]],
  [32 /* SkillStartNotify */, [name33, read52, write52]],
  [
    34 /* StatusEffectAddNotify */,
    [name34, read53, write53]
  ],
  [
    35 /* StatusEffectRemoveNotify */,
    [name35, read54, write54]
  ],
  [
    36 /* StatusEffectDurationNotify */,
    [name36, read55, write55]
  ],
  [
    37 /* StatusEffectSyncDataNotify */,
    [name37, read56, write56]
  ],
  [
    38 /* TriggerBossBattleStatus */,
    [name38, read57, write57]
  ],
  [39 /* TriggerFinishNotify */, [name39, read58, write58]],
  [40 /* TriggerStartNotify */, [name40, read59, write59]],
  [
    41 /* TroopMemberUpdateMinNotify */,
    [name41, read60, write60]
  ],
  [
    42 /* IdentityGaugeChangeNotify */,
    [name42, read61, write61]
  ],
  [
    43 /* ZoneObjectUnpublishNotify */,
    [name43, read62, write62]
  ],
  [
    44 /* ZoneStatusEffectAddNotify */,
    [name44, read64, write64]
  ],
  [
    45 /* ZoneStatusEffectRemoveNotify */,
    [name45, read65, write65]
  ],
  [46 /* SkillCastNotify */, [name46, read66, write66]],
  [
    47 /* IdentityStanceChangeNotify */,
    [name47, read67, write67]
  ],
  [48 /* EquipChangeNotify */, [name48, read68, write68]],
  [
    49 /* EquipLifeToolChangeNotify */,
    [name49, read69, write69]
  ],
  [50 /* InitItem */, [name50, read71, write71]],
  [52 /* RaidBegin */, [name51, read73, write73]],
  [
    51 /* ZoneMemberLoadStatusNotify */,
    [name52, read74, write74]
  ],
  [53 /* NewTrap */, [name53, read76, write76]],
  [54 /* SkillCancelNotify */, [name54, read77, write77]],
  [6e4 /* APP_StatApi */, [name55, read78, write78]]
]);

// src/logger/logEvent.ts
var LogEvent = class {
  time;
  #logId;
  #data;
  #read;
  #write;
  constructor(...args) {
    if (args.length === 5) {
      const [data, logId2, time, read79, write79] = args;
      this.#data = data;
      this.time = time;
      this.#logId = logId2;
      this.#read = read79;
      this.#write = write79;
    } else if (args.length === 3) {
      const [pkt, logId2, write79] = args;
      this.#data = Buffer.alloc(0);
      this.time = /* @__PURE__ */ new Date();
      this.#logId = logId2;
      this.#read = () => pkt;
      this.#write = write79;
    } else {
      throw new Error(`[meter-core/logger/parser] - LogEvent<T>: Invalid constructor arguments`);
    }
  }
  // in case we listen for it more than once
  #readCached;
  get parsed() {
    if (!this.#readCached) {
      try {
        this.#readCached = this.#read(new Read(this.#data));
      } catch (e) {
        console.error(`[meter-core/logger/parser] - parsed - ${e}`);
        return void 0;
      }
    }
    return this.#readCached;
  }
  #writeCached;
  get serialized() {
    if (!this.#writeCached) {
      try {
        if (!this.parsed)
          return void 0;
        const writer = new Write();
        writer.skip(HEADER_FULL_SIZE);
        this.#write(writer, this.parsed);
        const buf = writer.value;
        buf.writeUint16LE(buf.length, HEADER_LEN_OFFSET);
        buf.writeUint16LE(this.#logId, HEADER_ID_OFFSET);
        buf.writeUintLE(+/* @__PURE__ */ new Date(), HEADER_DATE_OFFSET, HEADER_DATE_SIZE);
        this.#writeCached = writer.value;
      } catch (e) {
        console.error(`[meter-core/logger/parser] - serialized - ${e}`);
        return void 0;
      }
    }
    return this.#writeCached;
  }
};
var HEADER_VERSION_SIZE = 6;
var HEADER_LEN_SIZE = 2;
var HEADER_LEN_OFFSET = 0;
var HEADER_ID_SIZE = 2;
var HEADER_ID_OFFSET = HEADER_LEN_OFFSET + HEADER_LEN_SIZE;
var HEADER_DATE_SIZE = 6;
var HEADER_DATE_OFFSET = HEADER_ID_OFFSET + HEADER_ID_SIZE;
var HEADER_FULL_SIZE = HEADER_LEN_SIZE + HEADER_ID_SIZE + HEADER_DATE_SIZE;

// src/logger/logger.ts
import { createWriteStream } from "fs";
import { createReadStream } from "fs";

// src/packets/log/version.ts
var version = 5;

// src/logger/logger.ts
var Logger = class extends TypedEmitter {
  //Only common behaviour is the emitted logStreamEvent
};
var LiveLogger = class extends Logger {
  #decompressor;
  #logWriter;
  constructor(stream, decompressor, filepath) {
    super();
    this.#decompressor = decompressor;
    if (filepath) {
      this.#logWriter = createWriteStream(filepath, { highWaterMark: 0 });
    }
    const versionBuffer = Buffer.allocUnsafe(HEADER_VERSION_SIZE);
    versionBuffer.writeUIntLE(version, 0, HEADER_VERSION_SIZE);
    this.#logWriter?.write(versionBuffer);
    stream.on("*", this.handlePkt.bind(this));
  }
  handlePkt(data, opcode55, compression, xor) {
    try {
      const pktMap = mapping.get(opcode55);
      const codeMap = codeMapping.get(opcode55);
      if (pktMap && codeMap) {
        const [logId2] = codeMap;
        const [pktName, readPkt] = pktMap;
        const logMap = logMapping.get(logId2);
        if (logMap) {
          const [logName, readLog, writeLog] = logMap;
          const pkt = new PKT(Buffer.from(data), opcode55, compression, Boolean(xor), this.#decompressor, readPkt);
          const parsed = pkt.parsed;
          if (!parsed)
            return;
          const logEvent = new LogEvent(parsed, logId2, writeLog);
          this.emit(logName, logEvent);
          this.emit("*", logName, logEvent);
          this.appendLog(logEvent);
        }
      }
    } catch (e) {
      console.error(e);
    }
  }
  appendLog(logEvent) {
    if (this.#logWriter && logEvent.serialized)
      this.#logWriter.write(logEvent.serialized);
  }
};
var ReplayLogger = class extends Logger {
  readLogByChunk(filepath) {
    const pktBuffer = new PacketBuffer();
    const logReader = createReadStream(filepath);
    let end = false;
    let ver;
    logReader.on("data", (chunk) => {
      if (ver === void 0) {
        ver = this.readVersion(chunk);
        if (ver > version) {
          logReader.destroy();
          return;
        }
        chunk = chunk.subarray(HEADER_VERSION_SIZE);
      }
      pktBuffer.write(chunk);
      let pkt;
      while (pkt = pktBuffer.read()) {
        this.readLogChunk(pkt, ver);
      }
    }).on("end", () => {
      end = true;
      this.emit("fileEnd", "end");
    }).on("close", () => {
      if (!end)
        this.emit("fileEnd", "closed");
    });
  }
  readLogChunk(buf, version2) {
    try {
      if (buf.length < 8)
        return false;
      const logId2 = buf.readUIntLE(HEADER_ID_OFFSET, HEADER_ID_SIZE);
      const time = new Date(buf.readUintLE(HEADER_DATE_OFFSET, HEADER_DATE_SIZE));
      const data = buf.subarray(HEADER_FULL_SIZE);
      const logMap = logMapping.get(logId2);
      if (logMap) {
        const [logName, readLog, writeLog] = logMap;
        const logEvent = new LogEvent(data, logId2, new Date(time), (reader) => readLog(reader, version2), writeLog);
        this.emit(logName, logEvent);
        this.emit("*", logName, logEvent);
      }
    } catch (e) {
      console.error(e);
    }
  }
  readVersion(b) {
    return b.readUintLE(0, HEADER_VERSION_SIZE);
  }
};

export {
  write23 as write,
  logMapping,
  LogEvent,
  Logger,
  LiveLogger,
  ReplayLogger
};
