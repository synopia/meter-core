import {
  EntityTracker,
  StatusTracker
} from "../chunk-BQPXZE2P.mjs";
import "../chunk-G5OTMVG2.mjs";
import {
  LiveLogger,
  LogEvent,
  logMapping,
  write
} from "../chunk-R7OZQ4O2.mjs";
import {
  addontype,
  combateffectactiontype,
  paramtype,
  skillfeaturetype,
  stattype,
  zonelevel
} from "../chunk-F546YONE.mjs";
import "../chunk-32GW4DAM.mjs";
import "../chunk-Q4CJJZON.mjs";
import {
  __privateAdd,
  __privateGet,
  __privateSet,
  __publicField
} from "../chunk-NZTU4WRF.mjs";

// src/logger/parser.ts
import { TypedEmitter as TypedEmitter2 } from "tiny-typed-emitter";

// src/logger/gameTracker.ts
import { TypedEmitter } from "tiny-typed-emitter";

// src/logger/statapi.ts
import { createHash } from "crypto";
import axios from "axios";
var _logger, _entityTracker, _clientId;
var _StatApi = class {
  constructor(entityTracker, clientId, logger) {
    __privateAdd(this, _logger, void 0);
    __privateAdd(this, _entityTracker, void 0);
    __privateAdd(this, _clientId, void 0);
    __publicField(this, "ip");
    __publicField(this, "zoneSyncStatus", 0 /* INVALID */);
    __publicField(this, "cache", /* @__PURE__ */ new Map());
    if (logger)
      __privateSet(this, _logger, logger);
    __privateSet(this, _entityTracker, entityTracker);
    __privateSet(this, _clientId, clientId);
  }
  syncData() {
    const playerList = [];
    __privateGet(this, _entityTracker).entities.forEach((e) => {
      if (e.entityType === 1 /* Player */) {
        playerList.push(e);
      }
    });
    this.getPlayersData(playerList);
  }
  getPlayersData(playerList, retries = 0) {
    if (retries > 24) {
      playerList.forEach((p) => {
        const cache = this.cache.get(p.name);
        if (cache && cache.status === 1 /* PENDING */)
          cache.status = 0 /* INVALID */;
        else if (!cache) {
          this.cache.set(p.name, {
            hash: "",
            status: 0 /* INVALID */,
            info: {
              name: p.name,
              stats: [],
              elixirs: [],
              gems: []
            }
          });
        }
      });
      return;
    }
    if (!this.isCurrentZoneValid()) {
      playerList.forEach((p) => {
        const cache = this.cache.get(p.name);
        if (cache && cache.status === 1 /* PENDING */)
          this.cache.delete(p.name);
      });
      return;
    }
    if (!__privateGet(this, _logger))
      return;
    if (!this.ip)
      return;
    const playerQuery = {};
    playerList.forEach((p) => {
      const hash = this.getHash(p);
      let playerCache = this.cache.get(p.name);
      if (!hash) {
        if (playerCache && playerCache.status === 1 /* PENDING */)
          this.cache.delete(p.name);
        return;
      }
      if (playerCache) {
        if (playerCache.status === 0 /* INVALID */)
          return;
        if (retries === 0 && playerCache.status === 1 /* PENDING */)
          return;
        if (playerCache.status === 2 /* VALID */ && playerCache.hash === hash)
          return;
      }
      if (!playerCache) {
        playerCache = {
          hash,
          status: 1 /* PENDING */,
          info: {
            name: p.name,
            stats: [],
            elixirs: [],
            gems: []
          }
        };
      } else {
        playerCache.hash = hash;
        playerCache.status = 1 /* PENDING */;
      }
      this.cache.set(p.name, playerCache);
      playerQuery[p.name] = hash;
    });
    if (Object.keys(playerQuery).length === 0)
      return;
    axios.get(`${_StatApi.baseUrl}/req2`, {
      params: { ip: this.ip, ci: __privateGet(this, _clientId), ...playerQuery }
      /*, timeout: ??*/
    }).then((res) => {
      if (res.status !== 200)
        return;
      if (__privateGet(this, _logger)) {
        try {
          const json = res.data;
          const logMap = logMapping.get(6e4 /* APP_StatApi */);
          if (logMap) {
            const [logName, readLog, writeLog] = logMap;
            const parsed = { players: json };
            playerList = playerList.filter((p) => !json.find((c) => c.name === p.name));
            if (playerList.length > 0)
              setTimeout(() => {
                playerList = playerList.map((p) => {
                  return __privateGet(this, _entityTracker).getEntityByName(p.name);
                }).filter((p) => p !== void 0 && p.entityType === 1 /* Player */);
                this.getPlayersData(playerList, retries + 1);
              }, 1e4);
            if (parsed.players.length > 0) {
              const logEvent = new LogEvent(parsed, 6e4 /* APP_StatApi */, writeLog);
              __privateGet(this, _logger).emit(logName, logEvent);
              __privateGet(this, _logger).emit("*", logName, logEvent);
              __privateGet(this, _logger).appendLog(logEvent);
            }
          }
        } catch (e) {
          setTimeout(() => {
            playerList = playerList.map((p) => {
              return __privateGet(this, _entityTracker).getEntityByName(p.name);
            }).filter((p) => p !== void 0 && p.entityType === 1 /* Player */);
            this.getPlayersData(playerList, retries + 5);
          }, 1e4);
        }
      }
    }).catch((e) => {
      setTimeout(() => {
        playerList = playerList.map((p) => {
          return __privateGet(this, _entityTracker).getEntityByName(p.name);
        }).filter((p) => p !== void 0 && p.entityType === 1 /* Player */);
        this.getPlayersData(playerList, retries + 5);
      }, 1e4);
    });
  }
  getHash(p) {
    if (
      /*!p.items.lifeToolList || */
      !p.items.equipList || p.characterId === 0n || !p.class || p.name === "You"
    )
      return;
    const equipData = new Array(32).fill(0);
    p.items.equipList?.forEach((equip) => {
      equipData[equip.slot] = equip.id;
    });
    const data = `${p.name}${p.class}${p.characterId}${equipData.join("")}`;
    return createHash("md5").update(data).digest("hex");
  }
  updatePlayerStats(players) {
    players.forEach((p) => {
      const playerCache = this.cache.get(p.name);
      if (playerCache) {
        playerCache.info = p;
        playerCache.status = 2 /* VALID */;
      } else {
        this.cache.set(p.name, {
          hash: "",
          //We're in replay, hash isn't used
          status: 2 /* VALID */,
          info: p
        });
      }
    });
  }
  getStats(name) {
    if (!this.isCurrentZoneValid())
      return;
    const c = this.cache.get(name);
    if (c && c.status === 2 /* VALID */)
      return c.info.stats;
    return;
  }
  isCurrentZoneValid() {
    return this.zoneSyncStatus !== 0 /* INVALID */ && (this.zoneSyncStatus & (2 /* ZONE_INVALID */ | 8 /* RAID_INVALID */)) === 0;
  }
  //TODO add a way to reset ?
};
var StatApi = _StatApi;
_logger = new WeakMap();
_entityTracker = new WeakMap();
_clientId = new WeakMap();
__publicField(StatApi, "baseUrl", "https://la.herysia.com");

// src/logger/gameTracker.ts
var defaultOptions = {
  isLive: true,
  dontResetOnZoneChange: false,
  resetAfterPhaseTransition: false,
  splitOnPhaseTransition: false
};
var GameTracker = class extends TypedEmitter {
  #game;
  encounters;
  #entityTracker;
  #statusTracker;
  #statApi;
  #data;
  options;
  resetTimer;
  phaseTransitionResetRequest;
  phaseTransitionResetRequestTime;
  #entityToSkillBreakdown;
  constructor(entityTracker, statusTracker, statApi, data, options) {
    super();
    this.#entityTracker = entityTracker;
    this.#statusTracker = statusTracker;
    this.#statApi = statApi;
    this.#data = data;
    this.options = { ...defaultOptions, ...options };
    this.resetTimer = null;
    this.phaseTransitionResetRequest = false;
    this.phaseTransitionResetRequestTime = 0;
    this.#entityToSkillBreakdown = /* @__PURE__ */ new Map();
    this.encounters = [];
    this.#game = {
      startedOn: 0,
      lastCombatPacket: 0,
      fightStartedOn: 0,
      localPlayer: this.#entityTracker.localPlayer.name,
      //this will be updated on dipatch
      currentBoss: void 0,
      killState: 0 /* FAIL */,
      zoneLevel: zonelevel[0 /* normal */],
      entities: /* @__PURE__ */ new Map(),
      damageStatistics: {
        totalDamageDealt: 0,
        topDamageDealt: 0,
        totalDamageTaken: 0,
        topDamageTaken: 0,
        totalHealingDone: 0,
        topHealingDone: 0,
        totalShieldDone: 0,
        topShieldDone: 0,
        debuffs: /* @__PURE__ */ new Map(),
        buffs: /* @__PURE__ */ new Map(),
        topShieldGotten: 0,
        totalEffectiveShieldingDone: 0,
        topEffectiveShieldingDone: 0,
        topEffectiveShieldingUsed: 0,
        effectiveShieldingBuffs: /* @__PURE__ */ new Map(),
        appliedShieldingBuffs: /* @__PURE__ */ new Map()
      }
    };
  }
  onCounterAttack(source, time) {
    const entity = this.updateEntity(source, {}, time);
    entity.hits.counter += 1;
  }
  onInitEnv(pkt, time) {
    if (this.options.isLive) {
      this.#game.entities.forEach((e, k, m) => {
        if (e.hits.total === 0) {
          m.delete(k);
        }
      });
      if (this.options.dontResetOnZoneChange === false && this.resetTimer === null) {
        this.resetTimer = setTimeout(() => {
          this.resetState(+time + 6e3);
        }, 6e3);
        this.emit("message", "new-zone");
      }
    } else {
      this.splitEncounter(time);
      this.emit("message", "new-zone");
    }
  }
  splitEncounter(time) {
    if (this.#game.fightStartedOn !== 0 && // no combat packets
    (this.#game.damageStatistics.totalDamageDealt !== 0 || this.#game.damageStatistics.totalDamageTaken !== 0)) {
      const curState = structuredClone(this.#game);
      curState.entities.forEach((entity) => {
        if (!entity.isPlayer)
          return;
        entity.statApiValid = this.#statApi.isCurrentZoneValid() && this.#statApi.cache.get(entity.name)?.status === 2 /* VALID */;
      });
      curState.localPlayer = this.#entityTracker.localPlayer.name;
      this.applyBreakdowns(curState.entities);
      this.encounters.push(curState);
    }
    this.resetState(+time);
  }
  getBossIfStillExist() {
    if (this.#game.currentBoss?.id) {
      const id = BigInt(`0x0${this.#game.currentBoss?.id}`);
      return this.#entityTracker.entities.has(id) ? this.#game.currentBoss : void 0;
    }
    return void 0;
  }
  resetState(curTime) {
    this.cancelReset();
    this.resetBreakdowns();
    this.#game = {
      startedOn: +curTime,
      lastCombatPacket: +curTime,
      fightStartedOn: 0,
      localPlayer: this.#entityTracker.localPlayer.name,
      //We never reset localplayer outside of initenv or initpc
      currentBoss: this.getBossIfStillExist(),
      entities: /* @__PURE__ */ new Map(),
      killState: 0 /* FAIL */,
      zoneLevel: this.#game.zoneLevel,
      damageStatistics: {
        totalDamageDealt: 0,
        topDamageDealt: 0,
        totalDamageTaken: 0,
        topDamageTaken: 0,
        totalHealingDone: 0,
        topHealingDone: 0,
        totalShieldDone: 0,
        topShieldDone: 0,
        debuffs: /* @__PURE__ */ new Map(),
        buffs: /* @__PURE__ */ new Map(),
        appliedShieldingBuffs: /* @__PURE__ */ new Map(),
        effectiveShieldingBuffs: /* @__PURE__ */ new Map(),
        topEffectiveShieldingDone: 0,
        topEffectiveShieldingUsed: 0,
        topShieldGotten: 0,
        totalEffectiveShieldingDone: 0
      }
    };
    this.emit("reset-state", this.#game);
  }
  cancelReset() {
    if (this.resetTimer)
      clearTimeout(this.resetTimer);
    this.resetTimer = null;
  }
  onPhaseTransition(phaseCode, time) {
    if (this.options.isLive) {
      this.emit("message", `phase-transition-${phaseCode}`);
      if (this.options.resetAfterPhaseTransition) {
        this.phaseTransitionResetRequest = true;
        this.phaseTransitionResetRequestTime = +time;
      }
    }
    if (!this.options.isLive && this.options.splitOnPhaseTransition) {
      this.splitEncounter(time);
    }
  }
  updateOptions(options) {
    this.options = { ...this.options, ...options };
  }
  onDeath(target, time) {
    const entity = this.#game.entities.get(target.name);
    let deaths = 0;
    if (!entity)
      deaths = 1;
    else if (entity.isDead)
      deaths = entity.deaths;
    else
      deaths = entity.deaths + 1;
    this.updateEntity(target, { isDead: true, deathTime: +time, deaths }, time);
  }
  onDamage(owner, source, target, damageData, targetCount, time) {
    if ((damageData.modifier & 15) === 11 /* damage_share */ && damageData.skillId === 0 && damageData.skillEffectId === 0)
      return;
    if (this.phaseTransitionResetRequest && this.phaseTransitionResetRequestTime > 0 && this.phaseTransitionResetRequestTime < +time - 8e3) {
      this.resetState(+time);
      this.phaseTransitionResetRequest = false;
    }
    const [statusEffectsOnSource, statusEffectsOnTarget] = this.#statusTracker.getStatusEffects(
      owner,
      target,
      this.#entityTracker.localPlayer.characterId,
      time
    );
    if (this.#data.isBattleItem(damageData.skillEffectId, "attack")) {
      if (source && source.entityType === 5 /* Projectile */) {
        const proj = source;
        damageData.skillEffectId = proj.skillEffectId;
      }
    }
    const damageOwner = this.updateEntity(owner, {}, time);
    const damageTarget = this.updateEntity(
      target,
      {
        currentHp: damageData.targetCurHp,
        maxHp: damageData.targetMaxHp
      },
      time
    );
    if (!damageOwner || !damageTarget)
      return;
    if (!damageTarget.isPlayer && damageData.targetCurHp < 0) {
      damageData.damage = damageData.damage + damageData.targetCurHp;
    }
    let skillId = damageData.skillId;
    if (damageData.skillId === 0 && damageData.skillEffectId !== 0) {
      skillId = damageData.skillEffectId;
    }
    let skill = damageOwner.skills.get(skillId);
    if (!skill) {
      skill = {
        ...this.createEntitySkill(),
        ...{
          id: skillId
        },
        ...this.getSkillNameIcon(damageData.skillId, damageData.skillEffectId)
      };
      damageOwner.skills.set(skillId, skill);
    }
    const hitFlag = damageData.modifier & 15;
    const hitOption = (damageData.modifier >> 4 & 7) - 1;
    const isCrit = (hitFlag & (1 /* critical */ | 8 /* dot_critical */)) !== 0;
    const mappedSeOnSource = /* @__PURE__ */ new Set();
    const mappedSeOnTarget = /* @__PURE__ */ new Set();
    statusEffectsOnSource.forEach(([buffId]) => {
      mappedSeOnSource.add(buffId);
    });
    statusEffectsOnTarget.forEach(([buffId]) => {
      mappedSeOnTarget.add(buffId);
    });
    skill.damageInfo.damageDealt += damageData.damage;
    if (damageData.damage > skill.maxDamage)
      skill.maxDamage = damageData.damage;
    damageOwner.hits.total += 1;
    skill.hits.total += 1;
    damageOwner.damageInfo.damageDealt += damageData.damage;
    damageTarget.damageTaken += damageData.damage;
    const critCount = isCrit ? 1 : 0;
    damageOwner.hits.crit += critCount;
    skill.hits.crit += critCount;
    let isFrontAttack = false, isBackAttack = false;
    const directionalmask = this.#data.getSkillEffectDirectionalMask(damageData.skillEffectId) - 1;
    if (directionalmask === 0 /* back_attack */ || directionalmask === 2 /* flank_attack */) {
      isBackAttack = hitOption === 0 /* back_attack */;
      const backAttackCount = isBackAttack ? 1 : 0;
      damageOwner.hits.backAttack += backAttackCount;
      damageOwner.hits.totalBackAttack += 1;
      skill.hits.backAttack += backAttackCount;
      skill.hits.totalBackAttack += 1;
    }
    if (directionalmask === 1 /* frontal_attack */ || directionalmask === 2 /* flank_attack */) {
      isFrontAttack = hitOption === 1 /* frontal_attack */;
      const frontAttackCount = isFrontAttack ? 1 : 0;
      damageOwner.hits.frontAttack += frontAttackCount;
      damageOwner.hits.totalFrontAttack += 1;
      skill.hits.frontAttack += frontAttackCount;
      skill.hits.totalFrontAttack += 1;
    }
    if (damageOwner.isPlayer) {
      this.#game.damageStatistics.totalDamageDealt += damageData.damage;
      this.#game.damageStatistics.topDamageDealt = Math.max(
        this.#game.damageStatistics.topDamageDealt,
        damageOwner.damageInfo.damageDealt
      );
      let isBuffedBySupport = false, isDebuffedBySupport = false;
      mappedSeOnSource.forEach((buffId) => {
        if (!this.#game.damageStatistics.buffs.has(buffId)) {
          const statusEffect2 = this.#data.getStatusEffectHeaderData(buffId);
          if (statusEffect2)
            this.#game.damageStatistics.buffs.set(buffId, statusEffect2);
        }
        const statusEffect = this.#game.damageStatistics.buffs.get(buffId);
        if (statusEffect && !isBuffedBySupport) {
          isBuffedBySupport = (statusEffect.buffcategory === "classskill" || statusEffect.buffcategory === "identity" || statusEffect.buffcategory === "ability") && statusEffect.source.skill !== void 0 && statusEffect.target === 1 /* PARTY */ && this.#data.isSupportClassId(statusEffect.source.skill.classid);
        }
        const oldval = skill.damageDealtBuffedBy.get(buffId) ?? 0;
        skill.damageDealtBuffedBy.set(buffId, oldval + damageData.damage);
        const oldOwnerDamage = damageOwner.damageDealtBuffedBy.get(buffId) ?? 0;
        damageOwner.damageDealtBuffedBy.set(buffId, oldOwnerDamage + damageData.damage);
        const oldHitAmountTotal = damageOwner.hits.hitsBuffedBy.get(buffId) ?? 0;
        damageOwner.hits.hitsBuffedBy.set(buffId, oldHitAmountTotal + 1);
        const oldHitAmountSkill = skill.hits.hitsBuffedBy.get(buffId) ?? 0;
        skill.hits.hitsBuffedBy.set(buffId, oldHitAmountSkill + 1);
      });
      mappedSeOnTarget.forEach((buffId) => {
        if (!this.#game.damageStatistics.debuffs.has(buffId)) {
          const statusEffect2 = this.#data.getStatusEffectHeaderData(buffId);
          if (statusEffect2)
            this.#game.damageStatistics.debuffs.set(buffId, statusEffect2);
        }
        const statusEffect = this.#game.damageStatistics.debuffs.get(buffId);
        if (statusEffect && !isDebuffedBySupport) {
          isDebuffedBySupport = (statusEffect.buffcategory === "classskill" || statusEffect.buffcategory === "identity" || statusEffect.buffcategory === "ability") && statusEffect.source.skill !== void 0 && statusEffect.target === 1 /* PARTY */ && this.#data.isSupportClassId(statusEffect.source.skill.classid);
        }
        const oldSkillDmg = skill.damageDealtDebuffedBy.get(buffId) ?? 0;
        skill.damageDealtDebuffedBy.set(buffId, oldSkillDmg + damageData.damage);
        const oldOwnerDamage = damageOwner.damageDealtDebuffedBy.get(buffId) ?? 0;
        damageOwner.damageDealtDebuffedBy.set(buffId, oldOwnerDamage + damageData.damage);
        const oldHitAmountTotal = damageOwner.hits.hitsDebuffedBy.get(buffId) ?? 0;
        damageOwner.hits.hitsDebuffedBy.set(buffId, oldHitAmountTotal + 1);
        const oldHitAmountSkill = skill.hits.hitsDebuffedBy.get(buffId) ?? 0;
        skill.hits.hitsDebuffedBy.set(buffId, oldHitAmountSkill + 1);
      });
      const debuffAttackCount = isDebuffedBySupport ? 1 : 0;
      const buffAttackCount = isBuffedBySupport ? 1 : 0;
      skill.damageInfo.damageDealtBuffedBySupport += isBuffedBySupport ? damageData.damage : 0;
      skill.damageInfo.damageDealtDebuffedBySupport += isDebuffedBySupport ? damageData.damage : 0;
      damageOwner.damageInfo.damageDealtBuffedBySupport += isBuffedBySupport ? damageData.damage : 0;
      damageOwner.damageInfo.damageDealtDebuffedBySupport += isDebuffedBySupport ? damageData.damage : 0;
      damageOwner.hits.hitsBuffedBySupport += buffAttackCount;
      damageOwner.hits.hitsDebuffedBySupport += debuffAttackCount;
      skill.hits.hitsBuffedBySupport += buffAttackCount;
      skill.hits.hitsDebuffedBySupport += debuffAttackCount;
      if (damageData.damage > 0 && damageOwner.isPlayer) {
        const rdpsData = {
          multDmg: {
            sumRate: 0,
            totalRate: 1,
            values: Array()
          },
          atkPowSubRate2: {
            //Contains self, as it's additive
            selfSumRate: 0,
            sumRate: 0,
            values: Array()
          },
          atkPowSubRate1: {
            sumRate: 0,
            totalRate: 1,
            values: Array()
          },
          skillDamRate: {
            //Contains self, as it's additive
            selfSumRate: 0,
            sumRate: 0,
            values: Array()
          },
          atkPowAmplify: {
            //Keep the highest
            values: Array()
          },
          crit: {
            //Contains self, as it's additive
            selfSumRate: 0,
            sumRate: 0,
            values: Array()
          },
          critDmgRate: 2
        };
        statusEffectsOnSource.forEach(([buffId, sourceEntityId, stackCount]) => {
          const casterEntity = this.#entityTracker.entities.get(sourceEntityId);
          if (!casterEntity)
            return;
          const buff = this.getBuffAfterTripods(this.#data.skillBuff.get(buffId), casterEntity, damageData);
          if (!buff)
            return;
          if (buff.type === "skill_damage_amplify" && buff.statuseffectvalues && casterEntity.entityType === 1 /* Player */ && sourceEntityId !== owner.entityId) {
            const skillId2 = buff.statuseffectvalues[0] ?? 0;
            const skillEffectId = buff.statuseffectvalues[4] ?? 0;
            if ((skillId2 === 0 || skillId2 === damageData.skillId) && (skillEffectId === 0 || skillEffectId === damageData.skillEffectId)) {
              const val = buff.statuseffectvalues[1] ?? 0;
              if (val !== 0) {
                const rate = val / 1e4 * stackCount;
                rdpsData.multDmg.values.push({
                  casterEntity,
                  rate
                });
                rdpsData.multDmg.sumRate += rate;
                rdpsData.multDmg.totalRate *= 1 + rate;
              }
            }
          } else if (buff.type === "attack_power_amplify" && buff.statuseffectvalues && casterEntity.entityType === 1 /* Player */ && sourceEntityId !== owner.entityId) {
            const val = buff.statuseffectvalues[0] ?? 0;
            if (val !== 0) {
              let rate = val / 1e4 * stackCount;
              const casterBaseAtkPower = this.#statApi.getStats(casterEntity.name)?.find((s) => s.id === 4 /* ATKPOWER */)?.value;
              const targetBaseAtkPower = this.#statApi.getStats(owner.name)?.find((s) => s.id === 4 /* ATKPOWER */)?.value;
              if (casterBaseAtkPower && targetBaseAtkPower) {
                rate *= casterBaseAtkPower / targetBaseAtkPower;
              }
              rdpsData.atkPowAmplify.values.push({
                casterEntity,
                rate
              });
            }
          }
          buff.passiveoption.forEach((passive) => {
            if (addontype[passive.type] === 2 /* stat */) {
              if (passive.keystat === "attack_power_sub_rate_2") {
                const val = passive.value;
                if (val !== 0) {
                  let rate = val / 1e4 * stackCount;
                  if (casterEntity.entityType === 1 /* Player */ && sourceEntityId !== owner.entityId) {
                    rdpsData.atkPowSubRate2.values.push({
                      casterEntity,
                      rate
                    });
                    rdpsData.atkPowSubRate2.sumRate += rate;
                  } else {
                    rdpsData.atkPowSubRate2.selfSumRate += rate;
                  }
                }
              } else if (passive.keystat === "attack_power_sub_rate_1") {
                const val = passive.value;
                if (val !== 0) {
                  let rate = val / 1e4 * stackCount;
                  if (casterEntity.entityType === 1 /* Player */ && sourceEntityId !== owner.entityId) {
                    rdpsData.atkPowSubRate1.values.push({
                      casterEntity,
                      rate
                    });
                    rdpsData.atkPowSubRate1.sumRate += rate;
                    rdpsData.atkPowSubRate1.totalRate *= 1 + rate;
                  }
                }
              } else if (passive.keystat === "skill_damage_rate") {
                const val = passive.value;
                if (val !== 0) {
                  const rate = val / 1e4 * stackCount;
                  if (casterEntity.entityType === 1 /* Player */ && sourceEntityId !== owner.entityId) {
                    rdpsData.skillDamRate.values.push({
                      casterEntity,
                      rate
                    });
                    rdpsData.skillDamRate.sumRate += rate;
                  } else {
                    rdpsData.skillDamRate.selfSumRate += rate;
                  }
                }
              }
            }
            if (passive.keystat === "critical_hit_rate") {
              const val = passive.value;
              if (val !== 0) {
                const rate = val / 1e4 * stackCount;
                if (casterEntity.entityType === 1 /* Player */ && sourceEntityId !== owner.entityId) {
                  rdpsData.crit.values.push({
                    casterEntity,
                    rate
                  });
                  rdpsData.crit.sumRate += rate;
                } else {
                  rdpsData.crit.selfSumRate += rate;
                }
              }
            }
            if (casterEntity.entityType === 1 /* Player */ && sourceEntityId !== owner.entityId) {
              if (passive.keystat === "skill_damage_sub_rate_2") {
                const val = passive.value;
                if (val !== 0) {
                  let rate = val / 1e4 * stackCount;
                  const spec = this.#statApi.getStats(casterEntity.name)?.find((s) => s.id === 1 /* SPEC */)?.value ?? 0;
                  switch (casterEntity.class) {
                    case 204 /* bard */:
                      rate *= 1 + spec / 0.0699 * 0.35 / 1e4;
                      break;
                    case 105 /* holyknight */:
                      rate *= 1 + spec / 0.0699 * 0.63 / 1e4;
                      break;
                    case 602 /* yinyangshi */:
                      rate *= 1 + spec / 0.0699 * 0.38 / 1e4;
                      break;
                    default:
                      break;
                  }
                  rdpsData.multDmg.values.push({
                    casterEntity,
                    rate
                  });
                  rdpsData.multDmg.sumRate += rate;
                  rdpsData.multDmg.totalRate *= 1 + rate;
                }
              } else {
                if (passive.keystat === "critical_dam_rate" && buff.category === "buff") {
                  rdpsData.critDmgRate += passive.value / 1e4 * stackCount;
                }
              }
            } else if (addontype[passive.type] === 4 /* combat_effect */) {
              const ce = this.#data.combatEffect.get(passive.keyindex);
              rdpsData.critDmgRate += stackCount * this.getCritMultiplierFromCombatEffect(ce, {
                self: owner,
                target,
                caster: casterEntity,
                skill: this.#data.skill.get(skillId),
                hitOption,
                targetCount
              });
            }
          });
        });
        statusEffectsOnTarget.forEach(([debuffId, sourceEntityId, stackCount]) => {
          const casterEntity = this.#entityTracker.entities.get(sourceEntityId);
          if (!casterEntity)
            return;
          const debuff = this.getBuffAfterTripods(this.#data.skillBuff.get(debuffId), casterEntity, damageData);
          if (!debuff)
            return;
          if (debuff.type === "instant_stat_amplify" && debuff.statuseffectvalues) {
            const val = debuff.statuseffectvalues[0] ?? 0;
            if (val !== 0) {
              const rate = val / 1e4 * stackCount;
              if (casterEntity.entityType === 1 /* Player */ && sourceEntityId !== owner.entityId) {
                rdpsData.crit.values.push({
                  casterEntity,
                  rate
                });
                rdpsData.crit.sumRate += rate;
              } else {
                rdpsData.crit.selfSumRate += rate;
              }
            }
          }
          if (casterEntity.entityType !== 1 /* Player */ || sourceEntityId === owner.entityId)
            return;
          if (debuff.type === "instant_stat_amplify" && debuff.statuseffectvalues) {
            const val = debuff.statuseffectvalues[0] ?? 0;
            if (damageData.damageType === 0 /* physics */) {
              const val2 = debuff.statuseffectvalues[2] ?? 0;
              if (val2 !== 0) {
                const rate = -(val2 / 1e4) * stackCount * 0.5;
                rdpsData.multDmg.values.push({
                  casterEntity,
                  rate
                });
                rdpsData.multDmg.sumRate += rate;
                rdpsData.multDmg.totalRate *= 1 + rate;
              }
              const val22 = debuff.statuseffectvalues[7] ?? 0;
              if (val22 !== 0) {
                const rate = val22 / 1e4 * stackCount;
                rdpsData.multDmg.values.push({
                  casterEntity,
                  rate
                });
                rdpsData.multDmg.sumRate += rate;
                rdpsData.multDmg.totalRate *= 1 + rate;
              }
              if (isCrit) {
                const val3 = debuff.statuseffectvalues[9] ?? 0;
                if (val3 !== 0) {
                  const rate = val3 / 1e4 * stackCount;
                  rdpsData.multDmg.values.push({
                    casterEntity,
                    rate
                  });
                  rdpsData.multDmg.sumRate += rate;
                  rdpsData.multDmg.totalRate *= 1 + rate;
                }
              }
            } else if (damageData.damageType === 1 /* magic */) {
              const val2 = debuff.statuseffectvalues[3] ?? 0;
              if (val2 !== 0) {
                const rate = -(val2 / 1e4) * stackCount * 0.5;
                rdpsData.multDmg.values.push({
                  casterEntity,
                  rate
                });
                rdpsData.multDmg.sumRate += rate;
                rdpsData.multDmg.totalRate *= 1 + rate;
              }
              const val22 = debuff.statuseffectvalues[8] ?? 0;
              if (val22 !== 0) {
                const rate = val22 / 1e4 * stackCount;
                rdpsData.multDmg.values.push({
                  casterEntity,
                  rate
                });
                rdpsData.multDmg.sumRate += rate;
                rdpsData.multDmg.totalRate *= 1 + rate;
              }
              if (isCrit) {
                const val3 = debuff.statuseffectvalues[10] ?? 0;
                if (val3 !== 0) {
                  const rate = val3 / 1e4 * stackCount;
                  rdpsData.multDmg.values.push({
                    casterEntity,
                    rate
                  });
                  rdpsData.multDmg.sumRate += rate;
                  rdpsData.multDmg.totalRate *= 1 + rate;
                }
              }
            }
          }
          if (debuff.type === "skill_damage_amplify" && debuff.statuseffectvalues) {
            const skillId2 = debuff.statuseffectvalues[0] ?? 0;
            const skillEffectId = debuff.statuseffectvalues[4] ?? 0;
            if ((skillId2 === 0 || skillId2 === damageData.skillId) && (skillEffectId === 0 || skillEffectId === damageData.skillEffectId)) {
              const val = debuff.statuseffectvalues[1] ?? 0;
              if (val !== 0) {
                const rate = val / 1e4 * stackCount;
                rdpsData.multDmg.values.push({
                  casterEntity,
                  rate
                });
                rdpsData.multDmg.sumRate += rate;
                rdpsData.multDmg.totalRate *= 1 + rate;
              }
            }
          }
          if (debuff.type === "directional_attack_amplify" && debuff.statuseffectvalues) {
            if (isFrontAttack) {
              const frontRate = debuff.statuseffectvalues[0] ?? 0;
              if (frontRate !== 0) {
                const rate = frontRate / 100 * stackCount;
                rdpsData.multDmg.values.push({
                  casterEntity,
                  rate
                });
                rdpsData.multDmg.sumRate += rate;
                rdpsData.multDmg.totalRate *= 1 + rate;
              }
            }
            if (isBackAttack) {
              const backRate = debuff.statuseffectvalues[4] ?? 0;
              if (backRate !== 0) {
                const rate = backRate / 100 * stackCount;
                rdpsData.multDmg.values.push({
                  casterEntity,
                  rate
                });
                rdpsData.multDmg.sumRate += rate;
                rdpsData.multDmg.totalRate *= 1 + rate;
              }
            }
          }
        });
        if (rdpsData.crit.values.length > 0) {
          const skillCastedData = this.#data.skill.get(damageData.skillId);
          owner.itemSet?.forEach((option) => {
            if (addontype[option.type] === 2 /* stat */ && stattype[option.keystat] === 76 /* critical_dam_rate */) {
              rdpsData.critDmgRate += option.value / 1e4;
            } else if (addontype[option.type] === 4 /* combat_effect */) {
              const ce = this.#data.combatEffect.get(option.keyindex);
              rdpsData.critDmgRate += this.getCritMultiplierFromCombatEffect(ce, {
                self: owner,
                target,
                caster: owner,
                skill: skillCastedData,
                hitOption,
                targetCount
              });
            }
            owner.skills.get(damageData.skillId)?.tripods.forEach((tripodData) => {
              const combatEffects = /* @__PURE__ */ new Map();
              tripodData.options.forEach((option2) => {
                const featureType = skillfeaturetype[option2.type];
                if (featureType === 45 /* add_chain_combat_effect */) {
                  if ((option2.params[0] ?? 0) === 0 || damageData.skillEffectId === (option2.params[0] ?? 0)) {
                    const ceId = option2.params[1];
                    if (ceId) {
                      const ce = this.#data.combatEffect.get(ceId);
                      if (ce)
                        combatEffects.set(ce.id, ce);
                    }
                  }
                } else if (featureType === 46 /* remove_chain_combat_effect */) {
                  combatEffects.delete(option2.params[0] ?? 0);
                } else if (featureType === 104 /* change_combat_effect_arg */) {
                  if ((option2.params[0] ?? 0) === 0 || damageData.skillEffectId === (option2.params[0] ?? 0)) {
                    const ce = combatEffects.get(option2.params[1] ?? 0);
                    if (ce) {
                      const newCe = structuredClone(ce);
                      combatEffects.set(ce.id, newCe);
                      newCe.effects.forEach((effect) => {
                        effect.actions.forEach((action) => {
                          for (let i = 0; i < option2.params.length - 2; i++) {
                            if (paramtype[option2.paramtype] === 1 /* relative */)
                              action.args[i] *= 1 + (option2.params[i + 2] ?? 0) / 100;
                            else
                              action.args[i] += option2.params[i + 2] ?? 0;
                          }
                        });
                      });
                    }
                  }
                } else if (featureType === 29 /* change_dam_critical */) {
                  if ((option2.params[0] ?? 0) === 0 || damageData.skillEffectId === (option2.params[0] ?? 0)) {
                    rdpsData.critDmgRate += (option2.params[1] ?? 0) / 1e4;
                  }
                } else if (featureType === 30 /* change_dam_critical_rate */) {
                  if ((option2.params[0] ?? 0) === 0 || damageData.skillEffectId === (option2.params[0] ?? 0)) {
                    rdpsData.crit.selfSumRate += (option2.params[1] ?? 0) / 1e4;
                  }
                }
              });
              combatEffects.forEach((ce) => {
                rdpsData.critDmgRate += this.getCritMultiplierFromCombatEffect(ce, {
                  self: owner,
                  target,
                  caster: owner,
                  skill: skillCastedData,
                  hitOption,
                  targetCount
                });
              });
            });
          });
        }
        if (rdpsData.skillDamRate.values.length > 0) {
          const targetWeaponSkillDmg = this.#statApi.getStats(owner.name)?.find((s) => s.id === 5 /* SKILLDMG */)?.value;
          if (targetWeaponSkillDmg)
            rdpsData.skillDamRate.selfSumRate += targetWeaponSkillDmg / 1e4;
        }
        let critSumEffGainRate = 0;
        if (rdpsData.crit.values.length > 0) {
          rdpsData.crit.selfSumRate += (this.#statApi.getStats(owner.name)?.find((s) => s.id === 0 /* CRIT */)?.value ?? 0) / 0.2794 / 1e4;
          const cappedSumRate = Math.min(Math.max(0, 1 - rdpsData.crit.selfSumRate), rdpsData.crit.sumRate);
          critSumEffGainRate = (cappedSumRate * rdpsData.critDmgRate - cappedSumRate) / (rdpsData.crit.selfSumRate * rdpsData.critDmgRate - rdpsData.crit.selfSumRate + 1);
        }
        const attack_power_amplify = rdpsData.atkPowAmplify.values.length <= 0 ? { rate: 0 } : rdpsData.atkPowAmplify.values.reduce((prev, curr) => {
          return prev.rate > curr.rate ? prev : curr;
        });
        const totalEffGainRate = (1 + critSumEffGainRate) * (1 + rdpsData.atkPowSubRate2.sumRate / (1 + rdpsData.atkPowSubRate2.selfSumRate)) * (1 + rdpsData.skillDamRate.sumRate / (1 + rdpsData.skillDamRate.selfSumRate)) * (1 + attack_power_amplify.rate) * rdpsData.multDmg.totalRate * rdpsData.atkPowSubRate1.totalRate - 1;
        const totalSumGainRate = critSumEffGainRate + rdpsData.atkPowSubRate2.sumRate / (1 + rdpsData.atkPowSubRate2.selfSumRate) + rdpsData.skillDamRate.sumRate / (1 + rdpsData.skillDamRate.selfSumRate) + attack_power_amplify.rate + (rdpsData.multDmg.totalRate - 1) + (rdpsData.atkPowSubRate1.totalRate - 1);
        {
          const unitRate = totalEffGainRate * damageData.damage / (totalSumGainRate * (1 + totalEffGainRate));
          const critGainUnit = critSumEffGainRate * unitRate / rdpsData.crit.sumRate;
          rdpsData.crit.values.forEach((crit) => {
            const delta = crit.rate * critGainUnit;
            const sourceEntityState = this.#game.entities.get(crit.casterEntity.name);
            this.applyRdps(damageOwner, sourceEntityState, skill, delta);
          });
          rdpsData.atkPowSubRate2.values.forEach((dmg) => {
            const delta = dmg.rate / (1 + rdpsData.atkPowSubRate2.selfSumRate) * unitRate;
            const sourceEntityState = this.#game.entities.get(dmg.casterEntity.name);
            this.applyRdps(damageOwner, sourceEntityState, skill, delta);
          });
          rdpsData.skillDamRate.values.forEach((dmg) => {
            const delta = dmg.rate / (1 + rdpsData.skillDamRate.selfSumRate) * unitRate;
            const sourceEntityState = this.#game.entities.get(dmg.casterEntity.name);
            this.applyRdps(damageOwner, sourceEntityState, skill, delta);
          });
          const multGainUnit = (rdpsData.multDmg.totalRate - 1) * unitRate / rdpsData.multDmg.sumRate;
          rdpsData.multDmg.values.forEach((dmg) => {
            const delta = dmg.rate * multGainUnit;
            const sourceEntityState = this.#game.entities.get(dmg.casterEntity.name);
            this.applyRdps(damageOwner, sourceEntityState, skill, delta);
          });
          const atkPowSubRate1GainUnit = (rdpsData.atkPowSubRate1.totalRate - 1) * unitRate / rdpsData.atkPowSubRate1.sumRate;
          rdpsData.atkPowSubRate1.values.forEach((dmg) => {
            const delta = dmg.rate * atkPowSubRate1GainUnit;
            const sourceEntityState = this.#game.entities.get(dmg.casterEntity.name);
            this.applyRdps(damageOwner, sourceEntityState, skill, delta);
          });
          if (attack_power_amplify.rate > 0) {
            const delta = attack_power_amplify.rate * unitRate;
            const sourceEntityState = this.#game.entities.get(attack_power_amplify.casterEntity?.name);
            this.applyRdps(damageOwner, sourceEntityState, skill, delta);
          }
        }
      }
      const breakdown = {
        timestamp: +time,
        damage: damageData.damage,
        targetEntity: damageTarget.id,
        isCrit,
        isBackAttack,
        isFrontAttack,
        isBuffedBySupport,
        isDebuffedBySupport,
        buffedBy: [...mappedSeOnSource],
        debuffedBy: [...mappedSeOnTarget]
      };
      const breakdownOwner = BigInt("0x" + damageOwner.id);
      this.addBreakdown(breakdownOwner, skillId, breakdown);
    }
    if (damageTarget.isPlayer) {
      this.#game.damageStatistics.totalDamageTaken += damageData.damage;
      this.#game.damageStatistics.topDamageTaken = Math.max(
        this.#game.damageStatistics.topDamageTaken,
        damageTarget.damageTaken
      );
    }
    if (damageTarget.isBoss) {
      this.#game.currentBoss = damageTarget;
    }
    if (this.#game.fightStartedOn === 0)
      this.#game.fightStartedOn = +time;
    this.#game.lastCombatPacket = +time;
  }
  getBuffAfterTripods(oBuff, entity, damageData) {
    if (!oBuff || entity.entityType !== 1 /* Player */)
      return oBuff;
    const buff = structuredClone(oBuff);
    entity.skills.get(damageData.skillId)?.tripods.forEach((tripodData) => {
      tripodData.options.forEach((tripod) => {
        const featureType = skillfeaturetype[tripod.type];
        if (featureType === 19 /* change_buff_stat */) {
          if ((tripod.params[0] ?? 0) === 0 || damageData.skillEffectId === (tripod.params[0] ?? 0)) {
            if (buff.id === (tripod.params[1] ?? 0)) {
              const changeMap = /* @__PURE__ */ new Map();
              for (let i = 2; i < tripod.params.length; i += 2) {
                if (tripod.params[i] && tripod.params[i + 1])
                  changeMap.set(tripod.params[i] ?? 0, tripod.params[i + 1] ?? 0);
              }
              buff.passiveoption.forEach((passive) => {
                const change = changeMap.get(stattype[passive.keystat]);
                if (addontype[passive.type] === 2 /* stat */ && change) {
                  if (paramtype[tripod.paramtype] === 0 /* absolute */)
                    passive.value += change;
                  else
                    passive.value *= 1 + change / 100;
                }
              });
            }
          }
        } else if (featureType === 42 /* add_buff_stat */) {
          if ((tripod.params[0] ?? 0) === 0 || damageData.skillEffectId === (tripod.params[0] ?? 0)) {
            if (buff.id === (tripod.params[1] ?? 0)) {
              const keystat = stattype[tripod.params[2] ?? 0];
              const value = tripod.params[3] ?? 0;
              if (keystat && value !== void 0)
                buff.passiveoption.push({
                  type: "stat",
                  keystat,
                  keyindex: 0,
                  value
                });
            }
          }
        } else if (featureType === 21 /* change_buff_param */) {
          if (buff.statuseffectvalues && ((tripod.params[0] ?? 0) === 0 || damageData.skillEffectId === (tripod.params[0] ?? 0))) {
            if (buff.id === (tripod.params[1] ?? 0)) {
              if ((tripod.params[2] ?? 0) === 0 /* absolute */) {
                buff.statuseffectvalues = tripod.params.slice(3);
              } else {
                const newValues = [];
                for (let i = 0; i < Math.max(buff.statuseffectvalues.length, tripod.params.length - 3); i++) {
                  if (tripod.params[i + 3]) {
                    newValues.push((buff.statuseffectvalues[i] ?? 0) * (1 + (tripod.params[i + 3] ?? 0) / 100));
                  }
                }
                buff.statuseffectvalues = newValues;
              }
            }
          }
        }
      });
    });
    return buff;
  }
  getCritMultiplierFromCombatEffect(ce, ceConditionData) {
    if (!ce)
      return 0;
    let critDmgRate = 0;
    ce.effects.filter(
      (effect) => effect.actions.find(
        (action) => combateffectactiontype[action.type] === 4 /* modify_critical_multiplier */
      )
    ).forEach((effect) => {
      if (this.#data.isCombatEffectConditionsValid({ effect, ...ceConditionData })) {
        effect.actions.filter(
          (action) => combateffectactiontype[action.type] === 4 /* modify_critical_multiplier */
        ).forEach((action) => {
          critDmgRate += (action.args[0] ?? 0) / 100;
        });
      }
    });
    return critDmgRate;
  }
  applyRdps(damageOwner, sourceEntityState, skill, delta) {
    if (sourceEntityState) {
      sourceEntityState.damageInfo.rdpsDamageGiven += delta;
    }
    if (sourceEntityState && this.#data.isSupportClassId(sourceEntityState.classId)) {
      damageOwner.damageInfo.rdpsDamageReceivedSupp += delta;
      skill.damageInfo.rdpsDamageReceivedSupp += delta;
    }
    damageOwner.damageInfo.rdpsDamageReceived += delta;
    skill.damageInfo.rdpsDamageReceived += delta;
  }
  onStartSkill(owner, skillId, time) {
    const entity = this.updateEntity(
      owner,
      {
        isDead: false
      },
      time
    );
    if (entity) {
      entity.hits.casts += 1;
      let skill = entity.skills.get(skillId);
      if (!skill) {
        skill = {
          ...this.createEntitySkill(),
          ...{
            id: skillId
          },
          ...this.getSkillNameIcon(skillId, 0)
        };
        entity.skills.set(skillId, skill);
      }
      skill.hits.casts += 1;
    }
  }
  onShieldUsed(targetEntity, sourceEntity, statusEffectId, shieldAmountRemoved) {
    if (shieldAmountRemoved < 0) {
      console.error("Shield change values was negative, shield ammount increased");
    }
    if (targetEntity.entityType === 1 /* Player */ && sourceEntity.entityType === 1 /* Player */) {
      if (!this.#game.damageStatistics.effectiveShieldingBuffs.has(statusEffectId)) {
        const statusEffect = this.#data.getStatusEffectHeaderData(statusEffectId);
        if (statusEffect) {
          this.#game.damageStatistics.effectiveShieldingBuffs.set(statusEffectId, statusEffect);
        }
      }
      const now = /* @__PURE__ */ new Date();
      const targetEntityState = this.updateEntity(targetEntity, {}, now);
      const sourceEntityState = this.updateEntity(sourceEntity, {}, now);
      targetEntityState.damagePreventedByShield += shieldAmountRemoved;
      const oldDmgPreventedBy = targetEntityState.damagePreventedByShieldBy.get(statusEffectId) ?? 0;
      targetEntityState.damagePreventedByShieldBy.set(statusEffectId, oldDmgPreventedBy + shieldAmountRemoved);
      this.#game.damageStatistics.topEffectiveShieldingUsed = Math.max(
        targetEntityState.damagePreventedByShield,
        this.#game.damageStatistics.topEffectiveShieldingUsed
      );
      sourceEntityState.damagePreventedWithShieldOnOthers += shieldAmountRemoved;
      const oldDmgPreventedWith = sourceEntityState.damagePreventedWithShieldOnOthersBy.get(statusEffectId) ?? 0;
      sourceEntityState.damagePreventedWithShieldOnOthersBy.set(
        statusEffectId,
        oldDmgPreventedWith + shieldAmountRemoved
      );
      this.#game.damageStatistics.topEffectiveShieldingDone = Math.max(
        sourceEntityState.damagePreventedWithShieldOnOthers,
        this.#game.damageStatistics.topEffectiveShieldingDone
      );
      this.#game.damageStatistics.totalEffectiveShieldingDone += shieldAmountRemoved;
    }
  }
  onShieldApplied(targetEntity, sourceEntity, statusEffectId, amount) {
    const now = /* @__PURE__ */ new Date();
    const targetEntityState = this.updateEntity(targetEntity, {}, now);
    const sourceEntityState = this.updateEntity(sourceEntity, {}, now);
    if (sourceEntityState.isPlayer && targetEntityState.isPlayer) {
      if (!this.#game.damageStatistics.appliedShieldingBuffs.has(statusEffectId)) {
        const statusEffect = this.#data.getStatusEffectHeaderData(statusEffectId);
        if (statusEffect) {
          this.#game.damageStatistics.appliedShieldingBuffs.set(statusEffectId, statusEffect);
        }
      }
      targetEntityState.shieldReceived += amount;
      sourceEntityState.shieldDone += amount;
      const oldDoneByValue = sourceEntityState.shieldDoneBy.get(statusEffectId) ?? 0;
      sourceEntityState.shieldDoneBy.set(statusEffectId, oldDoneByValue + amount);
      const oldReceivedByValue = targetEntityState.shieldReceivedBy.get(statusEffectId) ?? 0;
      targetEntityState.shieldReceivedBy.set(statusEffectId, oldReceivedByValue + amount);
      this.#game.damageStatistics.topShieldDone = Math.max(
        sourceEntityState.shieldDone,
        this.#game.damageStatistics.topShieldDone
      );
      this.#game.damageStatistics.topShieldGotten = Math.max(
        targetEntityState.shieldReceived,
        this.#game.damageStatistics.topShieldGotten
      );
      this.#game.damageStatistics.totalShieldDone += amount;
    }
  }
  getSkillNameIcon(skillId, skillEffectId) {
    if (skillId === 0 && skillEffectId === 0) {
      return { name: "Bleed", icon: "buff_168.png" };
    } else if (skillId === 0) {
      const effect = this.#data.skillEffect.get(skillEffectId);
      if (effect && effect.itemname) {
        return { name: effect.itemname, icon: effect.icon ?? "" };
      } else if (effect) {
        if (effect.sourceskill) {
          const skill = this.#data.skill.get(effect.sourceskill);
          if (skill)
            return { name: skill.name, icon: skill.icon };
        } else {
          const skill = this.#data.skill.get(Math.floor(skillEffectId / 10));
          if (skill)
            return { name: skill.name, icon: skill.icon };
        }
        return { name: effect.comment };
      } else {
        return { name: this.#data.getSkillName(skillId) };
      }
    } else {
      let skill = this.#data.skill.get(skillId);
      if (!skill) {
        skill = this.#data.skill.get(skillId - skillId % 10);
        if (!skill)
          return { name: this.#data.getSkillName(skillId), icon: "" };
      }
      if (skill.summonsourceskill) {
        skill = this.#data.skill.get(skill.summonsourceskill);
        if (skill) {
          return { name: skill.name + " (Summon)", icon: skill.icon };
        } else {
          return { name: this.#data.getSkillName(skillId), icon: "" };
        }
      } else if (skill.sourceskill) {
        skill = this.#data.skill.get(skill.sourceskill);
        if (skill) {
          return { name: skill.name, icon: skill.icon };
        } else {
          return { name: this.#data.getSkillName(skillId), icon: "" };
        }
      } else {
        return { name: skill.name, icon: skill.icon };
      }
    }
  }
  updateEntity(entity, values, time) {
    const updateTime = { lastUpdate: +time };
    let entityState = this.#game.entities.get(entity.name);
    let extraInfo = {};
    if (!entityState || entity.entityType === 1 /* Player */ && entityState.isPlayer !== true) {
      if (entity.entityType === 1 /* Player */) {
        const player = entity;
        extraInfo = { classId: player.class, gearScore: player.gearLevel, isPlayer: true };
      } else if (entity.entityType === 2 /* Npc */ || entity.entityType === 3 /* Summon */) {
        const npc = entity;
        extraInfo = { npcId: npc.typeId, isBoss: npc.isBoss };
      } else if (entity.entityType === 4 /* Esther */) {
        const esther = entity;
        extraInfo = { npcId: esther.typeId, isBoss: esther.isBoss, isEsther: true, icon: esther.icon };
      }
    }
    if (entityState) {
      Object.assign(entityState, values, updateTime, extraInfo);
    } else {
      entityState = {
        ...this.createEntity(),
        ...values,
        ...updateTime,
        ...extraInfo,
        ...{ name: entity.name },
        ...{ id: entity.entityId.toString(16) }
      };
      this.#game.entities.set(entity.name, entityState);
    }
    return entityState;
  }
  updateOrCreateEntity(entity, entityState, time) {
    if (!entityState.name || !entityState.id)
      return;
    for (const [k, e] of this.#game.entities) {
      if (entityState.id === e.id) {
        this.#game.entities.delete(k);
        this.updateEntity(entity, { ...e, ...entityState }, time);
        return;
      }
    }
    this.updateEntity(entity, entityState, time);
  }
  createEntitySkill() {
    const newEntitySkill = {
      id: 0,
      name: "",
      icon: "",
      damageInfo: {
        damageDealt: 0,
        rdpsDamageReceived: 0,
        rdpsDamageReceivedSupp: 0,
        rdpsDamageGiven: 0,
        damageDealtDebuffedBySupport: 0,
        damageDealtBuffedBySupport: 0
      },
      maxDamage: 0,
      hits: {
        casts: 0,
        total: 0,
        crit: 0,
        backAttack: 0,
        totalBackAttack: 0,
        frontAttack: 0,
        totalFrontAttack: 0,
        counter: 0,
        hitsDebuffedBySupport: 0,
        hitsBuffedBySupport: 0,
        hitsBuffedBy: /* @__PURE__ */ new Map(),
        hitsDebuffedBy: /* @__PURE__ */ new Map()
      },
      breakdown: [],
      damageDealtDebuffedBy: /* @__PURE__ */ new Map(),
      damageDealtBuffedBy: /* @__PURE__ */ new Map()
    };
    return newEntitySkill;
  }
  createEntity() {
    const newEntity = {
      lastUpdate: 0,
      id: "",
      npcId: 0,
      name: "",
      classId: 0,
      isBoss: false,
      isPlayer: false,
      isDead: false,
      deaths: 0,
      deathTime: 0,
      gearScore: 0,
      currentHp: 0,
      maxHp: 0,
      damageInfo: {
        damageDealt: 0,
        rdpsDamageReceived: 0,
        rdpsDamageReceivedSupp: 0,
        rdpsDamageGiven: 0,
        damageDealtDebuffedBySupport: 0,
        damageDealtBuffedBySupport: 0
      },
      healingDone: 0,
      shieldDone: 0,
      damageTaken: 0,
      skills: /* @__PURE__ */ new Map(),
      hits: {
        casts: 0,
        total: 0,
        crit: 0,
        backAttack: 0,
        totalBackAttack: 0,
        frontAttack: 0,
        totalFrontAttack: 0,
        counter: 0,
        hitsDebuffedBySupport: 0,
        hitsBuffedBySupport: 0,
        hitsBuffedBy: /* @__PURE__ */ new Map(),
        hitsDebuffedBy: /* @__PURE__ */ new Map()
      },
      damageDealtDebuffedBy: /* @__PURE__ */ new Map(),
      damageDealtBuffedBy: /* @__PURE__ */ new Map(),
      damagePreventedByShieldBy: /* @__PURE__ */ new Map(),
      damagePreventedWithShieldOnOthersBy: /* @__PURE__ */ new Map(),
      shieldDoneBy: /* @__PURE__ */ new Map(),
      shieldReceivedBy: /* @__PURE__ */ new Map(),
      damagePreventedWithShieldOnOthers: 0,
      damagePreventedByShield: 0,
      shieldReceived: 0,
      statApiValid: false
    };
    return newEntity;
  }
  getBroadcast() {
    const clone = { ...this.#game };
    clone.entities = /* @__PURE__ */ new Map();
    this.#game.entities.forEach((entity, id) => {
      if (!entity.isPlayer && !entity.isEsther)
        return;
      entity.statApiValid = this.#statApi.isCurrentZoneValid() && this.#statApi.cache.get(entity.name)?.status === 2 /* VALID */;
      clone.entities.set(id, { ...entity });
    });
    clone.localPlayer = this.#entityTracker.localPlayer.name;
    return clone;
  }
  //#region Breakdown Tracker
  resetBreakdowns() {
    this.#entityToSkillBreakdown.clear();
  }
  /**
   * Adds a breakdown entry for the given entity if it doesn't exist yet.
   *
   * @param entityId
   * @returns The entry for the given entity.
   */
  createBreakdownEntity(entityId) {
    if (!this.#entityToSkillBreakdown.has(entityId)) {
      this.#entityToSkillBreakdown.set(entityId, /* @__PURE__ */ new Map());
    }
    return this.#entityToSkillBreakdown.get(entityId);
  }
  /**
   * Removes the entry for the given entity.
   *
   * @param entityId The ID of the entity to remove the entry for.
   */
  removeBreakdownEntry(entityId) {
    this.#entityToSkillBreakdown.delete(entityId);
  }
  /**
   * Adds a breakdown to the given entity and skill.
   *
   * @param entityId The ID of the entity to add the breakdown for.
   * @param skillId The ID of the skill to add the breakdown for.
   * @param breakdown The breakdown to add.
   */
  addBreakdown(entityId, skillId, breakdown) {
    const entityBreakdown = this.createBreakdownEntity(entityId);
    if (!entityBreakdown.has(skillId)) {
      const skill = new Array(breakdown);
      entityBreakdown.set(skillId, skill);
    } else {
      entityBreakdown.get(skillId).push(breakdown);
    }
  }
  /**
   * Returns the breakdowns for the given entity and skill, or undefined if none exist.
   *
   * @param entityId The ID of the entity to get the breakdowns for.
   * @param skillId The ID of the skill to get the breakdowns for.
   * @returns The breakdowns for the given entity and skill, or undefined if none exist.
   */
  getBreakdowns(entityId, skillId) {
    const entityBreakdown = this.#entityToSkillBreakdown.get(entityId);
    if (!entityBreakdown)
      return void 0;
    return entityBreakdown.get(skillId);
  }
  /**
   * Clears the breakdowns for the given entity and skill.
   *
   * @param entityId The ID of the entity to clear the breakdowns for.
   * @param skillId The ID of the skill to clear the breakdowns for.
   */
  clearBreakdowns(entityId, skillId) {
    const entityBreakdown = this.#entityToSkillBreakdown.get(entityId);
    if (!entityBreakdown)
      return;
    entityBreakdown.delete(skillId);
  }
  /**
   * Applies the breakdowns to the given entity states and optionally clears
   * stored breakdowns afterwards. (Defaults to true)
   *
   * @param entityStates The entity states to apply the breakdowns to.
   * @param reset Whether to clear the stored breakdowns afterwards.
   */
  applyBreakdowns(entityStates, reset = true) {
    entityStates.forEach((entity) => {
      entity.skills.forEach((skill) => {
        const id = BigInt("0x" + entity.id);
        const breakdowns = this.getBreakdowns(id, skill.id);
        if (breakdowns)
          skill.breakdown = [...breakdowns];
      });
    });
    if (reset)
      this.resetBreakdowns();
  }
  //#endregion
  setKillState(state) {
    this.#game.killState = state;
  }
  setZoneLevel(zoneLevel) {
    this.#game.zoneLevel = zonelevel[zoneLevel];
  }
};

// src/logger/partytracker.ts
var PartyTracker = class {
  characterIdToPartyId;
  entityIdToPartyId;
  raidInstanceToPartyInstances;
  ownName;
  characterNameToCharacterId;
  #pcIdMapper;
  constructor(pcIdMapper) {
    this.characterIdToPartyId = /* @__PURE__ */ new Map();
    this.entityIdToPartyId = /* @__PURE__ */ new Map();
    this.raidInstanceToPartyInstances = /* @__PURE__ */ new Map();
    this.characterNameToCharacterId = /* @__PURE__ */ new Map();
    this.#pcIdMapper = pcIdMapper;
  }
  add(raidInstanceId, partyId, characterId = void 0, entityId = void 0, name = void 0) {
    if (!characterId && !entityId)
      return;
    if (characterId && !entityId)
      entityId = this.#pcIdMapper.getEntityId(characterId);
    if (entityId && !characterId)
      characterId = this.#pcIdMapper.getEntityId(entityId);
    if (characterId)
      this.characterIdToPartyId.set(characterId, partyId);
    if (entityId)
      this.entityIdToPartyId.set(entityId, partyId);
    if (name && characterId)
      this.characterNameToCharacterId.set(name, characterId);
    this.registerPartyId(raidInstanceId, partyId);
  }
  completeEntry(characterId, entityId) {
    const charPartyId = this.getPartyIdFromCharacterId(characterId);
    const entPartyId = this.getPartyIdFromEntityId(entityId);
    if (charPartyId && entPartyId)
      return;
    if (!charPartyId && entPartyId) {
      this.characterIdToPartyId.set(characterId, entPartyId);
    }
    if (!entPartyId && charPartyId) {
      this.entityIdToPartyId.set(entityId, charPartyId);
    }
  }
  changeEntityId(oldEntityId, newEntityId) {
    const partyId = this.getPartyIdFromEntityId(oldEntityId);
    if (partyId) {
      this.entityIdToPartyId.delete(oldEntityId);
      this.entityIdToPartyId.set(newEntityId, partyId);
    }
  }
  setOwnName(name) {
    this.ownName = name;
  }
  remove(partyInstanceId, name) {
    if (name === this.ownName) {
      this.removePartyMappings(partyInstanceId);
      return;
    }
    const chracterId = this.characterNameToCharacterId.get(name);
    this.characterNameToCharacterId.delete(name);
    if (!chracterId)
      return;
    this.characterIdToPartyId.delete(chracterId);
    const objectId = this.#pcIdMapper.getEntityId(chracterId);
    if (objectId)
      this.characterIdToPartyId.delete(objectId);
  }
  isCharacterInParty(characterId) {
    return this.characterIdToPartyId.has(characterId);
  }
  isEntityInParty(entityId) {
    return this.entityIdToPartyId.has(entityId);
  }
  getPartyIdFromCharacterId(characterId) {
    return this.characterIdToPartyId.get(characterId);
  }
  getPartyIdFromEntityId(entityId) {
    return this.entityIdToPartyId.get(entityId);
  }
  removePartyMappings(partyInstanceId) {
    const raidId = this.getRaidInstanceId(partyInstanceId);
    const partyIds = raidId ? this.raidInstanceToPartyInstances.get(raidId) ?? /* @__PURE__ */ new Set([partyInstanceId]) : /* @__PURE__ */ new Set([partyInstanceId]);
    for (const [characterId, partyId] of this.characterIdToPartyId) {
      if (partyIds.has(partyId)) {
        this.characterIdToPartyId.delete(characterId);
        for (const [name, charId] of this.characterNameToCharacterId) {
          if (characterId === charId) {
            this.characterNameToCharacterId.delete(name);
            break;
          }
        }
      }
    }
    for (const [entityId, partyId] of this.entityIdToPartyId) {
      if (partyIds.has(partyId))
        this.entityIdToPartyId.delete(entityId);
    }
  }
  getRaidInstanceId(partyId) {
    for (const data of this.raidInstanceToPartyInstances) {
      if (data[1].has(partyId))
        return data[0];
    }
    return void 0;
  }
  registerPartyId(raidInstanceId, partyId) {
    let list = this.raidInstanceToPartyInstances.get(raidInstanceId);
    if (!list) {
      list = /* @__PURE__ */ new Set();
      this.raidInstanceToPartyInstances.set(raidInstanceId, list);
    }
    list.add(partyId);
  }
  partyInfo(pkt, entities, localPlayer) {
    const parsed = pkt.parsed;
    if (!parsed)
      return;
    if (parsed.memberDatas.length === 1 && parsed.memberDatas[0]?.name === localPlayer.name) {
      this.remove(parsed.partyInstanceId, parsed.memberDatas[0].name);
      return;
    }
    this.removePartyMappings(parsed.partyInstanceId);
    for (const pm of parsed.memberDatas) {
      if (pm.characterId === localPlayer.characterId) {
        this.setOwnName(pm.name);
      }
      const entityId = this.#pcIdMapper.getEntityId(pm.characterId);
      if (entityId) {
        const ent = entities.get(entityId);
        if (ent && ent.entityType === 1 /* Player */) {
          if (ent.name !== pm.name) {
            const p = ent;
            p.gearLevel = pm.gearLevel;
            p.name = pm.name;
            p.class = pm.classId;
          }
        }
      }
      this.add(parsed.raidInstanceId, parsed.partyInstanceId, pm.characterId, entityId, pm.name);
    }
    return;
  }
};

// src/logger/pcidmapper.ts
var PCIdMapper = class {
  entityToCharacterId;
  characterToEntityId;
  constructor() {
    this.entityToCharacterId = /* @__PURE__ */ new Map();
    this.characterToEntityId = /* @__PURE__ */ new Map();
  }
  addMapping(characterId, entityId) {
    this.entityToCharacterId.set(entityId, characterId);
    this.characterToEntityId.set(characterId, entityId);
  }
  getCharacterId(entityId) {
    return this.entityToCharacterId.get(entityId);
  }
  getEntityId(characterId) {
    return this.characterToEntityId.get(characterId);
  }
  clear() {
    this.entityToCharacterId.clear();
    this.characterToEntityId.clear();
  }
};

// src/logger/parser.ts
var Parser = class extends TypedEmitter2 {
  #logger;
  #data;
  #pcIdMapper;
  #partyTracker;
  #statusTracker;
  #entityTracker;
  #gameTracker;
  #statApi;
  //TODO: refactor
  #wasWipe;
  #wasKill;
  constructor(logger, data, clientId, options) {
    super();
    this.#logger = logger;
    this.#data = data;
    this.#pcIdMapper = new PCIdMapper();
    this.#partyTracker = new PartyTracker(this.#pcIdMapper);
    this.#statusTracker = new StatusTracker(this.#partyTracker, this.#data, options.isLive ?? true);
    this.#entityTracker = new EntityTracker(this.#pcIdMapper, this.#partyTracker, this.#statusTracker, this.#data);
    this.#statApi = new StatApi(
      this.#entityTracker,
      clientId,
      isLiveLogger(this.#logger, options.isLive) ? this.#logger : void 0
    );
    this.#gameTracker = new GameTracker(this.#entityTracker, this.#statusTracker, this.#statApi, this.#data, options);
    this.#gameTracker.emit = this.emit.bind(this);
    this.#wasWipe = false;
    this.#wasKill = false;
    if (this.#gameTracker.options.isLive) {
      setInterval(this.broadcastStateChange.bind(this), 100);
    }
    this.#logger.on("APP_StatApi", (pkt) => {
      const parsed = pkt.parsed;
      if (!parsed)
        return;
      this.#statApi.updatePlayerStats(parsed.players);
    }).on("AbilityChangeNotify", (pkt) => {
    }).on("ActiveAbilityNotify", (pkt) => {
    }).on("AddonSkillFeatureChangeNotify", (pkt) => {
    }).on("BlockSkillStateNotify", (pkt) => {
    }).on("CounterAttackNotify", (pkt) => {
      const parsed = pkt.parsed;
      if (!parsed)
        return;
      const source = this.#entityTracker.entities.get(parsed.sourceId);
      if (source)
        this.#gameTracker.onCounterAttack(source, pkt.time);
    }).on("DeathNotify", (pkt) => {
      const parsed = pkt.parsed;
      if (!parsed)
        return;
      const target = this.#entityTracker.entities.get(parsed.targetId);
      if (target)
        this.#gameTracker.onDeath(target, pkt.time);
    }).on("EquipChangeNotify", (pkt) => {
      const parsed = pkt.parsed;
      if (!parsed)
        return;
      const player = this.#entityTracker.entities.get(parsed.objectId);
      if (!player || player.entityType !== 1 /* Player */)
        return;
      player.itemSet = this.#entityTracker.getPlayerSetOptions(parsed.equipItemDataList);
      const equipList = [];
      parsed.equipItemDataList.forEach((item) => {
        if (item.id !== void 0 && item.slot !== void 0)
          equipList.push({ id: item.id, slot: item.slot });
      });
      player.items.equipList = equipList;
    }).on("EquipLifeToolChangeNotify", (pkt) => {
      const parsed = pkt.parsed;
      if (!parsed)
        return;
      const player = this.#entityTracker.entities.get(parsed.objectId);
      if (!player || player.entityType !== 1 /* Player */)
        return;
      const lifeToolList = [];
      parsed.equipLifeToolDataList.forEach((item) => {
        if (item.id !== void 0 && item.slot !== void 0)
          lifeToolList.push({ id: item.id, slot: item.slot });
      });
      player.items.lifeToolList = lifeToolList;
    }).on("IdentityStanceChangeNotify", (pkt) => {
      const parsed = pkt.parsed;
      if (!parsed)
        return;
      const entity = this.#entityTracker.entities.get(parsed.objectId);
      if (entity && entity.entityType === 1 /* Player */) {
        entity.stance = parsed.stance;
      }
    }).on("IdentityGaugeChangeNotify", (pkt) => {
    }).on("InitAbility", (pkt) => {
    }).on("InitEnv", (pkt) => {
      this.#entityTracker.processInitEnv(pkt);
      this.#gameTracker.onInitEnv(pkt, pkt.time);
    }).on("InitLocal", (pkt) => {
    }).on("InitPC", (pkt) => {
      const player = this.#entityTracker.processInitPC(pkt);
      if (player && pkt.parsed) {
        const statsMap = this.#data.getStatPairMap(pkt.parsed.statPair);
        this.#gameTracker.updateOrCreateEntity(
          player,
          {
            id: player.entityId.toString(16),
            name: player.name,
            classId: player.class,
            isPlayer: true,
            gearScore: player.gearLevel,
            currentHp: Number(statsMap.get(1 /* hp */)) || 0,
            maxHp: Number(statsMap.get(27 /* max_hp */)) || 0
          },
          pkt.time
        );
      }
    }).on("InitItem", (pkt) => {
      const parsed = pkt.parsed;
      if (!parsed)
        return;
      if ([1 /* equip */, 20 /* account_equip */].includes(parsed.storageType)) {
        this.#entityTracker.localPlayer.itemSet = this.#entityTracker.getPlayerSetOptions(parsed.itemDataList);
        const equipList = [];
        parsed.itemDataList.forEach((item) => {
          if (item.id !== void 0 && item.slot !== void 0)
            equipList.push({ id: item.id, slot: item.slot });
        });
        this.#entityTracker.localPlayer.items.equipList = equipList;
      } else if (parsed.storageType === 21 /* life_tool */) {
        const lifeToolList = [];
        parsed.itemDataList.forEach((item) => {
          if (item.id !== void 0 && item.slot !== void 0)
            lifeToolList.push({ id: item.id, slot: item.slot });
        });
        this.#entityTracker.localPlayer.items.lifeToolList = lifeToolList;
      }
    }).on("MigrationExecute", (pkt) => {
      this.#statApi.zoneSyncStatus = 0 /* INVALID */;
      const parsed = pkt.parsed;
      if (!parsed)
        return;
      if (this.#entityTracker.localPlayer.characterId === 0n)
        this.#entityTracker.localPlayer.characterId = parsed.account_CharacterId1 < parsed.account_CharacterId2 ? parsed.account_CharacterId1 : parsed.account_CharacterId2;
      this.#statApi.ip = pkt.parsed.serverAddr.split(":")[0];
    }).on("NewNpc", (pkt) => {
      const npcEntity = this.#entityTracker.processNewNpc(pkt);
      if (npcEntity && pkt.parsed) {
        const statsMap = this.#data.getStatPairMap(pkt.parsed.npcStruct.statPair);
        this.#gameTracker.updateOrCreateEntity(
          npcEntity,
          {
            id: npcEntity.entityId.toString(16),
            name: npcEntity.name,
            npcId: npcEntity.typeId,
            isPlayer: false,
            isBoss: npcEntity.isBoss,
            currentHp: Number(statsMap.get(1 /* hp */)) || 0,
            maxHp: Number(statsMap.get(27 /* max_hp */)) || 0
          },
          pkt.time
        );
      }
    }).on("NewNpcSummon", (pkt) => {
      const npcEntity = this.#entityTracker.processNewNpcSummon(pkt);
      if (npcEntity && pkt.parsed) {
        const statsMap = this.#data.getStatPairMap(pkt.parsed.npcData.statPair);
        this.#gameTracker.updateOrCreateEntity(
          npcEntity,
          {
            id: npcEntity.entityId.toString(16),
            name: npcEntity.name,
            npcId: npcEntity.typeId,
            isPlayer: false,
            isBoss: npcEntity.isBoss,
            currentHp: Number(statsMap.get(1 /* hp */)) || 0,
            maxHp: Number(statsMap.get(27 /* max_hp */)) || 0
          },
          pkt.time
        );
      }
    }).on("NewPC", (pkt) => {
      const player = this.#entityTracker.processNewPC(pkt);
      if (player && pkt.parsed) {
        const statsMap = this.#data.getStatPairMap(pkt.parsed.pcStruct.statPair);
        this.#gameTracker.updateOrCreateEntity(
          player,
          {
            id: player.entityId.toString(16),
            name: player.name,
            classId: player.class,
            isPlayer: true,
            gearScore: player.gearLevel,
            currentHp: Number(statsMap.get(1 /* hp */)) || 0,
            maxHp: Number(statsMap.get(27 /* max_hp */)) || 0
          },
          pkt.time
        );
      }
    }).on("NewProjectile", (pkt) => {
      const parsed = pkt.parsed;
      if (!parsed)
        return;
      const projectile = {
        entityId: parsed.projectileInfo.projectileId,
        entityType: 5 /* Projectile */,
        name: parsed.projectileInfo.projectileId.toString(16),
        ownerId: parsed.projectileInfo.ownerId,
        skillEffectId: parsed.projectileInfo.skillEffect,
        skillId: parsed.projectileInfo.skillId,
        stats: /* @__PURE__ */ new Map()
      };
      this.#entityTracker.entities.set(projectile.entityId, projectile);
    }).on("NewTrap", (pkt) => {
      const parsed = pkt.parsed;
      if (!parsed)
        return;
      const projectile = {
        entityId: parsed.trapData.objectId,
        entityType: 5 /* Projectile */,
        name: parsed.trapData.objectId.toString(16),
        ownerId: parsed.trapData.ownerId,
        skillEffectId: parsed.trapData.skillEffect,
        skillId: parsed.trapData.skillId,
        stats: /* @__PURE__ */ new Map()
      };
      this.#entityTracker.entities.set(projectile.entityId, projectile);
    }).on("ParalyzationStateNotify", (pkt) => {
    }).on("PartyInfo", (pkt) => {
      this.#partyTracker.partyInfo(pkt, this.#entityTracker.entities, this.#entityTracker.localPlayer);
    }).on("PartyLeaveResult", (pkt) => {
      const parsed = pkt.parsed;
      if (!parsed)
        return;
      this.#partyTracker.remove(parsed.partyInstanceId, parsed.name);
    }).on("PartyPassiveStatusEffectAddNotify", (pkt) => {
    }).on("PartyPassiveStatusEffectRemoveNotify", (pkt) => {
    }).on("PartyStatusEffectAddNotify", (pkt) => {
      const parsed = pkt.parsed;
      if (!parsed)
        return;
      for (const effect of parsed.statusEffectDatas) {
        const sourceId = parsed.playerIdOnRefresh !== 0n ? parsed.playerIdOnRefresh : effect.sourceId;
        const sourceEnt = this.#entityTracker.getSourceEntity(sourceId);
        this.#statusTracker.RegisterStatusEffect(
          this.#statusTracker.buildStatusEffect(
            effect,
            parsed.characterId,
            sourceEnt.entityId,
            0 /* Party */,
            pkt.time
          )
        );
      }
    }).on("PartyStatusEffectRemoveNotify", (pkt) => {
      const parsed = pkt.parsed;
      if (!parsed)
        return;
      for (const effectId of parsed.statusEffectIds) {
        const se = this.#statusTracker.RemoveStatusEffect(
          parsed.characterId,
          effectId,
          0 /* Party */,
          parsed.reason,
          pkt.time
        );
        if (se && se.statusEffectId === 9701) {
          this.#statApi.syncData();
        }
      }
    }).on("PartyStatusEffectResultNotify", (pkt) => {
      const parsed = pkt.parsed;
      if (!parsed)
        return;
      this.#partyTracker.add(parsed.raidInstanceId, parsed.partyInstanceId, parsed.characterId);
    }).on("PassiveStatusEffectAddNotify", (pkt) => {
    }).on("PassiveStatusEffectRemoveNotify", (pkt) => {
    }).on("RaidBegin", (pkt) => {
      const parsed = pkt.parsed;
      if (!parsed)
        return;
      if (this.#data.statQueryFilter.raid.has(parsed.raidId))
        this.#statApi.zoneSyncStatus |= 16 /* RAID_VALID */;
      else
        this.#statApi.zoneSyncStatus |= 8 /* RAID_INVALID */;
    }).on("ZoneMemberLoadStatusNotify", (pkt) => {
      const parsed = pkt.parsed;
      if (!parsed)
        return;
      this.#gameTracker.setZoneLevel(parsed.zoneLevel);
      if (this.#data.statQueryFilter.zone.has(parsed.zoneId) && [0 /* normal */, 1 /* hard */, 5 /* extreme */].includes(parsed.zoneLevel))
        this.#statApi.zoneSyncStatus |= 4 /* ZONE_VALID */;
      else
        this.#statApi.zoneSyncStatus |= 2 /* ZONE_INVALID */;
    }).on("RaidBossKillNotify", (pkt) => {
      this.#gameTracker.setKillState(1 /* CLEAR */);
      this.#gameTracker.onPhaseTransition(1, pkt.time);
    }).on("RaidResult", (pkt) => {
      if (pkt.parsed?.raidResult === 1 /* clear */)
        this.#gameTracker.setKillState(1 /* CLEAR */);
      this.#gameTracker.onPhaseTransition(0, pkt.time);
    }).on("RemoveObject", (pkt) => {
      const parsed = pkt.parsed;
      if (!parsed)
        return;
      for (const upo of parsed.unpublishedObjects)
        this.#statusTracker.RemoveLocalObject(upo.objectId, pkt.time);
    }).on("SkillCastNotify", (pkt) => {
      const parsed = pkt.parsed;
      if (!parsed)
        return;
      let ownerEntity = this.#entityTracker.getSourceEntity(parsed.caster);
      ownerEntity = this.#entityTracker.guessIsPlayer(ownerEntity, parsed.skillId);
      this.#gameTracker.onStartSkill(ownerEntity, parsed.skillId, pkt.time);
    }).on("SkillDamageAbnormalMoveNotify", (pkt) => {
      const parsedDmg = pkt.parsed;
      if (!parsedDmg)
        return;
      const ownerEntity = this.#entityTracker.getSourceEntity(parsedDmg.sourceId);
      parsedDmg.skillDamageAbnormalMoveEvents.forEach((event) => {
        const targetEntity = this.#entityTracker.getOrCreateEntity(event.skillDamageEvent.targetId);
        const sourceEntity = this.#entityTracker.getOrCreateEntity(parsedDmg.sourceId);
        targetEntity.stats.set(1 /* hp */, event.skillDamageEvent.curHp);
        targetEntity.stats.set(27 /* max_hp */, event.skillDamageEvent.maxHp);
        this.#gameTracker.onDamage(
          ownerEntity,
          sourceEntity,
          targetEntity,
          {
            skillId: parsedDmg.skillId,
            skillEffectId: parsedDmg.skillEffectId,
            damage: Number(event.skillDamageEvent.damage),
            modifier: event.skillDamageEvent.modifier,
            targetCurHp: Number(event.skillDamageEvent.curHp),
            targetMaxHp: Number(event.skillDamageEvent.maxHp),
            damageAttr: event.skillDamageEvent.damageAttr ?? 0 /* none */,
            damageType: event.skillDamageEvent.damageType
          },
          parsedDmg.skillDamageAbnormalMoveEvents.length,
          pkt.time
        );
      });
    }).on("SkillDamageNotify", (pkt) => {
      const parsedDmg = pkt.parsed;
      if (!parsedDmg)
        return;
      const ownerEntity = this.#entityTracker.getSourceEntity(parsedDmg.sourceId);
      parsedDmg.skillDamageEvents.forEach((event) => {
        const targetEntity = this.#entityTracker.getOrCreateEntity(event.targetId);
        const sourceEntity = this.#entityTracker.getOrCreateEntity(parsedDmg.sourceId);
        this.#gameTracker.onDamage(
          ownerEntity,
          sourceEntity,
          targetEntity,
          {
            skillId: parsedDmg.skillId,
            skillEffectId: parsedDmg.skillEffectId ?? 0,
            damage: Number(event.damage),
            modifier: event.modifier,
            targetCurHp: Number(event.curHp),
            targetMaxHp: Number(event.maxHp),
            damageAttr: event.damageAttr ?? 0 /* none */,
            damageType: event.damageType
          },
          parsedDmg.skillDamageEvents.length,
          pkt.time
        );
      });
    }).on("SkillStageNotify", (pkt) => {
    }).on("SkillStartNotify", (pkt) => {
      const parsed = pkt.parsed;
      if (!parsed)
        return;
      let ownerEntity = this.#entityTracker.getSourceEntity(parsed.sourceId);
      ownerEntity = this.#entityTracker.guessIsPlayer(ownerEntity, parsed.skillId);
      if (ownerEntity.entityType === 1 /* Player */) {
        const player = ownerEntity;
        let skill = player.skills.get(parsed.skillId);
        if (!skill) {
          skill = { effects: /* @__PURE__ */ new Set(), tripods: /* @__PURE__ */ new Map() };
          player.skills.set(parsed.skillId, skill);
        }
        skill.level = parsed.skillLevel;
        if (parsed.skillOptionData.tripodIndex && parsed.skillOptionData.tripodLevel) {
          if (!skill.tripods) {
            skill.tripods = /* @__PURE__ */ new Map();
          }
          for (const [idx, tripodRow] of ["first", "second", "third"].entries()) {
            if (parsed.skillOptionData.tripodIndex[tripodRow] === 0) {
              for (let num = 1; num <= 3; num++) {
                skill.tripods.delete(3 * idx + num);
              }
              continue;
            }
            const tripodIdx = 3 * idx + parsed.skillOptionData.tripodIndex[tripodRow];
            const tripodLevel = parsed.skillOptionData.tripodLevel[tripodRow];
            let tripodData = skill.tripods.get(tripodIdx);
            if (tripodData && tripodLevel === tripodData.level)
              continue;
            for (let num = 1; num <= 3; num++) {
              skill.tripods.delete(3 * idx + num);
            }
            const effect = this.#data.skillFeature.get(parsed.skillId)?.get(tripodIdx);
            let options2 = [];
            if (effect) {
              effect.entries.forEach((entry) => {
                if (entry.level !== 0 && entry.level !== tripodLevel)
                  return;
                options2.push(entry);
              });
            }
            skill.tripods.set(tripodIdx, {
              level: parsed.skillOptionData.tripodLevel[tripodRow],
              options: options2.sort((a, b) => b.level - a.level)
            });
          }
        }
      }
      this.#gameTracker.onStartSkill(ownerEntity, parsed.skillId, pkt.time);
    }).on("StatusEffectAddNotify", (pkt) => {
      const parsed = pkt.parsed;
      if (!parsed)
        return;
      const sourceEnt = this.#entityTracker.getSourceEntity(parsed.statusEffectData.sourceId);
      this.#statusTracker.RegisterStatusEffect(
        this.#statusTracker.buildStatusEffect(
          parsed.statusEffectData,
          parsed.objectId,
          sourceEnt.entityId,
          1 /* Local */,
          pkt.time
        )
      );
    }).on("StatusEffectDurationNotify", (pkt) => {
      const parsed = pkt.parsed;
      if (!parsed)
        return;
      this.#statusTracker.UpdateDuration(
        parsed.effectInstanceId,
        parsed.targetId,
        parsed.expirationTick,
        1 /* Local */
      );
    }).on("StatusEffectRemoveNotify", (pkt) => {
      const parsed = pkt.parsed;
      if (!parsed)
        return;
      for (const effectId of parsed.statusEffectIds) {
        const se = this.#statusTracker.RemoveStatusEffect(
          parsed.objectId,
          effectId,
          1 /* Local */,
          parsed.reason,
          pkt.time
        );
        if (se && se.statusEffectId === 9701) {
          this.#statApi.syncData();
        }
      }
    }).on("StatusEffectSyncDataNotify", (pkt) => {
      const parsed = pkt.parsed;
      if (!parsed)
        return;
      this.#statusTracker.SyncStatusEffect(
        parsed.effectInstanceId,
        parsed.characterId,
        parsed.objectId,
        parsed.value,
        this.#entityTracker.localPlayer.characterId
      );
    }).on("TriggerBossBattleStatus", (pkt) => {
      this.#gameTracker.onPhaseTransition(2, pkt.time);
    }).on("TriggerFinishNotify", (pkt) => {
    }).on("TriggerStartNotify", (pkt) => {
      const parsed = pkt.parsed;
      if (!parsed)
        return;
      switch (parsed.triggerSignalType) {
        case 57 /* dungeon_phase1_clear */:
        case 59 /* dungeon_phase2_clear */:
        case 61 /* dungeon_phase3_clear */:
        case 63 /* dungeon_phase4_clear */:
        case 74 /* dungeon_phase5_clear */:
        case 76 /* dungeon_phase6_clear */:
          this.#gameTracker.setKillState(1 /* CLEAR */);
          break;
        case 58 /* dungeon_phase1_fail */:
        case 60 /* dungeon_phase2_fail */:
        case 62 /* dungeon_phase3_fail */:
        case 64 /* dungeon_phase4_fail */:
        case 75 /* dungeon_phase5_fail */:
        case 77 /* dungeon_phase6_fail */:
          this.#gameTracker.setKillState(0 /* FAIL */);
          break;
        case 27 /* assembled */:
        case 10 /* volume_enter */:
        case 11 /* volume_leave */:
          this.#statApi.syncData();
      }
    }).on("TroopMemberUpdateMinNotify", (pkt) => {
    }).on("ZoneObjectUnpublishNotify", (pkt) => {
      const parsed = pkt.parsed;
      if (!parsed)
        return;
      this.#statusTracker.RemoveLocalObject(parsed.objectId, pkt.time);
    }).on("ZoneStatusEffectAddNotify", (pkt) => {
    }).on("TroopMemberUpdateMinNotify", (pkt) => {
      const parsed = pkt.parsed;
      if (!parsed)
        return;
      if (parsed.statusEffectDatas.length > 0) {
        for (const se of parsed.statusEffectDatas) {
          const objectId = this.#pcIdMapper.getEntityId(parsed.characterId);
          const newValCandidate1 = se.value ? se.value.readUInt32LE() : 0;
          const newValCandidate2 = se.value ? se.value.readUInt32LE(8) : 0;
          const newVal = newValCandidate1 < newValCandidate2 ? newValCandidate1 : newValCandidate2;
          this.#statusTracker.SyncStatusEffect(
            se.effectInstanceId,
            parsed.characterId,
            objectId,
            newVal,
            this.#entityTracker.localPlayer.characterId
          );
        }
      }
    }).on("ZoneStatusEffectRemoveNotify", (pkt) => {
    });
    this.#statusTracker.on("shieldApplied", (se) => {
      let targetObjectId = se.targetId;
      if (se.type === 0 /* Party */) {
        targetObjectId = this.#pcIdMapper.getEntityId(se.targetId) ?? targetObjectId;
      }
      if (targetObjectId === void 0)
        return;
      const sourceEntity = this.#entityTracker.getSourceEntity(se.sourceId);
      const targetEntity = this.#entityTracker.getOrCreateEntity(targetObjectId);
      this.#gameTracker.onShieldApplied(targetEntity, sourceEntity, se.statusEffectId, se.value);
    }).on("shieldChanged", (se, oldValue, newVal) => {
      let targetObjectId = se.targetId;
      if (se.type === 0 /* Party */) {
        targetObjectId = this.#pcIdMapper.getEntityId(se.targetId) ?? targetObjectId;
      }
      if (targetObjectId === void 0)
        return;
      const sourceEntity = this.#entityTracker.getSourceEntity(se.sourceId);
      const targetEntity = this.#entityTracker.getOrCreateEntity(targetObjectId);
      this.#gameTracker.onShieldUsed(targetEntity, sourceEntity, se.statusEffectId, oldValue - newVal);
    });
  }
  //TODO: method to change broadcast interval (without restart)
  broadcastStateChange() {
    this.emit("state-change", this.#gameTracker.getBroadcast());
  }
  reset() {
    this.#gameTracker.resetState(+/* @__PURE__ */ new Date());
  }
  cancelReset() {
    this.#gameTracker.cancelReset();
  }
  updateOptions(options) {
    this.#gameTracker.updateOptions(options);
  }
  onConnect(ip) {
    if (!this.#statApi.ip) {
      this.#statApi.ip = ip.split(":")[0];
      if (isLiveLogger(this.#logger, this.#gameTracker.options.isLive)) {
        this.#logger.appendLog(
          new LogEvent(
            {
              account_CharacterId1: 0n,
              serverAddr: ip,
              account_CharacterId2: 0n
            },
            11 /* MigrationExecute */,
            write
          )
        );
      }
    }
  }
  get encounters() {
    this.#gameTracker.splitEncounter(/* @__PURE__ */ new Date());
    return this.#gameTracker.encounters;
  }
};
function isLiveLogger(logger, isLive) {
  return logger instanceof LiveLogger || logger.appendLog && isLive;
}
export {
  Parser
};
