export enum addontype {
  none = 0,
  slot = 1,
  stat = 2,
  ability_point = 3,
  combat_effect = 4,
  skill_damage = 5,
  skill_critical_ratio = 6,
  skill_critical_damage = 7,
  skill_penetration = 8,
  npc_grade_less_damage = 9,
  npc_grade_less_critical_ratio = 10,
  npc_grade_less_critical_damage = 11,
  npc_grade_less_penetration = 12,
  npc_grade_greater_damage = 13,
  npc_grade_greater_critical_ratio = 14,
  npc_grade_greater_critical_damage = 15,
  npc_grade_greater_penetration = 16,
  npc_species_damage = 17,
  npc_species_critical_ratio = 18,
  npc_species_critical_damage = 19,
  npc_species_penetration = 20,
  npc_attr_damage = 21,
  npc_attr_critical_ratio = 22,
  npc_attr_critical_damage = 23,
  npc_attr_penetration = 24,
  mana_reduction = 25,
  skill_mana_reduction = 26,
  skill_cooldown_reduction = 27,
  ability_feature = 28,
  class_option = 29,
  ability_point_passive = 30,
  instrument = 31,
  skill_feature = 32,
  npc_adaptation = 33,
  skill_group_damage = 34,
  skill_group_cooldown_reduction = 35,
  skill_level = 36,
  skill_feature_level = 37,
  life_casting_speed = 38,
  life_casting_tier = 39,
  life_bonus_type_success = 40,
  life_bonus_type_extra = 41,
  life_bonus_type_skill_bonus = 42,
  life_bonus_type_minigame_perfect = 43,
  life_durability_bonus = 44,
  life_mini_game_difficulty = 45,
  combat_effect_cooldown_reduction = 46,
  skill_damage_addend = 47,
  awakening_usable_count_addend = 48,
  battle_item_heal = 49,
  party_heal = 50,
  party_shield = 51,
  identity_gauge = 52,
  attack_power_amplify_addend = 53,
  attack_power_amplify_multiplier = 54,
  not_in_party_damage = 55,
  skill_effect_group_set_damage = 56,
}
export enum blockskilltype {
  success = 0,
  fail = 1,
  inprogress = 2,
  start = 3,
}
export enum buffshowprioritycategory {
  pet = 0,
  classskill = 1,
  ability = 2,
  set = 3,
  cook = 4,
  identity = 5,
  bracelet = 6,
  battleitem = 7,
  etc = 8,
}
export enum combateffectactiontype {
  none = 0,
  modify_damage = 1,
  modify_final_damage = 2,
  modify_critical_ratio = 3,
  modify_critical_multiplier = 4,
  modify_penetration = 5,
  modify_penetration_when_critical = 6,
  exec_active_effect_when_damage = 7,
  exec_active_effect_when_critical = 8,
  exec_reactive_effect_when_miss = 9,
  exec_reactive_effect_when_damage = 10,
  exec_reactive_effect_when_critical = 11,
  exec_after_effect = 12,
  exec_after_skill = 13,
  apply_heal = 14,
  modify_reactive_damage = 15,
  modify_damage_shield_multiplier = 16,
  exec_active_effect_when_kill = 17,
  exec_start_skill = 18,
  modify_penetration_addend = 19,
  modify_penetration_addend_when_critical = 20,
  modify_reactive_critical_multiplier = 21,
  modify_damage_when_critical = 22,
  modify_paralyzation_point = 23,
}
export enum combateffectactortype {
  none = 0,
  self = 1,
  target = 2,
  caster = 3,
}
export enum combateffectconditiontype {
  none = 0,
  current_skill = 1,
  hp_less = 2,
  hp_greater = 3,
  mp_less = 4,
  mp_greater = 5,
  npc_grade_less = 6,
  npc_grade_greater = 7,
  npc_grade_equal = 8,
  npc_species = 9,
  npc_attr = 10,
  abnormal_move = 11,
  abnormal_status = 12,
  abnormal_move_immune = 13,
  abnormal_status_immune = 14,
  abnormal_move_all = 15,
  pc = 16,
  skill_effect_id = 17,
  identity_stack_count = 18,
  status_effect_immunetype = 19,
  abnormal_not_move = 20,
  target_count = 21,
  skill_identity_category = 22,
  identity_element_value = 23,
  directional_attack = 24,
  current_skill_group = 25,
  abnormal_move_status_all = 26,
  identity_stance = 27,
  pc_skill = 28,
  skill_effect_group_set = 29,
  npc_id = 30,
  identity_element_value_less = 31,
  pc_without_me = 32,
  npc_scaled_level_equal = 33,
  npc_scaled_level_less = 34,
  npc_scaled_level_greater = 35,
  not_skill_effect_id = 36,
  abnormal_move_not_immune = 37,
  apply_target_marking = 38,
  damage_attr = 39,
}
export enum damageattr {
  none = 0,
  fire = 1,
  ice = 2,
  electricity = 3,
  wind = 4,
  earth = 5,
  dark = 6,
  holy = 7,
}
export enum damagetype {
  physics = 0,
  magic = 1,
}
export enum equipcategory {
  na = 0,
  weapon = 1,
  armor_helmet = 2,
  armor_top = 3,
  armor_pants = 4,
  armor_glove = 5,
  armor_pauldron = 6,
  accessory_necklace = 7,
  accessory_earring = 8,
  accessory_ring = 9,
  accessory_bracelet = 10,
  assistance_voyge = 11,
  assistance_life = 12,
  assistance_combat = 13,
}
export enum hitflag {
  normal = 0,
  critical = 1,
  miss = 2,
  invincible = 3,
  dot = 4,
  immune = 5,
  immune_silenced = 6,
  font_silenced = 7,
  dot_critical = 8,
  dodge = 9,
  reflect = 10,
  damage_share = 11,
  dodge_hit = 12,
}
export enum hitoption {
  back_attack = 0,
  frontal_attack = 1,
  flank_attack = 2,
}
export enum identitycategory {
  none = 0,
  berserker_normal = 1,
  berserker_rush = 2,
  warlord_normal = 3,
  warlord_shield_of_battlefield = 4,
  destroyer_normal = 5,
  destroyer_focus = 6,
  destroyer_release = 7,
  battle_master_normal = 8,
  battle_master_bubble = 9,
  infighter_normal = 10,
  infighter_vigor = 11,
  infighter_shock = 12,
  forcemaster_normal = 13,
  forcemaster_soul = 14,
  lance_master_normal = 15,
  lance_master_wild = 16,
  lance_master_focus = 17,
  devil_hunter_normal = 18,
  devil_hunter_pistol = 19,
  devil_hunter_shotgun = 20,
  devil_hunter_rifle = 21,
  blaster_normal = 22,
  blaster_cannon = 23,
  hawkeye_normal = 24,
  hawkeye_summon = 25,
  summoner_normal = 26,
  summoner_ancient = 27,
  arcana_normal = 28,
  arcana_stack = 29,
  arcana_ruin = 30,
  arcana_card = 31,
  bard_normal = 32,
  bard_serenade = 33,
  blade_burst = 34,
  holyknight_normal = 35,
  holyknight_holy = 36,
  holyknight_retribution = 37,
  demonic_normal = 38,
  demonic_capture = 39,
  demonic_demon = 40,
  warlord_lance = 41,
  reaper_normal = 42,
  reaper_dagger = 43,
  reaper_shadow = 44,
  reaper_swoop = 45,
  scouter_scout = 46,
  scouter_drone = 47,
  scouter_hyper_sync = 48,
  scouter_fusion = 49,
  blade_normal = 50,
  elemental_master_normal = 51,
  elemental_master_fire = 52,
  elemental_master_electricity = 53,
  elemental_master_ice = 54,
  yinyangshi_normal = 55,
  yinyangshi_yin = 56,
  yinyangshi_yang = 57,
  weather_artist_weapon = 58,
  weather_artist_weather = 59,
  summoner_summon = 60,
}
export enum itemcategory {
  na = 0,
  equip_weapon_sword = 10101,
  equip_weapon_hammer = 10102,
  equip_weapon_gunlance = 10103,
  equip_weapon_bow = 10104,
  equip_weapon_gun = 10105,
  equip_weapon_launcher = 10106,
  equip_weapon_triple_sword = 10107,
  equip_weapon_no_name = 10108,
  equip_weapon_gunblade = 10109,
  equip_weapon_staff1 = 10110,
  equip_weapon_staff2 = 10111,
  equip_weapon_liana_harp = 10112,
  equip_weapon_heavy_gauntlet = 10113,
  equip_weapon_symbol = 10114,
  equip_weapon_element = 10115,
  equip_weapon_tarot_card = 10116,
  equip_weapon_geomungo = 10117,
  equip_weapon_ductile_gauntlet = 10118,
  equip_weapon_sub_machine_gun = 10119,
  equip_weapon_lance = 10120,
  equip_weapon_dual_sword = 10121,
  equip_weapon_demonic_weapon = 10122,
  equip_weapon_holy_sword = 10123,
  equip_weapon_dagger = 10124,
  equip_weapon_gun_female = 10125,
  equip_weapon_element_male = 10126,
  equip_weapon_giant_staff = 10127,
  equip_weapon_pen = 10128,
  equip_weapon_umbrella = 10129,
  equip_weapon_sword_female = 10130,
  equip_weapon_scythe = 10131,
  equip_armor_helmet = 10201,
  equip_armor_top = 10202,
  equip_armor_pants = 10203,
  equip_armor_glove = 10204,
  equip_armor_pauldron = 10205,
  equip_accessory_necklace = 10401,
  equip_accessory_earring = 10402,
  equip_accessory_ring = 10403,
  equip_accessory_bracelet = 10404,
  equip_ability_stone = 10500,
  equip_assistance_voyage = 10601,
  equip_assistance_life = 10602,
  equip_assistance_combat = 10603,
  equip_etc_talisman = 10701,
  life_tool_glove = 20101,
  life_tool_axe = 20102,
  life_tool_pickaxe = 20103,
  life_tool_machete = 20104,
  life_tool_fishingrod = 20105,
  life_tool_shovel = 20106,
  life_tool_marble = 20107,
  life_tool_perfume = 20108,
  life_tool_saw = 20109,
  useup_potion = 30100,
  useup_food = 30200,
  useup_misc = 30300,
  useup_misc_revive_coin = 30301,
  useup_misc_messenger_medal = 30302,
  useup_misc_pheon = 30303,
  useup_battle_item_common = 30401,
  useup_battle_item_dungeon = 30402,
  useup_battle_item_raid = 30403,
  useup_battle_item_common_attack = 30411,
  useup_battle_item_dungeon_attack = 30412,
  useup_battle_item_common_buff = 30421,
  useup_battle_item_dungeon_buff = 30422,
  useup_battle_item_common_function = 30431,
  useup_battle_item_dungeon_function = 30432,
  useup_battle_item_raid_function = 30433,
  useup_battle_item_common_heal = 30441,
  useup_battle_item_dungeon_heal = 30442,
  useup_stash_expander_pc = 30501,
  useup_stash_expander_account = 30502,
  useup_quest_starter = 30600,
  useup_secret_dungeon_map = 30700,
  useup_adv_book_collection = 30801,
  useup_adv_book_food = 30802,
  useup_book_social_action = 30901,
  useup_book_pet_social_action = 30902,
  useup_book_toy = 30903,
  useup_random_box_locked = 31001,
  useup_random_box_unlocked = 31002,
  useup_random_box_unlocked_weapon = 31003,
  useup_random_box_unlocked_armor_helmet = 31004,
  useup_random_box_unlocked_armor_top = 31005,
  useup_random_box_unlocked_armor_pants = 31006,
  useup_random_box_unlocked_armor_glove = 31007,
  useup_random_box_unlocked_armor_pauldron = 31008,
  useup_random_box_unlocked_accessory_necklace = 31009,
  useup_random_box_unlocked_accessory_earring = 31010,
  useup_random_box_unlocked_accessory_ring = 31011,
  useup_random_box_unlocked_equip = 31012,
  useup_random_box_unlocked_armor = 31013,
  useup_random_box_unlocked_accessory = 31014,
  useup_random_box_unlocked_enchant_stat = 31031,
  useup_random_box_unlocked_enchant_attr = 31032,
  useup_random_box_unlocked_enchant_immunity = 31033,
  useup_random_box_unlocked_enchant_species = 31034,
  useup_random_box_unlocked_gem = 31040,
  useup_random_box_unlocked_card = 31041,
  useup_random_box_unlocked_ship_material = 31042,
  useup_random_box_unlocked_avatar = 31051,
  useup_random_box_unlocked_material_enhance = 31060,
  useup_random_box_unlocked_vehicle = 31070,
  useup_random_box_unlocked_pet = 31080,
  useup_random_box_unlocked_abilitystone = 31090,
  useup_init_skill_battle = 31101,
  useup_init_life_na = 31201,
  useup_init_life_herbalism = 31202,
  useup_init_life_lumbering = 31203,
  useup_init_life_mining = 31204,
  useup_init_life_hunting = 31205,
  useup_init_life_fishing = 31206,
  useup_init_life_archaeology = 31207,
  useup_init_life_astrology = 31208,
  useup_init_life_speaking = 31209,
  useup_add_skill_point_battle = 31301,
  useup_add_skill_point_life = 31302,
  useup_equip_preset_expander_normal = 31401,
  useup_equip_preset_expander_premium = 31402,
  useup_hunting_chase_key = 31501,
  useup_hunting_chase_secret_map = 31502,
  useup_skillbook_normal = 31601,
  useup_archeology_parabolic_reflector = 31701,
  useup_archeology_ancient_book = 31702,
  useup_victory_crest_special = 31801,
  useup_add_crew = 31900,
  useup_add_ship = 31901,
  useup_add_sail = 31902,
  useup_add_voyage_luck = 31903,
  useup_add_ship_avatar = 31904,
  useup_add_trophy = 31905,
  useup_add_town_mood = 31906,
  useup_add_town_dress = 31907,
  useup_card = 32000,
  useup_card_exp = 32001,
  useup_toy = 32100,
  useup_character_tendency = 32200,
  useup_honor_title = 32300,
  useup_vehicle = 32400,
  useup_engrave_book = 32500,
  useup_add_permanent_attr = 32600,
  useup_add_permanent_attr_combat_skill = 32601,
  useup_add_permanent_attr_life_skill = 32602,
  useup_add_permanent_attr_stat = 32603,
  useup_add_permanent_attr_stat_con = 32604,
  useup_add_permanent_attr_stat_criticalhit = 32605,
  useup_add_permanent_attr_stat_endurance = 32606,
  useup_add_permanent_attr_stat_mastery = 32607,
  useup_add_permanent_attr_stat_oppression = 32608,
  useup_add_permanent_attr_stat_rapidity = 32609,
  useup_add_permanent_attr_stat_specialty = 32610,
  useup_add_permanent_attr_tendency_char = 32611,
  useup_add_permanent_attr_tendency_courage = 32612,
  useup_add_permanent_attr_tendency_intellect = 32613,
  useup_add_permanent_attr_tendency_kindness = 32614,
  useup_secret_prop_map_normal = 32701,
  useup_secret_prop_map_voyage = 32702,
  useup_add_max_count = 32800,
  useup_add_town_resource = 32900,
  useup_add_pet = 33000,
  useup_add_skill_rune = 33100,
  useup_add_town_placement_prop = 33200,
  useup_add_town_activity_point = 33300,
  useup_add_town_crew = 33400,
  useup_add_raid_rest_gauge = 33500,
  useup_yoz_pot = 33600,
  useup_extend_duration_time = 33700,
  useup_town_chef_packed_meal = 33800,
  useup_add_town_item_assmbly = 33900,
  useup_life_boosting = 34000,
  useup_exp_potion_combat = 34100,
  useup_paid_service_bm = 34201,
  useup_paid_service_event = 34202,
  useup_add_money = 34300,
  useup_add_money_trade_gold_deposit = 34301,
  useup_add_money_jumping_trade_gold_deposit = 34302,
  useup_emoticon = 34400,
  useup_exp_combat_immediately = 34501,
  useup_exp_herbalism_immediately = 34502,
  useup_exp_lumbering_immediately = 34503,
  useup_exp_mining_immediately = 34504,
  useup_exp_hunting_immediately = 34505,
  useup_exp_fishing_immediately = 34506,
  useup_exp_archaeology_immediately = 34507,
  useup_exp_realm_immediately = 34508,
  useup_add_town_jukebox_music = 34600,
  useup_add_selfie_item = 34700,
  useup_etc_talisman = 34801,
  useup_etc_message_npc_spawn = 34802,
  useup_gem_reward = 34900,
  useup_aos_equip = 35000,
  useup_aos_useup = 35100,
  quest_element = 40100,
  quest_pickup = 40200,
  quest_use = 40300,
  quest_note = 40400,
  quest_immediately_finish_daily = 40500,
  install_crystal_ruby = 50101,
  install_crystal_sappahire = 50102,
  install_crystal_emerald = 50103,
  install_crystal_amethyst = 50104,
  install_crystal_topaz = 50105,
  install_crystal_opal = 50106,
  install_avatar_crystal_patch = 50201,
  install_gem = 50300,
  install_elixir = 50400,
  general_ship_supply_normal = 60100,
  general_ship_supply_rare = 60101,
  general_ship_supply_elite = 60102,
  general_lock_pick = 60200,
  general_etc = 60300,
  general_island_hearts = 60400,
  general_giant_hearts = 60401,
  general_great_pictures = 60402,
  general_voyage_adventure = 60403,
  general_worldtree_leaf = 60404,
  general_adventure_medal = 60405,
  general_orpheus_star = 60406,
  general_memory_marble = 60407,
  general_ticket = 60500,
  general_token_item = 60600,
  general_exchange = 60700,
  general_town = 60800,
  general_town_reduce_item_time = 60901,
  general_town_reduce_res_time = 60902,
  general_town_reduce_install_time = 60903,
  general_town_reduce_research_time = 60904,
  general_town_reduce_mission_time = 60905,
  general_town_reduce_all_time = 60906,
  general_town_jumping_ticket = 60908,
  general_raid_license_finish_1 = 61100,
  general_raid_license_finish_2 = 61101,
  general_raid_license_finish_3 = 61102,
  general_raid_license_finish_4 = 61103,
  general_raid_license_finish_5 = 61104,
  general_raid_license_finish_6 = 61105,
  general_raid_license_finish_7 = 61106,
  general_raid_license_finish_8 = 61107,
  general_raid_license_finish_9 = 61108,
  general_raid_license_finish_10 = 61109,
  general_warp_point_slot_expand = 61200,
  general_quest_finish_daily = 61300,
  general_secret_dungeon_map = 61400,
  general_gacha_ticket = 61501,
  general_gacha_mileage = 61502,
  general_ancient_orb_unidentified = 61601,
  general_ancient_orb = 61602,
  general_town_token = 61700,
  general_aos_equip = 61800,
  general_town_jumping_ticket_bern = 62101,
  general_town_jumping_ticket_lohendel = 62102,
  general_town_jumping_ticket_yorn = 62103,
  general_town_jumping_ticket_faton = 62104,
  general_town_jumping_ticket_papunika = 62105,
  general_town_jumping_ticket_bern_b = 62106,
  general_town_jumping_ticket_lowen = 62107,
  general_town_jumping_ticket_ergasia = 62108,
  general_town_jumping_ticket_plecce = 62109,
  general_town_jumping_ticket_voldaik = 62110,
  material_etc = 70100,
  material_life = 70200,
  material_life_archeology = 70201,
  material_life_fishing = 70202,
  material_life_herbalism = 70203,
  material_life_hunting = 70204,
  material_life_lumbering = 70205,
  material_life_mining = 70206,
  material_life_etc = 70207,
  material_assembly = 70300,
  material_token_assembly = 70301,
  material_awakening_skill = 70400,
  material_tendency = 70500,
  material_tendency_deadline = 70501,
  material_tendency_etc = 70502,
  material_enchant_catalyst = 70600,
  material_enchant_scroll_stat = 70701,
  material_enchant_scroll_attr = 70702,
  material_enchant_scroll_species = 70703,
  material_enchant_scroll_immunity = 70704,
  material_enchant_scroll_any = 70705,
  material_enchant_scroll_badge = 70706,
  material_enchant_additive = 70800,
  material_polish_stone = 71000,
  material_polish_bonus_tool = 71001,
  material_polish_core = 71002,
  material_engrave_tool = 71100,
  material_voyage_core = 71200,
  material_voyage_crew = 71201,
  material_voyage_etc = 71202,
  material_voyage_diving = 71203,
  material_voyage_fishing_school = 71204,
  material_voyage_hunting = 71205,
  material_voyage_treasure_point = 71206,
  material_voyage_wrecked_ship = 71207,
  material_card_etc = 71300,
  material_arcrasium = 71400,
  material_adv_book_food = 71500,
  material_raid = 71600,
  material_island = 71700,
  material_island_token = 71701,
  material_enhance_levelup = 71801,
  material_enhance_additive = 71802,
  material_sealing_tool = 71900,
  material_magic_scroll_weapon = 72001,
  material_magic_scroll_armor_top = 72002,
  material_magic_scroll_armor_glove = 72003,
  material_magic_scroll_enhance_material = 72100,
  material_magic_scroll_craft_material = 72200,
  material_upgrade_tool = 72300,
  material_calibrate_tool = 72400,
  material_option_transfer_tool = 72500,
  material_socket_adjust_tool = 72600,
  material_socket_amplify_tool = 72700,
  material_option_extract_tool = 72800,
  material_town_mana = 72900,
  material_avatar_composite = 73000,
  material_town_farm = 73100,
  material_town_herbalism = 73101,
  material_town_mining = 73102,
  material_town_lumbering = 73103,
  material_town_hunting = 73104,
  material_town_fishing = 73105,
  material_town_archeology = 73106,
  material_life_tool = 73200,
  material_town_life_tool = 73300,
  material_esther_enhance = 73400,
  material_exp_potion_pet = 73500,
  material_grow_pet = 73501,
  material_event = 73600,
  material_reward = 73700,
  material_elixir = 73800,
  music_instrument = 80100,
  music_note = 80200,
  avatar_clothes_head = 90101,
  avatar_clothes_top = 90102,
  avatar_clothes_pants = 90103,
  avatar_clothes_face1 = 90104,
  avatar_clothes_face2 = 90105,
  avatar_clothes_instrument = 90106,
  avatar_clothes_dress = 90107,
  avatar_clothes_head_set = 90108,
  avatar_weapon_sword = 90201,
  avatar_weapon_hammer = 90202,
  avatar_weapon_gunlance = 90203,
  avatar_weapon_bow = 90204,
  avatar_weapon_gun = 90205,
  avatar_weapon_launcher = 90206,
  avatar_weapon_triple_sword = 90207,
  avatar_weapon_no_name = 90208,
  avatar_weapon_gunblade = 90209,
  avatar_weapon_staff1 = 90210,
  avatar_weapon_staff2 = 90211,
  avatar_weapon_liana_harp = 90212,
  avatar_weapon_heavy_gauntlet = 90213,
  avatar_weapon_symbol = 90214,
  avatar_weapon_element = 90215,
  avatar_weapon_tarot_card = 90216,
  avatar_weapon_geomungo = 90217,
  avatar_weapon_ductile_gauntlet = 90218,
  avatar_weapon_sub_machine_gun = 90219,
  avatar_weapon_lance = 90220,
  avatar_weapon_dual_sword = 90222,
  avatar_weapon_demonic_weapon = 90223,
  avatar_weapon_holy_sword = 90224,
  avatar_weapon_dagger = 90225,
  avatar_weapon_gun_female = 90226,
  avatar_weapon_element_male = 90227,
  avatar_weapon_giant_staff = 90228,
  avatar_weapon_pen = 90229,
  avatar_weapon_umbrella = 90230,
  avatar_weapon_sword_female = 90231,
  avatar_effect_footstep = 90301,
  astra_equip_will = 100101,
  astra_equip_belief = 100102,
  astra_equip_concentration = 100103,
  astra_equip_desire = 100104,
}
export enum itemstoragetype {
  inven = 0,
  equip = 1,
  stash = 2,
  guild = 3,
  quest = 4,
  mail = 5,
  vehicle_slot = 6,
  volatile_slot = 7,
  life_tool_s1 = 8,
  account_stash = 9,
  scrap_list = 10,
  polish_list = 11,
  market = 12,
  paid_item_list = 13,
  material_stash = 14,
  avatar_stash = 15,
  market_temp = 16,
  astra_equip = 17,
  account_second_stash = 18,
  auction = 19,
  account_equip = 20,
  life_tool = 21,
  town_temp = 22,
  survival_inven = 23,
  gem_equip = 24,
  town_gift = 25,
  aos = 26,
}
export enum npcgrade {
  none = 0,
  underling = 1,
  normal = 2,
  elite = 3,
  named = 4,
  seed = 5,
  boss = 6,
  raid = 7,
  lucky = 8,
  epic_raid = 9,
  commander = 10,
}
export enum npctype {
  monster = 0,
  townsfolk = 1,
  summoned = 2,
  totem = 3,
  mercenary = 4,
  pet = 5,
  monster_pc_form = 6,
}
export enum paramtype {
  absolute = 0,
  relative = 1,
}
export enum playerclass {
  na = 0,
  warrior = 101,
  berserker = 102,
  destroyer = 103,
  warlord = 104,
  holyknight = 105,
  warrior_female = 111,
  berserker_female = 112,
  magician = 201,
  arcana = 202,
  summoner = 203,
  bard = 204,
  elemental_master = 205,
  fighter = 301,
  battle_master = 302,
  infighter = 303,
  force_master = 304,
  lance_master = 305,
  fighter_male = 311,
  battle_master_male = 312,
  delain = 401,
  blade = 402,
  demonic = 403,
  reaper = 404,
  soul_eater = 405,
  hunter = 501,
  hawk_eye = 502,
  devil_hunter = 503,
  blaster = 504,
  scouter = 505,
  hunter_female = 511,
  devil_hunter_female = 512,
  specialist = 601,
  yinyangshi = 602,
  weather_artist = 603,
  alchemist = 604,
}
export enum skillfeaturetype {
  none = 0,
  enable_notify = 1,
  enable_dir_change = 2,
  change_move_dist = 3,
  change_layer = 4,
  change_stage_speed = 5,
  change_stage_collision = 6,
  change_max_target = 7,
  change_area_range = 8,
  change_area_angle = 9,
  change_cost = 10,
  recover_cost = 11,
  recover_used_cost = 12,
  reduce_default_cooldown = 13,
  reduce_active_cooldown = 14,
  enable_stage_buff = 15,
  add_stage_buff = 16,
  change_buff_area_range = 17,
  change_buff_duration = 18,
  change_buff_stat = 19,
  change_buff_stack = 20,
  change_buff_param = 21,
  change_buff_expired_action = 22,
  change_chain_ratio = 23,
  change_abnormal = 24,
  change_abnormal_ratio = 25,
  change_dam_attr = 26,
  change_dam_value = 27,
  change_dam_coefficient = 28,
  change_dam_critical = 29,
  change_dam_critical_rate = 30,
  change_attack_stage_speed = 31,
  change_stack_charge_time = 32,
  change_stack_max_count = 33,
  change_targeting = 34,
  change_min_range = 35,
  change_max_range = 36,
  change_push_info = 37,
  change_parts_attack_attr = 38,
  change_skill_chain_info = 39,
  change_skill_chain_delay = 40,
  change_behit_move_info = 41,
  add_buff_stat = 42,
  add_chain_skill_effect = 43,
  remove_chain_skill_effect = 44,
  add_chain_combat_effect = 45,
  remove_chain_combat_effect = 46,
  change_skill_effect_bonus = 47,
  change_skill_effect_ai_point = 48,
  change_dam_addend = 49,
  change_hitted = 50,
  change_skill_move_speed = 51,
  add_skill_buff = 52,
  change_skill_bonus = 53,
  change_skill_normal_info = 54,
  change_skill_invisibility = 55,
  change_skill_constraint = 56,
  change_skill_book_type = 57,
  change_projection_skill_effect_id = 58,
  change_push_pvp_info = 59,
  change_forced_critical = 60,
  change_instance_skill_effect_info = 61,
  change_skill_start_stage = 62,
  change_skill_effect_dir_target = 63,
  change_stage_dir_rate = 64,
  change_projection = 65,
  change_skill_view = 66,
  change_projectile_speed = 67,
  change_projectile_dist = 68,
  change_projectile_resourcescale = 69,
  change_projectile_max_target_hit_count = 70,
  change_summon_trap_lifetime = 71,
  change_summon_trap_destroy_delaytime = 72,
  change_summon_trap_react_info = 73,
  change_summon_trap_invoke_effect = 74,
  change_summon_trap_count = 75,
  enable_identity_event = 76,
  change_identity_proc_value = 77,
  change_skill_effect_identity_proc_info = 78,
  change_identity_proc_pvp_value = 79,
  change_skill_effect_identity_proc_pvp_info = 80,
  change_skill_effect_identity_proc_replace_info = 81,
  change_skill_effect_identity_proc_replace_pvp_info = 82,
  swap_chain_skill_effect = 83,
  swap_chain_combat_effect = 84,
  change_charge_scale = 85,
  change_summon_npc_id = 86,
  change_summon_npc_sight_range = 87,
  change_summon_npc_pursuit_range = 88,
  change_summon_npc_walk_movespeed = 89,
  change_summon_npc_battle_movespeed = 90,
  change_summon_npc_life_time = 91,
  change_summon_npc_ai_index = 92,
  change_summon_npc_invincible_duration = 93,
  change_summon_npc_acquire_identity = 94,
  change_summon_npc_skill_id = 95,
  change_summon_npc_die_skill_id = 96,
  change_summon_npc_destroy_skill_id = 97,
  change_summon_npc_spawn_buff_id = 98,
  change_summon_npc_count = 99,
  change_summon_npc_stat = 100,
  change_summon_npc_threat_point = 101,
  change_summon_npc_skill_usable_tick = 102,
  change_summon_npc_skill_use_order = 103,
  change_combat_effect_arg = 104,
  change_skill_effect_cost = 105,
  change_accumulate_dam_rate = 106,
  change_projectile_bank_data_addend = 107,
  change_identity_category = 108,
}
export enum stattype {
  none = 0,
  hp = 1,
  mp = 2,
  str = 3,
  agi = 4,
  int = 5,
  con = 6,
  str_x = 7,
  agi_x = 8,
  int_x = 9,
  con_x = 10,
  criticalhit = 15,
  specialty = 16,
  oppression = 17,
  rapidity = 18,
  endurance = 19,
  mastery = 20,
  criticalhit_x = 21,
  specialty_x = 22,
  oppression_x = 23,
  rapidity_x = 24,
  endurance_x = 25,
  mastery_x = 26,
  max_hp = 27,
  max_mp = 28,
  max_hp_x = 29,
  max_mp_x = 30,
  max_hp_x_x = 31,
  max_mp_x_x = 32,
  normal_hp_recovery = 33,
  combat_hp_recovery = 34,
  normal_hp_recovery_rate = 35,
  combat_hp_recovery_rate = 36,
  normal_mp_recovery = 37,
  combat_mp_recovery = 38,
  normal_mp_recovery_rate = 39,
  combat_mp_recovery_rate = 40,
  self_recovery_rate = 41,
  drain_hp_dam_rate = 42,
  drain_mp_dam_rate = 43,
  dam_reflection_rate = 44,
  char_attack_dam = 47,
  skill_effect_dam_addend = 48,
  attack_power_rate = 49,
  skill_damage_rate = 50,
  attack_power_rate_x = 51,
  skill_damage_rate_x = 52,
  cooldown_reduction = 53,
  paralyzation_point_rate = 54,
  def = 55,
  res = 56,
  def_x = 57,
  res_x = 58,
  def_x_x = 59,
  res_x_x = 60,
  def_pen_rate = 67,
  res_pen_rate = 68,
  physical_inc_rate = 69,
  magical_inc_rate = 70,
  self_shield_rate = 71,
  hit_rate = 72,
  dodge_rate = 73,
  critical_hit_rate = 74,
  critical_res_rate = 75,
  critical_dam_rate = 76,
  attack_speed = 77,
  attack_speed_rate = 78,
  move_speed = 79,
  move_speed_rate = 80,
  prop_move_speed = 81,
  prop_move_speed_rate = 82,
  vehicle_move_speed = 83,
  vehicle_move_speed_rate = 84,
  ship_move_speed = 85,
  ship_move_speed_rate = 86,
  fire_dam_rate = 87,
  ice_dam_rate = 88,
  electricity_dam_rate = 89,
  earth_dam_rate = 91,
  dark_dam_rate = 92,
  holy_dam_rate = 93,
  elements_dam_rate = 94,
  fire_res_rate = 95,
  ice_res_rate = 96,
  electricity_res_rate = 97,
  earth_res_rate = 99,
  dark_res_rate = 100,
  holy_res_rate = 101,
  elements_res_rate = 102,
  self_cc_time_rate = 105,
  enemy_cc_time_rate = 106,
  identity_value1 = 107,
  identity_value2 = 108,
  identity_value3 = 109,
  awakening_dam_rate = 110,
  item_drop_rate = 111,
  gold_rate = 112,
  exp_rate = 113,
  attack_power_addend = 123,
  attack_power_addend_2 = 124,
  npc_species_humanoid_dam_rate = 125,
  npc_species_devil_dam_rate = 126,
  npc_species_substance_dam_rate = 127,
  npc_species_undead_dam_rate = 128,
  npc_species_plant_dam_rate = 129,
  npc_species_insect_dam_rate = 130,
  npc_species_spirit_dam_rate = 131,
  npc_species_wild_beast_dam_rate = 132,
  npc_species_mechanic_dam_rate = 133,
  npc_species_ancient_dam_rate = 134,
  npc_species_god_dam_rate = 135,
  npc_species_archfiend_dam_rate = 136,
  vitality = 137,
  ship_booter_speed = 138,
  ship_wreck_speed_rate = 139,
  island_speed_rate = 140,
  attack_power_sub_rate_1 = 141,
  attack_power_sub_rate_2 = 142,
  physical_inc_sub_rate_1 = 143,
  physical_inc_sub_rate_2 = 144,
  magical_inc_sub_rate_1 = 145,
  magical_inc_sub_rate_2 = 146,
  skill_damage_sub_rate_1 = 147,
  skill_damage_sub_rate_2 = 148,
  resource_recovery_rate = 149,
  weapon_dam = 151,
}
export enum statuseffecttargettooltiptype {
  none = 0,
  self = 1,
  party = 2,
  self_party = 3,
}
export enum statuseffectcategory {
  buff = 0,
  debuff = 1,
}
export enum statuseffectexpiredreasontype {
  none = 0,
  cancel = 1,
  stack_count = 2,
  lifetime = 3,
  beattacked = 4,
  leave_zone = 5,
  keep_zone = 6,
  death = 7,
  attack_count = 8,
  behit_count = 9,
  unsummon = 10,
  skill_used = 11,
  cinematic = 12,
  paralyzation = 13,
  port_leave = 14,
  revive = 15,
  invalid_condition = 16,
  caster_disappear = 17,
  skill_finished = 18,
  item_equip = 19,
  identity = 20,
  target_change = 21,
}
export enum statuseffecttype {
  none = 0,
  physical_damage = 1,
  magical_damage = 2,
  heal = 3,
  freeze = 4,
  stone = 5,
  fear = 6,
  stun = 7,
  sleep = 8,
  earthquake = 9,
  curse = 10,
  weaken_defense = 11,
  weaken_resistance = 12,
  death_sentence = 13,
  silence = 14,
  darkness = 15,
  vermin = 16,
  bleeding = 17,
  poisoning = 18,
  electrocution = 19,
  burn = 20,
  move_speed_down = 21,
  all_speed_down = 22,
  invincibility = 23,
  shield = 24,
  replenish_mp = 25,
  replenish_mp_rate = 26,
  absorb_area = 27,
  skill_damage_amplify = 28,
  minion_event = 29,
  change_hit_flag = 30,
  identity_gauge = 31,
  beattacked_damage_amplify = 32,
  polymorph_pc = 33,
  super_armor = 34,
  invoke_skill_effect = 35,
  forced_move = 36,
  confinement = 37,
  action_disable = 38,
  herbalism_instant_durability_ignore = 39,
  mining_add_casting_speed = 40,
  wound = 41,
  wild_growth = 42,
  near_death_experience = 43,
  change_faction = 44,
  npc_part_invincibility = 45,
  lumbering_sharpen = 46,
  disguise = 47,
  bechased_npc = 48,
  fishing_school = 49,
  herbalism_life_ether = 50,
  herbalism_delicate_hands = 51,
  ship_boost_gauge = 52,
  hunting_chase = 53,
  archeology_detection = 54,
  archeology_conectration = 55,
  archeology_sense_of_tombraider = 56,
  reset_cooldown = 57,
  provoke = 58,
  ghost = 59,
  lumbering_find_tree = 60,
  life_casting_speed = 61,
  life_tool_destroy_rate = 62,
  protect = 63,
  part_corrosion = 64,
  voyage_supply_accelerate = 65,
  voyage_supply_fluctuate = 66,
  voyage_action_disable = 67,
  voyage_boost_gauge_unobtainable = 68,
  voyage_immune_event = 69,
  skill_damage_amplify_attack = 70,
  voyage_add_event_gauge = 71,
  provoke_resist = 72,
  ignite = 73,
  herbalism_vitality_ether = 74,
  herbalism_golden_finger = 75,
  life_add_success_rate = 76,
  ignore_immune = 77,
  fixed_damage_self = 78,
  voyage_boost_gauge_fluctuate = 79,
  change_ai_point = 80,
  aura = 81,
  life_plus_success_rate = 82,
  life_multiply_success_rate = 83,
  fishing_bare_hands = 84,
  fishing_cast_bait = 85,
  collision_disable = 86,
  instant_stat_amplify = 88,
  ship_wreck = 89,
  burn_mp = 90,
  voyage_luck_recovery_increment = 91,
  ai_point_amplify = 92,
  life_multiply_exp_rate = 93,
  pvp_token_reward_increase_percent = 94,
  voyage_luck_drop_amplify = 95,
  increase_identity_gauge = 96,
  pc_stat_min_max_fix = 97,
  reverse_ruin_drop_increase_percent = 98,
  notice_gauge = 99,
  back_attack_resist = 100,
  directional_attack_amplify = 101,
  hunting_observe = 102,
  note_key_input = 103,
  attack_power_amplify = 104,
  time_stop = 105,
  pheromone = 106,
  life_drop_add_rate = 107,
  life_durability_rate = 108,
  instant_stat_amplify_by_contents = 109,
  voyage_pause_event = 110,
  life_exp_add_rate = 111,
  reverse_ruin_add_exp_rate = 112,
  linkable_invoke_effect = 113,
  bullet_time = 114,
  reflect_damage = 115,
  reverse = 116,
  detect = 117,
  map_symbol = 118,
  map_symbol_hide = 119,
  force_field = 120,
  mind_control = 121,
  hide_target_ui = 122,
  masking = 123,
  mana_shield = 124,
  detected_bush = 125,
  paralyzation = 126,
  confusion = 127,
  change_material = 128,
  linked_target_invoke = 129,
  pattern_identity = 130,
  beam_attack = 131,
  fall_down = 132,
  drown = 133,
  infinity_hp = 134,
  light_source = 135,
  outline = 136,
  fall_down_immune = 137,
  dynamic_camera = 138,
  bechased_pc = 139,
}
export enum triggersignaltype {
  none = 0,
  out = 1,
  click_click = 2,
  door_open = 3,
  door_close = 4,
  switch_on = 5,
  switch_off = 6,
  hit_hit = 7,
  hit_destruct = 8,
  grip_grip = 9,
  volume_enter = 10,
  volume_leave = 11,
  volume_on = 12,
  volume_off = 13,
  npc_spawn = 14,
  npc_dead = 15,
  npc_event_1 = 16,
  npc_event_2 = 17,
  npc_event_3 = 18,
  npc_event_4 = 19,
  npc_event_5 = 20,
  yes = 21,
  no = 22,
  prop_pickup = 23,
  prop_rotate_start = 24,
  prop_rotate_cancel = 25,
  prop_rotate_end = 26,
  assembled = 27,
  user_signal = 28,
  volume_inputkey = 29,
  shared_click = 30,
  shared_despawn = 31,
  dungeon_cleared = 32,
  coop_quest_start = 33,
  coop_quest_complete = 34,
  coop_quest_fail = 35,
  user_ship_wreck = 36,
  tower_hit = 37,
  tower_destruct = 38,
  vehicle_enter = 39,
  vehicle_leave = 40,
  instancezone_load_complete = 41,
  random_case_1 = 42,
  random_case_2 = 43,
  random_case_3 = 44,
  random_case_4 = 45,
  random_case_5 = 46,
  npc_pathevent = 47,
  joint_attach = 48,
  joint_detach = 49,
  hit_on2 = 50,
  hit_on3 = 51,
  coop_quest_cancel = 52,
  dungeon_enter = 53,
  station_disable = 54,
  all_dead = 55,
  all_exit = 56,
  dungeon_phase1_clear = 57,
  dungeon_phase1_fail = 58,
  dungeon_phase2_clear = 59,
  dungeon_phase2_fail = 60,
  dungeon_phase3_clear = 61,
  dungeon_phase3_fail = 62,
  dungeon_phase4_clear = 63,
  dungeon_phase4_fail = 64,
  user_status_effect = 65,
  instance_timer_start = 66,
  instance_timer_end = 67,
  instance_timer_cancel = 68,
  instance_timer_event_1 = 69,
  instance_timer_event_2 = 70,
  instance_timer_event_3 = 71,
  instance_timer_event_4 = 72,
  instance_timer_event_5 = 73,
  dungeon_phase5_clear = 74,
  dungeon_phase5_fail = 75,
  dungeon_phase6_clear = 76,
  dungeon_phase6_fail = 77,
  dungeon_phase1_resume = 78,
  dungeon_phase2_resume = 79,
  dungeon_phase3_resume = 80,
  dungeon_phase4_resume = 81,
  dungeon_phase5_resume = 82,
  dungeon_phase6_resume = 83,
  track_move_start_1 = 84,
  track_move_start_2 = 85,
  track_move_start_3 = 86,
  track_move_failure = 87,
  hit_restore_start = 88,
  hit_restore_finish = 89,
  zone_level_normal = 90,
  zone_level_hard = 91,
  zone_level_hellchaos = 92,
  zone_level_challenge = 93,
  zone_level_special = 94,
  occupation_none_to_red = 95,
  occupation_none_to_blue = 96,
  occupation_blue_to_red = 97,
  occupation_red_to_blue = 98,
  instance_timer_event_6 = 99,
  instance_timer_event_7 = 100,
  instance_timer_event_8 = 101,
  instance_timer_event_9 = 102,
  instance_timer_event_10 = 103,
  user_status_effect_removed = 104,
}
export enum zonebufftarget {
  none = 0,
  pc = 1,
  monster = 2,
  npc = 3,
  all = 4,
}
