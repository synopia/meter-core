// Auto Generated, do not edit.
import type { PKT } from "../../pkt-stream";
import type * as types from "./types";
import { PKTSkillCooldownNotify } from "./reads";
export interface PKTStreamEvents {
  PKTSkillCooldownNotify: (pkt: PKT<types.PKTSkillCooldownNotify>) => void;
  PKTAbilityChangeNotify: (pkt: PKT<types.PKTAbilityChangeNotify>) => void;
  PKTActiveAbilityNotify: (pkt: PKT<types.PKTActiveAbilityNotify>) => void;
  PKTAddonSkillFeatureChangeNotify: (pkt: PKT<types.PKTAddonSkillFeatureChangeNotify>) => void;
  PKTAuthTokenResult: (pkt: PKT<types.PKTAuthTokenResult>) => void;
  PKTBlockSkillStateNotify: (pkt: PKT<types.PKTBlockSkillStateNotify>) => void;
  PKTCounterAttackNotify: (pkt: PKT<types.PKTCounterAttackNotify>) => void;
  PKTDeathNotify: (pkt: PKT<types.PKTDeathNotify>) => void;
  PKTEquipChangeNotify: (pkt: PKT<types.PKTEquipChangeNotify>) => void;
  PKTEquipLifeToolChangeNotify: (pkt: PKT<types.PKTEquipLifeToolChangeNotify>) => void;
  PKTIdentityStanceChangeNotify: (pkt: PKT<types.PKTIdentityStanceChangeNotify>) => void;
  PKTInitAbility: (pkt: PKT<types.PKTInitAbility>) => void;
  PKTInitEnv: (pkt: PKT<types.PKTInitEnv>) => void;
  PKTInitPC: (pkt: PKT<types.PKTInitPC>) => void;
  PKTInitItem: (pkt: PKT<types.PKTInitItem>) => void;
  PKTInitLocal: (pkt: PKT<types.PKTInitLocal>) => void;
  PKTMigrationExecute: (pkt: PKT<types.PKTMigrationExecute>) => void;
  PKTNewNpc: (pkt: PKT<types.PKTNewNpc>) => void;
  PKTNewNpcSummon: (pkt: PKT<types.PKTNewNpcSummon>) => void;
  PKTNewPC: (pkt: PKT<types.PKTNewPC>) => void;
  PKTNewProjectile: (pkt: PKT<types.PKTNewProjectile>) => void;
  PKTNewTrap: (pkt: PKT<types.PKTNewTrap>) => void;
  PKTParalyzationStateNotify: (pkt: PKT<types.PKTParalyzationStateNotify>) => void;
  PKTPartyInfo: (pkt: PKT<types.PKTPartyInfo>) => void;
  PKTPartyLeaveResult: (pkt: PKT<types.PKTPartyLeaveResult>) => void;
  PKTPartyPassiveStatusEffectAddNotify: (pkt: PKT<types.PKTPartyPassiveStatusEffectAddNotify>) => void;
  PKTPartyPassiveStatusEffectRemoveNotify: (pkt: PKT<types.PKTPartyPassiveStatusEffectRemoveNotify>) => void;
  PKTPartyStatusEffectAddNotify: (pkt: PKT<types.PKTPartyStatusEffectAddNotify>) => void;
  PKTPartyStatusEffectRemoveNotify: (pkt: PKT<types.PKTPartyStatusEffectRemoveNotify>) => void;
  PKTPartyStatusEffectResultNotify: (pkt: PKT<types.PKTPartyStatusEffectResultNotify>) => void;
  PKTPassiveStatusEffectAddNotify: (pkt: PKT<types.PKTPassiveStatusEffectAddNotify>) => void;
  PKTPassiveStatusEffectRemoveNotify: (pkt: PKT<types.PKTPassiveStatusEffectRemoveNotify>) => void;
  PKTRaidBegin: (pkt: PKT<types.PKTRaidBegin>) => void;
  PKTRaidBossKillNotify: (pkt: PKT<types.PKTRaidBossKillNotify>) => void;
  PKTRaidResult: (pkt: PKT<types.PKTRaidResult>) => void;
  PKTRemoveObject: (pkt: PKT<types.PKTRemoveObject>) => void;
  PKTSkillCancelNotify: (pkt: PKT<types.PKTSkillCancelNotify>) => void;
  PKTSkillCastNotify: (pkt: PKT<types.PKTSkillCastNotify>) => void;
  PKTSkillDamageAbnormalMoveNotify: (pkt: PKT<types.PKTSkillDamageAbnormalMoveNotify>) => void;
  PKTSkillDamageNotify: (pkt: PKT<types.PKTSkillDamageNotify>) => void;
  PKTSkillStageNotify: (pkt: PKT<types.PKTSkillStageNotify>) => void;
  PKTSkillStartNotify: (pkt: PKT<types.PKTSkillStartNotify>) => void;
  PKTStatChangeOriginNotify: (pkt: PKT<types.PKTStatChangeOriginNotify>) => void;
  PKTStatusEffectAddNotify: (pkt: PKT<types.PKTStatusEffectAddNotify>) => void;
  PKTStatusEffectRemoveNotify: (pkt: PKT<types.PKTStatusEffectRemoveNotify>) => void;
  PKTStatusEffectDurationNotify: (pkt: PKT<types.PKTStatusEffectDurationNotify>) => void;
  PKTStatusEffectSyncDataNotify: (pkt: PKT<types.PKTStatusEffectSyncDataNotify>) => void;
  PKTTriggerBossBattleStatus: (pkt: PKT<types.PKTTriggerBossBattleStatus>) => void;
  PKTTriggerFinishNotify: (pkt: PKT<types.PKTTriggerFinishNotify>) => void;
  PKTTriggerStartNotify: (pkt: PKT<types.PKTTriggerStartNotify>) => void;
  PKTTroopMemberUpdateMinNotify: (pkt: PKT<types.PKTTroopMemberUpdateMinNotify>) => void;
  PKTIdentityGaugeChangeNotify: (pkt: PKT<types.PKTIdentityGaugeChangeNotify>) => void;
  PKTZoneMemberLoadStatusNotify: (pkt: PKT<types.PKTZoneMemberLoadStatusNotify>) => void;
  PKTZoneObjectUnpublishNotify: (pkt: PKT<types.PKTZoneObjectUnpublishNotify>) => void;
  PKTZoneStatusEffectAddNotify: (pkt: PKT<types.PKTZoneStatusEffectAddNotify>) => void;
  PKTZoneStatusEffectRemoveNotify: (pkt: PKT<types.PKTZoneStatusEffectRemoveNotify>) => void;
  "*": (data: Buffer, opcode: number, compression: number, xor: boolean) => void;
}
