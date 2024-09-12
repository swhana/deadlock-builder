export type Item = {
  id: number;
  name: string; //dev name
  localization: {
    en: string;
    ko: string;
  }; //in-game name
  tier: number; //item tier
  type: string; //item type
  image: string; //image source
  desc?: {
    en: string;
    ko: string;
  }; //item description(passive)
  active_desc?: {
    en: string;
    ko: string;
  }; //item description(active)
  stats?: ItemStats;
};

export type ItemStats = {
  bullet_speed?: number; //탄환 속도(%)
  weapon_damage?: number; //무기 피해(%)
  bullet_shield?: number; //방탄막 체력
  npc_weapon_damage?: number; //NPC 대상 무기 피해(%)
  npc_bullet_resist?: number; //NPC 대상 탄환 저항(%)
  health?: number; //체력
  phealth?: number; //체력(%)
  health_regen?: number; //체력 재생
  bullet?: number; //탄약(%)
  fbullet?: number; //탄약
  spirit_shield?: number; //스피릿 보호막 체력
  spirit_damage?: number; //스피릿 위력
  fire_rate?: number; //연사 속도(%)
  run_speed?: number; //전력질주 속도
  bullet_resist?: number; //탄환 저항(%)
  reload_time?: number; //재장전 시간(%)
  slide_distance?: number; //슬라이드 거리(%)
  spirit_resist?: number; //스피릿 저항(%)
  stamina?: number; //스태미나
  damage_reduce_distance?: number; //무기 피해 감소 거리(%)
  scope?: number; //무기 화면 확대 배율(%)
  bullet_drain?: number; //탄환 흡혈(%)
  move_speed?: number; //이동 속도\
  spirit_drain?: number; //스피릿 흡혈(%)
  cooldown?: number; //쿨다운 감소(%)
  cooldown_c?: number; //연동된 능력 쿨다운 감소(%)
  bullet_slow_rate?: number; //탄환 둔화 확률(%)
  melee_damage?: number; //근접 피해(%)
  stamina_regen?: number; //스태미나 회복(%)
  ability_range?: number; //능력 범위 증가(%)
  ability_range_c?: number; //연동된 능력 범위 증가(%)
  jump_dash_distance?: number; // 점프-대시 거리(%)
  ability_charge?: number; //추가 능력 충전
  charge_ability_cooldown?: number; //충전된 능력의 쿨다운 감소(%)
  ability_duration?: number; //능력 지속 시간 증가(%)
  ability_duration_c?: number; //연동된 능력 지속 시간 증가(%)
  charge_cooldown?: number; //충전 쿨다운 감소(%)
  reduce_spirit_resist?: number; //상대 스피릿 저항 감소(스피릿 피해에 대한 스피릿 저항이라고 하는데 잘 모르겠음)
};

export type ItemBuild = {
  name: string;
  build: Item[];
};
