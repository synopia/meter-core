var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __export = (target, all) => {
  for (var name112 in all)
    __defProp(target, name112, { get: all[name112], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
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

// src/logger/parser.ts
var parser_exports = {};
__export(parser_exports, {
  Parser: () => Parser
});
module.exports = __toCommonJS(parser_exports);
var import_tiny_typed_emitter5 = require("tiny-typed-emitter");

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
var paramtype = /* @__PURE__ */ ((paramtype2) => {
  paramtype2[paramtype2["absolute"] = 0] = "absolute";
  paramtype2[paramtype2["relative"] = 1] = "relative";
  return paramtype2;
})(paramtype || {});
var skillfeaturetype = /* @__PURE__ */ ((skillfeaturetype2) => {
  skillfeaturetype2[skillfeaturetype2["none"] = 0] = "none";
  skillfeaturetype2[skillfeaturetype2["enable_notify"] = 1] = "enable_notify";
  skillfeaturetype2[skillfeaturetype2["enable_dir_change"] = 2] = "enable_dir_change";
  skillfeaturetype2[skillfeaturetype2["change_move_dist"] = 3] = "change_move_dist";
  skillfeaturetype2[skillfeaturetype2["change_layer"] = 4] = "change_layer";
  skillfeaturetype2[skillfeaturetype2["change_stage_speed"] = 5] = "change_stage_speed";
  skillfeaturetype2[skillfeaturetype2["change_stage_collision"] = 6] = "change_stage_collision";
  skillfeaturetype2[skillfeaturetype2["change_max_target"] = 7] = "change_max_target";
  skillfeaturetype2[skillfeaturetype2["change_area_range"] = 8] = "change_area_range";
  skillfeaturetype2[skillfeaturetype2["change_area_angle"] = 9] = "change_area_angle";
  skillfeaturetype2[skillfeaturetype2["change_cost"] = 10] = "change_cost";
  skillfeaturetype2[skillfeaturetype2["recover_cost"] = 11] = "recover_cost";
  skillfeaturetype2[skillfeaturetype2["recover_used_cost"] = 12] = "recover_used_cost";
  skillfeaturetype2[skillfeaturetype2["reduce_default_cooldown"] = 13] = "reduce_default_cooldown";
  skillfeaturetype2[skillfeaturetype2["reduce_active_cooldown"] = 14] = "reduce_active_cooldown";
  skillfeaturetype2[skillfeaturetype2["enable_stage_buff"] = 15] = "enable_stage_buff";
  skillfeaturetype2[skillfeaturetype2["add_stage_buff"] = 16] = "add_stage_buff";
  skillfeaturetype2[skillfeaturetype2["change_buff_area_range"] = 17] = "change_buff_area_range";
  skillfeaturetype2[skillfeaturetype2["change_buff_duration"] = 18] = "change_buff_duration";
  skillfeaturetype2[skillfeaturetype2["change_buff_stat"] = 19] = "change_buff_stat";
  skillfeaturetype2[skillfeaturetype2["change_buff_stack"] = 20] = "change_buff_stack";
  skillfeaturetype2[skillfeaturetype2["change_buff_param"] = 21] = "change_buff_param";
  skillfeaturetype2[skillfeaturetype2["change_buff_expired_action"] = 22] = "change_buff_expired_action";
  skillfeaturetype2[skillfeaturetype2["change_chain_ratio"] = 23] = "change_chain_ratio";
  skillfeaturetype2[skillfeaturetype2["change_abnormal"] = 24] = "change_abnormal";
  skillfeaturetype2[skillfeaturetype2["change_abnormal_ratio"] = 25] = "change_abnormal_ratio";
  skillfeaturetype2[skillfeaturetype2["change_dam_attr"] = 26] = "change_dam_attr";
  skillfeaturetype2[skillfeaturetype2["change_dam_value"] = 27] = "change_dam_value";
  skillfeaturetype2[skillfeaturetype2["change_dam_coefficient"] = 28] = "change_dam_coefficient";
  skillfeaturetype2[skillfeaturetype2["change_dam_critical"] = 29] = "change_dam_critical";
  skillfeaturetype2[skillfeaturetype2["change_dam_critical_rate"] = 30] = "change_dam_critical_rate";
  skillfeaturetype2[skillfeaturetype2["change_attack_stage_speed"] = 31] = "change_attack_stage_speed";
  skillfeaturetype2[skillfeaturetype2["change_stack_charge_time"] = 32] = "change_stack_charge_time";
  skillfeaturetype2[skillfeaturetype2["change_stack_max_count"] = 33] = "change_stack_max_count";
  skillfeaturetype2[skillfeaturetype2["change_targeting"] = 34] = "change_targeting";
  skillfeaturetype2[skillfeaturetype2["change_min_range"] = 35] = "change_min_range";
  skillfeaturetype2[skillfeaturetype2["change_max_range"] = 36] = "change_max_range";
  skillfeaturetype2[skillfeaturetype2["change_push_info"] = 37] = "change_push_info";
  skillfeaturetype2[skillfeaturetype2["change_parts_attack_attr"] = 38] = "change_parts_attack_attr";
  skillfeaturetype2[skillfeaturetype2["change_skill_chain_info"] = 39] = "change_skill_chain_info";
  skillfeaturetype2[skillfeaturetype2["change_skill_chain_delay"] = 40] = "change_skill_chain_delay";
  skillfeaturetype2[skillfeaturetype2["change_behit_move_info"] = 41] = "change_behit_move_info";
  skillfeaturetype2[skillfeaturetype2["add_buff_stat"] = 42] = "add_buff_stat";
  skillfeaturetype2[skillfeaturetype2["add_chain_skill_effect"] = 43] = "add_chain_skill_effect";
  skillfeaturetype2[skillfeaturetype2["remove_chain_skill_effect"] = 44] = "remove_chain_skill_effect";
  skillfeaturetype2[skillfeaturetype2["add_chain_combat_effect"] = 45] = "add_chain_combat_effect";
  skillfeaturetype2[skillfeaturetype2["remove_chain_combat_effect"] = 46] = "remove_chain_combat_effect";
  skillfeaturetype2[skillfeaturetype2["change_skill_effect_bonus"] = 47] = "change_skill_effect_bonus";
  skillfeaturetype2[skillfeaturetype2["change_skill_effect_ai_point"] = 48] = "change_skill_effect_ai_point";
  skillfeaturetype2[skillfeaturetype2["change_dam_addend"] = 49] = "change_dam_addend";
  skillfeaturetype2[skillfeaturetype2["change_hitted"] = 50] = "change_hitted";
  skillfeaturetype2[skillfeaturetype2["change_skill_move_speed"] = 51] = "change_skill_move_speed";
  skillfeaturetype2[skillfeaturetype2["add_skill_buff"] = 52] = "add_skill_buff";
  skillfeaturetype2[skillfeaturetype2["change_skill_bonus"] = 53] = "change_skill_bonus";
  skillfeaturetype2[skillfeaturetype2["change_skill_normal_info"] = 54] = "change_skill_normal_info";
  skillfeaturetype2[skillfeaturetype2["change_skill_invisibility"] = 55] = "change_skill_invisibility";
  skillfeaturetype2[skillfeaturetype2["change_skill_constraint"] = 56] = "change_skill_constraint";
  skillfeaturetype2[skillfeaturetype2["change_skill_book_type"] = 57] = "change_skill_book_type";
  skillfeaturetype2[skillfeaturetype2["change_projection_skill_effect_id"] = 58] = "change_projection_skill_effect_id";
  skillfeaturetype2[skillfeaturetype2["change_push_pvp_info"] = 59] = "change_push_pvp_info";
  skillfeaturetype2[skillfeaturetype2["change_forced_critical"] = 60] = "change_forced_critical";
  skillfeaturetype2[skillfeaturetype2["change_instance_skill_effect_info"] = 61] = "change_instance_skill_effect_info";
  skillfeaturetype2[skillfeaturetype2["change_skill_start_stage"] = 62] = "change_skill_start_stage";
  skillfeaturetype2[skillfeaturetype2["change_skill_effect_dir_target"] = 63] = "change_skill_effect_dir_target";
  skillfeaturetype2[skillfeaturetype2["change_stage_dir_rate"] = 64] = "change_stage_dir_rate";
  skillfeaturetype2[skillfeaturetype2["change_projection"] = 65] = "change_projection";
  skillfeaturetype2[skillfeaturetype2["change_skill_view"] = 66] = "change_skill_view";
  skillfeaturetype2[skillfeaturetype2["change_projectile_speed"] = 67] = "change_projectile_speed";
  skillfeaturetype2[skillfeaturetype2["change_projectile_dist"] = 68] = "change_projectile_dist";
  skillfeaturetype2[skillfeaturetype2["change_projectile_resourcescale"] = 69] = "change_projectile_resourcescale";
  skillfeaturetype2[skillfeaturetype2["change_projectile_max_target_hit_count"] = 70] = "change_projectile_max_target_hit_count";
  skillfeaturetype2[skillfeaturetype2["change_summon_trap_lifetime"] = 71] = "change_summon_trap_lifetime";
  skillfeaturetype2[skillfeaturetype2["change_summon_trap_destroy_delaytime"] = 72] = "change_summon_trap_destroy_delaytime";
  skillfeaturetype2[skillfeaturetype2["change_summon_trap_react_info"] = 73] = "change_summon_trap_react_info";
  skillfeaturetype2[skillfeaturetype2["change_summon_trap_invoke_effect"] = 74] = "change_summon_trap_invoke_effect";
  skillfeaturetype2[skillfeaturetype2["change_summon_trap_count"] = 75] = "change_summon_trap_count";
  skillfeaturetype2[skillfeaturetype2["enable_identity_event"] = 76] = "enable_identity_event";
  skillfeaturetype2[skillfeaturetype2["change_identity_proc_value"] = 77] = "change_identity_proc_value";
  skillfeaturetype2[skillfeaturetype2["change_skill_effect_identity_proc_info"] = 78] = "change_skill_effect_identity_proc_info";
  skillfeaturetype2[skillfeaturetype2["change_identity_proc_pvp_value"] = 79] = "change_identity_proc_pvp_value";
  skillfeaturetype2[skillfeaturetype2["change_skill_effect_identity_proc_pvp_info"] = 80] = "change_skill_effect_identity_proc_pvp_info";
  skillfeaturetype2[skillfeaturetype2["change_skill_effect_identity_proc_replace_info"] = 81] = "change_skill_effect_identity_proc_replace_info";
  skillfeaturetype2[skillfeaturetype2["change_skill_effect_identity_proc_replace_pvp_info"] = 82] = "change_skill_effect_identity_proc_replace_pvp_info";
  skillfeaturetype2[skillfeaturetype2["swap_chain_skill_effect"] = 83] = "swap_chain_skill_effect";
  skillfeaturetype2[skillfeaturetype2["swap_chain_combat_effect"] = 84] = "swap_chain_combat_effect";
  skillfeaturetype2[skillfeaturetype2["change_charge_scale"] = 85] = "change_charge_scale";
  skillfeaturetype2[skillfeaturetype2["change_summon_npc_id"] = 86] = "change_summon_npc_id";
  skillfeaturetype2[skillfeaturetype2["change_summon_npc_sight_range"] = 87] = "change_summon_npc_sight_range";
  skillfeaturetype2[skillfeaturetype2["change_summon_npc_pursuit_range"] = 88] = "change_summon_npc_pursuit_range";
  skillfeaturetype2[skillfeaturetype2["change_summon_npc_walk_movespeed"] = 89] = "change_summon_npc_walk_movespeed";
  skillfeaturetype2[skillfeaturetype2["change_summon_npc_battle_movespeed"] = 90] = "change_summon_npc_battle_movespeed";
  skillfeaturetype2[skillfeaturetype2["change_summon_npc_life_time"] = 91] = "change_summon_npc_life_time";
  skillfeaturetype2[skillfeaturetype2["change_summon_npc_ai_index"] = 92] = "change_summon_npc_ai_index";
  skillfeaturetype2[skillfeaturetype2["change_summon_npc_invincible_duration"] = 93] = "change_summon_npc_invincible_duration";
  skillfeaturetype2[skillfeaturetype2["change_summon_npc_acquire_identity"] = 94] = "change_summon_npc_acquire_identity";
  skillfeaturetype2[skillfeaturetype2["change_summon_npc_skill_id"] = 95] = "change_summon_npc_skill_id";
  skillfeaturetype2[skillfeaturetype2["change_summon_npc_die_skill_id"] = 96] = "change_summon_npc_die_skill_id";
  skillfeaturetype2[skillfeaturetype2["change_summon_npc_destroy_skill_id"] = 97] = "change_summon_npc_destroy_skill_id";
  skillfeaturetype2[skillfeaturetype2["change_summon_npc_spawn_buff_id"] = 98] = "change_summon_npc_spawn_buff_id";
  skillfeaturetype2[skillfeaturetype2["change_summon_npc_count"] = 99] = "change_summon_npc_count";
  skillfeaturetype2[skillfeaturetype2["change_summon_npc_stat"] = 100] = "change_summon_npc_stat";
  skillfeaturetype2[skillfeaturetype2["change_summon_npc_threat_point"] = 101] = "change_summon_npc_threat_point";
  skillfeaturetype2[skillfeaturetype2["change_summon_npc_skill_usable_tick"] = 102] = "change_summon_npc_skill_usable_tick";
  skillfeaturetype2[skillfeaturetype2["change_summon_npc_skill_use_order"] = 103] = "change_summon_npc_skill_use_order";
  skillfeaturetype2[skillfeaturetype2["change_combat_effect_arg"] = 104] = "change_combat_effect_arg";
  skillfeaturetype2[skillfeaturetype2["change_skill_effect_cost"] = 105] = "change_skill_effect_cost";
  skillfeaturetype2[skillfeaturetype2["change_accumulate_dam_rate"] = 106] = "change_accumulate_dam_rate";
  skillfeaturetype2[skillfeaturetype2["change_projectile_bank_data_addend"] = 107] = "change_projectile_bank_data_addend";
  skillfeaturetype2[skillfeaturetype2["change_identity_category"] = 108] = "change_identity_category";
  skillfeaturetype2[skillfeaturetype2["change_skill_slot_visible_effect"] = 109] = "change_skill_slot_visible_effect";
  skillfeaturetype2[skillfeaturetype2["change_attack_mask"] = 110] = "change_attack_mask";
  skillfeaturetype2[skillfeaturetype2["change_aim_target_max_range"] = 111] = "change_aim_target_max_range";
  return skillfeaturetype2;
})(skillfeaturetype || {});
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
var zonelevel = /* @__PURE__ */ ((zonelevel2) => {
  zonelevel2[zonelevel2["normal"] = 0] = "normal";
  zonelevel2[zonelevel2["hard"] = 1] = "hard";
  zonelevel2[zonelevel2["hellchaos"] = 2] = "hellchaos";
  zonelevel2[zonelevel2["challenge"] = 3] = "challenge";
  zonelevel2[zonelevel2["special"] = 4] = "special";
  zonelevel2[zonelevel2["extreme"] = 5] = "extreme";
  return zonelevel2;
})(zonelevel || {});

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
      } else if (entity.entityType === 0 /* Unknown */) {
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
      } else
        return entity;
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
  getEntityByName(name112) {
    return [...this.entities.values()].find((e) => e.name === name112);
  }
};

// src/logger/gameTracker.ts
var import_tiny_typed_emitter2 = require("tiny-typed-emitter");

// src/logger/statapi.ts
var import_crypto = require("crypto");
var import_axios = __toESM(require("axios"));

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

// src/logger/logEvent.ts
var LogEvent = class {
  time;
  #logId;
  #data;
  #read;
  #write;
  constructor(...args) {
    if (args.length === 5) {
      const [data, logId2, time, read163, write79] = args;
      this.#data = data;
      this.time = time;
      this.#logId = logId2;
      this.#read = read163;
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

// src/packets/log/definitions/SkillCooldownNotify.ts
function read(reader, version2) {
  const data = {};
  data.cooldown1 = reader.f32();
  data.cooldown2 = reader.f32();
  data.skillId = reader.u32();
  return data;
}
function write(writer, data) {
  writer.f32(data.cooldown1);
  writer.f32(data.cooldown2);
  writer.u32(data.skillId);
}
var name = "SkillCooldownNotify";

// src/packets/log/structures/AbilityData.ts
function read2(reader, version2) {
  const data = {};
  data.points = reader.u16();
  data.id = reader.u32();
  data.level = reader.u8();
  return data;
}
function write2(writer, data) {
  writer.u16(data.points);
  writer.u32(data.id);
  writer.u8(data.level);
}

// src/packets/log/definitions/AbilityChangeNotify.ts
function read3(reader, version2) {
  const data = {};
  data.abilityDataList = reader.array(reader.u16(), () => read2(reader, version2), 100);
  return data;
}
function write3(writer, data) {
  writer.array(data.abilityDataList, { maxLen: 100, lenType: "u16" }, (obj) => {
    write2(writer, obj);
  });
}
var name2 = "AbilityChangeNotify";

// src/packets/log/structures/ActiveAbility.ts
function read4(reader, version2) {
  const data = {};
  data.featureType = reader.u16();
  data.level = reader.u32();
  return data;
}
function write4(writer, data) {
  writer.u16(data.featureType);
  writer.u32(data.level);
}

// src/packets/log/definitions/ActiveAbilityNotify.ts
function read5(reader, version2) {
  const data = {};
  data.activeAbilityList = reader.array(reader.u16(), () => read4(reader, version2), 60);
  data.objectId = reader.u64();
  return data;
}
function write5(writer, data) {
  writer.array(data.activeAbilityList, { maxLen: 60, lenType: "u16" }, (obj) => {
    write4(writer, obj);
  });
  writer.u64(data.objectId);
}
var name3 = "ActiveAbilityNotify";

// src/packets/log/definitions/AddonSkillFeatureChangeNotify.ts
function read6(reader, version2) {
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
function write6(writer, data) {
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
function read7(reader, version2) {
  const data = {};
  data.paralyzationMaxPoint = reader.u32();
  data.type = reader.u8();
  data.objectId = reader.u64();
  data.paralyzationPoint = reader.u32();
  return data;
}
function write7(writer, data) {
  writer.u32(data.paralyzationMaxPoint);
  writer.u8(data.type);
  writer.u64(data.objectId);
  writer.u32(data.paralyzationPoint);
}
var name5 = "BlockSkillStateNotify";

// src/packets/log/definitions/CounterAttackNotify.ts
function read8(reader, version2) {
  const data = {};
  data.sourceId = reader.u64();
  data.targetId = reader.u64();
  data.type = reader.u32();
  return data;
}
function write8(writer, data) {
  writer.u64(data.sourceId);
  writer.u64(data.targetId);
  writer.u32(data.type);
}
var name6 = "CounterAttackNotify";

// src/packets/log/definitions/DeathNotify.ts
function read9(reader, version2) {
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
function write9(writer, data) {
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
function read10(reader, version2) {
  const data = {};
  data.abilityDataList = reader.array(reader.u16(), () => read2(reader, version2), 100);
  return data;
}
function write10(writer, data) {
  writer.array(data.abilityDataList, { maxLen: 100, lenType: "u16" }, (obj) => {
    write2(writer, obj);
  });
}
var name8 = "InitAbility";

// src/packets/log/definitions/InitEnv.ts
function read11(reader, version2) {
  const data = {};
  data.playerId = reader.u64();
  return data;
}
function write11(writer, data) {
  writer.u64(data.playerId);
}
var name9 = "InitEnv";

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
function read12(reader, version2 = 0) {
  const s = reader.u16();
  if ((s & 4095) < 2079) {
    reader.o -= 2;
    return bigintToDate(reader.i64());
  } else {
    return bigintToDate(BigInt(s) & 0xfffn | 0x11000n);
  }
}
function write12(writer, date = bigintToDate(0x1181fn)) {
  if (date.getUTCFullYear() >= 2079) {
    writer.u16(Number(dateToBigint(date) & 0xffffn));
  } else
    writer.i64(dateToBigint(date));
}

// src/packets/log/structures/StatusEffectData.ts
function read13(reader, version2) {
  const data = {};
  data.skillLevel = reader.u8();
  data.occurTime = read12(reader, version2);
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
function write13(writer, data) {
  writer.u8(data.skillLevel);
  write12(writer, data.occurTime);
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
function read14(reader, version2 = 0) {
  const flag = reader.u8();
  const bytes = reader.bytes(flag >> 1 & 7);
  const result = bytesToInt64(bytes) << 4n | BigInt(flag >> 4);
  return (flag & 1) === 0 ? result : -result;
}
function write14(writer, value = 0n) {
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

// src/packets/log/definitions/InitPC.ts
function read15(reader, version2) {
  const data = {};
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const h = {};
      h.StatType = reader.u8();
      h.Value = read14(reader, version2);
      return h;
    },
    152
  );
  data.name = reader.string(20);
  data.level = reader.u16();
  data.statusEffectDatas = reader.array(reader.u16(), () => read13(reader, version2), 80);
  data.characterId = reader.u64();
  data.gearLevel = reader.f32();
  data.playerId = reader.u64();
  data.classId = reader.u16();
  return data;
}
function write15(writer, data) {
  writer.array(data.statPair, { maxLen: 152, lenType: "u16" }, (obj) => {
    writer.u8(obj.statType);
    write14(writer, obj.value);
  });
  writer.string(data.name, 20);
  writer.u16(data.level);
  writer.array(data.statusEffectDatas, { maxLen: 80, lenType: "u16" }, (obj) => {
    write13(writer, obj);
  });
  writer.u64(data.characterId);
  writer.f32(data.gearLevel);
  writer.u64(data.playerId);
  writer.u16(data.classId);
}
var name10 = "InitPC";

// src/packets/log/definitions/InitLocal.ts
function read16(reader, version2) {
  const data = {};
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const l = {};
      l.statType = reader.u8();
      l.value = read14(reader, version2);
      return l;
    },
    152
  );
  data.statusEffectDatas = reader.array(reader.u16(), () => read13(reader, version2), 80);
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
  data.abilityDataList = reader.array(reader.u16(), () => read2(reader, version2), 100);
  return data;
}
function write16(writer, data) {
  writer.array(data.statPair, { maxLen: 152, lenType: "u16" }, (obj) => {
    writer.u8(obj.statType);
    write14(writer, obj.value);
  });
  writer.array(data.statusEffectDatas, { maxLen: 80, lenType: "u16" }, (obj) => {
    write13(writer, obj);
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
    write2(writer, obj);
  });
}
var name11 = "InitLocal";

// src/packets/log/definitions/MigrationExecute.ts
function read17(reader, version2) {
  const data = {};
  data.account_CharacterId1 = reader.u64();
  data.serverAddr = reader.string(256);
  data.account_CharacterId2 = reader.u64();
  return data;
}
function write17(writer, data) {
  writer.u64(data.account_CharacterId1);
  writer.string(data.serverAddr, 256);
  writer.u64(data.account_CharacterId2);
}
var name12 = "MigrationExecute";

// src/packets/common/Vector3F.ts
function i21(n) {
  if (n >> 20 === 1)
    return -((~n >>> 0) + 1 & 2097151);
  return n;
}
function read18(reader, version2 = 0) {
  let b = reader.u64();
  return {
    x: i21(Number(b & 0x1fffffn)),
    y: i21(Number(b >> 21n & 0x1fffffn)),
    z: i21(Number(b >> 42n & 0x1fffffn))
  };
}
function write18(writer, data = { x: 0, y: 0, z: 0 }) {
  writer.u64(
    BigInt(Math.round(data.x ?? 0) >>> 0 & 2097151) | BigInt(Math.round(data.y ?? 0) >>> 0 & 2097151) << 21n | BigInt(Math.round(data.z ?? 0) >>> 0 & 2097151) << 42n
  );
}

// src/packets/common/Angle.ts
function read19(reader, version2 = 0) {
  return reader.u16() * (2 * Math.PI) / 65536;
}
function write19(writer, data = 0) {
  writer.u16(Math.round(data * 65536 / (2 * Math.PI)) % 65536);
}

// src/packets/log/structures/NpcData.ts
function read20(reader, version2) {
  const data = {};
  data.spawnIndex = reader.u32();
  data.objectId = reader.u64();
  if (reader.bool())
    data.transitIndex = reader.u32();
  data.position = read18(reader, version2);
  data.statusEffectDatas = reader.array(reader.u16(), () => read13(reader, version2), 80);
  data.directionYaw = read19(reader, version2);
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const x = {};
      x.statType = reader.u8();
      x.value = read14(reader, version2);
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
function write20(writer, data) {
  writer.u32(data.spawnIndex);
  writer.u64(data.objectId);
  if (writer.bool(data.transitIndex !== void 0))
    writer.u32(data.transitIndex);
  write18(writer, data.position);
  writer.array(data.statusEffectDatas, { maxLen: 80, lenType: "u16" }, (obj) => {
    write13(writer, obj);
  });
  write19(writer, data.directionYaw);
  writer.array(data.statPair, { maxLen: 152, lenType: "u16" }, (obj) => {
    writer.u8(obj.statType);
    write14(writer, obj.value);
  });
  writer.u32(data.typeId);
  writer.u16(data.level);
  if (writer.bool(data.balanceLevel !== void 0))
    writer.u16(data.balanceLevel);
}

// src/packets/log/definitions/NewNpc.ts
function read21(reader, version2) {
  const data = {};
  data.npcStruct = read20(reader, version2);
  return data;
}
function write21(writer, data) {
  write20(writer, data.npcStruct);
}
var name13 = "NewNpc";

// src/packets/log/definitions/NewNpcSummon.ts
function read22(reader, version2) {
  const data = {};
  data.publishReason = reader.u8();
  data.ownerId = reader.u64();
  data.npcData = read20(reader, version2);
  return data;
}
function write22(writer, data) {
  writer.u8(data.publishReason);
  writer.u64(data.ownerId);
  write20(writer, data.npcData);
}
var name14 = "NewNpcSummon";

// src/packets/log/structures/EquipItemData.ts
function read23(reader, version2) {
  const data = {};
  data.slot = reader.u16();
  data.level = reader.u16();
  data.itemTint = reader.bytes(reader.u16(), 5, 14);
  data.expireTime = read12(reader);
  data.id = reader.u32();
  return data;
}
function write23(writer, data) {
  writer.u16(data.slot);
  writer.u16(data.level);
  writer.bytes(data.itemTint, { maxLen: 5, lenType: "u16", multiplier: 14 });
  write12(writer, data.expireTime);
  writer.u32(data.id);
}

// src/packets/log/structures/PCStruct.ts
function read24(reader, version2) {
  const data = {};
  data.maxItemLevel = reader.f32();
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const z = {};
      z.statType = reader.u8();
      z.value = read14(reader, version2);
      return z;
    },
    152
  );
  data.name = reader.string(20);
  data.heading = read19(reader, version2);
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
  data.statusEffectDatas = reader.array(reader.u16(), () => read13(reader, version2), 80);
  if (version2 >= 1) {
    data.avgItemLevel = reader.f32();
    data.position = read18(reader);
    data.equipItemDataList = reader.array(reader.u16(), () => read23(reader, version2), 32);
    data.equipLifeToolDataList = reader.array(reader.u16(), () => read23(reader, version2), 9);
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
function write24(writer, data) {
  writer.f32(data.maxItemLevel);
  writer.array(data.statPair, { maxLen: 152, lenType: "u16" }, (obj) => {
    writer.u8(obj.statType);
    write14(writer, obj.value);
  });
  writer.string(data.name, 20);
  write19(writer, data.heading);
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
    write13(writer, obj);
  });
  writer.f32(data.avgItemLevel);
  write18(writer, data.position);
  writer.array(data.equipItemDataList, { maxLen: 32, lenType: "u16" }, (obj) => {
    write23(writer, obj);
  });
  writer.array(data.equipLifeToolDataList, { maxLen: 9, lenType: "u16" }, (obj) => {
    write23(writer, obj);
  });
  writer.string(data.guildName, 20);
  writer.u64(data.guildId);
}

// src/packets/log/definitions/NewPC.ts
function read25(reader, version2) {
  const data = {};
  data.pcStruct = read24(reader, version2);
  return data;
}
function write25(writer, data) {
  write24(writer, data.pcStruct);
}
var name15 = "NewPC";

// src/packets/common/TripodIndex.ts
function read26(reader, version2 = 0) {
  return {
    first: reader.u8(),
    second: reader.u8(),
    third: reader.u8()
  };
}
function write26(writer, data) {
  writer.u8(data.first);
  writer.u8(data.second);
  writer.u8(data.third);
}

// src/packets/common/TripodLevel.ts
function read27(reader, version2 = 0) {
  return {
    first: reader.u16(),
    second: reader.u16(),
    third: reader.u16()
  };
}
function write27(writer, data) {
  writer.u16(data.first);
  writer.u16(data.second);
  writer.u16(data.third);
}

// src/packets/log/structures/ProjectileInfo.ts
function read28(reader, version2) {
  const data = {};
  data.tripodIndex = read26(reader, version2);
  data.chainSkillEffect = reader.u32();
  data.skillEffect = reader.u32();
  data.skillId = reader.u32();
  data.targetObjectId = reader.u64();
  data.ownerId = reader.u64();
  data.skillLevel = reader.u8();
  data.projectileId = reader.u64();
  data.tripodLevel = read27(reader, version2);
  return data;
}
function write28(writer, data) {
  write26(writer, data.tripodIndex);
  writer.u32(data.chainSkillEffect);
  writer.u32(data.skillEffect);
  writer.u32(data.skillId);
  writer.u64(data.targetObjectId);
  writer.u64(data.ownerId);
  writer.u8(data.skillLevel);
  writer.u64(data.projectileId);
  write27(writer, data.tripodLevel);
}

// src/packets/log/definitions/NewProjectile.ts
function read29(reader, version2) {
  const data = {};
  data.projectileInfo = read28(reader, version2);
  return data;
}
function write29(writer, data) {
  write28(writer, data.projectileInfo);
}
var name16 = "NewProjectile";

// src/packets/log/definitions/ParalyzationStateNotify.ts
function read30(reader, version2) {
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
function write30(writer, data) {
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
function read31(reader, version2) {
  const data = {};
  data.maxHp = read14(reader, version2);
  data.characterId = reader.u64();
  data.position = read18(reader, version2);
  data.transitIndex = reader.u32();
  data.curHp = read14(reader, version2);
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
function write31(writer, data) {
  write14(writer, data.maxHp);
  writer.u64(data.characterId);
  write18(writer, data.position);
  writer.u32(data.transitIndex);
  write14(writer, data.curHp);
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
function read32(reader, version2) {
  const data = {};
  data.raidInstanceId = reader.u32();
  data.lootGrade = reader.u32();
  data.partyType = reader.u8();
  data.partyInstanceId = reader.u32();
  data.partyLootType = reader.u8();
  data.memberDatas = reader.array(reader.u16(), () => read31(reader, version2), 40);
  return data;
}
function write32(writer, data) {
  writer.u32(data.raidInstanceId);
  writer.u32(data.lootGrade);
  writer.u8(data.partyType);
  writer.u32(data.partyInstanceId);
  writer.u8(data.partyLootType);
  writer.array(data.memberDatas, { maxLen: 40, lenType: "u16" }, (obj) => {
    write31(writer, obj);
  });
}
var name18 = "PartyInfo";

// src/packets/log/definitions/PartyLeaveResult.ts
function read33(reader, version2) {
  const data = {};
  data.partyLeaveType = reader.u8();
  data.partyInstanceId = reader.u32();
  data.name = reader.string(20);
  return data;
}
function write33(writer, data) {
  writer.u8(data.partyLeaveType);
  writer.u32(data.partyInstanceId);
  writer.string(data.name, 20);
}
var name19 = "PartyLeaveResult";

// src/packets/log/definitions/PartyPassiveStatusEffectAddNotify.ts
function read34(reader, version2) {
  const data = {};
  data.objectId = reader.u64();
  data.passiveStatusEffectList = reader.array(reader.u16(), () => reader.u32(), 10);
  data.unk0_m = reader.u8();
  return data;
}
function write34(writer, data) {
  writer.u64(data.objectId);
  writer.array(data.passiveStatusEffectList, { maxLen: 10, lenType: "u16" }, (obj) => {
    writer.u32(obj);
  });
  writer.u8(data.unk0_m);
}
var name20 = "PartyPassiveStatusEffectAddNotify";

// src/packets/log/definitions/PartyPassiveStatusEffectRemoveNotify.ts
function read35(reader, version2) {
  const data = {};
  data.objectId = reader.u64();
  data.passiveStatusEffectList = reader.array(reader.u16(), () => reader.u32(), 10);
  return data;
}
function write35(writer, data) {
  writer.u64(data.objectId);
  writer.array(data.passiveStatusEffectList, { maxLen: 10, lenType: "u16" }, (obj) => {
    writer.u32(obj);
  });
}
var name21 = "PartyPassiveStatusEffectRemoveNotify";

// src/packets/log/definitions/PartyStatusEffectAddNotify.ts
function read36(reader, version2) {
  const data = {};
  data.characterId = reader.u64();
  data.statusEffectDatas = reader.array(reader.u16(), () => read13(reader, version2), 80);
  data.playerIdOnRefresh = reader.u64();
  return data;
}
function write36(writer, data) {
  writer.u64(data.characterId);
  writer.array(data.statusEffectDatas, { maxLen: 80, lenType: "u16" }, (obj) => {
    write13(writer, obj);
  });
  writer.u64(data.playerIdOnRefresh);
}
var name22 = "PartyStatusEffectAddNotify";

// src/packets/log/definitions/PartyStatusEffectRemoveNotify.ts
function read37(reader, version2) {
  const data = {};
  data.characterId = reader.u64();
  data.statusEffectIds = reader.array(reader.u16(), () => reader.u32(), 80);
  data.reason = reader.u8();
  return data;
}
function write37(writer, data) {
  writer.u64(data.characterId);
  writer.array(data.statusEffectIds, { maxLen: 80, lenType: "u16" }, (obj) => {
    writer.u32(obj);
  });
  writer.u8(data.reason);
}
var name23 = "PartyStatusEffectRemoveNotify";

// src/packets/log/definitions/PartyStatusEffectResultNotify.ts
function read38(reader, version2) {
  const data = {};
  data.partyInstanceId = reader.u32();
  data.raidInstanceId = reader.u32();
  data.characterId = reader.u64();
  return data;
}
function write38(writer, data) {
  writer.u32(data.partyInstanceId);
  writer.u32(data.raidInstanceId);
  writer.u64(data.characterId);
}
var name24 = "PartyStatusEffectResultNotify";

// src/packets/log/definitions/PassiveStatusEffectAddNotify.ts
function read39(reader, version2) {
  const data = {};
  data.passiveStatusEffectList = reader.array(reader.u16(), () => reader.u32(), 10);
  return data;
}
function write39(writer, data) {
  writer.array(data.passiveStatusEffectList, { maxLen: 10, lenType: "u16" }, (obj) => {
    writer.u32(obj);
  });
}
var name25 = "PassiveStatusEffectAddNotify";

// src/packets/log/definitions/PassiveStatusEffectRemoveNotify.ts
function read40(reader, version2) {
  const data = {};
  data.passiveStatusEffectList = reader.array(reader.u16(), () => reader.u32(), 10);
  return data;
}
function write40(writer, data) {
  writer.array(data.passiveStatusEffectList, { maxLen: 10, lenType: "u16" }, (obj) => {
    writer.u32(obj);
  });
}
var name26 = "PassiveStatusEffectRemoveNotify";

// src/packets/log/definitions/RaidBossKillNotify.ts
function read41(reader, version2) {
  const data = {};
  if (version2 >= 4)
    data.typeId = reader.u32();
  else
    data.typeId = 0;
  return data;
}
function write41(writer, data) {
  writer.u32(data.typeId);
}
var name27 = "RaidBossKillNotify";

// src/packets/log/definitions/RaidResult.ts
function read42(reader, version2) {
  const data = {};
  if (version2 >= 3) {
    data.raidResult = reader.u8();
  } else {
    data.raidResult = 0;
  }
  return data;
}
function write42(writer, data) {
  writer.u8(data.raidResult);
}
var name28 = "RaidResult";

// src/packets/log/structures/UnpublishObject.ts
function read43(reader, version2) {
  const data = {};
  data.unpublishReason = reader.u8();
  data.objectId = reader.u64();
  return data;
}
function write43(writer, data) {
  writer.u8(data.unpublishReason);
  writer.u64(data.objectId);
}

// src/packets/log/definitions/RemoveObject.ts
function read44(reader, version2) {
  const data = {};
  data.unpublishedObjects = reader.array(reader.u16(), () => read43(reader, version2), 200);
  return data;
}
function write44(writer, data) {
  writer.array(data.unpublishedObjects, { maxLen: 200, lenType: "u16" }, (obj) => {
    write43(writer, obj);
  });
}
var name29 = "RemoveObject";

// src/packets/common/SkillMoveOptionData.ts
function read45(reader, version2 = 0) {
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
function write45(writer, data) {
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

// src/packets/log/structures/SkillDamageEvent.ts
function read46(reader, version2) {
  const data = {};
  data.modifier = reader.u8();
  data.targetId = reader.u64();
  data.damageType = reader.u8();
  if (reader.bool())
    data.damageAttr = reader.u8();
  data.curHp = read14(reader, version2);
  data.unk3_m = reader.u16();
  data.maxHp = read14(reader, version2);
  data.damage = read14(reader, version2);
  return data;
}
function write46(writer, data) {
  writer.u8(data.modifier);
  writer.u64(data.targetId);
  writer.u8(data.damageType);
  if (writer.bool(data.damageAttr !== void 0))
    writer.u8(data.damageAttr);
  write14(writer, data.curHp);
  writer.u16(data.unk3_m);
  write14(writer, data.maxHp);
  write14(writer, data.damage);
}

// src/packets/log/structures/SkillDamageAbnormalMoveEvent.ts
function read47(reader, version2) {
  const data = {};
  data.skillMoveOptionData = read45(reader, version2);
  data.destination = read18(reader, version2);
  data.position = read18(reader, version2);
  data.skillDamageEvent = read46(reader, version2);
  return data;
}
function write47(writer, data) {
  write45(writer, data.skillMoveOptionData);
  write18(writer, data.destination);
  write18(writer, data.position);
  write46(writer, data.skillDamageEvent);
}

// src/packets/log/definitions/SkillDamageAbnormalMoveNotify.ts
function read48(reader, version2) {
  const data = {};
  data.skillId = reader.u32();
  data.skillDamageAbnormalMoveEvents = reader.array(
    reader.u16(),
    () => read47(reader, version2),
    50
  );
  data.skillEffectId = reader.u32();
  data.sourceId = reader.u64();
  return data;
}
function write48(writer, data) {
  writer.u32(data.skillId);
  writer.array(
    data.skillDamageAbnormalMoveEvents,
    { maxLen: 50, lenType: "u16" },
    (obj) => {
      write47(writer, obj);
    }
  );
  writer.u32(data.skillEffectId);
  writer.u64(data.sourceId);
}
var name30 = "SkillDamageAbnormalMoveNotify";

// src/packets/log/definitions/SkillDamageNotify.ts
function read49(reader, version2) {
  const data = {};
  data.skillLevel = reader.u8();
  data.sourceId = reader.u64();
  data.skillId = reader.u32();
  data.skillDamageEvents = reader.array(reader.u16(), () => read46(reader, version2), 50);
  data.skillEffectId = reader.u32();
  return data;
}
function write49(writer, data) {
  writer.u8(data.skillLevel);
  writer.u64(data.sourceId);
  writer.u32(data.skillId);
  writer.array(data.skillDamageEvents, { maxLen: 50, lenType: "u16" }, (obj) => {
    write46(writer, obj);
  });
  writer.u32(data.skillEffectId ?? 0);
}
var name31 = "SkillDamageNotify";

// src/packets/log/definitions/SkillStageNotify.ts
function read50(reader, version2) {
  const data = {};
  data.sourceId = reader.u64();
  data.skillId = reader.u32();
  data.stage = reader.u8();
  return data;
}
function write50(writer, data) {
  writer.u64(data.sourceId);
  writer.u32(data.skillId);
  writer.u8(data.stage);
}
var name32 = "SkillStageNotify";

// src/packets/common/SkillOptionData.ts
function read51(reader, version2 = 0) {
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
    data.tripodIndex = read26(reader);
  if (flag & 64)
    data.tripodLevel = read27(reader);
  return data;
}
function write51(writer, data) {
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
    write26(writer, data.tripodIndex);
  if (flag & 64)
    write27(writer, data.tripodLevel);
}

// src/packets/log/definitions/SkillStartNotify.ts
function read52(reader, version2) {
  const data = {};
  data.sourceId = reader.u64();
  data.curDirectionYaw = read19(reader, version2);
  data.newDirectionYaw = read19(reader, version2);
  data.aimTargetPosition = read18(reader, version2);
  if (reader.bool())
    data.pitchRotation = read19(reader, version2);
  if (reader.bool())
    data.aiStateId = reader.u32();
  data.curPosition = read18(reader, version2);
  if (reader.bool())
    data.unk1_m = reader.u32();
  data.skillLevel = reader.u8();
  data.newPosition = read18(reader, version2);
  data.skillId = reader.u32();
  data.skillOptionData = read51(reader, version2);
  return data;
}
function write52(writer, data) {
  writer.u64(data.sourceId);
  write19(writer, data.curDirectionYaw);
  write19(writer, data.newDirectionYaw);
  write18(writer, data.aimTargetPosition);
  if (writer.bool(data.pitchRotation !== void 0))
    write19(writer, data.pitchRotation);
  if (writer.bool(data.aiStateId !== void 0))
    writer.u32(data.aiStateId);
  write18(writer, data.curPosition);
  if (writer.bool(data.unk1_m !== void 0))
    writer.u32(data.unk1_m);
  writer.u8(data.skillLevel);
  write18(writer, data.newPosition);
  writer.u32(data.skillId);
  write51(writer, data.skillOptionData);
}
var name33 = "SkillStartNotify";

// src/packets/log/definitions/StatusEffectAddNotify.ts
function read53(reader, version2) {
  const data = {};
  data.statusEffectData = read13(reader, version2);
  data.objectId = reader.u64();
  data.new = reader.bool();
  return data;
}
function write53(writer, data) {
  write13(writer, data.statusEffectData);
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
  data.maxHp = read14(reader, version2);
  data.characterId = reader.u64();
  data.unk0_m = reader.u32();
  data.statusEffectDatas = reader.array(reader.u16(), () => read13(reader, version2), 80);
  data.position = reader.u64();
  data.curHp = read14(reader, version2);
  return data;
}
function write60(writer, data) {
  write14(writer, data.maxHp);
  writer.u64(data.characterId);
  writer.u32(data.unk0_m);
  writer.array(data.statusEffectDatas, { maxLen: 80, lenType: "u16" }, (obj) => {
    write13(writer, obj);
  });
  writer.u64(data.position);
  write14(writer, data.curHp);
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
  data.equipItemDataList = reader.array(reader.u16(), () => read23(reader, version2), 32);
  return data;
}
function write68(writer, data) {
  writer.u64(data.objectId);
  writer.array(data.equipItemDataList, { maxLen: 32, lenType: "u16" }, (obj) => {
    write23(writer, obj);
  });
}
var name48 = "EquipChangeNotify";

// src/packets/log/definitions/EquipLifeToolChangeNotify.ts
function read69(reader, version2) {
  const data = {};
  data.objectId = reader.u64();
  data.equipLifeToolDataList = reader.array(reader.u16(), () => read23(reader, version2), 9);
  return data;
}
function write69(writer, data) {
  writer.u64(data.objectId);
  writer.array(data.equipLifeToolDataList, { maxLen: 9, lenType: "u16" }, (obj) => {
    write23(writer, obj);
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
    data.expireTime = read12(reader);
    data.lockUpdateTime = read12(reader);
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
    write12(writer, data.expireTime);
    write12(writer, data.lockUpdateTime);
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
  data.position = read18(reader);
  data.objectId = reader.u64();
  data.ownerId = reader.u64();
  data.skillId = reader.u32();
  data.skillEffect = reader.u32();
  return data;
}
function write75(writer, data) {
  write18(writer, data.position);
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
  data.newDirectionYaw = read19(reader);
  data.cancelReason = reader.u8();
  data.newPosition = read18(reader);
  return data;
}
function write77(writer, data) {
  writer.u32(data.skillId);
  writer.u64(data.caster);
  write19(writer, data.newDirectionYaw);
  writer.u8(data.cancelReason);
  write18(writer, data.newPosition);
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
  [101 /* SkillCooldownNotify */, [name, read, write]],
  [0 /* AbilityChangeNotify */, [name2, read3, write3]],
  [1 /* ActiveAbilityNotify */, [name3, read5, write5]],
  [
    2 /* AddonSkillFeatureChangeNotify */,
    [name4, read6, write6]
  ],
  [
    4 /* BlockSkillStateNotify */,
    [name5, read7, write7]
  ],
  [5 /* CounterAttackNotify */, [name6, read8, write8]],
  [6 /* DeathNotify */, [name7, read9, write9]],
  [7 /* InitAbility */, [name8, read10, write10]],
  [8 /* InitEnv */, [name9, read11, write11]],
  [9 /* InitPC */, [name10, read15, write15]],
  [10 /* InitLocal */, [name11, read16, write16]],
  [11 /* MigrationExecute */, [name12, read17, write17]],
  [12 /* NewNpc */, [name13, read21, write21]],
  [13 /* NewNpcSummon */, [name14, read22, write22]],
  [14 /* NewPC */, [name15, read25, write25]],
  [15 /* NewProjectile */, [name16, read29, write29]],
  [
    16 /* ParalyzationStateNotify */,
    [name17, read30, write30]
  ],
  [17 /* PartyInfo */, [name18, read32, write32]],
  [18 /* PartyLeaveResult */, [name19, read33, write33]],
  [
    19 /* PartyPassiveStatusEffectAddNotify */,
    [
      name20,
      read34,
      write34
    ]
  ],
  [
    20 /* PartyPassiveStatusEffectRemoveNotify */,
    [
      name21,
      read35,
      write35
    ]
  ],
  [
    21 /* PartyStatusEffectAddNotify */,
    [name22, read36, write36]
  ],
  [
    22 /* PartyStatusEffectRemoveNotify */,
    [name23, read37, write37]
  ],
  [
    23 /* PartyStatusEffectResultNotify */,
    [name24, read38, write38]
  ],
  [
    24 /* PassiveStatusEffectAddNotify */,
    [name25, read39, write39]
  ],
  [
    25 /* PassiveStatusEffectRemoveNotify */,
    [
      name26,
      read40,
      write40
    ]
  ],
  [26 /* RaidBossKillNotify */, [name27, read41, write41]],
  [27 /* RaidResult */, [name28, read42, write42]],
  [28 /* RemoveObject */, [name29, read44, write44]],
  [
    29 /* SkillDamageAbnormalMoveNotify */,
    [name30, read48, write48]
  ],
  [30 /* SkillDamageNotify */, [name31, read49, write49]],
  [31 /* SkillStageNotify */, [name32, read50, write50]],
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

// src/logger/statapi.ts
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
    import_axios.default.get(`${_StatApi.baseUrl}/req2`, {
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
    return (0, import_crypto.createHash)("md5").update(data).digest("hex");
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
  getStats(name112) {
    if (!this.isCurrentZoneValid())
      return;
    const c = this.cache.get(name112);
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
var GameTracker = class extends import_tiny_typed_emitter2.TypedEmitter {
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

// src/logger/logger.ts
var import_tiny_typed_emitter4 = require("tiny-typed-emitter");

// src/packets/generated/definitions/PKTSkillCooldownNotify.ts
function read79(buf) {
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
var name56 = "PKTSkillCooldownNotify";
var opcode = 38902;

// src/packets/generated/structures/AbilityData.ts
function read80(reader) {
  const data = {};
  data.level = reader.u8();
  data.id = reader.u32();
  data.points = reader.u16();
  return data;
}

// src/packets/generated/definitions/PKTAbilityChangeNotify.ts
function read81(buf) {
  const reader = new Read(buf);
  const data = {};
  data.abilityDataList = reader.array(reader.u16(), () => read80(reader), 100);
  return data;
}
var name57 = "PKTAbilityChangeNotify";
var opcode2 = 15874;

// src/packets/generated/structures/ActiveAbility.ts
function read82(reader) {
  const data = {};
  data.level = reader.u32();
  data.featureType = reader.u16();
  return data;
}

// src/packets/generated/definitions/PKTActiveAbilityNotify.ts
function read83(buf) {
  const reader = new Read(buf);
  const data = {};
  data.objectId = reader.u64();
  data.activeAbilityList = reader.array(reader.u16(), () => read82(reader), 60);
  return data;
}
var name58 = "PKTActiveAbilityNotify";
var opcode3 = 3507;

// src/packets/generated/definitions/PKTAddonSkillFeatureChangeNotify.ts
function read84(buf) {
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
var name59 = "PKTAddonSkillFeatureChangeNotify";
var opcode4 = 40396;

// src/packets/generated/definitions/PKTAuthTokenResult.ts
function read85(buf) {
  const reader = new Read(buf);
  const data = {};
  data.packetResultCode = reader.u32();
  data.unk1_m = reader.bytes(reader.u32(), 688);
  return data;
}
var name60 = "PKTAuthTokenResult";
var opcode5 = 9743;

// src/packets/generated/definitions/PKTBlockSkillStateNotify.ts
function read86(buf) {
  const reader = new Read(buf);
  const data = {};
  data.objectId = reader.u64();
  data.paralyzationMaxPoint = reader.u32();
  reader.skip(1);
  data.paralyzationPoint = reader.u32();
  data.type = reader.u8();
  return data;
}
var name61 = "PKTBlockSkillStateNotify";
var opcode6 = 43294;

// src/packets/generated/definitions/PKTCounterAttackNotify.ts
function read87(buf) {
  const reader = new Read(buf);
  const data = {};
  data.type = reader.u32();
  data.targetId = reader.u64();
  data.sourceId = reader.u64();
  reader.skip(2);
  return data;
}
var name62 = "PKTCounterAttackNotify";
var opcode7 = 50518;

// src/packets/generated/definitions/PKTDeathNotify.ts
function read88(buf) {
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
var name63 = "PKTDeathNotify";
var opcode8 = 47719;

// src/packets/generated/structures/EquipItemData.ts
function read89(reader) {
  const data = {};
  if (reader.bool())
    data.unk1_0 = reader.u8();
  data.id = reader.u32();
  data.expireTime = read12(reader);
  data.itemTint = reader.bytes(reader.u16(), 5, 14);
  data.unk5 = reader.u8();
  data.level = reader.u16();
  data.slot = reader.u16();
  return data;
}

// src/packets/generated/definitions/PKTEquipChangeNotify.ts
function read90(buf) {
  const reader = new Read(buf);
  const data = {};
  data.unk0 = reader.u32();
  data.equipItemDataList = reader.array(reader.u16(), () => read89(reader), 33);
  data.unk2 = reader.u32();
  data.objectId = reader.u64();
  return data;
}
var name64 = "PKTEquipChangeNotify";
var opcode9 = 37232;

// src/packets/generated/definitions/PKTEquipLifeToolChangeNotify.ts
function read91(buf) {
  const reader = new Read(buf);
  const data = {};
  data.objectId = reader.u64();
  data.equipLifeToolDataList = reader.array(reader.u16(), () => read89(reader), 9);
  return data;
}
var name65 = "PKTEquipLifeToolChangeNotify";
var opcode10 = 36609;

// src/packets/generated/definitions/PKTIdentityStanceChangeNotify.ts
function read92(buf) {
  const reader = new Read(buf);
  const data = {};
  data.stance = reader.u8();
  data.objectId = reader.u64();
  reader.skip(2);
  return data;
}
var name66 = "PKTIdentityStanceChangeNotify";
var opcode11 = 13939;

// src/packets/generated/definitions/PKTInitAbility.ts
function read93(buf) {
  const reader = new Read(buf);
  const data = {};
  data.abilityDataList = reader.array(reader.u16(), () => read80(reader), 100);
  data.struct_137 = reader.bytes(reader.u16(), 353, 48);
  return data;
}
var name67 = "PKTInitAbility";
var opcode12 = 37053;

// src/packets/generated/definitions/PKTInitEnv.ts
function read94(buf) {
  const reader = new Read(buf);
  const data = {};
  data.lostArkDateTime = read12(reader);
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
var name68 = "PKTInitEnv";
var opcode13 = 15335;

// src/packets/generated/structures/StatusEffectData.ts
function read95(reader) {
  const data = {};
  data.sourceId = reader.u64();
  data.statusEffectId = reader.u32();
  data.totalTime = reader.f32();
  data.effectInstanceId = reader.u32();
  data.endTick = reader.u64();
  data.struct_443 = reader.bytes(reader.u16(), 8, 7);
  if (reader.bool())
    data.unk7_0 = reader.u64();
  data.occurTime = read12(reader);
  data.skillLevel = reader.u8();
  if (reader.bool())
    data.value = reader.bytes(16);
  data.stackCount = reader.u8();
  return data;
}

// src/packets/generated/structures/PeriodUpdateStatData.ts
function read96(reader) {
  const data = {};
  data.unk0 = reader.u16();
  data.unk1 = read14(reader);
  data.unk2 = read14(reader);
  data.unk3 = reader.u8();
  data.unk4 = reader.u8();
  data.unk5 = reader.u8();
  data.unk6 = reader.u64();
  return data;
}

// src/packets/generated/definitions/PKTInitPC.ts
function read97(buf) {
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
  data.statusEffectDatas = reader.array(reader.u16(), () => read95(reader), 80);
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
  data.periodUpdateStatDataList = reader.array(reader.u16(), () => read96(reader), 5);
  data.unk54 = reader.u8();
  data.struct_342 = reader.bytes(reader.u16(), 104, 30);
  data.unk56 = reader.u32();
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const l = {};
      l.statType = reader.u8();
      l.value = read14(reader);
      return l;
    },
    153
  );
  return data;
}
var name69 = "PKTInitPC";
var opcode14 = 54555;

// src/packets/generated/structures/Struct_145.ts
function read98(reader) {
  const data = {};
  const unk0 = reader.u16();
  if (unk0 === 1)
    data.unk1_0 = reader.bytes(unk0);
  return data;
}

// src/packets/generated/structures/Struct_660.ts
function read99(reader) {
  const data = {};
  data.unk0 = reader.u8();
  data.unk1 = reader.u8();
  data.unk2 = reader.u8();
  data.unk3 = reader.u8();
  data.unk4 = reader.u32();
  data.unk5 = reader.u32();
  data.struct_145 = read98(reader);
  data.struct_146 = reader.bytes(reader.u16(), 3, 9);
  return data;
}

// src/packets/generated/structures/Struct_667.ts
function read100(reader) {
  const data = {};
  data.struct_393 = reader.bytes(reader.u16(), 2, 10);
  data.unk1 = reader.u32();
  data.struct_147 = reader.bytes(reader.u16(), 10, 9);
  data.struct_237 = reader.bytes(reader.u16(), 10, 18);
  data.unk4 = reader.u32();
  data.struct_235 = reader.array(reader.u16(), () => read99(reader), 3);
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
function read101(reader) {
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
function read102(reader) {
  const data = {};
  if (reader.bool())
    data.struct_751 = read101(reader);
  data.unk2 = reader.bytes(reader.u16(), 7);
  data.unk3 = reader.bytes(reader.u16(), 7);
  data.unk4 = reader.u8();
  return data;
}

// src/packets/generated/structures/Struct_666.ts
function read103(reader) {
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
    data.struct_792 = read102(reader);
  data.struct_495 = reader.bytes(reader.u16(), 3, 7);
  data.unk20 = reader.u32();
  return data;
}

// src/packets/generated/structures/BossKillData.ts
function read104(reader) {
  const data = {};
  data.isDead = reader.bool();
  data.npcId = reader.u32();
  return data;
}

// src/packets/generated/structures/Struct_612.ts
function read105(reader) {
  const data = {};
  data.unk0 = reader.u8();
  data.bossKillDataList = reader.array(reader.u16(), () => read104(reader), 3);
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
function read106(reader) {
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
function read107(reader) {
  const data = {};
  const unk0 = reader.u8();
  if (unk0 === 1)
    data.struct_667 = read100(reader);
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
    data.struct_666 = read103(reader);
  if (unk0 === 6)
    data.struct_612 = read105(reader);
  if (unk0 === 7)
    data.unk7_0 = reader.bytes(9);
  if (unk0 === 8)
    data.struct_659 = read106(reader);
  if (unk0 === 9)
    data.unk9_0 = reader.u8();
  return data;
}

// src/packets/generated/structures/ItemData.ts
function read108(reader) {
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
    data.expireTime = read12(reader);
    data.lockUpdateTime = read12(reader);
    if (reader.bool())
      data.unk1_10_0 = reader.bytes(9);
    data.unk1_11 = reader.u8();
    data.unk1_12 = reader.u8();
    data.unk1_13 = reader.u32();
    data.struct_567 = read107(reader);
    data.unk1_15 = reader.u32();
  }
  return data;
}

// src/packets/generated/definitions/PKTInitItem.ts
function read109(buf) {
  const reader = new Read(buf);
  const data = {};
  data.itemDataList = reader.array(reader.u16(), () => read108(reader), 80);
  data.storageType = reader.u8();
  return data;
}
var name70 = "PKTInitItem";
var opcode15 = 31937;

// src/packets/generated/structures/Struct_756.ts
function read110(reader) {
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
function read111(buf) {
  const reader = new Read(buf);
  const data = {};
  data.unk0 = reader.u8();
  data.struct_226 = reader.bytes(reader.u16(), 3, 17);
  data.unk2 = reader.u64();
  data.struct_422 = reader.array(reader.u16(), () => read110(reader), 300);
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const t = {};
      t.statType = reader.u8();
      t.value = read14(reader);
      return t;
    },
    153
  );
  data.unk5 = reader.u32();
  data.unk6 = reader.u8();
  data.statusEffectDatas = reader.array(reader.u16(), () => read95(reader), 80);
  data.unk8 = reader.u64();
  data.struct_137 = reader.bytes(reader.u16(), 353, 48);
  data.addonFeatureIdList = reader.bytes(reader.u16(), 200, 4);
  data.unk11 = reader.u8();
  if (reader.bool())
    data.unk13_0 = reader.u32();
  data.abilityDataList = reader.array(reader.u16(), () => read80(reader), 100);
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
var name71 = "PKTInitLocal";
var opcode16 = 12070;

// src/packets/generated/definitions/PKTMigrationExecute.ts
function read112(buf) {
  const reader = new Read(buf);
  const data = {};
  data.account_CharacterId1 = reader.u64();
  data.serverAddr = reader.string(256);
  data.account_CharacterId2 = reader.u64();
  data.unk3 = reader.u32();
  return data;
}
var name72 = "PKTMigrationExecute";
var opcode17 = 44024;

// src/packets/generated/structures/Struct_735.ts
function read113(reader) {
  const data = {};
  data.equipItemDataList = reader.array(reader.u16(), () => read89(reader), 33);
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

// src/packets/generated/structures/NpcData.ts
function read114(reader) {
  const data = {};
  data.statusEffectDatas = reader.array(reader.u16(), () => read95(reader), 80);
  if (reader.bool())
    data.unk2_0 = reader.u8();
  if (reader.bool())
    data.balanceLevel = reader.u16();
  data.periodUpdateStatDataList = reader.array(reader.u16(), () => read96(reader), 5);
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
  data.directionYaw = read19(reader);
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
  data.position = read18(reader);
  data.spawnIndex = reader.u32();
  if (reader.bool())
    data.unk41_0 = reader.u8();
  if (reader.bool())
    data.struct_735 = read113(reader);
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
      F.value = read14(reader);
      return F;
    },
    153
  );
  data.level = reader.u16();
  return data;
}

// src/packets/generated/definitions/PKTNewNpc.ts
function read115(buf) {
  const reader = new Read(buf);
  const data = {};
  data.unk0 = reader.u8();
  if (reader.bool()) {
    data.unk1_0 = reader.string(20);
    data.unk1_1 = reader.string(20);
  }
  data.npcStruct = read114(reader);
  if (reader.bool())
    data.unk4_0 = reader.u8();
  if (reader.bool())
    data.unk6_0 = reader.u64();
  return data;
}
var name73 = "PKTNewNpc";
var opcode18 = 17051;

// src/packets/generated/definitions/PKTNewNpcSummon.ts
function read116(buf) {
  const reader = new Read(buf);
  const data = {};
  data.npcData = read114(reader);
  reader.skip(12);
  data.ownerId = reader.u64();
  reader.skip(23);
  data.publishReason = reader.u8();
  return data;
}
var name74 = "PKTNewNpcSummon";
var opcode19 = 9395;

// src/packets/generated/structures/TrackMoveInfo.ts
function read117(reader) {
  const data = {};
  data.unk0 = reader.u32();
  if (reader.bool())
    data.unk2_0 = reader.bytes(12);
  data.unk3 = reader.u32();
  data.unk4 = reader.bytes(12);
  return data;
}

// src/packets/generated/structures/PCStruct.ts
function read118(reader) {
  const data = {};
  if (reader.bool())
    data.grabbedData = reader.bytes(12);
  data.guildName = reader.string(20);
  data.characterId = reader.u64();
  data.avatarHide = reader.u8();
  data.position = read18(reader);
  data.unk7_m = reader.u32();
  data.level = reader.u16();
  data.unk4_m = reader.u32();
  data.heading = read19(reader);
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
  data.equipLifeToolDataList = reader.array(reader.u16(), () => read89(reader), 9);
  data.unk15 = reader.u64();
  data.name = reader.string(20);
  data.addonFeatureIdList = reader.bytes(reader.u16(), 200, 4);
  data.statusEffectDatas = reader.array(reader.u16(), () => read95(reader), 80);
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const M = {};
      M.statType = reader.u8();
      M.value = read14(reader);
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
  data.periodUpdateStatDataList = reader.array(reader.u16(), () => read96(reader), 5);
  data.unk31 = reader.u8();
  data.unk2_m = reader.u8();
  data.unk33 = reader.u32();
  data.unk17_m = reader.u8();
  data.equipItemDataList = reader.array(reader.u16(), () => read89(reader), 33);
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
function read119(buf) {
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
    data.trackMoveInfo = read117(reader);
  if (reader.bool())
    data.unk3_0_m = reader.u32();
  data.unk2_m = reader.u8();
  data.pcStruct = read118(reader);
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
var name75 = "PKTNewPC";
var opcode20 = 7231;

// src/packets/generated/structures/ProjectileInfo.ts
function read120(reader) {
  const data = {};
  data.unk0 = reader.u32();
  data.tripodLevel = read27(reader);
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
  data.tripodIndex = read26(reader);
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
function read121(buf) {
  const reader = new Read(buf);
  const data = {};
  data.projectileInfo = read120(reader);
  return data;
}
var name76 = "PKTNewProjectile";
var opcode21 = 1647;

// src/packets/generated/structures/TrapData.ts
function read122(reader) {
  const data = {};
  data.ownerId = reader.u64();
  data.skillId = reader.u32();
  data.position = read18(reader);
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
function read123(buf) {
  const reader = new Read(buf);
  const data = {};
  data.unk0 = reader.u8();
  data.trapData = read122(reader);
  data.unk2 = reader.u8();
  return data;
}
var name77 = "PKTNewTrap";
var opcode22 = 10128;

// src/packets/generated/definitions/PKTParalyzationStateNotify.ts
function read124(buf) {
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
var name78 = "PKTParalyzationStateNotify";
var opcode23 = 2363;

// src/packets/generated/structures/PartyMemberData.ts
function read125(reader) {
  const data = {};
  data.unk0 = reader.u8();
  data.zoneInstId = reader.u64();
  data.name = reader.string(20);
  data.characterLevel = reader.u16();
  data.maxHp = read14(reader);
  data.gearLevel = reader.f32();
  data.characterId = reader.u64();
  data.position = read18(reader);
  data.auths = reader.u8();
  data.unk9 = reader.u8();
  data.curHp = read14(reader);
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
function read126(buf) {
  const reader = new Read(buf);
  const data = {};
  data.partyInstanceId = reader.u32();
  data.raidInstanceId = reader.u32();
  data.partyLootType = reader.u8();
  data.lootGrade = reader.u32();
  data.partyType = reader.u8();
  data.memberDatas = reader.array(reader.u16(), () => read125(reader), 40);
  return data;
}
var name79 = "PKTPartyInfo";
var opcode24 = 941;

// src/packets/generated/definitions/PKTPartyLeaveResult.ts
function read127(buf) {
  const reader = new Read(buf);
  const data = {};
  data.partyInstanceId = reader.u32();
  data.partyLeaveType = reader.u8();
  data.name = reader.string(20);
  return data;
}
var name80 = "PKTPartyLeaveResult";
var opcode25 = 28645;

// src/packets/generated/definitions/PKTPartyPassiveStatusEffectAddNotify.ts
function read128(buf) {
  const reader = new Read(buf);
  const data = {};
  data.unk0_m = reader.u8();
  data.objectId = reader.u64();
  data.passiveStatusEffectList = reader.array(reader.u16(), () => reader.u32(), 10);
  return data;
}
var name81 = "PKTPartyPassiveStatusEffectAddNotify";
var opcode26 = 44618;

// src/packets/generated/definitions/PKTPartyPassiveStatusEffectRemoveNotify.ts
function read129(buf) {
  const reader = new Read(buf);
  const data = {};
  data.objectId = reader.u64();
  data.passiveStatusEffectList = reader.array(reader.u16(), () => reader.u32(), 10);
  return data;
}
var name82 = "PKTPartyPassiveStatusEffectRemoveNotify";
var opcode27 = 21010;

// src/packets/generated/definitions/PKTPartyStatusEffectAddNotify.ts
function read130(buf) {
  const reader = new Read(buf);
  const data = {};
  data.unk0 = reader.u64();
  data.characterId = reader.u64();
  data.playerIdOnRefresh = reader.u64();
  data.unk3 = reader.u8();
  data.statusEffectDatas = reader.array(reader.u16(), () => read95(reader), 80);
  return data;
}
var name83 = "PKTPartyStatusEffectAddNotify";
var opcode28 = 29227;

// src/packets/generated/definitions/PKTPartyStatusEffectRemoveNotify.ts
function read131(buf) {
  const reader = new Read(buf);
  const data = {};
  data.characterId = reader.u64();
  data.statusEffectIds = reader.array(reader.u16(), () => reader.u32(), 80);
  data.reason = reader.u8();
  data.unk3 = reader.u64();
  return data;
}
var name84 = "PKTPartyStatusEffectRemoveNotify";
var opcode29 = 52833;

// src/packets/generated/definitions/PKTPartyStatusEffectResultNotify.ts
function read132(buf) {
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
var name85 = "PKTPartyStatusEffectResultNotify";
var opcode30 = 58067;

// src/packets/generated/definitions/PKTPassiveStatusEffectAddNotify.ts
function read133(buf) {
  const reader = new Read(buf);
  const data = {};
  data.passiveStatusEffectList = reader.array(reader.u16(), () => reader.u32(), 10);
  return data;
}
var name86 = "PKTPassiveStatusEffectAddNotify";
var opcode31 = 50673;

// src/packets/generated/definitions/PKTPassiveStatusEffectRemoveNotify.ts
function read134(buf) {
  const reader = new Read(buf);
  const data = {};
  data.passiveStatusEffectList = reader.array(reader.u16(), () => reader.u32(), 10);
  return data;
}
var name87 = "PKTPassiveStatusEffectRemoveNotify";
var opcode32 = 5480;

// src/packets/generated/definitions/PKTRaidBegin.ts
function read135(buf) {
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
  data.bossKillDataList = reader.array(reader.u16(), () => read104(reader), 3);
  data.braveHeartCount = reader.u8();
  data.raidId = reader.u32();
  data.endTick = reader.u64();
  return data;
}
var name88 = "PKTRaidBegin";
var opcode33 = 26077;

// src/packets/generated/definitions/PKTRaidBossKillNotify.ts
function read136(buf) {
  const reader = new Read(buf);
  const data = {};
  reader.skip(1);
  data.typeId = reader.u32();
  reader.skip(2);
  return data;
}
var name89 = "PKTRaidBossKillNotify";
var opcode34 = 33189;

// src/packets/generated/definitions/PKTRaidResult.ts
function read137(buf) {
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
      Y.unk1_0_0 = read14(reader);
      Y.unk1_0_1 = read14(reader);
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
var name90 = "PKTRaidResult";
var opcode35 = 29676;

// src/packets/generated/structures/UnpublishObject.ts
function read138(reader) {
  const data = {};
  data.objectId = reader.u64();
  data.unpublishReason = reader.u8();
  return data;
}

// src/packets/generated/definitions/PKTRemoveObject.ts
function read139(buf) {
  const reader = new Read(buf);
  const data = {};
  data.unpublishedObjects = reader.array(reader.u16(), () => read138(reader), 200);
  return data;
}
var name91 = "PKTRemoveObject";
var opcode36 = 36542;

// src/packets/generated/definitions/PKTSkillCancelNotify.ts
function read140(buf) {
  const reader = new Read(buf);
  const data = {};
  reader.skip(1);
  data.skillId = reader.u32();
  data.newDirectionYaw = read19(reader);
  data.cancelReason = reader.u8();
  data.caster = reader.u64();
  reader.skip(1);
  data.newPosition = read18(reader);
  return data;
}
var name92 = "PKTSkillCancelNotify";
var opcode37 = 54544;

// src/packets/generated/definitions/PKTSkillCastNotify.ts
function read141(buf) {
  const reader = new Read(buf);
  const data = {};
  reader.skip(1);
  data.skillId = reader.u32();
  reader.skip(2);
  data.caster = reader.u64();
  data.skillLevel = reader.u8();
  return data;
}
var name93 = "PKTSkillCastNotify";
var opcode38 = 30918;

// src/packets/generated/structures/SkillDamageEvent.ts
function read142(reader) {
  const data = {};
  data.unk3_m = reader.u16();
  data.damageType = reader.u8();
  data.maxHp = read14(reader);
  data.modifier = reader.u8();
  if (reader.bool())
    data.damageAttr = reader.u8();
  data.curHp = read14(reader);
  data.damage = read14(reader);
  data.targetId = reader.u64();
  return data;
}

// src/packets/generated/structures/SkillDamageAbnormalMoveEvent.ts
function read143(reader) {
  const data = {};
  data.skillMoveOptionData = read45(reader);
  data.unk8_m = reader.u16();
  data.position = read18(reader);
  data.unk4_m = reader.u16();
  data.unk1_m = reader.u8();
  data.unk3_m = reader.u16();
  data.destination = read18(reader);
  data.skillDamageEvent = read142(reader);
  data.unk2_m = reader.u64();
  return data;
}

// src/packets/generated/definitions/PKTSkillDamageAbnormalMoveNotify.ts
function read144(buf) {
  const reader = new Read(buf);
  const data = {};
  data.unk2_m = reader.u32();
  data.unk1_m = reader.u8();
  data.skillDamageAbnormalMoveEvents = reader.array(reader.u16(), () => read143(reader), 50);
  data.sourceId = reader.u64();
  data.skillEffectId = reader.u32();
  data.skillId = reader.u32();
  return data;
}
var name94 = "PKTSkillDamageAbnormalMoveNotify";
var opcode39 = 24311;

// src/packets/generated/definitions/PKTSkillDamageNotify.ts
function read145(buf) {
  const reader = new Read(buf);
  const data = {};
  if (reader.bool())
    data.unk1_0 = reader.u32();
  if (reader.bool())
    data.skillEffectId = reader.u32();
  data.sourceId = reader.u64();
  data.skillLevel = reader.u8();
  data.skillId = reader.u32();
  data.skillDamageEvents = reader.array(reader.u16(), () => read142(reader), 50);
  return data;
}
var name95 = "PKTSkillDamageNotify";
var opcode40 = 28204;

// src/packets/generated/definitions/PKTSkillStageNotify.ts
function read146(buf) {
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
var name96 = "PKTSkillStageNotify";
var opcode41 = 18388;

// src/packets/generated/definitions/PKTSkillStartNotify.ts
function read147(buf) {
  const reader = new Read(buf);
  const data = {};
  if (reader.bool())
    data.pitchRotation = read19(reader);
  data.newDirectionYaw = read19(reader);
  data.curPosition = read18(reader);
  data.sourceId = reader.u64();
  if (reader.bool())
    data.unk1_m = reader.u32();
  data.curDirectionYaw = read19(reader);
  data.skillId = reader.u32();
  data.skillLevel = reader.u8();
  data.skillOptionData = read51(reader);
  data.aimTargetPosition = read18(reader);
  data.newPosition = read18(reader);
  if (reader.bool())
    data.aiStateId = reader.u32();
  return data;
}
var name97 = "PKTSkillStartNotify";
var opcode42 = 12220;

// src/packets/generated/definitions/PKTStatChangeOriginNotify.ts
function read148(buf) {
  const reader = new Read(buf);
  const data = {};
  data.objectId = reader.u64();
  data.unk1 = reader.array(
    reader.u16(),
    () => {
      const a = {};
      a.statType = reader.u8();
      a.value = read14(reader);
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
      b.value = read14(reader);
      return b;
    },
    153
  );
  if (reader.bool())
    data.unk5_0 = reader.u32();
  return data;
}
var name98 = "PKTStatChangeOriginNotify";
var opcode43 = 26564;

// src/packets/generated/definitions/PKTStatusEffectAddNotify.ts
function read149(buf) {
  const reader = new Read(buf);
  const data = {};
  data.objectId = reader.u64();
  data.unk1 = reader.u64();
  if (reader.bool())
    data.unk3_0 = reader.u64();
  data.new = reader.bool();
  data.statusEffectData = read95(reader);
  return data;
}
var name99 = "PKTStatusEffectAddNotify";
var opcode44 = 50563;

// src/packets/generated/definitions/PKTStatusEffectRemoveNotify.ts
function read150(buf) {
  const reader = new Read(buf);
  const data = {};
  data.reason = reader.u8();
  data.objectId = reader.u64();
  data.statusEffectIds = reader.array(reader.u16(), () => reader.u32(), 80);
  return data;
}
var name100 = "PKTStatusEffectRemoveNotify";
var opcode45 = 39777;

// src/packets/generated/definitions/PKTStatusEffectDurationNotify.ts
function read151(buf) {
  const reader = new Read(buf);
  const data = {};
  data.targetId = reader.u64();
  data.expirationTick = reader.u64();
  reader.skip(1);
  data.effectInstanceId = reader.u32();
  reader.skip(1);
  return data;
}
var name101 = "PKTStatusEffectDurationNotify";
var opcode46 = 50833;

// src/packets/generated/definitions/PKTStatusEffectSyncDataNotify.ts
function read152(buf) {
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
var name102 = "PKTStatusEffectSyncDataNotify";
var opcode47 = 25745;

// src/packets/generated/definitions/PKTTriggerBossBattleStatus.ts
function read153(buf) {
  const reader = new Read(buf);
  const data = {};
  data.unk2_m = reader.bool();
  reader.skip(1);
  data.step = reader.u32();
  data.triggerId = reader.u32();
  return data;
}
var name103 = "PKTTriggerBossBattleStatus";
var opcode48 = 55703;

// src/packets/generated/definitions/PKTTriggerFinishNotify.ts
function read154(buf) {
  const reader = new Read(buf);
  const data = {};
  data.involvedPCs = reader.array(reader.u16(), () => reader.u64(), 40);
  data.triggerId = reader.u32();
  data.unk0_m = reader.u32();
  data.packetResultCode = reader.u32();
  return data;
}
var name104 = "PKTTriggerFinishNotify";
var opcode49 = 33396;

// src/packets/generated/definitions/PKTTriggerStartNotify.ts
function read155(buf) {
  const reader = new Read(buf);
  const data = {};
  data.involvedPCs = reader.array(reader.u16(), () => reader.u64(), 40);
  data.triggerSignalType = reader.u32();
  data.triggerId = reader.u32();
  data.sourceId = reader.u64();
  return data;
}
var name105 = "PKTTriggerStartNotify";
var opcode50 = 40913;

// src/packets/generated/definitions/PKTTroopMemberUpdateMinNotify.ts
function read156(buf) {
  const reader = new Read(buf);
  const data = {};
  data.unk0_m = reader.u32();
  data.position = reader.u64();
  data.maxHp = read14(reader);
  data.curHp = read14(reader);
  data.characterId = reader.u64();
  data.statusEffectDatas = reader.array(reader.u16(), () => read95(reader), 80);
  return data;
}
var name106 = "PKTTroopMemberUpdateMinNotify";
var opcode51 = 16583;

// src/packets/generated/definitions/PKTIdentityGaugeChangeNotify.ts
function read157(buf) {
  const reader = new Read(buf);
  const data = {};
  reader.skip(2);
  data.identityGauge1 = reader.u32();
  data.identityGauge2 = reader.u32();
  data.identityGauge3 = reader.u32();
  data.playerId = reader.u64();
  return data;
}
var name107 = "PKTIdentityGaugeChangeNotify";
var opcode52 = 1029;

// src/packets/generated/definitions/PKTZoneMemberLoadStatusNotify.ts
function read158(buf) {
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
var name108 = "PKTZoneMemberLoadStatusNotify";
var opcode53 = 25608;

// src/packets/generated/definitions/PKTZoneObjectUnpublishNotify.ts
function read159(buf) {
  const reader = new Read(buf);
  const data = {};
  data.objectId = reader.u64();
  reader.skip(3);
  return data;
}
var name109 = "PKTZoneObjectUnpublishNotify";
var opcode54 = 51409;

// src/packets/generated/structures/ZoneStatusEffectData.ts
function read160(reader) {
  const data = {};
  data.target = reader.u8();
  reader.skip(4);
  data.instanceId = reader.u32();
  data.id = reader.u32();
  data.stackCount = reader.u8();
  return data;
}

// src/packets/generated/definitions/PKTZoneStatusEffectAddNotify.ts
function read161(buf) {
  const reader = new Read(buf);
  const data = {};
  data.zoneStatusEffectDataList = reader.array(reader.u16(), () => read160(reader), 4);
  return data;
}
var name110 = "PKTZoneStatusEffectAddNotify";
var opcode55 = 16635;

// src/packets/generated/definitions/PKTZoneStatusEffectRemoveNotify.ts
function read162(buf) {
  const reader = new Read(buf);
  const data = {};
  data.statusEffectId = reader.u32();
  reader.skip(2);
  return data;
}
var name111 = "PKTZoneStatusEffectRemoveNotify";
var opcode56 = 43975;

// src/packets/generated/mapping.ts
var mapping = /* @__PURE__ */ new Map([
  [opcode, [name56, read79]],
  [opcode2, [name57, read81]],
  [opcode3, [name58, read83]],
  [
    opcode4,
    [name59, read84]
  ],
  [opcode5, [name60, read85]],
  [opcode6, [name61, read86]],
  [opcode7, [name62, read87]],
  [opcode8, [name63, read88]],
  [opcode9, [name64, read90]],
  [opcode10, [name65, read91]],
  [opcode11, [name66, read92]],
  [opcode12, [name67, read93]],
  [opcode13, [name68, read94]],
  [opcode14, [name69, read97]],
  [opcode15, [name70, read109]],
  [opcode16, [name71, read111]],
  [opcode17, [name72, read112]],
  [opcode18, [name73, read115]],
  [opcode19, [name74, read116]],
  [opcode20, [name75, read119]],
  [opcode21, [name76, read121]],
  [opcode22, [name77, read123]],
  [opcode23, [name78, read124]],
  [opcode24, [name79, read126]],
  [opcode25, [name80, read127]],
  [
    opcode26,
    [name81, read128]
  ],
  [
    opcode27,
    [name82, read129]
  ],
  [opcode28, [name83, read130]],
  [
    opcode29,
    [name84, read131]
  ],
  [
    opcode30,
    [name85, read132]
  ],
  [
    opcode31,
    [name86, read133]
  ],
  [
    opcode32,
    [name87, read134]
  ],
  [opcode33, [name88, read135]],
  [opcode34, [name89, read136]],
  [opcode35, [name90, read137]],
  [opcode36, [name91, read139]],
  [opcode37, [name92, read140]],
  [opcode38, [name93, read141]],
  [
    opcode39,
    [name94, read144]
  ],
  [opcode40, [name95, read145]],
  [opcode41, [name96, read146]],
  [opcode42, [name97, read147]],
  [opcode43, [name98, read148]],
  [opcode44, [name99, read149]],
  [opcode45, [name100, read150]],
  [opcode46, [name101, read151]],
  [opcode47, [name102, read152]],
  [opcode48, [name103, read153]],
  [opcode49, [name104, read154]],
  [opcode50, [name105, read155]],
  [opcode51, [name106, read156]],
  [opcode52, [name107, read157]],
  [opcode53, [name108, read158]],
  [opcode54, [name109, read159]],
  [opcode55, [name110, read161]],
  [
    opcode56,
    [name111, read162]
  ]
]);

// src/packets/log/codeMapping.ts
var codeMapping = /* @__PURE__ */ new Map([
  [opcode, [101 /* SkillCooldownNotify */]],
  [opcode2, [0 /* AbilityChangeNotify */]],
  [opcode3, [1 /* ActiveAbilityNotify */]],
  [opcode4, [2 /* AddonSkillFeatureChangeNotify */]],
  [opcode6, [4 /* BlockSkillStateNotify */]],
  [opcode7, [5 /* CounterAttackNotify */]],
  [opcode8, [6 /* DeathNotify */]],
  [opcode12, [7 /* InitAbility */]],
  [opcode13, [8 /* InitEnv */]],
  [opcode14, [9 /* InitPC */]],
  [opcode16, [10 /* InitLocal */]],
  [opcode17, [11 /* MigrationExecute */]],
  [opcode18, [12 /* NewNpc */]],
  [opcode19, [13 /* NewNpcSummon */]],
  [opcode20, [14 /* NewPC */]],
  [opcode21, [15 /* NewProjectile */]],
  [opcode23, [16 /* ParalyzationStateNotify */]],
  [opcode24, [17 /* PartyInfo */]],
  [opcode25, [18 /* PartyLeaveResult */]],
  [opcode26, [19 /* PartyPassiveStatusEffectAddNotify */]],
  [opcode27, [20 /* PartyPassiveStatusEffectRemoveNotify */]],
  [opcode28, [21 /* PartyStatusEffectAddNotify */]],
  [opcode29, [22 /* PartyStatusEffectRemoveNotify */]],
  [opcode30, [23 /* PartyStatusEffectResultNotify */]],
  [opcode31, [24 /* PassiveStatusEffectAddNotify */]],
  [opcode32, [25 /* PassiveStatusEffectRemoveNotify */]],
  [opcode34, [26 /* RaidBossKillNotify */]],
  [opcode35, [27 /* RaidResult */]],
  [opcode36, [28 /* RemoveObject */]],
  [opcode39, [29 /* SkillDamageAbnormalMoveNotify */]],
  [opcode40, [30 /* SkillDamageNotify */]],
  [opcode41, [31 /* SkillStageNotify */]],
  [opcode42, [32 /* SkillStartNotify */]],
  [opcode44, [34 /* StatusEffectAddNotify */]],
  [opcode45, [35 /* StatusEffectRemoveNotify */]],
  [opcode46, [36 /* StatusEffectDurationNotify */]],
  [opcode47, [37 /* StatusEffectSyncDataNotify */]],
  [opcode48, [38 /* TriggerBossBattleStatus */]],
  [opcode49, [39 /* TriggerFinishNotify */]],
  [opcode50, [40 /* TriggerStartNotify */]],
  [opcode51, [41 /* TroopMemberUpdateMinNotify */]],
  [opcode52, [42 /* IdentityGaugeChangeNotify */]],
  [opcode54, [43 /* ZoneObjectUnpublishNotify */]],
  [opcode55, [44 /* ZoneStatusEffectAddNotify */]],
  [opcode56, [45 /* ZoneStatusEffectRemoveNotify */]],
  [opcode38, [46 /* SkillCastNotify */]],
  [opcode11, [47 /* IdentityStanceChangeNotify */]],
  [opcode9, [48 /* EquipChangeNotify */]],
  [opcode10, [49 /* EquipLifeToolChangeNotify */]],
  [opcode15, [50 /* InitItem */]],
  [opcode33, [52 /* RaidBegin */]],
  [opcode53, [51 /* ZoneMemberLoadStatusNotify */]],
  [opcode22, [53 /* NewTrap */]],
  [opcode37, [54 /* SkillCancelNotify */]]
]);

// src/pkt-stream.ts
var import_tiny_typed_emitter3 = require("tiny-typed-emitter");
var PKT = class {
  #data;
  #opcode;
  #compression;
  #xor;
  #decompressor;
  #read;
  constructor(data, opcode57, compression, xor, decompressor, read163) {
    this.#data = data;
    this.#opcode = opcode57;
    this.#compression = compression;
    this.#xor = xor;
    this.#decompressor = decompressor;
    this.#read = read163;
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

// src/logger/logger.ts
var import_fs = require("fs");

// src/packets/log/version.ts
var version = 5;

// src/logger/logger.ts
var fs = __toESM(require("fs"));
var Logger = class extends import_tiny_typed_emitter4.TypedEmitter {
  //Only common behaviour is the emitted logStreamEvent
};
var LiveLogger = class extends Logger {
  #decompressor;
  #logWriter;
  constructor(stream, decompressor, filepath) {
    super();
    this.#decompressor = decompressor;
    if (filepath) {
      this.#logWriter = (0, import_fs.createWriteStream)(filepath, { highWaterMark: 0 });
    }
    const versionBuffer = Buffer.allocUnsafe(HEADER_VERSION_SIZE);
    versionBuffer.writeUIntLE(version, 0, HEADER_VERSION_SIZE);
    this.#logWriter?.write(versionBuffer);
    stream.on("*", this.handlePkt.bind(this));
  }
  handlePkt(data, opcode57, compression, xor) {
    try {
      const pktMap = mapping.get(opcode57);
      const codeMap = codeMapping.get(opcode57);
      if (pktMap && codeMap) {
        const [logId2] = codeMap;
        const [pktName, readPkt] = pktMap;
        const logMap = logMapping.get(logId2);
        if (logMap) {
          const [logName, readLog, writeLog] = logMap;
          const pkt = new PKT(Buffer.from(data), opcode57, compression, Boolean(xor), this.#decompressor, readPkt);
          const parsed = pkt.parsed;
          if (!parsed)
            return;
          const logEvent = new LogEvent(parsed, logId2, writeLog);
          this.emit(logName, logEvent);
          this.emit("*", logName, logEvent);
          this.appendLog(logEvent);
        }
      } else if (opcode57 === 32806) {
        const buf = this.#decompressor.decrypt(Buffer.from(data), opcode57, compression, Boolean(xor));
        fs.writeFileSync(`opcodes/${(/* @__PURE__ */ new Date()).getTime()}-${opcode57}.bin`, buf);
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
  add(raidInstanceId, partyId, characterId = void 0, entityId = void 0, name112 = void 0) {
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
    if (name112 && characterId)
      this.characterNameToCharacterId.set(name112, characterId);
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
  setOwnName(name112) {
    this.ownName = name112;
  }
  remove(partyInstanceId, name112) {
    if (name112 === this.ownName) {
      this.removePartyMappings(partyInstanceId);
      return;
    }
    const chracterId = this.characterNameToCharacterId.get(name112);
    this.characterNameToCharacterId.delete(name112);
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
        for (const [name112, charId] of this.characterNameToCharacterId) {
          if (characterId === charId) {
            this.characterNameToCharacterId.delete(name112);
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
var Parser = class extends import_tiny_typed_emitter5.TypedEmitter {
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
            write17
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Parser
});
