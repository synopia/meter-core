import type { LogEvent } from "../../logger/logEvent";
import type * as types from "./types";

export interface LogStreamEvent {
  SkillCooldownNotify: (pkt: LogEvent<types.SkillCooldownNotify>) => void;
  AbilityChangeNotify: (pkt: LogEvent<types.AbilityChangeNotify>) => void;
  ActiveAbilityNotify: (pkt: LogEvent<types.ActiveAbilityNotify>) => void;
  AddonSkillFeatureChangeNotify: (pkt: LogEvent<types.AddonSkillFeatureChangeNotify>) => void;
  BlockSkillStateNotify: (pkt: LogEvent<types.BlockSkillStateNotify>) => void;
  CounterAttackNotify: (pkt: LogEvent<types.CounterAttackNotify>) => void;
  DeathNotify: (pkt: LogEvent<types.DeathNotify>) => void;
  InitAbility: (pkt: LogEvent<types.InitAbility>) => void;
  InitEnv: (pkt: LogEvent<types.InitEnv>) => void;
  InitPC: (pkt: LogEvent<types.InitPC>) => void;
  InitLocal: (pkt: LogEvent<types.InitLocal>) => void;
  MigrationExecute: (pkt: LogEvent<types.MigrationExecute>) => void;
  NewNpc: (pkt: LogEvent<types.NewNpc>) => void;
  NewNpcSummon: (pkt: LogEvent<types.NewNpcSummon>) => void;
  NewPC: (pkt: LogEvent<types.NewPC>) => void;
  NewProjectile: (pkt: LogEvent<types.NewProjectile>) => void;
  ParalyzationStateNotify: (pkt: LogEvent<types.ParalyzationStateNotify>) => void;
  PartyInfo: (pkt: LogEvent<types.PartyInfo>) => void;
  PartyLeaveResult: (pkt: LogEvent<types.PartyLeaveResult>) => void;
  PartyPassiveStatusEffectAddNotify: (pkt: LogEvent<types.PartyPassiveStatusEffectAddNotify>) => void;
  PartyPassiveStatusEffectRemoveNotify: (pkt: LogEvent<types.PartyPassiveStatusEffectRemoveNotify>) => void;
  PartyStatusEffectAddNotify: (pkt: LogEvent<types.PartyStatusEffectAddNotify>) => void;
  PartyStatusEffectRemoveNotify: (pkt: LogEvent<types.PartyStatusEffectRemoveNotify>) => void;
  PartyStatusEffectResultNotify: (pkt: LogEvent<types.PartyStatusEffectResultNotify>) => void;
  PassiveStatusEffectAddNotify: (pkt: LogEvent<types.PassiveStatusEffectAddNotify>) => void;
  PassiveStatusEffectRemoveNotify: (pkt: LogEvent<types.PassiveStatusEffectRemoveNotify>) => void;
  RaidBossKillNotify: (pkt: LogEvent<types.RaidBossKillNotify>) => void;
  RaidResult: (pkt: LogEvent<types.RaidResult>) => void;
  RemoveObject: (pkt: LogEvent<types.RemoveObject>) => void;
  SkillDamageAbnormalMoveNotify: (pkt: LogEvent<types.SkillDamageAbnormalMoveNotify>) => void;
  SkillDamageNotify: (pkt: LogEvent<types.SkillDamageNotify>) => void;
  SkillStageNotify: (pkt: LogEvent<types.SkillStageNotify>) => void;
  SkillStartNotify: (pkt: LogEvent<types.SkillStartNotify>) => void;
  StatusEffectAddNotify: (pkt: LogEvent<types.StatusEffectAddNotify>) => void;
  StatusEffectRemoveNotify: (pkt: LogEvent<types.StatusEffectRemoveNotify>) => void;
  StatusEffectDurationNotify: (pkt: LogEvent<types.StatusEffectDurationNotify>) => void;
  StatusEffectSyncDataNotify: (pkt: LogEvent<types.StatusEffectSyncDataNotify>) => void;
  TriggerBossBattleStatus: (pkt: LogEvent<types.TriggerBossBattleStatus>) => void;
  TriggerFinishNotify: (pkt: LogEvent<types.TriggerFinishNotify>) => void;
  TriggerStartNotify: (pkt: LogEvent<types.TriggerStartNotify>) => void;
  TroopMemberUpdateMinNotify: (pkt: LogEvent<types.TroopMemberUpdateMinNotify>) => void;
  IdentityGaugeChangeNotify: (pkt: LogEvent<types.IdentityGaugeChangeNotify>) => void;
  ZoneObjectUnpublishNotify: (pkt: LogEvent<types.ZoneObjectUnpublishNotify>) => void;
  ZoneStatusEffectAddNotify: (pkt: LogEvent<types.ZoneStatusEffectAddNotify>) => void;
  ZoneStatusEffectRemoveNotify: (pkt: LogEvent<types.ZoneStatusEffectRemoveNotify>) => void;
  SkillCastNotify: (pkt: LogEvent<types.SkillCastNotify>) => void;
  IdentityStanceChangeNotify: (pkt: LogEvent<types.IdentityStanceChangeNotify>) => void;
  EquipChangeNotify: (pkt: LogEvent<types.EquipChangeNotify>) => void;
  EquipLifeToolChangeNotify: (pkt: LogEvent<types.EquipLifeToolChangeNotify>) => void;
  InitItem: (pkt: LogEvent<types.InitItem>) => void;
  RaidBegin: (pkt: LogEvent<types.RaidBegin>) => void;
  ZoneMemberLoadStatusNotify: (pkt: LogEvent<types.ZoneMemberLoadStatusNotify>) => void;
  NewTrap: (pkt: LogEvent<types.NewTrap>) => void;
  SkillCancelNotify: (pkt: LogEvent<types.SkillCancelNotify>) => void;

  logData: (data: Buffer) => void;
  fileEnd: (output: string) => void;

  APP_StatApi: (pkt: LogEvent<types.APP_StatApi>) => void;

  "*": (name: string, pkt: LogEvent<Object>) => void;
}
