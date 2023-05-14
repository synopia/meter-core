import{TypedEmitter as en}from"tiny-typed-emitter";var n=class{b;o;constructor(t){this.b=t,this.o=0}skip(t=0){this.o+=t}bool(){return this.u8()===1}u8(){return this.b.readUint8(this.o++)}i8(){return this.b.readInt8(this.o++)}u16(){let t=this.b.readUint16LE(this.o);return this.o+=2,t}i16(){let t=this.b.readInt16LE(this.o);return this.o+=2,t}u32(){let t=this.b.readUint32LE(this.o);return this.o+=4,t}i32(){let t=this.b.readInt32LE(this.o);return this.o+=4,t}f32(){let t=this.b.readFloatLE(this.o);return this.o+=4,t}u64(){let t=this.b.readBigUint64LE(this.o);return this.o+=8,t}i64(){let t=this.b.readBigInt64LE(this.o);return this.o+=8,t}string(t){let o=this.u16();if(o<=t){o=o*2;let r=this.b.toString("utf16le",this.o,this.o+o);return this.o+=o,r}return""}bytes(t=0,o,r){if(o&&t>o)return Buffer.alloc(0);r&&(t=t*r);let i=Buffer.from(this.b.subarray(this.o,this.o+t));return this.o+=t,i}array(t,o,r){return r&&t>r?[]:new Array(t).fill(void 0).map(o)}},po=class{b;o;constructor(t=65535){this.b=Buffer.allocUnsafe(t),this.o=0}get value(){return this.b.subarray(0,this.o)}skip(t=0){this.o+=t}bool(t=!1){return this.u8(t?1:0),t}u8(t=0){this.b.writeUInt8(t,this.o++)}i8(t=0){this.b.writeInt8(t,this.o++)}u16(t=0){this.o=this.b.writeUInt16LE(t,this.o)}i16(t=0){this.o=this.b.writeInt16LE(t,this.o)}u32(t=0){this.o=this.b.writeUInt32LE(t,this.o)}i32(t=0){this.o=this.b.writeInt32LE(t,this.o)}f32(t=0){this.o=this.b.writeFloatLE(t,this.o)}u64(t=0n){this.o=this.b.writeBigUInt64LE(BigInt(t),this.o)}i64(t=0n){this.o=this.b.writeBigInt64LE(BigInt(t),this.o)}string(t="",o=0){this.u16(t.length),t.length<=o&&(this.o+=this.b.write(t,this.o,"utf16le"))}bytes(t=Buffer.alloc(0),o={}){if(o.maxLen){let r=o.multiplier??1;if(t.length%r)throw new Error(`Error writing bytes, chunkSize should be a multiple of intut value size, got ${t.length}%${r}`);let i=t.length/r;if(i>o.maxLen)throw new Error(`Error writing bytes, input value size exceeded maxLen, got ${i} > ${o.maxLen}`);if(!o.lenType)throw new Error(`Error writing bytes, invalid lenType when writing chunks, got ${o.lenType}`);this[o.lenType](i)}else if(o.length&&t.length!==o.length)throw new Error(`Error writing bytes, input value size doesn't match opts.length, ${t.length} !== ${o.lenType}`);this.o+=t.copy(this.b,this.o)}array(t=[],o,r){if(t===void 0||t.length>o.maxLen){this[o.lenType](0);return}this[o.lenType](t.length),t.forEach(r)}};function l(e){let t={};return t.Points=e.u16(),t.Level=e.u8(),t.Id=e.u32(),t}function E(e){let t=new n(e),o={};return o.abilityDataList=t.array(t.u16(),()=>l(t),100),o}var v="PKTAbilityChangeNotify",h=1400;function lo(e){let t={};return t.Level=e.u32(),t.FeatureType=e.u16(),t}function R(e){let t=new n(e),o={};return o.activeAbilityList=t.array(t.u16(),()=>lo(t),60),o.ObjectId=t.u64(),o}var D="PKTActiveAbilityNotify",_=46763;function A(e){let t=new n(e),o={};return o.struct_120=t.bytes(t.u16(),200,4),o.addonSkillFeatureList=t.array(t.u16(),()=>{let r={};return r.SkillId=t.u32(),r.addonSkillFeatureIdList=t.array(t.u16(),()=>t.u32(),5),r},200),o.ObjectId=t.u64(),o}var B="PKTAddonSkillFeatureChangeNotify",C=15935;function L(e){let t=new n(e),o={};return o.Unk1_m=t.bytes(t.u32(),688),o.PacketResultCode=t.u32(),o}var w="PKTAuthTokenResult",M=51838;function O(e){let t=new n(e),o={};return t.skip(2),o.ParalyzationMaxPoint=t.u32(),t.skip(1),o.Type=t.u8(),o.ObjectId=t.u64(),o.ParalyzationPoint=t.u32(),o}var F="PKTBlockSkillStateNotify",j=24956;function V(e){let t=new n(e),o={};return t.skip(1),o.SourceId=t.u64(),o.TargetId=t.u64(),t.skip(1),o.Type=t.u32(),t.skip(1),o}var Z="PKTCounterAttackNotify",z=20022;function H(e){let t=new n(e),o={};return o.Unk0=t.u8(),t.bool()&&(o.Unk1_0=t.u8()),o.Unk2=t.u32(),t.bool()&&(o.Unk3_0=t.u8()),o.Unk4=t.u16(),t.bool()&&(o.Unk5_0=t.u8()),o.SourceId=t.u64(),o.Unk7=t.u32(),o.TargetId=t.u64(),o.Unk9=t.u64(),o}var G="PKTDeathNotify",W=55094;function Y(e){let t=new n(e),o={};return o.abilityDataList=t.array(t.u16(),()=>l(t),100),o.struct_125=t.bytes(t.u16(),348,48),o}var $="PKTInitAbility",q=1278;var wo=[0,31,28,31,30,31,30,31,31,30,31,30,31];function Mo(e){return!(e%4||!(e%100)&&e%400)}function Oo(e,t,o){if(e>99){if(e<1752||e==1752&&(t<9||t==9&&o<<14))return!1}else e+=1900;return o>0&&t<=12&&(o<=wo[t]||o==29&&t==2&&Mo(e))}function J(e){let t=Number(e&0xffffffffn),o=Number(e>>32n&0xffffffffn),r=t&4095,i=(t&65535)>>12,u=t>>16&31;Oo(r,i,u)||(r=i=u=0);let m=t>>21&31,P=t>>26&63,k=o&63,N=o>>6&16383;return m<24&&P<60&&k<60&&N<1e3||(m=24,P=k=N=0),new Date(Date.UTC(r<=99?r+1900:r,i-1,u,m,P,k,N))}function yo(e){let t=0n;return t|=BigInt(e.getUTCMilliseconds())<<38n,t|=BigInt(e.getUTCSeconds())<<32n,t|=BigInt(e.getUTCMinutes())<<26n,t|=BigInt(e.getUTCHours())<<21n,t|=BigInt(e.getUTCDate())<<16n,t|=BigInt(e.getUTCMonth()+1)<<12n,t|=BigInt(e.getUTCFullYear()<2e3?e.getUTCFullYear()-1900:e.getUTCFullYear()),t}function y(e,t=0){let o=e.u16();return(o&4095)<2079?(e.o-=2,J(e.i64())):J(BigInt(o)&0xfffn|0x11000n)}function Sn(e,t=J(0x1181fn)){t.getUTCFullYear()>=2079?e.u16(Number(yo(t)&0xffffn)):e.i64(yo(t))}function X(e){let t=new n(e),o={};return o.Unk0=t.u64(),o.Unk1=t.u8(),o.Unk2=t.u32(),o.PlayerId=t.u64(),o.Unk4=t.u32(),o.struct_557=t.string(128),o.lostArkDateTime=y(t),o.struct_27=t.array(t.u16(),()=>{let r={};return r.struct_543=t.string(32),r.struct_557=t.string(128),r.versionString=t.string(64),r},64),o}var tt="PKTInitEnv",et=29922;function Fo(e){if(e.length===0)return 0n;if(e.length>8)throw new Error("Value is too large");let t=Buffer.alloc(8);return e.copy(t),t.readBigInt64LE()}function a(e,t=0){let o=e.u8(),r=e.bytes(o>>1&7),i=Fo(r)<<4n|BigInt(o>>4);return o&1?-i:i}function gn(e,t=0n){let o=Buffer.alloc(8),r=t<0n;o.writeBigInt64LE((r?-t:t)>>4n);let i=0;for(let[u,m]of o.entries())m!=0&&(i=u+1);if(i>7)throw new Error("Value is too large");e.u8(Number((r?-t:t)&0xfn)<<4|(i&7)<<1|(r?1:0)),e.bytes(o.subarray(0,i),{length:i})}function b(e){let t={};return t.Unk0=e.u8(),t.Unk1=a(e),t.Unk2=a(e),t.Unk3=e.u8(),t.Unk4=e.u8(),t.Unk5=e.u64(),t.Unk6=e.u16(),t}function s(e){let t={};return t.OccurTime=y(e),t.struct_430=e.bytes(e.u16(),8,7),t.Unk2=e.u8(),t.EffectInstanceId=e.u32(),t.StatusEffectId=e.u32(),e.bool()&&(t.Unk5_0=e.u64()),t.SkillLevel=e.u8(),e.bool()&&(t.Value=e.bytes(16)),t.SourceId=e.u64(),t.TotalTime=e.u32(),t.EndTick=e.u64(),t}function nt(e){let t=new n(e),o={};return o.ClassId=t.u16(),o.Unk1=t.u8(),o.Unk2=t.u8(),o.Unk3=t.u32(),o.Unk4=t.u8(),o.Unk5=t.u8(),o.Unk6=t.u32(),o.Unk7=t.u8(),o.Unk8=t.u8(),o.Unk9=t.u8(),o.Unk10=t.bytes(35),o.Unk11=t.u8(),o.Unk12=t.u64(),o.Unk13=t.u32(),o.statPair=t.array(t.u16(),()=>{let r={};return r.StatType=t.u8(),r.Value=a(t),r},152),o.Unk15=t.bytes(25),o.struct_328=t.bytes(t.u16(),104,30),o.Unk17=t.u32(),o.Unk18=t.u16(),o.struct_323=t.string(7),o.Unk20=t.u32(),o.Unk21=t.u32(),o.Unk22=t.u32(),o.Unk23=t.u8(),o.CharacterId=t.u64(),o.Unk25=t.u8(),o.struct_215=t.bytes(t.u16(),3,17),o.Unk27=t.u64(),o.Unk28=t.u16(),o.Unk29=t.u8(),o.Unk30=t.u16(),o.Unk31=t.u8(),o.Unk32=t.u16(),o.struct_96=t.bytes(t.u16(),58),o.Unk34=t.u8(),o.struct_375=t.array(t.u16(),()=>b(t),5),t.bool()&&(o.Unk36_0=t.u32()),o.Unk37=t.u32(),o.Unk38=t.u64(),o.Unk39=t.u32(),o.Unk40=t.u8(),o.Unk41=t.u8(),o.Level=t.u16(),o.Unk43=t.u32(),o.Unk44=t.u8(),o.PlayerId=t.u64(),o.Unk46=t.u32(),o.Unk47=t.u8(),o.Unk48=t.u8(),o.Unk49=t.u8(),o.GearLevel=t.u32(),o.Unk51=t.bytes(120),o.Name=t.string(20),o.statusEffectDatas=t.array(t.u16(),()=>s(t),80),o.Unk54=t.u64(),o.Unk55=t.u8(),o.Unk56=t.u32(),o}var rt="PKTInitPC",at=36886;function bo(e){let t={};return e.bool()&&(t.Unk0_0=e.bytes(9)),e.bool()&&(t.Unk1_0=e.u32()),t.Unk2=e.u32(),t.Unk3=e.u32(),t.Unk4=e.u32(),t}function it(e){let t=new n(e),o={};return o.Unk0=t.u32(),o.Unk1=t.u8(),o.struct_215=t.bytes(t.u16(),3,17),o.Unk3=t.u64(),o.statPair=t.array(t.u16(),()=>{let r={};return r.StatType=t.u8(),r.Value=a(t),r},152),o.addonSkillFeatureList=t.array(t.u16(),()=>{let r={};return r.SkillId=t.u32(),r.addonSkillFeatureIdList=t.array(t.u16(),()=>t.u32(),5),r},200),o.Unk6=t.u8(),o.struct_125=t.bytes(t.u16(),348,48),o.abilityDataList=t.array(t.u16(),()=>l(t),100),o.struct_120=t.bytes(t.u16(),200,4),o.struct_328=t.bytes(t.u16(),104,30),o.statusEffectDatas=t.array(t.u16(),()=>s(t),80),o.struct_408=t.array(t.u16(),()=>bo(t),300),o.Unk13=t.u8(),t.bool()&&(o.Unk14_0=t.u32()),o.Unk15=t.u64(),o}var st="PKTInitLocal",ut=47316;function ft(e){let t=new n(e),o={};return o.Account_CharacterId1=t.u64(),o.ServerAddr=t.string(256),o.Account_CharacterId2=t.u64(),o.Unk3=t.u32(),o}var mt="PKTMigrationExecute",ct=32608;function T(e){let t={};return e.bool()&&(t.Unk0_0=e.u8()),t.Unk1=e.u16(),t.Unk2=e.u16(),t.struct_436=e.bytes(e.u16(),3,14),t.lostArkDateTime=y(e),t.Unk5=e.u32(),t}function ko(e){let t={};return t.lostArkString=e.string(20),t.Unk1=e.u8(),t.Unk2=e.u8(),t.Unk3=e.u16(),t.Unk4=e.u64(),t.struct_302=e.array(e.u16(),()=>T(e),32),t.struct_88=e.bytes(e.u32(),512),t.Unk7=e.u8(),t}function pt(e){return e>>20===1?-((~e>>>0)+1&2097151):e}function f(e,t=0){let o=e.u64();return{x:pt(Number(o&0x1fffffn)),y:pt(Number(o>>21n&0x1fffffn)),z:pt(Number(o>>42n&0x1fffffn))}}function Rn(e,t={x:0,y:0,z:0}){e.u64(BigInt(Math.round(t.x??0)>>>0&2097151)|BigInt(Math.round(t.y??0)>>>0&2097151)<<21n|BigInt(Math.round(t.z??0)>>>0&2097151)<<42n)}function p(e,t=0){return e.u16()*(2*Math.PI)/65536}function Dn(e,t=0){e.u16(Math.round(t*65536/(2*Math.PI))%65536)}function x(e){let t={};return e.bool()&&(t.Unk0_0=e.u8()),e.bool()&&(t.Unk1_0=e.u64()),e.bool()&&(t.Unk2_0=e.u32()),t.struct_375=e.array(e.u16(),()=>b(e),5),e.bool()&&(t.Unk4_0=e.u32()),e.bool()&&(t.Unk5_0=e.u8()),e.bool()&&(t.struct_324=e.bytes(e.u16(),11,9)),e.bool()&&(t.Unk7_0=e.u8()),t.Unk8=e.u8(),e.bool()&&(t.Unk9_0=e.u8()),t.Unk10=e.u8(),t.Position=f(e),e.bool()&&(t.struct_255=e.bytes(e.u16(),12,12)),e.bool()&&(t.Unk13_0=e.u32()),t.Unk14=e.u8(),e.bool()&&(t.Unk15_0=e.u16()),t.Unk16=e.u8(),e.bool()&&(t.Unk17_0=e.u32()),t.Unk18=e.u16(),t.TypeId=e.u32(),t.DirectionYaw=p(e),t.statPair=e.array(e.u16(),()=>{let o={};return o.StatType=e.u8(),o.Value=a(e),o},152),t.SpawnIndex=e.u32(),t.Unk23=e.u8(),t.ObjectId=e.u64(),t.statusEffectDatas=e.array(e.u16(),()=>s(e),80),e.bool()&&(t.Unk26_0=e.u16()),e.bool()&&(t.Unk27_0=e.u8()),e.bool()&&(t.struct_687=ko(e)),e.bool()&&(t.TransitIndex=e.u32()),t.Unk30=e.u8(),e.bool()&&(t.Unk31_0=e.u8()),e.bool()&&(t.Unk32_0=e.u8()),t}function lt(e){let t=new n(e),o={};return t.bool()&&(o.Unk0_0_0=t.u64()),o.Unk1=t.u8(),t.bool()&&(o.Unk0_0=t.string(20),o.Unk0_1=t.string(20)),t.bool()&&(o.Unk3_0=t.u8()),o.NpcStruct=x(t),o}var yt="PKTNewNpc",bt=34376;function Pt(e){let t=new n(e),o={};return o.NpcData=x(t),o.PublishReason=t.u8(),o.OwnerId=t.u64(),t.skip(31),o}var kt="PKTNewNpcSummon",Tt=58650;function So(e){let t={};return t.Unk0=e.bytes(5),t.Unk1=e.u8(),t.Unk2=e.u8(),t.Level=e.u16(),t.Unk4=e.u32(),t.Unk5=e.u32(),t.Unk6=e.u16(),t.Unk5_m=e.u32(),t.statusEffectDatas=e.array(e.u16(),()=>s(e),80),t.ClassId=e.u16(),t.Heading=p(e),t.Unk11=e.bytes(25),t.Unk12=e.u8(),t.Unk13=e.u32(),t.Unk14=e.u16(),t.Unk15=e.u8(),t.Unk16=e.u32(),t.Unk17=e.u8(),t.struct_120=e.bytes(e.u16(),200,4),t.struct_88=e.bytes(e.u32(),512),t.struct_301=e.array(e.u16(),()=>T(e),9),t.struct_375=e.array(e.u16(),()=>b(e),5),t.Unk22=e.u16(),t.Unk23=e.u8(),t.Unk24=e.u32(),t.Unk25=e.u8(),t.statPair=e.array(e.u16(),()=>{let o={};return o.StatType=e.u8(),o.Value=a(e),o},152),t.Unk27=e.u8(),t.Unk28=e.u8(),t.Unk29=e.u8(),t.Name=e.string(20),t.addonSkillFeatureList=e.array(e.u16(),()=>{let o={};return o.SkillId=e.u32(),o.addonSkillFeatureIdList=e.array(e.u16(),()=>e.u32(),5),o},200),t.Unk32=e.u8(),e.bool()&&(t.Unk33_0=e.bytes(12)),t.PlayerId=e.u64(),t.Unk35=e.string(20),t.Unk36=e.u8(),t.Unk37=e.u32(),t.GearLevel=e.u32(),t.Unk39=e.u32(),t.struct_302=e.array(e.u16(),()=>T(e),32),t.Unk41=e.u64(),t.CharacterId=e.u64(),t.Unk43=e.u32(),t.Unk44=e.u32(),t}function xo(e){let t={};return t.Unk0=e.bytes(12),e.bool()&&(t.Unk1_0=e.bytes(12)),t.Unk2=e.u32(),t.Unk3=e.u32(),t}function St(e){let t=new n(e),o={};return t.bool()&&(o.Unk5_0_m=t.bytes(20)),t.bool()&&(o.Unk3_0_m=t.u32()),o.PCStruct=So(t),o.Unk0_m=t.u8(),t.bool()&&(o.TrackMoveInfo=xo(t)),o.Unk2_m=t.u8(),t.bool()&&(o.Unk4_0_m=t.bytes(12)),o}var xt="PKTNewPC",Ut=38230;function U(e,t=0){return{first:e.u8(),second:e.u8(),third:e.u8()}}function Uo(e,t){e.u8(t.first),e.u8(t.second),e.u8(t.third)}function g(e,t=0){return{first:e.u16(),second:e.u16(),third:e.u16()}}function Ko(e,t){e.u16(t.first),e.u16(t.second),e.u16(t.third)}function Io(e){let t={};return t.Unk0=e.u8(),t.Unk1=e.u32(),t.TargetObjectId=e.u64(),t.Unk3=e.u16(),t.Unk4=e.u16(),t.SkillEffect=e.u32(),t.tripodIndex=U(e),t.Unk7=e.u8(),t.tripodLevel=g(e),t.Unk9=e.u64(),e.bool()&&(t.Unk10_0=e.u32()),t.ProjectileId=e.u64(),e.bool()&&(t.struct_324=e.bytes(e.u16(),11,9)),t.OwnerId=e.u64(),t.Unk14=e.u32(),t.ChainSkillEffect=e.u32(),t.Unk16=e.u64(),t.SkillLevel=e.u8(),t.SkillId=e.u32(),t.Unk19=e.u32(),e.bool()&&(t.Unk20_0=e.u64()),t}function gt(e){let t=new n(e),o={};return o.projectileInfo=Io(t),o}var Kt="PKTNewProjectile",Nt=48846;function It(e){let t=new n(e),o={};return o.ObjectId=t.u64(),o.NoHitCheckTime=t.u32(),o.ParalyzationMaxPoint=t.u32(),o.ParalyzationPoint=t.u32(),o.HitCheckTime=t.u32(),o.Enable=t.bool(),t.skip(1),o.DecreasePoint=t.u32(),t.skip(1),o}var Et="PKTParalyzationStateNotify",vt=13954;function Eo(e){let t={};return t.ZoneId=e.u32(),t.Unk1=e.u8(),t.Unk2=e.u16(),t.WorldId=e.u8(),t.ClassId=e.u16(),t.Unk5=e.u8(),t.Unk6=e.u8(),t.MaxHp=a(e),t.Position=f(e),t.Unk9=e.u8(),t.CurHp=a(e),t.Auths=e.u8(),t.Name=e.string(20),t.TransitIndex=e.u32(),t.CharacterLevel=e.u16(),t.CharacterId=e.u64(),t.PartyMemberNumber=e.u8(),t.GearLevel=e.u32(),t.Unk18=e.u8(),t.ZoneInstId=e.u64(),t}function ht(e){let t=new n(e),o={};return o.RaidInstanceId=t.u32(),o.LootGrade=t.u32(),o.PartyLootType=t.u8(),o.PartyInstanceId=t.u32(),o.MemberDatas=t.array(t.u16(),()=>Eo(t),40),o.PartyType=t.u8(),o}var Rt="PKTPartyInfo",Dt=2273;function _t(e){let t=new n(e),o={};return o.PartyInstanceId=t.u32(),o.Name=t.string(20),o.PartyLeaveType=t.u8(),o}var At="PKTPartyLeaveResult",Bt=57280;function Ct(e){let t=new n(e),o={};return o.passiveStatusEffectList=t.array(t.u16(),()=>t.u32(),10),o.ObjectId=t.u64(),o.Unk0_m=t.u8(),o}var Lt="PKTPartyPassiveStatusEffectAddNotify",wt=44797;function Mt(e){let t=new n(e),o={};return o.passiveStatusEffectList=t.array(t.u16(),()=>t.u32(),10),o.ObjectId=t.u64(),o}var Ot="PKTPartyPassiveStatusEffectRemoveNotify",Ft=48015;function jt(e){let t=new n(e),o={};return o.statusEffectDatas=t.array(t.u16(),()=>s(t),80),o.PlayerIdOnRefresh=t.u64(),o.CharacterId=t.u64(),o.Unk3=t.u8(),o.Unk4=t.u64(),o}var Vt="PKTPartyStatusEffectAddNotify",Zt=56075;function zt(e){let t=new n(e),o={};return o.statusEffectIds=t.array(t.u16(),()=>t.u32(),80),o.CharacterId=t.u64(),o.Unk2=t.u64(),o.Reason=t.u8(),o}var Ht="PKTPartyStatusEffectRemoveNotify",Gt=9020;function Wt(e){let t=new n(e),o={};return t.skip(1),o.CharacterId=t.u64(),t.skip(4),o.RaidInstanceId=t.u32(),o.PartyInstanceId=t.u32(),t.skip(22),o}var Yt="PKTPartyStatusEffectResultNotify",$t=46121;function qt(e){let t=new n(e),o={};return o.passiveStatusEffectList=t.array(t.u16(),()=>t.u32(),10),o}var Jt="PKTPassiveStatusEffectAddNotify",Qt=8484;function Xt(e){let t=new n(e),o={};return o.passiveStatusEffectList=t.array(t.u16(),()=>t.u32(),10),o}var te="PKTPassiveStatusEffectRemoveNotify",ee=48556;function oe(e){let t=new n(e),o={};return o.Unk0=t.bytes(5),o}var ne="PKTRaidBossKillNotify",re=45163;function ae(e){let t=new n(e),o={};return o.Unk0=t.u64(),o.Unk1=t.u64(),o.Unk2=t.u8(),o.Unk3=t.u8(),o.Unk4=t.u64(),o.Unk5=t.u8(),o.struct_47=t.array(t.u16(),()=>{let r={};return r.struct_506=t.bytes(t.u16(),3),r.Unk0_0_1=a(t),r.Unk0_0_2=a(t),r.Unk0_0_3=t.u32(),r},3),o.Unk7=t.u64(),o}var ie="PKTRaidResult",se=34118;function vo(e){let t={};return t.UnpublishReason=e.u8(),t.ObjectId=e.u64(),t}function ue(e){let t=new n(e),o={};return o.unpublishedObjects=t.array(t.u16(),()=>vo(t),200),o}var fe="PKTRemoveObject",me=42767;function ce(e){let t=new n(e),o={};return o.SkillLevel=t.u8(),o.Caster=t.u64(),o.SkillId=t.u32(),t.skip(2),o}var pe="PKTSkillCastNotify",de=40202;function K(e){let t={};return t.DamageType=e.u8(),t.Modifier=e.u8(),t.Unk3_m=e.u16(),t.MaxHp=a(e),e.bool()&&(t.DamageAttr=e.u8()),t.CurHp=a(e),t.Damage=a(e),t.TargetId=e.u64(),t}function Ro(e,t=0){let o={},r=e.u8();return r&1&&(o.MoveTime=e.u32()),r&2&&(o.StandUpTime=e.u32()),r&4&&(o.DownTime=e.u32()),r&8&&(o.FreezeTime=e.u32()),r&16&&(o.MoveHeight=e.u32()),r&32&&(o.FarmostDist=e.u32()),r&64&&(o.flag40=e.bytes(e.u16(),6)),o}function lr(e,t){let o=(t.MoveTime===void 0?0:1)|(t.StandUpTime===void 0?0:2)|(t.DownTime===void 0?0:4)|(t.FreezeTime===void 0?0:8)|(t.MoveHeight===void 0?0:16)|(t.FarmostDist===void 0?0:32)|(t.flag40===void 0?0:64);e.u8(o),o&1&&e.u32(t.MoveTime),o&2&&e.u32(t.StandUpTime),o&4&&e.u32(t.DownTime),o&8&&e.u32(t.FreezeTime),o&16&&e.u32(t.MoveHeight),o&32&&e.u32(t.FarmostDist),o&64&&e.bytes(t.flag40,{maxLen:6,lenType:"u16"})}function Do(e){let t={};return t.Unk8_m=e.u16(),t.Position=f(e),t.skillDamageEvent=K(e),t.Unk4_m=e.u16(),t.Unk2_m=e.u64(),t.Unk3_m=e.u16(),t.SkillMoveOptionData=Ro(e),t.Unk1_m=e.u8(),t.Destination=f(e),t}function le(e){let t=new n(e),o={};return o.SkillEffectId=t.u32(),o.SkillDamageAbnormalMoveEvents=t.array(t.u16(),()=>Do(t),50),o.Unk1_m=t.u8(),o.Unk2_m=t.u32(),o.SkillId=t.u32(),o.SourceId=t.u64(),o}var ye="PKTSkillDamageAbnormalMoveNotify",be=59998;function Pe(e){let t=new n(e),o={};return o.SkillLevel=t.u8(),o.SourceId=t.u64(),o.SkillEffectId=t.u32(),o.SkillDamageEvents=t.array(t.u16(),()=>K(t),50),o.SkillId=t.u32(),o}var ke="PKTSkillDamageNotify",Te=26332;function Se(e){let t=new n(e),o={};return o.SkillId=t.u32(),t.skip(16),o.SourceId=t.u64(),t.skip(19),o.Stage=t.u8(),t.skip(5),o}var xe="PKTSkillStageNotify",Ue=9713;function _o(e,t=0){let o={},r=e.u8();return r&1&&(o.LayerIndex=e.u8()),r&2&&(o.StartStageIndex=e.u8()),r&4&&(o.TransitIndex=e.u32()),r&8&&(o.StageStartTime=e.u32()),r&16&&(o.FarmostDistance=e.u32()),r&32&&(o.TripodIndex=U(e)),r&64&&(o.TripodLevel=g(e)),o}function xr(e,t){let o=(t.LayerIndex===void 0?0:1)|(t.StartStageIndex===void 0?0:2)|(t.TransitIndex===void 0?0:4)|(t.StageStartTime===void 0?0:8)|(t.FarmostDistance===void 0?0:16)|(t.TripodIndex===void 0?0:32)|(t.TripodLevel===void 0?0:64);e.u8(o),o&1&&e.u8(t.LayerIndex),o&2&&e.u8(t.StartStageIndex),o&4&&e.u32(t.TransitIndex),o&8&&e.u32(t.StageStartTime),o&16&&e.u32(t.FarmostDistance),o&32&&Uo(e,t.TripodIndex),o&64&&Ko(e,t.TripodLevel)}function ge(e){let t=new n(e),o={};return o.SkillId=t.u32(),o.NewPosition=f(t),o.CurDirectionYaw=p(t),t.bool()&&(o.Unk1_m=t.u32()),o.SkillLevel=t.u8(),t.bool()&&(o.PitchRotation=p(t)),o.SkillOptionData=_o(t),o.NewDirectionYaw=p(t),o.SourceId=t.u64(),t.bool()&&(o.AiStateId=t.u32()),o.AimTargetPosition=f(t),o.CurPosition=f(t),o}var Ke="PKTSkillStartNotify",Ne=52727;function Ie(e){let t=new n(e),o={};return o.ObjectId=t.u64(),o.Unk1=t.u8(),t.bool()&&(o.Unk2_0=t.u32()),o.StatPairChangedList=t.array(t.u16(),()=>{let r={};return r.StatType=t.u8(),r.Value=a(t),r},152),o.Unk4=t.array(t.u16(),()=>{let r={};return r.StatType=t.u8(),r.Value=a(t),r},152),o}var Ee="PKTStatChangeOriginNotify",ve=8370;function he(e){let t=new n(e),o={};return o.New=t.bool(),o.Unk1=t.u64(),t.bool()&&(o.Unk2_0=t.u64()),o.ObjectId=t.u64(),o.statusEffectData=s(t),o}var Re="PKTStatusEffectAddNotify",De=29231;function _e(e){let t=new n(e),o={};return o.Reason=t.u8(),o.statusEffectIds=t.array(t.u16(),()=>t.u32(),80),o.ObjectId=t.u64(),o}var Ae="PKTStatusEffectRemoveNotify",Be=36929;function Ce(e){let t=new n(e),o={};return t.skip(1),o.TargetId=t.u64(),t.skip(1),o.ExpirationTick=t.u64(),t.skip(1),o.EffectInstanceId=t.u32(),o}var Le="PKTStatusEffectDurationNotify",we=43493;function Me(e){let t=new n(e),o={};return o.ObjectId=t.u64(),o.Value=t.u32(),t.skip(6),o.EffectInstanceId=t.u32(),o.CharacterId=t.u64(),o}var Oe="PKTStatusEffectSyncDataNotify",Fe=39153;function je(e){let t=new n(e),o={};return o.TriggerId=t.u32(),o.Unk2_m=t.bool(),t.skip(1),o.Step=t.u32(),o}var Ve="PKTTriggerBossBattleStatus",Ze=23399;function ze(e){let t=new n(e),o={};return o.PacketResultCode=t.u32(),o.Unk0_m=t.u32(),o.InvolvedPCs=t.array(t.u16(),()=>t.u64(),40),o.TriggerId=t.u32(),o}var He="PKTTriggerFinishNotify",Ge=48546;function We(e){let t=new n(e),o={};return o.TriggerSignalType=t.u32(),o.TriggerId=t.u32(),o.SourceId=t.u64(),o.InvolvedPCs=t.array(t.u16(),()=>t.u64(),40),o}var Ye="PKTTriggerStartNotify",$e=54667;function qe(e){let t=new n(e),o={};return o.Position=t.u64(),o.MaxHp=a(t),o.statusEffectDatas=t.array(t.u16(),()=>s(t),80),o.Unk0_m=t.u32(),o.CurHp=a(t),o.CharacterId=t.u64(),o}var Je="PKTTroopMemberUpdateMinNotify",Qe=51633;function Xe(e){let t=new n(e),o={};return t.skip(1),o.PlayerId=t.u64(),o.IdentityGauge1=t.u32(),o.IdentityGauge2=t.u32(),o.IdentityGauge3=t.u32(),t.skip(2),o}var to="PKTIdentityGaugeChangeNotify",eo=53656;function oo(e){let t=new n(e),o={};return o.ObjectId=t.u64(),t.skip(2),o}var no="PKTZoneObjectUnpublishNotify",ro=37146;function Ao(e){let t={};return t.StackCount=e.u8(),t.Id=e.u32(),t.InstanceId=e.u64(),t.Target=e.u8(),t}function ao(e){let t=new n(e),o={};return o.zoneStatusEffectDataList=t.array(t.u16(),()=>Ao(t),4),o}var io="PKTZoneStatusEffectAddNotify",so=44701;function uo(e){let t=new n(e),o={};return t.skip(2),o.StatusEffectId=t.u32(),o}var fo="PKTZoneStatusEffectRemoveNotify",mo=4905;var Bo=new Map([[h,[v,E]],[_,[D,R]],[C,[B,A]],[M,[w,L]],[j,[F,O]],[z,[Z,V]],[W,[G,H]],[q,[$,Y]],[et,[tt,X]],[at,[rt,nt]],[ut,[st,it]],[ct,[mt,ft]],[bt,[yt,lt]],[Tt,[kt,Pt]],[Ut,[xt,St]],[Nt,[Kt,gt]],[vt,[Et,It]],[Dt,[Rt,ht]],[Bt,[At,_t]],[wt,[Lt,Ct]],[Ft,[Ot,Mt]],[Zt,[Vt,jt]],[Gt,[Ht,zt]],[$t,[Yt,Wt]],[Qt,[Jt,qt]],[ee,[te,Xt]],[re,[ne,oe]],[se,[ie,ae]],[me,[fe,ue]],[de,[pe,ce]],[be,[ye,le]],[Te,[ke,Pe]],[Ue,[xe,Se]],[Ne,[Ke,ge]],[ve,[Ee,Ie]],[De,[Re,he]],[Be,[Ae,_e]],[we,[Le,Ce]],[Fe,[Oe,Me]],[Ze,[Ve,je]],[Ge,[He,ze]],[$e,[Ye,We]],[Qe,[Je,qe]],[eo,[to,Xe]],[ro,[no,oo]],[so,[io,ao]],[mo,[fo,uo]]]);var Co=class extends en{#t;constructor(t){super(),this.#t=t}read(t){try{if(t.length<6)return!1;let o=t.readUInt8(5);if(o>2)return!1;let r=t.readUInt8(4);if(r>3)return!1;let i=t.subarray(6),u=t.readUInt16LE(2),m=Bo.get(u);if(m){let[P,k]=m;this.emit(P,new co(Buffer.from(i),u,r,!!o,this.#t,k))}this.emit("*",i,u,r,!!o)}catch{return!1}}},co=class{#t;#o;#n;#r;#a;#i;constructor(t,o,r,i,u,m){this.#t=t,this.#o=o,this.#n=r,this.#r=i,this.#a=u,this.#i=m}#e;get parsed(){if(!this.#e)try{this.#e=this.#i(this.#a.decrypt(this.#t,this.#o,this.#n,this.#r))}catch(t){console.error(`[meter-core/pkt-stream] - ${t}`);return}return this.#e}};export{n as a,po as b,h as c,_ as d,C as e,j as f,z as g,W as h,q as i,y as j,Sn as k,et as l,a as m,gn as n,at as o,ut as p,ct as q,f as r,Rn as s,p as t,Dn as u,bt as v,Tt as w,Ut as x,U as y,Uo as z,g as A,Ko as B,Nt as C,vt as D,Dt as E,Bt as F,wt as G,Ft as H,Zt as I,Gt as J,$t as K,Qt as L,ee as M,re as N,se as O,me as P,de as Q,Ro as R,lr as S,be as T,Te as U,Ue as V,_o as W,xr as X,Ne as Y,De as Z,Be as _,we as $,Fe as aa,Ze as ba,Ge as ca,$e as da,Qe as ea,eo as fa,ro as ga,so as ha,mo as ia,Bo as ja,Co as ka,co as la};