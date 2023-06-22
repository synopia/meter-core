import"./chunk-CSXWJZLO.mjs";import"./chunk-X6HLKODA.mjs";import{a as y,b as _,c as d,d as g,e as k,f as m,i as b}from"./chunk-7RMENK4B.mjs";import"./chunk-K7C7TUE5.mjs";import{readFileSync as c}from"fs";import{join as f}from"path";var h=class{dbPath="";modulePath;enums;npc;PCData;skill;skillBuff;skillEffect;skillFeature;combatEffect;esther;itemSet;statQueryFilter;constructor(t="./meter-core/data"){this.modulePath=t,this.enums=new Map,this.npc=new Map,this.PCData=new Map,this.skill=new Map,this.skillBuff=new Map,this.skillEffect=new Map,this.skillFeature=new Map,this.combatEffect=new Map,this.esther=[],this.itemSet={items:new Map,seteffects:new Map},this.statQueryFilter={zone:new Set,raid:new Set}}processEnumData(t){for(let[e,s]of Object.entries(t)){let r=new Map;for(let[a,l]of Object.entries(s))r.set(a,l);this.enums.set(e,r)}}processNpcData(t){for(let e of Object.values(t))this.npc.set(e.id,e)}processPCData(t){for(let[e,s]of Object.entries(t))this.PCData.set(parseInt(e),s)}processSkillData(t){for(let e of Object.values(t))this.skill.set(e.id,e)}processSkillBuffData(t){for(let e of Object.values(t))this.skillBuff.set(e.id,e)}processSkillBuffEffectData(t){for(let e of Object.values(t))this.skillEffect.set(e.id,e)}processSkillFeature(t){for(let e of Object.values(t)){let s=new Map;for(let r of Object.values(e.tripods))s.set(r.key,r);this.skillFeature.set(e.skillid,s)}}processCombatEffectData(t){for(let e of Object.values(t))this.combatEffect.set(e.id,e)}processEsther(t){this.esther=Object.values(t)}processItemSet(t){for(let[e,s]of Object.entries(t)){let r=new Map;for(let[a,l]of Object.entries(s)){let o=new Map;for(let[i,n]of Object.entries(l.value))o.set(parseInt(i),n);r.set(parseInt(a),o);for(let i of Object.values(l.itemids))this.itemSet.items.set(i,{setname:e,level:parseInt(a)})}this.itemSet.seteffects.set(e,r)}}procesStatQueryFilter(t){this.statQueryFilter.zone=new Set(t.zone),this.statQueryFilter.raid=new Set(t.raid)}getNpcName(t){return this.npc.get(t)?.name||""}getClassName(t){return this.PCData.get(t)||""}getSkillName(t){return this.skill.get(t)?.name||""}getSkillClassId(t){return this.skill.get(t)?.classid||0}getSkillEffectComment(t){return this.skillEffect.get(t)?.comment||""}getSkillEffectDirectionalMask(t){return this.skillEffect.get(t)?.directionalmask||0}getSkillEsther(t){for(let e of this.esther)if(e.skills.includes(t))return e}getNpcEsther(t){for(let e of this.esther)if(e.npcs.includes(t))return e}getStatusEffectHeaderData(t){let e=this.skillBuff.get(t);if(!e||e.iconshowtype==="none")return;let s;e.buffcategory==="ability"&&[501,502,503,504,505].includes(e.uniquegroup)?s="dropsofether":s=e.buffcategory;let r={target:e.target==="none"?0:e.target==="self"?2:1,category:e.category,buffcategory:s,bufftype:this.getStatusEffectBuffTypeFlags(e),uniquegroup:e.uniquegroup,source:{name:e.name,desc:e.desc,icon:e.icon}};if(s==="classskill"||s==="identity"){let a;if(e.sourceskill)a=this.skill.get(e.sourceskill),a&&(r.source.skill=a);else{let l=Math.floor(t/100)*10;if(a=this.skill.get(l),!a){let o=Math.floor(e.uniquegroup/100)*10;a=this.skill.get(o)}a&&(r.source.skill=a)}a&&(r.source.skill=a)}else if(s==="ability"&&e.uniquegroup!==0){let a;if(e.sourceskill)a=this.skill.get(e.sourceskill),a&&(r.source.skill=a);else{let l=Math.floor(t/100)*10;if(a=this.skill.get(l),!a){let o=Math.floor(e.uniquegroup/100)*10;a=this.skill.get(o)}}a&&(r.source.skill=a)}else s==="set"&&e.setname&&(r.source.setname=e.setname);return r}getStatusEffectBuffTypeFlags(t){let e=0;return["weaken_defense","weaken_resistance","skill_damage_amplify","beattacked_damage_amplify","skill_damage_amplify_attack","directional_attack_amplify","instant_stat_amplify","attack_power_amplify","instant_stat_amplify_by_contents"].includes(t.type)?e|=1:["move_speed_down","all_speed_down"].includes(t.type)?e|=8:["reset_cooldown"].includes(t.type)?e|=128:["change_ai_point","ai_point_amplify"].includes(t.type)?e|=256:["increase_identity_gauge"].includes(t.type)&&(e|=64),t.passiveoption.forEach(s=>{let r=y[s.type];if(s.type==="stat"){let a=b[s.keystat];[20,26,54].includes(a)&&(e|=256),[18,24,53].includes(a)&&(e|=128),[28,30,32,37,38,39,40,149].includes(a)&&(e|=64),[6,10,27,29,31,33,34,35,36,41,42,137].includes(a)&&(e|=16),(55<=a&&a<=70||[19,25].includes(a))&&(t.category==="buff"&&s.value>=0||t.category==="debuff"&&s.value<=0?e|=1:e|=32),79<=a&&a<=84&&(e|=8),[77,78,18,24].includes(a)&&(e|=4),[74,15,21].includes(a)&&(e|=2),(141<=a&&a<=148||87<=a&&a<=94||[3,4,5,7,8,9,47,49,50,51,52,72,73,76,110,123,151].includes(a))&&(t.category==="buff"&&s.value>=0||t.category==="debuff"&&s.value<=0?e|=1:e|=32)}else if(6===r)e|=2;else if([5,29,34,7,8].includes(r))t.category==="buff"&&s.value>=0||t.category==="debuff"&&s.value<=0?e|=1:e|=32;else if([27,35].includes(r))e|=128;else if([26,25].includes(r))e|=64;else if(4===r){let a=this.combatEffect.get(s.keyindex);if(!a)return;a.effects.forEach(l=>{l.actions.forEach(o=>{let i=_[o.type];[1,2,4,5,6,19,20,16].includes(i)?e|=1:3===i&&(e|=2)})})}}),e}getStatPairMap(t){let e=new Map;return t.forEach(s=>{e.set(s.statType,s.value)}),e}isCombatEffectConditionsValid({effect:t,self:e,target:s,caster:r,skill:a,hitOption:l,targetCount:o}){let i=!0;return t.conditions.forEach(n=>{if(!i)return;let u=d[n.actor];switch(g[n.type]){case 21:(!o||o!==n.arg)&&(i=!1);break;case 1:(!a||a.id===n.arg)&&(i=!1);break;case 16:u===1?(!e||e.entityType!==1)&&(i=!1):u===2?(!s||s.entityType!==1)&&(i=!1):u===3?(!r||r.entityType!==1)&&(i=!1):i=!1;break;case 22:(!a||!a.identitycategory||k[a.identitycategory]!=n.arg)&&(i=!1);break;case 13:(!s||![2,3].includes(s.entityType)||!s.pushimmune)&&(i=!1);break;case 15:i=!1;break;case 11:i=!1;break;case 12:i=!1;break;case 25:(!a||!a.groups||!a.groups.includes(n.arg))&&(i=!1);break;case 2:if(u===1)(!e||Number((e.stats.get(1)??0n)/(e.stats.get(27)??0n))>=n.arg/100)&&(i=!1);else if(u===2)(!s||Number((s.stats.get(1)??0n)/(s.stats.get(27)??0n))>=n.arg/100)&&(i=!1);else if(u===3)(!r||Number((r.stats.get(1)??0n)/(r.stats.get(27)??0n))>=n.arg/100)&&(i=!1);else{i=!1;break}break;case 34:u===2&&s&&[2,3].includes(s.entityType)?s.balanceLevel>n.arg&&(i=!1):i=!1;break;case 6:if(u===2)if(s&&[2,3].includes(s.entityType)){let p=m[s.grade];(!p||p>n.arg)&&(i=!1)}else i=!1;else i=!1;break;case 7:if(u===2)if(s&&[2,3].includes(s.entityType)){let p=m[s.grade];(!p||p<n.arg)&&(i=!1)}else i=!1;else i=!1;break;case 27:u===1?(!e||e.entityType!==1||e.stance!==n.arg)&&(i=!1):i=!1;break;case 24:(!l||!(l+1&n.arg))&&(i=!1);break;default:i=!1;break}}),i}isSupportClassId(t){return t===105||t===204||t===602}isBattleItem(t,e){let s=this.skillEffect.get(t)?.itemcategory;switch(e){case"attack":return s==="useup_battle_item_common_attack";case"buff":return s==="useup_battle_item_common_buff";case"function":return s==="useup_battle_item_common_function";default:return typeof s=="string"}}getBattleItemName(t){return this.skillEffect.get(t)?.itemname||""}loadDbs(t){this.dbPath=t,this.processEnumData(JSON.parse(c(f(t,"Enums.json"),"utf-8"))),this.processNpcData(JSON.parse(c(f(t,"Npc.json"),"utf-8"))),this.processPCData(JSON.parse(c(f(t,"PCData.json"),"utf-8"))),this.processSkillData(JSON.parse(c(f(t,"Skill.json"),"utf-8"))),this.processSkillBuffData(JSON.parse(c(f(t,"SkillBuff.json"),"utf-8"))),this.processSkillBuffEffectData(JSON.parse(c(f(t,"SkillEffect.json"),"utf-8"))),this.processSkillFeature(JSON.parse(c(f(t,"SkillFeature.json"),"utf-8"))),this.processCombatEffectData(JSON.parse(c(f(t,"CombatEffect.json"),"utf-8"))),this.processEsther(JSON.parse(c(f(t,"Esther.json"),"utf-8"))),this.processItemSet(JSON.parse(c(f(t,"ItemSet.json"),"utf-8"))),this.procesStatQueryFilter(JSON.parse(c(f(t,"StatQueryFilter.json"),"utf-8")))}};export{h as MeterData};
