import { selector } from "recoil";
import { selectedItemAtom } from "../atoms/itemAtom";
import { ItemStats } from "@/config/types";
import { itemStats } from "@/utils/locale";

export const totalItemSelector = selector({
  key: "totalItemSelector",
  get: ({ get }) => {
    const selectedItems = get(selectedItemAtom);

    const initialStats: ItemStats = {
      bullet_speed: 0,
      weapon_damage: 0,
      bullet_shield: 0,
      npc_weapon_damage: 0,
      npc_bullet_resist: 0,
      health: 0,
      phealth: 0,
      health_regen: 0,
      bullet: 0,
      fbullet: 0,
      spirit_shield: 0,
      spirit_damage: 0,
      fire_rate: 0,
      run_speed: 0,
      bullet_resist: 0,
      reload_time: 0,
      slide_distance: 0,
      spirit_resist: 0,
      stamina: 0,
      damage_reduce_distance: 0,
      scope: 0,
      bullet_drain: 0,
      move_speed: 0,
      spirit_drain: 0,
      cooldown: 0,
      cooldown_c: 0,
      bullet_slow_rate: 0,
      melee_damage: 0,
      stamina_regen: 0,
      ability_range: 0,
      ability_range_c: 0,
      jump_dash_distance: 0,
      ability_charge: 0,
      charge_ability_cooldown: 0,
      ability_duration: 0,
      ability_duration_c: 0,
      charge_cooldown: 0,
      reduce_spirit_resist: 0,
    };

    // itemstat 합산 로직
    const totalStats = selectedItems.reduce((acc: ItemStats, item) => {
      // 각 속성에 대해 합산 처리
      if (item.stats !== undefined) {
        for (const [statKey, statValue] of Object.entries(item.stats)) {
          const key = statKey as keyof ItemStats;
          if (acc[key]) acc[key] += statValue;
          else acc[key] = statValue;
        }
      }
      return acc;
    }, initialStats);

    return itemStats(totalStats, "ko");
  },
});
