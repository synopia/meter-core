import {
  npcgrade
} from "./chunk-F546YONE.mjs";
import {
  __privateAdd,
  __privateGet,
  __privateMethod,
  __privateSet,
  __publicField
} from "./chunk-NZTU4WRF.mjs";

// src/logger/statustracker.ts
import { TypedEmitter } from "tiny-typed-emitter";

// src/logger/entityTracker.ts
var EntityTracker = class {
  #pcIdMapper;
  #partyTracker;
  #statusTracker;
  #data;
  entities = /* @__PURE__ */ new Map();
  localPlayer;
  constructor(pcIdMapper, partyTracker, statusTracker, data) {
    this.#pcIdMapper = pcIdMapper;
    this.#partyTracker = partyTracker;
    this.#statusTracker = statusTracker;
    this.#data = data;
    this.localPlayer = {
      entityId: 0n,
      entityType: 1 /* Player */,
      name: "You",
      class: 0,
      gearLevel: 0,
      characterId: 0n,
      stance: 0,
      stats: /* @__PURE__ */ new Map(),
      skills: /* @__PURE__ */ new Map(),
      items: {}
    };
  }
  processNewPC(pkt) {
    const parsed = pkt.parsed;
    if (!parsed)
      return;
    const player = {
      entityId: parsed.pcStruct.playerId,
      entityType: 1 /* Player */,
      name: parsed.pcStruct.name,
      class: parsed.pcStruct.classId,
      gearLevel: parsed.pcStruct.maxItemLevel,
      characterId: parsed.pcStruct.characterId,
      stance: 0,
      stats: this.#data.getStatPairMap(parsed.pcStruct.statPair),
      skills: /* @__PURE__ */ new Map(),
      items: {}
    };
    this.entities.set(player.entityId, player);
    const oldEntityId = this.#pcIdMapper.getEntityId(player.characterId);
    if (oldEntityId) {
      this.#partyTracker.changeEntityId(oldEntityId, parsed.pcStruct.playerId);
    }
    this.#pcIdMapper.addMapping(player.characterId, player.entityId);
    this.#partyTracker.completeEntry(player.characterId, player.entityId);
    this.#statusTracker.newPC(parsed, this.localPlayer.characterId, pkt.time);
    player.itemSet = this.getPlayerSetOptions(parsed.pcStruct.equipItemDataList);
    const equipList = [];
    parsed.pcStruct.equipItemDataList.forEach((item) => {
      if (item.id !== void 0 && item.slot !== void 0)
        equipList.push({ id: item.id, slot: item.slot });
    });
    player.items.equipList = equipList;
    const lifeToolList = [];
    parsed.pcStruct.equipLifeToolDataList.forEach((item) => {
      if (item.id !== void 0 && item.slot !== void 0)
        lifeToolList.push({ id: item.id, slot: item.slot });
    });
    player.items.lifeToolList = lifeToolList;
    return player;
  }
  processInitEnv(pkt) {
    const parsed = pkt.parsed;
    if (!parsed)
      return;
    if (this.localPlayer.entityId !== 0n)
      this.#partyTracker.changeEntityId(this.localPlayer.entityId, parsed.playerId);
    this.entities.clear();
    const player = {
      entityId: parsed.playerId,
      entityType: 1 /* Player */,
      name: this.localPlayer.name,
      class: this.localPlayer.class,
      gearLevel: this.localPlayer.gearLevel,
      characterId: this.localPlayer.characterId,
      stance: this.localPlayer.stance,
      stats: this.localPlayer.stats,
      skills: this.localPlayer.skills,
      items: this.localPlayer.items
    };
    this.localPlayer = player;
    this.entities.set(player.entityId, player);
    this.#pcIdMapper.clear();
    this.#statusTracker.Clear(pkt.time);
    if (player.characterId !== 0n)
      this.#pcIdMapper.addMapping(player.characterId, player.entityId);
    if (this.localPlayer && this.localPlayer.characterId && this.localPlayer.characterId > 0n)
      this.#partyTracker.completeEntry(this.localPlayer.characterId, parsed.playerId);
  }
  processInitPC(pkt) {
    const parsed = pkt.parsed;
    if (!parsed)
      return;
    this.entities.clear();
    const player = {
      entityId: parsed.playerId,
      entityType: 1 /* Player */,
      name: parsed.name,
      class: parsed.classId,
      gearLevel: parsed.gearLevel,
      characterId: parsed.characterId,
      stance: 0,
      stats: this.#data.getStatPairMap(parsed.statPair),
      skills: /* @__PURE__ */ new Map(),
      items: parsed.characterId === this.localPlayer.characterId ? this.localPlayer.items : {}
    };
    this.localPlayer = player;
    this.entities.set(player.entityId, player);
    this.#pcIdMapper.addMapping(player.characterId, player.entityId);
    this.#partyTracker.setOwnName(parsed.name);
    this.#partyTracker.completeEntry(player.characterId, parsed.playerId);
    this.#statusTracker.RemoveLocalObject(parsed.playerId, pkt.time);
    for (const se of parsed.statusEffectDatas) {
      const sourceEntity = this.getSourceEntity(se.sourceId);
      this.#statusTracker.RegisterStatusEffect(
        this.#statusTracker.buildStatusEffect(
          se,
          parsed.playerId,
          sourceEntity.entityId,
          1 /* Local */,
          pkt.time
        )
      );
    }
    return player;
  }
  processNewNpc(pkt) {
    const parsed = pkt.parsed;
    if (!parsed)
      return;
    let isBoss = false;
    const npcData = this.#data.npc.get(parsed.npcStruct.typeId);
    if (npcData && [6 /* boss */, 7 /* raid */, 9 /* epic_raid */, 10 /* commander */].includes(npcgrade[npcData.grade])) {
      isBoss = true;
    }
    const npc = {
      entityId: parsed.npcStruct.objectId,
      entityType: 2 /* Npc */,
      name: npcData?.name ?? parsed.npcStruct.objectId.toString(16),
      typeId: parsed.npcStruct.typeId,
      isBoss,
      grade: npcData?.grade ?? "none",
      pushimmune: npcData?.pushimmune ?? false,
      stats: this.#data.getStatPairMap(parsed.npcStruct.statPair),
      level: parsed.npcStruct.level,
      balanceLevel: parsed.npcStruct.balanceLevel ?? parsed.npcStruct.level
    };
    const esther = this.#data.getNpcEsther(parsed.npcStruct.typeId);
    if (esther !== void 0) {
      npc.entityType = 4 /* Esther */;
      npc.name = esther.name;
      npc.icon = esther.icon;
    }
    this.entities.set(npc.entityId, npc);
    this.#statusTracker.RemoveLocalObject(parsed.npcStruct.objectId, pkt.time);
    for (const se of parsed.npcStruct.statusEffectDatas) {
      const sourceEntity = this.getSourceEntity(se.sourceId);
      this.#statusTracker.RegisterStatusEffect(
        this.#statusTracker.buildStatusEffect(
          se,
          parsed.npcStruct.objectId,
          sourceEntity.entityId,
          1 /* Local */,
          pkt.time
        )
      );
    }
    return npc;
  }
  processNewNpcSummon(pkt) {
    const parsed = pkt.parsed;
    if (!parsed)
      return;
    let isBoss = false;
    const npc = this.#data.npc.get(parsed.npcData.typeId);
    if (npc && ["boss", "raid", "epic_raid", "commander"].includes(npc.grade)) {
      isBoss = true;
    }
    const summon = {
      entityId: parsed.npcData.objectId,
      entityType: 3 /* Summon */,
      name: npc?.name ?? parsed.npcData.objectId.toString(16),
      ownerId: parsed.ownerId,
      typeId: parsed.npcData.typeId,
      isBoss,
      grade: npc?.grade ?? "none",
      pushimmune: npc?.pushimmune ?? false,
      stats: this.#data.getStatPairMap(parsed.npcData.statPair),
      level: parsed.npcData.level,
      balanceLevel: parsed.npcData.balanceLevel ?? parsed.npcData.level
    };
    this.#statusTracker.RemoveLocalObject(parsed.npcData.objectId, pkt.time);
    for (const se of parsed.npcData.statusEffectDatas) {
      const sourceEntity = this.getSourceEntity(se.sourceId);
      this.#statusTracker.RegisterStatusEffect(
        this.#statusTracker.buildStatusEffect(
          se,
          parsed.npcData.objectId,
          sourceEntity.entityId,
          1 /* Local */,
          pkt.time
        )
      );
    }
    this.entities.set(summon.entityId, summon);
    return summon;
  }
  getPlayerSetOptions(itemDataList) {
    const playerSet = /* @__PURE__ */ new Map();
    itemDataList.forEach((item) => {
      if (item.id && item.slot && item.slot >= 1 /* weapon */ && item.slot <= 6 /* armor_pauldron */) {
        const itemSet = this.#data.itemSet.items.get(item.id);
        if (itemSet) {
          let setEntry = playerSet.get(itemSet.setname);
          if (!setEntry) {
            setEntry = /* @__PURE__ */ new Map();
            playerSet.set(itemSet.setname, setEntry);
          }
          setEntry.set(itemSet.level, (setEntry.get(itemSet.level) ?? 0) + 1);
        }
      }
    });
    const effectiveOptions = [];
    playerSet.forEach((v, setName) => {
      const effect = this.#data.itemSet.seteffects.get(setName);
      if (!effect)
        return;
      let maxCountApplied = 0;
      let higherLevelCount = 0;
      for (const [level, count] of [...v.entries()].sort((a, b) => b[0] - a[0])) {
        const effectLevel = effect.get(level);
        if (!effectLevel)
          return;
        for (const [requiredLevel, options] of [...effectLevel.entries()]) {
          if (requiredLevel > maxCountApplied && count + higherLevelCount >= requiredLevel) {
            effectiveOptions.push(...options.options);
            maxCountApplied = Math.max(maxCountApplied, requiredLevel);
          }
        }
        higherLevelCount = count;
      }
    });
    return effectiveOptions;
  }
  getSourceEntity(id) {
    let entity = this.entities.get(id);
    if (entity?.entityType === 5 /* Projectile */) {
      id = entity.ownerId;
    } else if (entity?.entityType === 3 /* Summon */) {
      id = entity.ownerId;
    }
    entity = this.entities.get(id);
    if (entity)
      return entity;
    const newEntity = {
      entityId: id,
      entityType: 2 /* Npc */,
      name: id.toString(16),
      stats: /* @__PURE__ */ new Map()
    };
    this.entities.set(id, newEntity);
    return newEntity;
  }
  guessIsPlayer(entity, skillid) {
    const classId = this.#data.getSkillClassId(skillid);
    if (classId !== 0) {
      let newEntity;
      if (entity.entityType === 1 /* Player */) {
        const player = entity;
        if (player.class === classId)
          return player;
        newEntity = {
          entityId: player.entityId,
          entityType: 1 /* Player */,
          name: player.name,
          class: classId,
          gearLevel: player.gearLevel,
          characterId: player.characterId,
          stance: player.stance,
          stats: player.stats,
          skills: /* @__PURE__ */ new Map(),
          items: {}
        };
      } else {
        newEntity = {
          entityId: entity.entityId,
          entityType: 1 /* Player */,
          name: entity.name,
          class: classId,
          gearLevel: 0,
          characterId: 0n,
          stance: 0,
          stats: /* @__PURE__ */ new Map(),
          skills: /* @__PURE__ */ new Map(),
          items: {}
        };
      }
      this.entities.set(entity.entityId, newEntity);
      return newEntity;
    }
    return entity;
  }
  getOrCreateEntity(entityId) {
    let ent = this.entities.get(entityId);
    if (!ent) {
      ent = { entityId, entityType: 0 /* Unknown */, name: entityId.toString(16), stats: /* @__PURE__ */ new Map() };
      this.entities.set(entityId, ent);
    }
    return ent;
  }
  getEntityByName(name) {
    return [...this.entities.values()].find((e) => e.name === name);
  }
};

// src/logger/statustracker.ts
var _partyTracker, _data, _isLive, _shouldUsePartyStatusEffectForEntity, shouldUsePartyStatusEffectForEntity_fn, _shouldUsePartyStatusEffect, shouldUsePartyStatusEffect_fn;
var _StatusTracker = class extends TypedEmitter {
  constructor(partyTracker, data, isLive = true, debug = Boolean(process.env["DEV"])) {
    super();
    __privateAdd(this, _shouldUsePartyStatusEffectForEntity);
    __privateAdd(this, _shouldUsePartyStatusEffect);
    __publicField(this, "PartyStatusEffectRegistry");
    __publicField(this, "LocalStatusEffectRegistry");
    __privateAdd(this, _partyTracker, void 0);
    __privateAdd(this, _data, void 0);
    __privateAdd(this, _isLive, void 0);
    __publicField(this, "debug");
    __publicField(this, "trace", false);
    this.PartyStatusEffectRegistry = /* @__PURE__ */ new Map();
    this.LocalStatusEffectRegistry = /* @__PURE__ */ new Map();
    this.debug = debug;
    __privateSet(this, _partyTracker, partyTracker);
    __privateSet(this, _data, data);
    __privateSet(this, _isLive, isLive);
  }
  getStatusEffectRegistryForPlayer(id, t) {
    const registry = this.getPlayerRegistry(t);
    const ser = registry.get(id);
    if (ser)
      return ser;
    const newEntry = /* @__PURE__ */ new Map();
    registry.set(id, newEntry);
    return newEntry;
  }
  hasStatusEffectRegistryForPlayer(id, t) {
    const registry = this.getPlayerRegistry(t);
    return registry.has(id);
  }
  getPlayerRegistry(t) {
    switch (t) {
      case 1 /* Local */:
        return this.LocalStatusEffectRegistry;
      case 0 /* Party */:
        return this.PartyStatusEffectRegistry;
      default:
        break;
    }
    return this.LocalStatusEffectRegistry;
  }
  RemoveLocalObject(objectId, pktTime) {
    const registry = this.LocalStatusEffectRegistry.get(objectId);
    if (registry) {
      for (const [, se] of registry) {
        this.RemoveStatusEffect(objectId, se.instanceId, 1 /* Local */, void 0, pktTime);
      }
    }
    this.LocalStatusEffectRegistry.delete(objectId);
  }
  RemovePartyObject(objectId, pktTime) {
    const registry = this.PartyStatusEffectRegistry.get(objectId);
    if (registry) {
      for (const [, se] of registry) {
        this.RemoveStatusEffect(objectId, se.instanceId, 0 /* Party */, void 0, pktTime);
      }
    }
    this.PartyStatusEffectRegistry.delete(objectId);
  }
  RegisterStatusEffect(se) {
    const registry = this.getStatusEffectRegistryForPlayer(se.targetId, se.type);
    const oldEffect = registry.get(se.instanceId);
    if (oldEffect) {
      if (__privateGet(this, _isLive) && oldEffect.expirationTimer) {
        clearTimeout(oldEffect.expirationTimer);
        oldEffect.expirationTimer = void 0;
      }
    } else if (se.effectType === 0 /* Shield */) {
      this.emit("shieldApplied", se);
    }
    registry.set(se.instanceId, se);
    this.SetupStatusEffectTimeout(se);
  }
  HasAnyStatusEffect(id, t, statusEffectIds, pktTime) {
    if (!this.hasStatusEffectRegistryForPlayer(id, t))
      return false;
    const registry = this.getStatusEffectRegistryForPlayer(id, t);
    for (const [, se] of registry) {
      if (!__privateGet(this, _isLive) && !this.IsReplayStatusEffectValidElseRemove(se, pktTime))
        continue;
      for (const key of statusEffectIds) {
        if (key === se.statusEffectId)
          return true;
      }
    }
    return false;
  }
  /**
   * Check if a StatusEffect is still valid and remove it if not
   * @param {StatusEffect} se The StatusEffect to check
   * @param {Date} replayPktTime time of the currently processed pkt
   * @returns true if the StatusEffect is still valid, false if it was cleaned up
   */
  IsReplayStatusEffectValidElseRemove(se, replayPktTime) {
    if (se.expireAt === void 0 || se.expireAt.getTime() > replayPktTime.getTime()) {
      return true;
    }
    this.ExpireStatusEffectByTimeout(se);
    return false;
  }
  HasAnyStatusEffectFromParty(targetId, et, partyId, statusEffectIds, pktTime) {
    if (!this.hasStatusEffectRegistryForPlayer(targetId, et))
      return false;
    const registry = this.getStatusEffectRegistryForPlayer(targetId, et);
    for (const [, effect] of registry) {
      if (!__privateGet(this, _isLive) && !this.IsReplayStatusEffectValidElseRemove(effect, pktTime))
        continue;
      if (statusEffectIds.includes(effect.statusEffectId)) {
        const partyIdOfSource = __privateGet(this, _partyTracker).getPartyIdFromEntityId(effect.sourceId);
        if (this.ValidForWholeRaid(effect)) {
          return partyIdOfSource !== void 0;
        }
        if (partyIdOfSource === partyId)
          return true;
      }
    }
    return false;
  }
  RemoveStatusEffect(targetId, statusEffectId, et, reason, pktTime) {
    if (!this.hasStatusEffectRegistryForPlayer(targetId, et))
      return;
    const registry = this.getStatusEffectRegistryForPlayer(targetId, et);
    const statusEffect = registry.get(statusEffectId);
    if (statusEffect) {
      if (__privateGet(this, _isLive)) {
        clearTimeout(statusEffect.expirationTimer);
        statusEffect.expirationTimer = void 0;
      }
      registry.delete(statusEffectId);
      if (reason === 4 /* beattacked */) {
        if (__privateGet(this, _isLive) || this.IsReplayStatusEffectValidElseRemove(statusEffect, pktTime))
          this.RegisterValueUpdate(statusEffect, statusEffect.value, 0);
      }
    }
    return statusEffect;
  }
  /**
   * Gets the status effects that are on targetId. Optionally filted to only return those from a specific source.
   * @param targetId Id of the object the target is on
   * @param et If the statuseffect is a local target or a party target
   * @param pktTime time of the pkt that triggers this check, it is used to expire statuseffects during replay mode
   * @param seSourceEntityId the source entityId that the status effect needs to come from, if all sources should be allowed set to undefined
   * @returns The status effects on targetId that meet the given criteria
   */
  GetStatusEffects(targetId, et, pktTime, seSourceEntityId) {
    if (!this.hasStatusEffectRegistryForPlayer(targetId, et))
      return [];
    const registry = this.getStatusEffectRegistryForPlayer(targetId, et);
    if (!__privateGet(this, _isLive)) {
      for (const [, effect] of registry) {
        this.IsReplayStatusEffectValidElseRemove(effect, pktTime);
      }
    }
    const allSes = [...registry.values()];
    if (seSourceEntityId !== void 0) {
      return allSes.filter((se, _idx, _a) => {
        return se.sourceId === seSourceEntityId;
      });
    }
    return allSes;
  }
  GetStatusEffectsFromParty(targetId, et, partyId, pktTime) {
    if (!this.hasStatusEffectRegistryForPlayer(targetId, et))
      return [];
    const registry = this.getStatusEffectRegistryForPlayer(targetId, et);
    if (!__privateGet(this, _isLive)) {
      for (const [, effect] of registry) {
        this.IsReplayStatusEffectValidElseRemove(effect, pktTime);
      }
    }
    return [...registry.values()].filter((value) => {
      if (this.ValidForWholeRaid(value)) {
        const partyIdofSource = __privateGet(this, _partyTracker).getPartyIdFromEntityId(value.sourceId);
        return partyIdofSource !== void 0;
      }
      return partyId === __privateGet(this, _partyTracker).getPartyIdFromEntityId(value.sourceId);
    });
  }
  Clear(pktTime) {
    let seCountInLocal = 0;
    for (const [, reg] of this.LocalStatusEffectRegistry) {
      for (const [, se] of reg) {
        this.RemoveStatusEffect(se.targetId, se.instanceId, se.type, void 0, pktTime);
      }
      seCountInLocal += reg.size;
    }
    let seCountInParty = 0;
    for (const [, reg] of this.PartyStatusEffectRegistry) {
      for (const [, se] of reg) {
        this.RemoveStatusEffect(se.targetId, se.instanceId, se.type, void 0, pktTime);
      }
      seCountInParty += reg.size;
    }
    if (this.trace)
      console.log("On Clear SE in local", seCountInLocal, "in party", seCountInParty);
    this.LocalStatusEffectRegistry.clear();
    this.PartyStatusEffectRegistry.clear();
  }
  UpdateDuration(instanceId, targetId, timestamp, et) {
    const registry = this.getStatusEffectRegistryForPlayer(targetId, et);
    const se = registry.get(instanceId);
    if (se) {
      const durationExtensionMs = timestamp - se.timestamp;
      if (__privateGet(this, _isLive) && se.expirationTimer) {
        if (this.trace)
          console.log("Clearing timeout for", se.instanceId, "because of duration change");
        clearTimeout(se.expirationTimer);
        se.expirationTimer = void 0;
      }
      if (se.expireAt) {
        const timeoutTime = se.expireAt.getTime() + Number(durationExtensionMs);
        const timeoutDelay = timeoutTime - se.pktTime.getTime();
        if (timeoutDelay > 0) {
          if (this.trace)
            console.log(
              "Extending duration by",
              durationExtensionMs,
              "ms",
              "New timeout delay",
              timeoutDelay,
              "from",
              se.expireAt.toISOString(),
              "to",
              new Date(timeoutTime).toISOString()
            );
          if (__privateGet(this, _isLive))
            se.expirationTimer = setTimeout(this.ExpireStatusEffectByTimeout.bind(this, se), timeoutDelay);
          se.expireAt = new Date(timeoutTime);
          se.timestamp = timestamp;
        } else {
          se.expireAt = void 0;
        }
      }
    } else if (this.debug) {
      console.error(
        "Tried to update duration for SE with instanceId",
        instanceId,
        " on target",
        targetId,
        "but where is no such SE registered"
      );
    }
  }
  SyncStatusEffect(instanceId, characterId, objectId, value, localCharacterId) {
    const usePartyStatusEffects = __privateMethod(this, _shouldUsePartyStatusEffect, shouldUsePartyStatusEffect_fn).call(this, characterId, localCharacterId);
    const et = usePartyStatusEffects ? 0 /* Party */ : 1 /* Local */;
    const targetId = usePartyStatusEffects ? characterId : objectId;
    if (!targetId)
      return;
    const registry = this.getStatusEffectRegistryForPlayer(targetId, et);
    const se = registry.get(instanceId);
    if (!se)
      return;
    const oldValue = se.value;
    se.value = value;
    this.RegisterValueUpdate(se, oldValue, value);
  }
  ValidForWholeRaid(se) {
    return (se.buffCategory === 3 /* Battleitem */ || se.buffCategory === 1 /* Bracelet */ || se.buffCategory === 2 /* Etc */) && se.category === 1 /* Debuff */ && se.showType === 1 /* All */;
  }
  SetupStatusEffectTimeout(se) {
    if (se.expirationDelay > 0 && se.expirationDelay < 604800) {
      const startDate = se.pktTime.getTime() > se.occurTime.getTime() ? se.pktTime : se.occurTime;
      const expirationDelayInMs = Math.ceil(se.expirationDelay * 1e3);
      const timeoutDelay = startDate.getTime() + expirationDelayInMs + _StatusTracker.TIMEOUT_DELAY_MS - se.pktTime.getTime();
      se.expireAt = new Date(se.pktTime.getTime() + timeoutDelay);
      if (this.trace)
        console.log(
          "Setting up statuseffect expiration time for",
          se.name,
          se.instanceId,
          "to",
          se.expireAt.toISOString(),
          "with delay",
          timeoutDelay
        );
      if (__privateGet(this, _isLive))
        se.expirationTimer = setTimeout(this.ExpireStatusEffectByTimeout.bind(this, se), timeoutDelay);
    }
  }
  ExpireStatusEffectByTimeout(se) {
    if (this.debug)
      console.error("Triggered timeout on", se.name, "with iid", se.instanceId);
    this.RemoveStatusEffect(se.targetId, se.instanceId, se.type, void 0, /* @__PURE__ */ new Date());
  }
  RegisterValueUpdate(se, oldValue, newValue) {
    if (se.effectType === 0 /* Shield */) {
      this.emit("shieldChanged", se, oldValue, newValue);
    }
  }
  newPC(parsed, localCharacterId, pktTime) {
    const shouldUsePartyStatusEffects = __privateMethod(this, _shouldUsePartyStatusEffect, shouldUsePartyStatusEffect_fn).call(this, parsed.pcStruct.characterId, localCharacterId);
    if (shouldUsePartyStatusEffects) {
      this.RemovePartyObject(parsed.pcStruct.characterId, pktTime);
    } else {
      this.RemoveLocalObject(parsed.pcStruct.playerId, pktTime);
    }
    for (const se of parsed.pcStruct.statusEffectDatas) {
      this.RegisterStatusEffect(
        this.buildStatusEffect(
          se,
          shouldUsePartyStatusEffects ? parsed.pcStruct.characterId : parsed.pcStruct.playerId,
          se.sourceId,
          shouldUsePartyStatusEffects ? 0 /* Party */ : 1 /* Local */,
          pktTime
        )
      );
    }
  }
  buildStatusEffect(se, targetId, sourceId, targetType, pktTime) {
    const newValCandidate1 = se.value ? se.value.readUInt32LE() : 0;
    const newValCandidate2 = se.value ? se.value.readUInt32LE(8) : 0;
    const newVal = newValCandidate1 < newValCandidate2 ? newValCandidate1 : newValCandidate2;
    let statusEffectCategory = 0 /* Other */;
    let statusEffectBuffCategory = 0 /* Other */;
    let showType = 0 /* Other */;
    let seName = "Unknown";
    let statusEffectType = 1 /* Other */;
    const effectInfo = __privateGet(this, _data).skillBuff.get(se.statusEffectId);
    if (effectInfo) {
      seName = effectInfo.name;
      switch (effectInfo.category) {
        case "debuff":
          statusEffectCategory = 1 /* Debuff */;
          break;
      }
      switch (effectInfo.buffcategory) {
        case "bracelet":
          statusEffectBuffCategory = 1 /* Bracelet */;
          break;
        case "etc":
          statusEffectBuffCategory = 2 /* Etc */;
          break;
        case "battleitem":
          statusEffectBuffCategory = 3 /* Battleitem */;
          break;
      }
      switch (effectInfo.iconshowtype) {
        case "all":
          showType = 1 /* All */;
          break;
      }
      switch (effectInfo.type) {
        case "shield":
          statusEffectType = 0 /* Shield */;
          break;
      }
    }
    return {
      instanceId: se.effectInstanceId,
      sourceId,
      statusEffectId: se.statusEffectId,
      targetId,
      type: targetType,
      dbTarget: effectInfo?.target ?? "none",
      value: newVal,
      buffCategory: statusEffectBuffCategory,
      category: statusEffectCategory,
      showType,
      expirationDelay: se.totalTime,
      expirationTimer: void 0,
      timestamp: se.endTick,
      expireAt: void 0,
      occurTime: se.occurTime,
      name: seName,
      pktTime,
      effectType: statusEffectType,
      stackCount: se.stackCount
    };
  }
  getStatusEffects(sourceEntity, targetEntity, localCharacterId, pktTime) {
    const statusEffectsOnTarget = [];
    const statusEffectsOnSource = [];
    const shouldUsePartyBuffForSource = __privateMethod(this, _shouldUsePartyStatusEffectForEntity, shouldUsePartyStatusEffectForEntity_fn).call(this, sourceEntity, localCharacterId);
    const sourceEffects = this.GetStatusEffects(
      shouldUsePartyBuffForSource ? sourceEntity.characterId : sourceEntity.entityId,
      shouldUsePartyBuffForSource ? 0 /* Party */ : 1 /* Local */,
      pktTime,
      void 0
    );
    for (const se of sourceEffects)
      statusEffectsOnSource.push([se.statusEffectId, se.sourceId, se.stackCount]);
    if (targetEntity) {
      const shouldUsePartyBuffForTarget = __privateMethod(this, _shouldUsePartyStatusEffectForEntity, shouldUsePartyStatusEffectForEntity_fn).call(this, targetEntity, localCharacterId);
      const sourceIsInParty = __privateGet(this, _partyTracker).isEntityInParty(sourceEntity.entityId);
      const sourcePartyId = sourceIsInParty ? __privateGet(this, _partyTracker).getPartyIdFromEntityId(sourceEntity.entityId) : void 0;
      const targetEffects = sourceIsInParty && sourcePartyId ? this.GetStatusEffectsFromParty(
        shouldUsePartyBuffForTarget ? targetEntity.characterId : targetEntity.entityId,
        shouldUsePartyBuffForTarget ? 0 /* Party */ : 1 /* Local */,
        sourcePartyId,
        pktTime
      ) : this.GetStatusEffects(
        shouldUsePartyBuffForTarget ? targetEntity.characterId : targetEntity.entityId,
        shouldUsePartyBuffForTarget ? 0 /* Party */ : 1 /* Local */,
        pktTime,
        sourceEntity.entityId
      );
      for (const se of targetEffects) {
        if (se.type === 1 /* Local */ && se.category === 1 /* Debuff */ && se.sourceId !== sourceEntity.entityId && se.dbTarget === "self")
          continue;
        statusEffectsOnTarget.push([se.statusEffectId, se.sourceId, se.stackCount]);
      }
    }
    return [statusEffectsOnSource, statusEffectsOnTarget];
  }
};
var StatusTracker2 = _StatusTracker;
_partyTracker = new WeakMap();
_data = new WeakMap();
_isLive = new WeakMap();
_shouldUsePartyStatusEffectForEntity = new WeakSet();
shouldUsePartyStatusEffectForEntity_fn = function(entity, localCharacterId) {
  if (entity.entityType !== 1 /* Player */)
    return false;
  const player = entity;
  return __privateMethod(this, _shouldUsePartyStatusEffect, shouldUsePartyStatusEffect_fn).call(this, player.characterId, localCharacterId);
};
_shouldUsePartyStatusEffect = new WeakSet();
shouldUsePartyStatusEffect_fn = function(characterId, localCharacterId) {
  const localPlayerIsInParty = __privateGet(this, _partyTracker).isCharacterInParty(localCharacterId);
  const affectedPlayerIsInParty = __privateGet(this, _partyTracker).isCharacterInParty(characterId);
  if (localPlayerIsInParty) {
    if (!affectedPlayerIsInParty || characterId === localCharacterId) {
      return false;
    }
    const localPlayerPartyId = __privateGet(this, _partyTracker).getPartyIdFromCharacterId(localCharacterId);
    const affectedPlayerPartyId = __privateGet(this, _partyTracker).getPartyIdFromCharacterId(characterId);
    if (localPlayerPartyId === affectedPlayerPartyId) {
      return true;
    }
    return false;
  }
  return false;
};
__publicField(StatusTracker2, "TIMEOUT_DELAY_MS", 1e3);

export {
  StatusTracker2 as StatusTracker,
  EntityTracker
};
