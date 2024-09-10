//ko냐 en에 따라 번역해줄 util함수 정리

import { ItemStats } from "@/config/types";

interface Map {
  [index: string]: string;
}

// 번역 맵핑 객체
const translationMap: Map = {
  bullet_speed: "탄환 속도",
  weapon_damage: "무기 피해",
  bullet_shield: "방탄막 체력",
  npc_weapon_damage: "NPC 대상 무기 피해",
  npc_bullet_resist: "NPC 대상 탄환 저항",
  health: "체력",
  phealth: "체력",
  health_regen: "체력 재생",
  bullet: "탄약",
  fbullet: "탄약",
  spirit_shield: "스피릿 보호막 체력",
  spirit_damage: "스피릿 위력",
  fire_rate: "연사 속도",
  run_speed: "전력질주 속도",
  bullet_resist: "탄환 저항",
  reload_time: "재장전 시간",
  slide_distance: "슬라이드 거리",
  spirit_resist: "스피릿 저항",
  stamina: "스태미나",
  damage_reduce_distance: "무기 피해 감소 거리",
  scope: "무기 화면 확대 배율",
  bullet_drain: "탄환 흡혈",
  move_speed: "이동 속도",
  spirit_drain: "스피릿 흡혈",
  cooldown: "쿨다운 감소",
  cooldown_c: "연동된 능력 쿨다운 감소",
  bullet_slow_rate: "탄환 둔화 확률",
  melee_damage: "근접 피해",
  stamina_regen: "스태미나 회복",
  ability_range: "능력 범위 증가",
  ability_range_c: "연동된 능력 범위 증가",
  jump_dash_distance: "점프-대시 거리",
  ability_charge: "추가 능력 충전",
  charge_ability_cooldown: "충전된 능력의 쿨다운 감소",
  ability_duration: "능력 지속 시간 증가",
  ability_duration_c: "연동된 능력 지속 시간 증가",
  charge_cooldown: "충전 쿨다운 감소",
  reduce_spirit_resist: "상대 스피릿 저항 감소",
};
// 값에 %를 붙여야 하는 키 리스트
const percentKeys = new Set([
  "bullet_speed",
  "weapon_damage",
  "npc_weapon_damage",
  "npc_bullet_resist",
  "phealth",
  "bullet",
  "fire_rate",
  "bullet_resist",
  "reload_time",
  "slide_distance",
  "spirit_resist",
  "damage_reduce_distance",
  "scope",
  "bullet_drain",
  "spirit_drain",
  "cooldown",
  "cooldown_c",
  "bullet_slow_rate",
  "melee_damage",
  "stamina_regen",
  "ability_range",
  "ability_range_c",
  "jump_dash_distance",
  "charge_ability_cooldown",
  "ability_duration",
  "ability_duration_c",
  "charge_cooldown",
]);

// locale에 따른 아이템 스탯 번역
export const itemStats = (stats: ItemStats, locale: string) => {
  const entries = Object.entries(stats);

  if (locale === "ko") {
    const ret = [];
    for (const [key, value] of entries) {
      const translated = translationMap[key];
      if (translated) {
        const displayValue = percentKeys.has(key)
          ? `${value}%`
          : value.toString();
        ret.push([translated, displayValue]);
      }
    }

    return ret;
  }

  return entries;
};
