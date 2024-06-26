var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
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

// src/logger/data.ts
var data_exports = {};
__export(data_exports, {
  KillState: () => KillState,
  PARSED_LOG_VERSION: () => PARSED_LOG_VERSION,
  RaidDifficulty: () => RaidDifficulty,
  StatusEffectBuffTypeFlags: () => StatusEffectBuffTypeFlags,
  StatusEffectTarget: () => StatusEffectTarget
});
module.exports = __toCommonJS(data_exports);
var PARSED_LOG_VERSION = 19;
var StatusEffectTarget = /* @__PURE__ */ ((StatusEffectTarget2) => {
  StatusEffectTarget2[StatusEffectTarget2["OTHER"] = 0] = "OTHER";
  StatusEffectTarget2[StatusEffectTarget2["PARTY"] = 1] = "PARTY";
  StatusEffectTarget2[StatusEffectTarget2["SELF"] = 2] = "SELF";
  return StatusEffectTarget2;
})(StatusEffectTarget || {});
var StatusEffectBuffTypeFlags = /* @__PURE__ */ ((StatusEffectBuffTypeFlags2) => {
  StatusEffectBuffTypeFlags2[StatusEffectBuffTypeFlags2["NONE"] = 0] = "NONE";
  StatusEffectBuffTypeFlags2[StatusEffectBuffTypeFlags2["DMG"] = 1] = "DMG";
  StatusEffectBuffTypeFlags2[StatusEffectBuffTypeFlags2["CRIT"] = 2] = "CRIT";
  StatusEffectBuffTypeFlags2[StatusEffectBuffTypeFlags2["ATKSPEED"] = 4] = "ATKSPEED";
  StatusEffectBuffTypeFlags2[StatusEffectBuffTypeFlags2["MOVESPEED"] = 8] = "MOVESPEED";
  StatusEffectBuffTypeFlags2[StatusEffectBuffTypeFlags2["HP"] = 16] = "HP";
  StatusEffectBuffTypeFlags2[StatusEffectBuffTypeFlags2["DEFENSE"] = 32] = "DEFENSE";
  StatusEffectBuffTypeFlags2[StatusEffectBuffTypeFlags2["RESOURCE"] = 64] = "RESOURCE";
  StatusEffectBuffTypeFlags2[StatusEffectBuffTypeFlags2["COOLDOWN"] = 128] = "COOLDOWN";
  StatusEffectBuffTypeFlags2[StatusEffectBuffTypeFlags2["STAGGER"] = 256] = "STAGGER";
  StatusEffectBuffTypeFlags2[StatusEffectBuffTypeFlags2["SHIELD"] = 512] = "SHIELD";
  StatusEffectBuffTypeFlags2[StatusEffectBuffTypeFlags2["ANY"] = 262144] = "ANY";
  return StatusEffectBuffTypeFlags2;
})(StatusEffectBuffTypeFlags || {});
var RaidDifficulty = /* @__PURE__ */ ((RaidDifficulty2) => {
  RaidDifficulty2[RaidDifficulty2["UNKNOWN"] = 0] = "UNKNOWN";
  RaidDifficulty2[RaidDifficulty2["NORMAL"] = 1] = "NORMAL";
  RaidDifficulty2[RaidDifficulty2["HARD"] = 2] = "HARD";
  RaidDifficulty2[RaidDifficulty2["HELL"] = 3] = "HELL";
  RaidDifficulty2[RaidDifficulty2["TRIAL"] = 4] = "TRIAL";
  return RaidDifficulty2;
})(RaidDifficulty || {});
var KillState = /* @__PURE__ */ ((KillState2) => {
  KillState2[KillState2["FAIL"] = 0] = "FAIL";
  KillState2[KillState2["CLEAR"] = 1] = "CLEAR";
  return KillState2;
})(KillState || {});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  KillState,
  PARSED_LOG_VERSION,
  RaidDifficulty,
  StatusEffectBuffTypeFlags,
  StatusEffectTarget
});
