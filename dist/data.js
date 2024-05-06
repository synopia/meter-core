var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
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
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
};

// src/data.ts
var data_exports = {};
__export(data_exports, {
  MeterData: () => MeterData
});
module.exports = __toCommonJS(data_exports);
var import_fs = require("fs");
var import_path = require("path");

// src/packets/generated/enums.ts
var addontype = /* @__PURE__ */ ((addontype2) => {
  addontype2[addontype2["none"] = 0] = "none";
  addontype2[addontype2["slot"] = 1] = "slot";
  addontype2[addontype2["stat"] = 2] = "stat";
  addontype2[addontype2["ability_point"] = 3] = "ability_point";
  addontype2[addontype2["combat_effect"] = 4] = "combat_effect";
  addontype2[addontype2["skill_damage"] = 5] = "skill_damage";
  addontype2[addontype2["skill_critical_ratio"] = 6] = "skill_critical_ratio";
  addontype2[addontype2["skill_critical_damage"] = 7] = "skill_critical_damage";
  addontype2[addontype2["skill_penetration"] = 8] = "skill_penetration";
  addontype2[addontype2["npc_grade_less_damage"] = 9] = "npc_grade_less_damage";
  addontype2[addontype2["npc_grade_less_critical_ratio"] = 10] = "npc_grade_less_critical_ratio";
  addontype2[addontype2["npc_grade_less_critical_damage"] = 11] = "npc_grade_less_critical_damage";
  addontype2[addontype2["npc_grade_less_penetration"] = 12] = "npc_grade_less_penetration";
  addontype2[addontype2["npc_grade_greater_damage"] = 13] = "npc_grade_greater_damage";
  addontype2[addontype2["npc_grade_greater_critical_ratio"] = 14] = "npc_grade_greater_critical_ratio";
  addontype2[addontype2["npc_grade_greater_critical_damage"] = 15] = "npc_grade_greater_critical_damage";
  addontype2[addontype2["npc_grade_greater_penetration"] = 16] = "npc_grade_greater_penetration";
  addontype2[addontype2["npc_species_damage"] = 17] = "npc_species_damage";
  addontype2[addontype2["npc_species_critical_ratio"] = 18] = "npc_species_critical_ratio";
  addontype2[addontype2["npc_species_critical_damage"] = 19] = "npc_species_critical_damage";
  addontype2[addontype2["npc_species_penetration"] = 20] = "npc_species_penetration";
  addontype2[addontype2["npc_attr_damage"] = 21] = "npc_attr_damage";
  addontype2[addontype2["npc_attr_critical_ratio"] = 22] = "npc_attr_critical_ratio";
  addontype2[addontype2["npc_attr_critical_damage"] = 23] = "npc_attr_critical_damage";
  addontype2[addontype2["npc_attr_penetration"] = 24] = "npc_attr_penetration";
  addontype2[addontype2["mana_reduction"] = 25] = "mana_reduction";
  addontype2[addontype2["skill_mana_reduction"] = 26] = "skill_mana_reduction";
  addontype2[addontype2["skill_cooldown_reduction"] = 27] = "skill_cooldown_reduction";
  addontype2[addontype2["ability_feature"] = 28] = "ability_feature";
  addontype2[addontype2["class_option"] = 29] = "class_option";
  addontype2[addontype2["ability_point_passive"] = 30] = "ability_point_passive";
  addontype2[addontype2["instrument"] = 31] = "instrument";
  addontype2[addontype2["skill_feature"] = 32] = "skill_feature";
  addontype2[addontype2["npc_adaptation"] = 33] = "npc_adaptation";
  addontype2[addontype2["skill_group_damage"] = 34] = "skill_group_damage";
  addontype2[addontype2["skill_group_cooldown_reduction"] = 35] = "skill_group_cooldown_reduction";
  addontype2[addontype2["skill_level"] = 36] = "skill_level";
  addontype2[addontype2["skill_feature_level"] = 37] = "skill_feature_level";
  addontype2[addontype2["life_casting_speed"] = 38] = "life_casting_speed";
  addontype2[addontype2["life_casting_tier"] = 39] = "life_casting_tier";
  addontype2[addontype2["life_bonus_type_success"] = 40] = "life_bonus_type_success";
  addontype2[addontype2["life_bonus_type_extra"] = 41] = "life_bonus_type_extra";
  addontype2[addontype2["life_bonus_type_skill_bonus"] = 42] = "life_bonus_type_skill_bonus";
  addontype2[addontype2["life_bonus_type_minigame_perfect"] = 43] = "life_bonus_type_minigame_perfect";
  addontype2[addontype2["life_durability_bonus"] = 44] = "life_durability_bonus";
  addontype2[addontype2["life_mini_game_difficulty"] = 45] = "life_mini_game_difficulty";
  addontype2[addontype2["combat_effect_cooldown_reduction"] = 46] = "combat_effect_cooldown_reduction";
  addontype2[addontype2["skill_damage_addend"] = 47] = "skill_damage_addend";
  addontype2[addontype2["awakening_usable_count_addend"] = 48] = "awakening_usable_count_addend";
  addontype2[addontype2["battle_item_heal"] = 49] = "battle_item_heal";
  addontype2[addontype2["party_heal"] = 50] = "party_heal";
  addontype2[addontype2["party_shield"] = 51] = "party_shield";
  addontype2[addontype2["identity_gauge"] = 52] = "identity_gauge";
  addontype2[addontype2["attack_power_amplify_addend"] = 53] = "attack_power_amplify_addend";
  addontype2[addontype2["attack_power_amplify_multiplier"] = 54] = "attack_power_amplify_multiplier";
  addontype2[addontype2["not_in_party_damage"] = 55] = "not_in_party_damage";
  addontype2[addontype2["skill_effect_group_set_damage"] = 56] = "skill_effect_group_set_damage";
  return addontype2;
})(addontype || {});
var combateffectactiontype = /* @__PURE__ */ ((combateffectactiontype2) => {
  combateffectactiontype2[combateffectactiontype2["none"] = 0] = "none";
  combateffectactiontype2[combateffectactiontype2["modify_damage"] = 1] = "modify_damage";
  combateffectactiontype2[combateffectactiontype2["modify_final_damage"] = 2] = "modify_final_damage";
  combateffectactiontype2[combateffectactiontype2["modify_critical_ratio"] = 3] = "modify_critical_ratio";
  combateffectactiontype2[combateffectactiontype2["modify_critical_multiplier"] = 4] = "modify_critical_multiplier";
  combateffectactiontype2[combateffectactiontype2["modify_penetration"] = 5] = "modify_penetration";
  combateffectactiontype2[combateffectactiontype2["modify_penetration_when_critical"] = 6] = "modify_penetration_when_critical";
  combateffectactiontype2[combateffectactiontype2["exec_active_effect_when_damage"] = 7] = "exec_active_effect_when_damage";
  combateffectactiontype2[combateffectactiontype2["exec_active_effect_when_critical"] = 8] = "exec_active_effect_when_critical";
  combateffectactiontype2[combateffectactiontype2["exec_reactive_effect_when_miss"] = 9] = "exec_reactive_effect_when_miss";
  combateffectactiontype2[combateffectactiontype2["exec_reactive_effect_when_damage"] = 10] = "exec_reactive_effect_when_damage";
  combateffectactiontype2[combateffectactiontype2["exec_reactive_effect_when_critical"] = 11] = "exec_reactive_effect_when_critical";
  combateffectactiontype2[combateffectactiontype2["exec_after_effect"] = 12] = "exec_after_effect";
  combateffectactiontype2[combateffectactiontype2["exec_after_skill"] = 13] = "exec_after_skill";
  combateffectactiontype2[combateffectactiontype2["apply_heal"] = 14] = "apply_heal";
  combateffectactiontype2[combateffectactiontype2["modify_reactive_damage"] = 15] = "modify_reactive_damage";
  combateffectactiontype2[combateffectactiontype2["modify_damage_shield_multiplier"] = 16] = "modify_damage_shield_multiplier";
  combateffectactiontype2[combateffectactiontype2["exec_active_effect_when_kill"] = 17] = "exec_active_effect_when_kill";
  combateffectactiontype2[combateffectactiontype2["exec_start_skill"] = 18] = "exec_start_skill";
  combateffectactiontype2[combateffectactiontype2["modify_penetration_addend"] = 19] = "modify_penetration_addend";
  combateffectactiontype2[combateffectactiontype2["modify_penetration_addend_when_critical"] = 20] = "modify_penetration_addend_when_critical";
  combateffectactiontype2[combateffectactiontype2["modify_reactive_critical_multiplier"] = 21] = "modify_reactive_critical_multiplier";
  combateffectactiontype2[combateffectactiontype2["modify_damage_when_critical"] = 22] = "modify_damage_when_critical";
  combateffectactiontype2[combateffectactiontype2["modify_paralyzation_point"] = 23] = "modify_paralyzation_point";
  combateffectactiontype2[combateffectactiontype2["exec_when_counter"] = 24] = "exec_when_counter";
  combateffectactiontype2[combateffectactiontype2["exec_when_be_killed"] = 25] = "exec_when_be_killed";
  return combateffectactiontype2;
})(combateffectactiontype || {});
var combateffectactortype = /* @__PURE__ */ ((combateffectactortype2) => {
  combateffectactortype2[combateffectactortype2["none"] = 0] = "none";
  combateffectactortype2[combateffectactortype2["self"] = 1] = "self";
  combateffectactortype2[combateffectactortype2["target"] = 2] = "target";
  combateffectactortype2[combateffectactortype2["caster"] = 3] = "caster";
  return combateffectactortype2;
})(combateffectactortype || {});
var combateffectconditiontype = /* @__PURE__ */ ((combateffectconditiontype2) => {
  combateffectconditiontype2[combateffectconditiontype2["none"] = 0] = "none";
  combateffectconditiontype2[combateffectconditiontype2["current_skill"] = 1] = "current_skill";
  combateffectconditiontype2[combateffectconditiontype2["hp_less"] = 2] = "hp_less";
  combateffectconditiontype2[combateffectconditiontype2["hp_greater"] = 3] = "hp_greater";
  combateffectconditiontype2[combateffectconditiontype2["mp_less"] = 4] = "mp_less";
  combateffectconditiontype2[combateffectconditiontype2["mp_greater"] = 5] = "mp_greater";
  combateffectconditiontype2[combateffectconditiontype2["npc_grade_less"] = 6] = "npc_grade_less";
  combateffectconditiontype2[combateffectconditiontype2["npc_grade_greater"] = 7] = "npc_grade_greater";
  combateffectconditiontype2[combateffectconditiontype2["npc_grade_equal"] = 8] = "npc_grade_equal";
  combateffectconditiontype2[combateffectconditiontype2["npc_species"] = 9] = "npc_species";
  combateffectconditiontype2[combateffectconditiontype2["npc_attr"] = 10] = "npc_attr";
  combateffectconditiontype2[combateffectconditiontype2["abnormal_move"] = 11] = "abnormal_move";
  combateffectconditiontype2[combateffectconditiontype2["abnormal_status"] = 12] = "abnormal_status";
  combateffectconditiontype2[combateffectconditiontype2["abnormal_move_immune"] = 13] = "abnormal_move_immune";
  combateffectconditiontype2[combateffectconditiontype2["abnormal_status_immune"] = 14] = "abnormal_status_immune";
  combateffectconditiontype2[combateffectconditiontype2["abnormal_move_all"] = 15] = "abnormal_move_all";
  combateffectconditiontype2[combateffectconditiontype2["pc"] = 16] = "pc";
  combateffectconditiontype2[combateffectconditiontype2["skill_effect_id"] = 17] = "skill_effect_id";
  combateffectconditiontype2[combateffectconditiontype2["identity_stack_count"] = 18] = "identity_stack_count";
  combateffectconditiontype2[combateffectconditiontype2["status_effect_immunetype"] = 19] = "status_effect_immunetype";
  combateffectconditiontype2[combateffectconditiontype2["abnormal_not_move"] = 20] = "abnormal_not_move";
  combateffectconditiontype2[combateffectconditiontype2["target_count"] = 21] = "target_count";
  combateffectconditiontype2[combateffectconditiontype2["skill_identity_category"] = 22] = "skill_identity_category";
  combateffectconditiontype2[combateffectconditiontype2["identity_element_value"] = 23] = "identity_element_value";
  combateffectconditiontype2[combateffectconditiontype2["directional_attack"] = 24] = "directional_attack";
  combateffectconditiontype2[combateffectconditiontype2["current_skill_group"] = 25] = "current_skill_group";
  combateffectconditiontype2[combateffectconditiontype2["abnormal_move_status_all"] = 26] = "abnormal_move_status_all";
  combateffectconditiontype2[combateffectconditiontype2["identity_stance"] = 27] = "identity_stance";
  combateffectconditiontype2[combateffectconditiontype2["pc_skill"] = 28] = "pc_skill";
  combateffectconditiontype2[combateffectconditiontype2["skill_effect_group_set"] = 29] = "skill_effect_group_set";
  combateffectconditiontype2[combateffectconditiontype2["npc_id"] = 30] = "npc_id";
  combateffectconditiontype2[combateffectconditiontype2["identity_gauge0_value_less"] = 31] = "identity_gauge0_value_less";
  combateffectconditiontype2[combateffectconditiontype2["pc_without_me"] = 32] = "pc_without_me";
  combateffectconditiontype2[combateffectconditiontype2["npc_scaled_level_equal"] = 33] = "npc_scaled_level_equal";
  combateffectconditiontype2[combateffectconditiontype2["npc_scaled_level_less"] = 34] = "npc_scaled_level_less";
  combateffectconditiontype2[combateffectconditiontype2["npc_scaled_level_greater"] = 35] = "npc_scaled_level_greater";
  combateffectconditiontype2[combateffectconditiontype2["not_skill_effect_id"] = 36] = "not_skill_effect_id";
  combateffectconditiontype2[combateffectconditiontype2["abnormal_move_not_immune"] = 37] = "abnormal_move_not_immune";
  combateffectconditiontype2[combateffectconditiontype2["apply_target_marking"] = 38] = "apply_target_marking";
  combateffectconditiontype2[combateffectconditiontype2["damage_attr"] = 39] = "damage_attr";
  combateffectconditiontype2[combateffectconditiontype2["identity_element_value_less"] = 40] = "identity_element_value_less";
  combateffectconditiontype2[combateffectconditiontype2["command_skill_type"] = 41] = "command_skill_type";
  return combateffectconditiontype2;
})(combateffectconditiontype || {});
var identitycategory = /* @__PURE__ */ ((identitycategory2) => {
  identitycategory2[identitycategory2["none"] = 0] = "none";
  identitycategory2[identitycategory2["berserker_normal"] = 1] = "berserker_normal";
  identitycategory2[identitycategory2["berserker_rush"] = 2] = "berserker_rush";
  identitycategory2[identitycategory2["warlord_normal"] = 3] = "warlord_normal";
  identitycategory2[identitycategory2["warlord_shield_of_battlefield"] = 4] = "warlord_shield_of_battlefield";
  identitycategory2[identitycategory2["destroyer_normal"] = 5] = "destroyer_normal";
  identitycategory2[identitycategory2["destroyer_focus"] = 6] = "destroyer_focus";
  identitycategory2[identitycategory2["destroyer_release"] = 7] = "destroyer_release";
  identitycategory2[identitycategory2["battle_master_normal"] = 8] = "battle_master_normal";
  identitycategory2[identitycategory2["battle_master_bubble"] = 9] = "battle_master_bubble";
  identitycategory2[identitycategory2["infighter_normal"] = 10] = "infighter_normal";
  identitycategory2[identitycategory2["infighter_vigor"] = 11] = "infighter_vigor";
  identitycategory2[identitycategory2["infighter_shock"] = 12] = "infighter_shock";
  identitycategory2[identitycategory2["forcemaster_normal"] = 13] = "forcemaster_normal";
  identitycategory2[identitycategory2["forcemaster_soul"] = 14] = "forcemaster_soul";
  identitycategory2[identitycategory2["lance_master_normal"] = 15] = "lance_master_normal";
  identitycategory2[identitycategory2["lance_master_wild"] = 16] = "lance_master_wild";
  identitycategory2[identitycategory2["lance_master_focus"] = 17] = "lance_master_focus";
  identitycategory2[identitycategory2["devil_hunter_normal"] = 18] = "devil_hunter_normal";
  identitycategory2[identitycategory2["devil_hunter_pistol"] = 19] = "devil_hunter_pistol";
  identitycategory2[identitycategory2["devil_hunter_shotgun"] = 20] = "devil_hunter_shotgun";
  identitycategory2[identitycategory2["devil_hunter_rifle"] = 21] = "devil_hunter_rifle";
  identitycategory2[identitycategory2["blaster_normal"] = 22] = "blaster_normal";
  identitycategory2[identitycategory2["blaster_cannon"] = 23] = "blaster_cannon";
  identitycategory2[identitycategory2["hawkeye_normal"] = 24] = "hawkeye_normal";
  identitycategory2[identitycategory2["hawkeye_summon"] = 25] = "hawkeye_summon";
  identitycategory2[identitycategory2["summoner_normal"] = 26] = "summoner_normal";
  identitycategory2[identitycategory2["summoner_ancient"] = 27] = "summoner_ancient";
  identitycategory2[identitycategory2["arcana_normal"] = 28] = "arcana_normal";
  identitycategory2[identitycategory2["arcana_stack"] = 29] = "arcana_stack";
  identitycategory2[identitycategory2["arcana_ruin"] = 30] = "arcana_ruin";
  identitycategory2[identitycategory2["arcana_card"] = 31] = "arcana_card";
  identitycategory2[identitycategory2["bard_normal"] = 32] = "bard_normal";
  identitycategory2[identitycategory2["bard_serenade"] = 33] = "bard_serenade";
  identitycategory2[identitycategory2["blade_burst"] = 34] = "blade_burst";
  identitycategory2[identitycategory2["holyknight_normal"] = 35] = "holyknight_normal";
  identitycategory2[identitycategory2["holyknight_holy"] = 36] = "holyknight_holy";
  identitycategory2[identitycategory2["holyknight_retribution"] = 37] = "holyknight_retribution";
  identitycategory2[identitycategory2["demonic_normal"] = 38] = "demonic_normal";
  identitycategory2[identitycategory2["demonic_capture"] = 39] = "demonic_capture";
  identitycategory2[identitycategory2["demonic_demon"] = 40] = "demonic_demon";
  identitycategory2[identitycategory2["warlord_lance"] = 41] = "warlord_lance";
  identitycategory2[identitycategory2["reaper_normal"] = 42] = "reaper_normal";
  identitycategory2[identitycategory2["reaper_dagger"] = 43] = "reaper_dagger";
  identitycategory2[identitycategory2["reaper_shadow"] = 44] = "reaper_shadow";
  identitycategory2[identitycategory2["reaper_swoop"] = 45] = "reaper_swoop";
  identitycategory2[identitycategory2["scouter_scout"] = 46] = "scouter_scout";
  identitycategory2[identitycategory2["scouter_drone"] = 47] = "scouter_drone";
  identitycategory2[identitycategory2["scouter_hyper_sync"] = 48] = "scouter_hyper_sync";
  identitycategory2[identitycategory2["scouter_fusion"] = 49] = "scouter_fusion";
  identitycategory2[identitycategory2["blade_normal"] = 50] = "blade_normal";
  identitycategory2[identitycategory2["elemental_master_normal"] = 51] = "elemental_master_normal";
  identitycategory2[identitycategory2["elemental_master_fire"] = 52] = "elemental_master_fire";
  identitycategory2[identitycategory2["elemental_master_electricity"] = 53] = "elemental_master_electricity";
  identitycategory2[identitycategory2["elemental_master_ice"] = 54] = "elemental_master_ice";
  identitycategory2[identitycategory2["yinyangshi_normal"] = 55] = "yinyangshi_normal";
  identitycategory2[identitycategory2["yinyangshi_yin"] = 56] = "yinyangshi_yin";
  identitycategory2[identitycategory2["yinyangshi_yang"] = 57] = "yinyangshi_yang";
  identitycategory2[identitycategory2["weather_artist_weapon"] = 58] = "weather_artist_weapon";
  identitycategory2[identitycategory2["weather_artist_weather"] = 59] = "weather_artist_weather";
  identitycategory2[identitycategory2["summoner_summon"] = 60] = "summoner_summon";
  identitycategory2[identitycategory2["soul_eater_hollow"] = 61] = "soul_eater_hollow";
  identitycategory2[identitycategory2["soul_eater_killer"] = 62] = "soul_eater_killer";
  identitycategory2[identitycategory2["soul_eater_death"] = 63] = "soul_eater_death";
  return identitycategory2;
})(identitycategory || {});
var npcgrade = /* @__PURE__ */ ((npcgrade2) => {
  npcgrade2[npcgrade2["none"] = 0] = "none";
  npcgrade2[npcgrade2["underling"] = 1] = "underling";
  npcgrade2[npcgrade2["normal"] = 2] = "normal";
  npcgrade2[npcgrade2["elite"] = 3] = "elite";
  npcgrade2[npcgrade2["named"] = 4] = "named";
  npcgrade2[npcgrade2["seed"] = 5] = "seed";
  npcgrade2[npcgrade2["boss"] = 6] = "boss";
  npcgrade2[npcgrade2["raid"] = 7] = "raid";
  npcgrade2[npcgrade2["lucky"] = 8] = "lucky";
  npcgrade2[npcgrade2["epic_raid"] = 9] = "epic_raid";
  npcgrade2[npcgrade2["commander"] = 10] = "commander";
  return npcgrade2;
})(npcgrade || {});
var stattype = /* @__PURE__ */ ((stattype3) => {
  stattype3[stattype3["none"] = 0] = "none";
  stattype3[stattype3["hp"] = 1] = "hp";
  stattype3[stattype3["mp"] = 2] = "mp";
  stattype3[stattype3["str"] = 3] = "str";
  stattype3[stattype3["agi"] = 4] = "agi";
  stattype3[stattype3["int"] = 5] = "int";
  stattype3[stattype3["con"] = 6] = "con";
  stattype3[stattype3["str_x"] = 7] = "str_x";
  stattype3[stattype3["agi_x"] = 8] = "agi_x";
  stattype3[stattype3["int_x"] = 9] = "int_x";
  stattype3[stattype3["con_x"] = 10] = "con_x";
  stattype3[stattype3["criticalhit"] = 15] = "criticalhit";
  stattype3[stattype3["specialty"] = 16] = "specialty";
  stattype3[stattype3["oppression"] = 17] = "oppression";
  stattype3[stattype3["rapidity"] = 18] = "rapidity";
  stattype3[stattype3["endurance"] = 19] = "endurance";
  stattype3[stattype3["mastery"] = 20] = "mastery";
  stattype3[stattype3["criticalhit_x"] = 21] = "criticalhit_x";
  stattype3[stattype3["specialty_x"] = 22] = "specialty_x";
  stattype3[stattype3["oppression_x"] = 23] = "oppression_x";
  stattype3[stattype3["rapidity_x"] = 24] = "rapidity_x";
  stattype3[stattype3["endurance_x"] = 25] = "endurance_x";
  stattype3[stattype3["mastery_x"] = 26] = "mastery_x";
  stattype3[stattype3["max_hp"] = 27] = "max_hp";
  stattype3[stattype3["max_mp"] = 28] = "max_mp";
  stattype3[stattype3["max_hp_x"] = 29] = "max_hp_x";
  stattype3[stattype3["max_mp_x"] = 30] = "max_mp_x";
  stattype3[stattype3["max_hp_x_x"] = 31] = "max_hp_x_x";
  stattype3[stattype3["max_mp_x_x"] = 32] = "max_mp_x_x";
  stattype3[stattype3["normal_hp_recovery"] = 33] = "normal_hp_recovery";
  stattype3[stattype3["combat_hp_recovery"] = 34] = "combat_hp_recovery";
  stattype3[stattype3["normal_hp_recovery_rate"] = 35] = "normal_hp_recovery_rate";
  stattype3[stattype3["combat_hp_recovery_rate"] = 36] = "combat_hp_recovery_rate";
  stattype3[stattype3["normal_mp_recovery"] = 37] = "normal_mp_recovery";
  stattype3[stattype3["combat_mp_recovery"] = 38] = "combat_mp_recovery";
  stattype3[stattype3["normal_mp_recovery_rate"] = 39] = "normal_mp_recovery_rate";
  stattype3[stattype3["combat_mp_recovery_rate"] = 40] = "combat_mp_recovery_rate";
  stattype3[stattype3["self_recovery_rate"] = 41] = "self_recovery_rate";
  stattype3[stattype3["drain_hp_dam_rate"] = 42] = "drain_hp_dam_rate";
  stattype3[stattype3["drain_mp_dam_rate"] = 43] = "drain_mp_dam_rate";
  stattype3[stattype3["dam_reflection_rate"] = 44] = "dam_reflection_rate";
  stattype3[stattype3["char_attack_dam"] = 47] = "char_attack_dam";
  stattype3[stattype3["skill_effect_dam_addend"] = 48] = "skill_effect_dam_addend";
  stattype3[stattype3["attack_power_rate"] = 49] = "attack_power_rate";
  stattype3[stattype3["skill_damage_rate"] = 50] = "skill_damage_rate";
  stattype3[stattype3["attack_power_rate_x"] = 51] = "attack_power_rate_x";
  stattype3[stattype3["skill_damage_rate_x"] = 52] = "skill_damage_rate_x";
  stattype3[stattype3["cooldown_reduction"] = 53] = "cooldown_reduction";
  stattype3[stattype3["paralyzation_point_rate"] = 54] = "paralyzation_point_rate";
  stattype3[stattype3["def"] = 55] = "def";
  stattype3[stattype3["res"] = 56] = "res";
  stattype3[stattype3["def_x"] = 57] = "def_x";
  stattype3[stattype3["res_x"] = 58] = "res_x";
  stattype3[stattype3["def_x_x"] = 59] = "def_x_x";
  stattype3[stattype3["res_x_x"] = 60] = "res_x_x";
  stattype3[stattype3["critical_physical_inc_rate"] = 65] = "critical_physical_inc_rate";
  stattype3[stattype3["critical_magical_inc_rate"] = 66] = "critical_magical_inc_rate";
  stattype3[stattype3["def_pen_rate"] = 67] = "def_pen_rate";
  stattype3[stattype3["res_pen_rate"] = 68] = "res_pen_rate";
  stattype3[stattype3["physical_inc_rate"] = 69] = "physical_inc_rate";
  stattype3[stattype3["magical_inc_rate"] = 70] = "magical_inc_rate";
  stattype3[stattype3["self_shield_rate"] = 71] = "self_shield_rate";
  stattype3[stattype3["hit_rate"] = 72] = "hit_rate";
  stattype3[stattype3["dodge_rate"] = 73] = "dodge_rate";
  stattype3[stattype3["critical_hit_rate"] = 74] = "critical_hit_rate";
  stattype3[stattype3["critical_res_rate"] = 75] = "critical_res_rate";
  stattype3[stattype3["critical_dam_rate"] = 76] = "critical_dam_rate";
  stattype3[stattype3["attack_speed"] = 77] = "attack_speed";
  stattype3[stattype3["attack_speed_rate"] = 78] = "attack_speed_rate";
  stattype3[stattype3["move_speed"] = 79] = "move_speed";
  stattype3[stattype3["move_speed_rate"] = 80] = "move_speed_rate";
  stattype3[stattype3["prop_move_speed"] = 81] = "prop_move_speed";
  stattype3[stattype3["prop_move_speed_rate"] = 82] = "prop_move_speed_rate";
  stattype3[stattype3["vehicle_move_speed"] = 83] = "vehicle_move_speed";
  stattype3[stattype3["vehicle_move_speed_rate"] = 84] = "vehicle_move_speed_rate";
  stattype3[stattype3["ship_move_speed"] = 85] = "ship_move_speed";
  stattype3[stattype3["ship_move_speed_rate"] = 86] = "ship_move_speed_rate";
  stattype3[stattype3["fire_dam_rate"] = 87] = "fire_dam_rate";
  stattype3[stattype3["ice_dam_rate"] = 88] = "ice_dam_rate";
  stattype3[stattype3["electricity_dam_rate"] = 89] = "electricity_dam_rate";
  stattype3[stattype3["earth_dam_rate"] = 91] = "earth_dam_rate";
  stattype3[stattype3["dark_dam_rate"] = 92] = "dark_dam_rate";
  stattype3[stattype3["holy_dam_rate"] = 93] = "holy_dam_rate";
  stattype3[stattype3["elements_dam_rate"] = 94] = "elements_dam_rate";
  stattype3[stattype3["fire_res_rate"] = 95] = "fire_res_rate";
  stattype3[stattype3["ice_res_rate"] = 96] = "ice_res_rate";
  stattype3[stattype3["electricity_res_rate"] = 97] = "electricity_res_rate";
  stattype3[stattype3["earth_res_rate"] = 99] = "earth_res_rate";
  stattype3[stattype3["dark_res_rate"] = 100] = "dark_res_rate";
  stattype3[stattype3["holy_res_rate"] = 101] = "holy_res_rate";
  stattype3[stattype3["elements_res_rate"] = 102] = "elements_res_rate";
  stattype3[stattype3["self_cc_time_rate"] = 105] = "self_cc_time_rate";
  stattype3[stattype3["enemy_cc_time_rate"] = 106] = "enemy_cc_time_rate";
  stattype3[stattype3["identity_value1"] = 107] = "identity_value1";
  stattype3[stattype3["identity_value2"] = 108] = "identity_value2";
  stattype3[stattype3["identity_value3"] = 109] = "identity_value3";
  stattype3[stattype3["awakening_dam_rate"] = 110] = "awakening_dam_rate";
  stattype3[stattype3["item_drop_rate"] = 111] = "item_drop_rate";
  stattype3[stattype3["gold_rate"] = 112] = "gold_rate";
  stattype3[stattype3["exp_rate"] = 113] = "exp_rate";
  stattype3[stattype3["attack_power_addend"] = 123] = "attack_power_addend";
  stattype3[stattype3["attack_power_addend_2"] = 124] = "attack_power_addend_2";
  stattype3[stattype3["npc_species_humanoid_dam_rate"] = 125] = "npc_species_humanoid_dam_rate";
  stattype3[stattype3["npc_species_devil_dam_rate"] = 126] = "npc_species_devil_dam_rate";
  stattype3[stattype3["npc_species_substance_dam_rate"] = 127] = "npc_species_substance_dam_rate";
  stattype3[stattype3["npc_species_undead_dam_rate"] = 128] = "npc_species_undead_dam_rate";
  stattype3[stattype3["npc_species_plant_dam_rate"] = 129] = "npc_species_plant_dam_rate";
  stattype3[stattype3["npc_species_insect_dam_rate"] = 130] = "npc_species_insect_dam_rate";
  stattype3[stattype3["npc_species_spirit_dam_rate"] = 131] = "npc_species_spirit_dam_rate";
  stattype3[stattype3["npc_species_wild_beast_dam_rate"] = 132] = "npc_species_wild_beast_dam_rate";
  stattype3[stattype3["npc_species_mechanic_dam_rate"] = 133] = "npc_species_mechanic_dam_rate";
  stattype3[stattype3["npc_species_ancient_dam_rate"] = 134] = "npc_species_ancient_dam_rate";
  stattype3[stattype3["npc_species_god_dam_rate"] = 135] = "npc_species_god_dam_rate";
  stattype3[stattype3["npc_species_archfiend_dam_rate"] = 136] = "npc_species_archfiend_dam_rate";
  stattype3[stattype3["vitality"] = 137] = "vitality";
  stattype3[stattype3["ship_booter_speed"] = 138] = "ship_booter_speed";
  stattype3[stattype3["ship_wreck_speed_rate"] = 139] = "ship_wreck_speed_rate";
  stattype3[stattype3["island_speed_rate"] = 140] = "island_speed_rate";
  stattype3[stattype3["attack_power_sub_rate_1"] = 141] = "attack_power_sub_rate_1";
  stattype3[stattype3["attack_power_sub_rate_2"] = 142] = "attack_power_sub_rate_2";
  stattype3[stattype3["physical_inc_sub_rate_1"] = 143] = "physical_inc_sub_rate_1";
  stattype3[stattype3["physical_inc_sub_rate_2"] = 144] = "physical_inc_sub_rate_2";
  stattype3[stattype3["magical_inc_sub_rate_1"] = 145] = "magical_inc_sub_rate_1";
  stattype3[stattype3["magical_inc_sub_rate_2"] = 146] = "magical_inc_sub_rate_2";
  stattype3[stattype3["skill_damage_sub_rate_1"] = 147] = "skill_damage_sub_rate_1";
  stattype3[stattype3["skill_damage_sub_rate_2"] = 148] = "skill_damage_sub_rate_2";
  stattype3[stattype3["resource_recovery_rate"] = 149] = "resource_recovery_rate";
  stattype3[stattype3["weapon_dam"] = 151] = "weapon_dam";
  stattype3[stattype3["weapon_dam_x"] = 152] = "weapon_dam_x";
  return stattype3;
})(stattype || {});

// src/logger/statustracker.ts
var import_tiny_typed_emitter = require("tiny-typed-emitter");
var _partyTracker, _data, _isLive, _shouldUsePartyStatusEffectForEntity, shouldUsePartyStatusEffectForEntity_fn, _shouldUsePartyStatusEffect, shouldUsePartyStatusEffect_fn;
var _StatusTracker = class extends import_tiny_typed_emitter.TypedEmitter {
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
var StatusTracker = _StatusTracker;
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
__publicField(StatusTracker, "TIMEOUT_DELAY_MS", 1e3);

// src/data.ts
var MeterData = class {
  dbPath = "";
  modulePath;
  enums;
  npc;
  PCData;
  skill;
  skillBuff;
  skillEffect;
  skillFeature;
  combatEffect;
  esther;
  itemSet;
  statQueryFilter;
  constructor(meterDataPath = "./meter-core/data") {
    this.modulePath = meterDataPath;
    this.enums = /* @__PURE__ */ new Map();
    this.npc = /* @__PURE__ */ new Map();
    this.PCData = /* @__PURE__ */ new Map();
    this.skill = /* @__PURE__ */ new Map();
    this.skillBuff = /* @__PURE__ */ new Map();
    this.skillEffect = /* @__PURE__ */ new Map();
    this.skillFeature = /* @__PURE__ */ new Map();
    this.combatEffect = /* @__PURE__ */ new Map();
    this.esther = [];
    this.itemSet = { items: /* @__PURE__ */ new Map(), seteffects: /* @__PURE__ */ new Map() };
    this.statQueryFilter = { zone: /* @__PURE__ */ new Set(), raid: /* @__PURE__ */ new Set() };
  }
  processEnumData(data) {
    for (const [ename, edata] of Object.entries(data)) {
      const en = /* @__PURE__ */ new Map();
      for (const [k, v] of Object.entries(edata))
        en.set(k, v);
      this.enums.set(ename, en);
    }
  }
  processNpcData(data) {
    for (const npc of Object.values(data)) {
      this.npc.set(npc.id, npc);
    }
  }
  processPCData(data) {
    for (const [k, v] of Object.entries(data)) {
      this.PCData.set(parseInt(k), v);
    }
  }
  processSkillData(data) {
    for (const skill of Object.values(data)) {
      this.skill.set(skill.id, skill);
    }
  }
  processSkillBuffData(data) {
    for (const skillBuff of Object.values(data)) {
      this.skillBuff.set(skillBuff.id, skillBuff);
    }
  }
  processSkillBuffEffectData(data) {
    for (const skillEffect of Object.values(data)) {
      this.skillEffect.set(skillEffect.id, skillEffect);
    }
  }
  processSkillFeature(data) {
    for (const skillFeature of Object.values(data)) {
      const m = /* @__PURE__ */ new Map();
      for (const levelData of Object.values(skillFeature.tripods)) {
        m.set(levelData.key, levelData);
      }
      this.skillFeature.set(skillFeature.skillid, m);
    }
  }
  processCombatEffectData(data) {
    for (const combatEffect of Object.values(data)) {
      this.combatEffect.set(combatEffect.id, combatEffect);
    }
  }
  processEsther(data) {
    this.esther = Object.values(data);
  }
  processItemSet(data) {
    for (const [setName, setNameData] of Object.entries(data)) {
      const m = /* @__PURE__ */ new Map();
      for (const [level, setLevelData] of Object.entries(setNameData)) {
        const m2 = /* @__PURE__ */ new Map();
        for (const [count, setCountData] of Object.entries(setLevelData.value)) {
          m2.set(parseInt(count), setCountData);
        }
        m.set(parseInt(level), m2);
        for (const itemid of Object.values(setLevelData.itemids)) {
          this.itemSet.items.set(itemid, { setname: setName, level: parseInt(level) });
        }
      }
      this.itemSet.seteffects.set(setName, m);
    }
  }
  procesStatQueryFilter(data) {
    this.statQueryFilter.zone = new Set(data.zone);
    this.statQueryFilter.raid = new Set(data.raid);
  }
  getNpcName(id) {
    return this.npc.get(id)?.name || "";
  }
  getClassName(id) {
    return this.PCData.get(id) || "";
  }
  getSkillName(id) {
    return this.skill.get(id)?.name || "";
  }
  getSkillClassId(id) {
    return this.skill.get(id)?.classid || 0;
  }
  getSkillEffectComment(id) {
    return this.skillEffect.get(id)?.comment || "";
  }
  getSkillEffectDirectionalMask(id) {
    return this.skillEffect.get(id)?.directionalmask || 0;
  }
  getSkillEsther(skillId) {
    for (const esther of this.esther) {
      if (esther.skills.includes(skillId))
        return esther;
    }
    return;
  }
  getNpcEsther(npcId) {
    for (const esther of this.esther) {
      if (esther.npcs.includes(npcId))
        return esther;
    }
    return;
  }
  getStatusEffectHeaderData(buffId) {
    const buff = this.skillBuff.get(buffId);
    if (!buff || buff.iconshowtype === "none")
      return;
    let buffcategory;
    if (buff.buffcategory === "ability" && [501, 502, 503, 504, 505].includes(buff.uniquegroup)) {
      buffcategory = "dropsofether";
    } else {
      buffcategory = buff.buffcategory;
    }
    const statusEffect = {
      target: buff.target === "none" ? 0 /* OTHER */ : buff.target === "self" ? 2 /* SELF */ : 1 /* PARTY */,
      // self+party
      category: buff.category,
      buffcategory,
      bufftype: this.getStatusEffectBuffTypeFlags(buff),
      uniquegroup: buff.uniquegroup,
      source: {
        name: buff.name,
        desc: buff.desc,
        icon: buff.icon
      }
    };
    if (buffcategory === "classskill" || buffcategory === "identity") {
      let buffSourceSkill;
      if (buff.sourceskill) {
        buffSourceSkill = this.skill.get(buff.sourceskill);
        if (buffSourceSkill)
          statusEffect.source.skill = buffSourceSkill;
      } else {
        const skillId = Math.floor(buffId / 100) * 10;
        buffSourceSkill = this.skill.get(skillId);
        if (!buffSourceSkill) {
          const skillId2 = Math.floor(buff.uniquegroup / 100) * 10;
          buffSourceSkill = this.skill.get(skillId2);
        }
        if (buffSourceSkill)
          statusEffect.source.skill = buffSourceSkill;
      }
      if (buffSourceSkill)
        statusEffect.source.skill = buffSourceSkill;
    } else if (buffcategory === "ability" && buff.uniquegroup !== 0) {
      let buffSourceSkill;
      if (buff.sourceskill) {
        buffSourceSkill = this.skill.get(buff.sourceskill);
        if (buffSourceSkill)
          statusEffect.source.skill = buffSourceSkill;
      } else {
        const skillId = Math.floor(buffId / 100) * 10;
        buffSourceSkill = this.skill.get(skillId);
        if (!buffSourceSkill) {
          const skillId2 = Math.floor(buff.uniquegroup / 100) * 10;
          buffSourceSkill = this.skill.get(skillId2);
        }
      }
      if (buffSourceSkill)
        statusEffect.source.skill = buffSourceSkill;
    } else if (buffcategory === "set" && buff.setname) {
      statusEffect.source.setname = buff.setname;
    }
    return statusEffect;
  }
  getStatusEffectBuffTypeFlags(buff) {
    let bufftype = 0 /* NONE */;
    if ([
      "weaken_defense",
      "weaken_resistance",
      "skill_damage_amplify",
      "beattacked_damage_amplify",
      "skill_damage_amplify_attack",
      "directional_attack_amplify",
      "instant_stat_amplify",
      "attack_power_amplify",
      "instant_stat_amplify_by_contents"
    ].includes(buff.type)) {
      bufftype |= 1 /* DMG */;
    } else if (["move_speed_down", "all_speed_down"].includes(buff.type)) {
      bufftype |= 8 /* MOVESPEED */;
    } else if (["reset_cooldown"].includes(buff.type)) {
      bufftype |= 128 /* COOLDOWN */;
    } else if (["change_ai_point", "ai_point_amplify"].includes(buff.type)) {
      bufftype |= 256 /* STAGGER */;
    } else if (["increase_identity_gauge"].includes(buff.type)) {
      bufftype |= 64 /* RESOURCE */;
    }
    buff.passiveoption.forEach((option) => {
      const addon = addontype[option.type];
      if (option.type === "stat") {
        const stat = stattype[option.keystat];
        if ([20 /* mastery */, 26 /* mastery_x */, 54 /* paralyzation_point_rate */].includes(stat)) {
          bufftype |= 256 /* STAGGER */;
        }
        if ([18 /* rapidity */, 24 /* rapidity_x */, 53 /* cooldown_reduction */].includes(stat)) {
          bufftype |= 128 /* COOLDOWN */;
        }
        if ([
          28 /* max_mp */,
          30 /* max_mp_x */,
          32 /* max_mp_x_x */,
          37 /* normal_mp_recovery */,
          38 /* combat_mp_recovery */,
          39 /* normal_mp_recovery_rate */,
          40 /* combat_mp_recovery_rate */,
          149 /* resource_recovery_rate */
        ].includes(stat)) {
          bufftype |= 64 /* RESOURCE */;
        }
        if ([
          6 /* con */,
          10 /* con_x */,
          27 /* max_hp */,
          29 /* max_hp_x */,
          31 /* max_hp_x_x */,
          33 /* normal_hp_recovery */,
          34 /* combat_hp_recovery */,
          35 /* normal_hp_recovery_rate */,
          36 /* combat_hp_recovery_rate */,
          41 /* self_recovery_rate */,
          42 /* drain_hp_dam_rate */,
          137 /* vitality */
        ].includes(stat)) {
          bufftype |= 16 /* HP */;
        }
        if (55 /* def */ <= stat && stat <= 70 /* magical_inc_rate */ || [19 /* endurance */, 25 /* endurance_x */].includes(stat)) {
          if (buff.category === "buff" && option.value >= 0 || buff.category === "debuff" && option.value <= 0) {
            bufftype |= 1 /* DMG */;
          } else
            bufftype |= 32 /* DEFENSE */;
        }
        if (79 /* move_speed */ <= stat && stat <= 84 /* vehicle_move_speed_rate */) {
          bufftype |= 8 /* MOVESPEED */;
        }
        if ([77 /* attack_speed */, 78 /* attack_speed_rate */, 18 /* rapidity */, 24 /* rapidity_x */].includes(stat)) {
          bufftype |= 4 /* ATKSPEED */;
        }
        if ([74 /* critical_hit_rate */, 15 /* criticalhit */, 21 /* criticalhit_x */].includes(stat)) {
          bufftype |= 2 /* CRIT */;
        }
        if (141 /* attack_power_sub_rate_1 */ <= stat && stat <= 148 /* skill_damage_sub_rate_2 */ || 87 /* fire_dam_rate */ <= stat && stat <= 94 /* elements_dam_rate */ || [
          3 /* str */,
          4 /* agi */,
          5 /* int */,
          7 /* str_x */,
          8 /* agi_x */,
          9 /* int_x */,
          47 /* char_attack_dam */,
          49 /* attack_power_rate */,
          50 /* skill_damage_rate */,
          51 /* attack_power_rate_x */,
          52 /* skill_damage_rate_x */,
          72 /* hit_rate */,
          73 /* dodge_rate */,
          76 /* critical_dam_rate */,
          110 /* awakening_dam_rate */,
          123 /* attack_power_addend */,
          151 /* weapon_dam */
        ].includes(stat)) {
          if (buff.category === "buff" && option.value >= 0 || buff.category === "debuff" && option.value <= 0) {
            bufftype |= 1 /* DMG */;
          } else
            bufftype |= 32 /* DEFENSE */;
        }
      } else if (6 /* skill_critical_ratio */ === addon) {
        bufftype |= 2 /* CRIT */;
      } else if ([
        5 /* skill_damage */,
        29 /* class_option */,
        34 /* skill_group_damage */,
        7 /* skill_critical_damage */,
        8 /* skill_penetration */
      ].includes(addon)) {
        if (buff.category === "buff" && option.value >= 0 || buff.category === "debuff" && option.value <= 0) {
          bufftype |= 1 /* DMG */;
        } else
          bufftype |= 32 /* DEFENSE */;
      } else if ([27 /* skill_cooldown_reduction */, 35 /* skill_group_cooldown_reduction */].includes(addon)) {
        bufftype |= 128 /* COOLDOWN */;
      } else if ([26 /* skill_mana_reduction */, 25 /* mana_reduction */].includes(addon)) {
        bufftype |= 64 /* RESOURCE */;
      } else if (4 /* combat_effect */ === addon) {
        const combatEffect = this.combatEffect.get(option.keyindex);
        if (!combatEffect)
          return;
        combatEffect.effects.forEach((effect) => {
          effect.actions.forEach((action) => {
            const actionType = combateffectactiontype[action.type];
            if ([
              1 /* modify_damage */,
              2 /* modify_final_damage */,
              4 /* modify_critical_multiplier */,
              5 /* modify_penetration */,
              6 /* modify_penetration_when_critical */,
              19 /* modify_penetration_addend */,
              20 /* modify_penetration_addend_when_critical */,
              16 /* modify_damage_shield_multiplier */
            ].includes(actionType)) {
              bufftype |= 1 /* DMG */;
            } else if (3 /* modify_critical_ratio */ === actionType) {
              bufftype |= 2 /* CRIT */;
            }
          });
        });
      }
    });
    return bufftype;
  }
  getStatPairMap(statpair) {
    const map = /* @__PURE__ */ new Map();
    statpair.forEach((pair) => {
      map.set(pair.statType, pair.value);
    });
    return map;
  }
  isCombatEffectConditionsValid({
    effect,
    self,
    target,
    caster,
    skill,
    hitOption,
    targetCount
  }) {
    let conditionValid = true;
    effect.conditions.forEach((condition) => {
      if (!conditionValid)
        return;
      const actor = combateffectactortype[condition.actor];
      switch (combateffectconditiontype[condition.type]) {
        case 21 /* target_count */:
          if (!targetCount || targetCount !== condition.arg)
            conditionValid = false;
          break;
        case 1 /* current_skill */:
          if (!skill || skill.id === condition.arg)
            conditionValid = false;
          break;
        case 16 /* pc */:
          if (actor === 1 /* self */) {
            if (!self || self.entityType !== 1 /* Player */)
              conditionValid = false;
          } else if (actor === 2 /* target */) {
            if (!target || target.entityType !== 1 /* Player */)
              conditionValid = false;
          } else if (actor === 3 /* caster */) {
            if (!caster || caster.entityType !== 1 /* Player */)
              conditionValid = false;
          } else {
            conditionValid = false;
          }
          break;
        case 22 /* skill_identity_category */:
          if (!skill || !skill.identitycategory || identitycategory[skill.identitycategory] != condition.arg)
            conditionValid = false;
          break;
        case 13 /* abnormal_move_immune */:
          if (!target || ![2 /* Npc */, 3 /* Summon */].includes(target.entityType) || !target.pushimmune)
            conditionValid = false;
          break;
        case 15 /* abnormal_move_all */:
          conditionValid = false;
          break;
        case 11 /* abnormal_move */:
          conditionValid = false;
          break;
        case 12 /* abnormal_status */:
          conditionValid = false;
          break;
        case 25 /* current_skill_group */:
          if (!skill || !skill.groups || !skill.groups.includes(condition.arg))
            conditionValid = false;
          break;
        case 2 /* hp_less */:
          if (actor === 1 /* self */) {
            if (!self || Number((self.stats.get(1 /* hp */) ?? 0n) / (self.stats.get(27 /* max_hp */) ?? 0n)) >= condition.arg / 100)
              conditionValid = false;
          } else if (actor === 2 /* target */) {
            if (!target || Number((target.stats.get(1 /* hp */) ?? 0n) / (target.stats.get(27 /* max_hp */) ?? 0n)) >= condition.arg / 100)
              conditionValid = false;
          } else if (actor === 3 /* caster */) {
            if (!caster || Number((caster.stats.get(1 /* hp */) ?? 0n) / (caster.stats.get(27 /* max_hp */) ?? 0n)) >= condition.arg / 100)
              conditionValid = false;
          } else {
            conditionValid = false;
            break;
          }
          break;
        case 34 /* npc_scaled_level_less */:
          if (actor === 2 /* target */) {
            if (target && [2 /* Npc */, 3 /* Summon */].includes(target.entityType)) {
              if (target.balanceLevel > condition.arg)
                conditionValid = false;
            } else
              conditionValid = false;
          } else {
            conditionValid = false;
          }
          break;
        case 6 /* npc_grade_less */:
          if (actor === 2 /* target */) {
            if (target && [2 /* Npc */, 3 /* Summon */].includes(target.entityType)) {
              const grade = npcgrade[target.grade];
              if (!grade || grade > condition.arg)
                conditionValid = false;
            } else
              conditionValid = false;
          } else {
            conditionValid = false;
          }
          break;
        case 7 /* npc_grade_greater */:
          if (actor === 2 /* target */) {
            if (target && [2 /* Npc */, 3 /* Summon */].includes(target.entityType)) {
              const grade = npcgrade[target.grade];
              if (!grade || grade < condition.arg)
                conditionValid = false;
            } else
              conditionValid = false;
          } else {
            conditionValid = false;
          }
          break;
        case 27 /* identity_stance */:
          if (actor === 1 /* self */) {
            if (!self || self.entityType !== 1 /* Player */ || self.stance !== condition.arg)
              conditionValid = false;
          } else {
            conditionValid = false;
          }
          break;
        case 24 /* directional_attack */:
          if (!hitOption || (hitOption + 1 & condition.arg) === 0)
            conditionValid = false;
          break;
        default:
          conditionValid = false;
          break;
      }
    });
    return conditionValid;
  }
  isSupportClassId(id) {
    return id === 105 || id === 204 || id === 602;
  }
  isBattleItem(id, type) {
    const itemcategory = this.skillEffect.get(id)?.itemcategory;
    switch (type) {
      case "attack":
        return itemcategory === "useup_battle_item_common_attack";
      case "buff":
        return itemcategory === "useup_battle_item_common_buff";
      case "function":
        return itemcategory === "useup_battle_item_common_function";
      default:
        return typeof itemcategory === "string";
    }
  }
  getBattleItemName(id) {
    return this.skillEffect.get(id)?.itemname || "";
  }
  loadDbs(basePath) {
    this.dbPath = basePath;
    this.processEnumData(JSON.parse((0, import_fs.readFileSync)((0, import_path.join)(basePath, "Enums.json"), "utf-8")));
    this.processNpcData(JSON.parse((0, import_fs.readFileSync)((0, import_path.join)(basePath, "Npc.json"), "utf-8")));
    this.processPCData(JSON.parse((0, import_fs.readFileSync)((0, import_path.join)(basePath, "PCData.json"), "utf-8")));
    this.processSkillData(JSON.parse((0, import_fs.readFileSync)((0, import_path.join)(basePath, "Skill.json"), "utf-8")));
    this.processSkillBuffData(JSON.parse((0, import_fs.readFileSync)((0, import_path.join)(basePath, "SkillBuff.json"), "utf-8")));
    this.processSkillBuffEffectData(JSON.parse((0, import_fs.readFileSync)((0, import_path.join)(basePath, "SkillEffect.json"), "utf-8")));
    this.processSkillFeature(JSON.parse((0, import_fs.readFileSync)((0, import_path.join)(basePath, "SkillFeature.json"), "utf-8")));
    this.processCombatEffectData(JSON.parse((0, import_fs.readFileSync)((0, import_path.join)(basePath, "CombatEffect.json"), "utf-8")));
    this.processEsther(JSON.parse((0, import_fs.readFileSync)((0, import_path.join)(basePath, "Esther.json"), "utf-8")));
    this.processItemSet(JSON.parse((0, import_fs.readFileSync)((0, import_path.join)(basePath, "ItemSet.json"), "utf-8")));
    this.procesStatQueryFilter(JSON.parse((0, import_fs.readFileSync)((0, import_path.join)(basePath, "StatQueryFilter.json"), "utf-8")));
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MeterData
});
