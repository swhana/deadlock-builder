"use client";

import { Item } from "@/config/types";
import { colors } from "@/utils/colors";
import Image from "next/image";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { itemStats } from "@/utils/locale";
import { cn } from "@/lib/utils";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  armorItemAtom,
  flexItemAtom,
  techItemAtom,
  totalItemSelector,
  weaponItemAtom,
} from "@/state";

const itemCost = (tier: number) => {
  if (tier === 1) return 500;
  else if (tier === 2) return 1250;
  else if (tier === 3) return 3000;
  else return 6300;
};

interface Props {
  item: Item;
  border: boolean;
}

export default function ItemCard({ item, border = true }: Props) {
  const [weapons, setWeapons] = useRecoilState(weaponItemAtom);
  const [armors, setArmors] = useRecoilState(armorItemAtom);
  const [techs, setTechs] = useRecoilState(techItemAtom);
  const [flexs, setFlexs] = useRecoilState(flexItemAtom);
  const totalItems = useRecoilValue(totalItemSelector);

  const isSelected = totalItems.some((e) => e.id === item.id);

  const toggleSelectItem = () => {
    //이미 선택한 아이템인 경우 선택해제
    if (isSelected) {
      switch (item.type) {
        case "weapon": {
          setWeapons(weapons.filter((weapon) => weapon.id !== item.id));
          setFlexs(flexs.filter((flex) => flex.id !== item.id));
          break;
        }
        case "armor": {
          setArmors(armors.filter((armor) => armor.id !== item.id));
          setFlexs(flexs.filter((flex) => flex.id !== item.id));
          break;
        }
        case "tech": {
          setTechs(techs.filter((tech) => tech.id !== item.id));
          setFlexs(flexs.filter((flex) => flex.id !== item.id));
          break;
        }
      }
    }
    //선택
    else {
      switch (item.type) {
        case "weapon": {
          if (weapons.length < 4) setWeapons([...weapons, item]);
          else if (flexs.length < 4) setFlexs([...flexs, item]);
          break;
        }
        case "armor": {
          if (armors.length < 4) setArmors([...armors, item]);
          else if (flexs.length < 4) setFlexs([...flexs, item]);
          break;
        }
        case "tech": {
          if (techs.length < 4) setTechs([...techs, item]);
          else if (flexs.length < 4) setFlexs([...flexs, item]);
          break;
        }
      }
    }
  };

  const bgColor =
    item.type === "weapon"
      ? colors.orange
      : item.type === "armor"
      ? colors.green
      : colors.purple;

  const descColor =
    item.type === "weapon"
      ? colors.deeporange
      : item.type === "armor"
      ? colors.deepgreen
      : colors.deeppurple;

  const cost = itemCost(item.tier);
  const stats = item.stats ? itemStats(item.stats, "ko") : [];

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div
          className={
            isSelected && border
              ? "border-2 border-cyan-500 rounded-lg"
              : "border-2 border-white rounded-lg"
          }
        >
          <div
            className={"w-24 h-24 rounded-md flex flex-col shadow-md"}
            onClick={toggleSelectItem}
          >
            <div
              className={cn(
                bgColor,
                "w-24 h-12 flex justify-center items-center rounded-t-md"
              )}
            >
              <Image
                key={item.id}
                src={item.image}
                alt={item.name}
                width={25}
                height={25}
                style={{
                  filter: "invert(80%)",
                }}
              />
            </div>
            <div className="w-24 h-12 bg-zinc-100 flex flex-col items-center justify-center font-bold text-xs rounded-b-md">
              {item.localization.ko}
            </div>
          </div>
        </div>
      </HoverCardTrigger>
      <HoverCardContent
        className={cn("w-96 rounded-md flex flex-col p-0", bgColor)}
        side="right"
      >
        <div>
          <div className="pt-4 px-4 pb-2">
            <div className="text-white font-extrabold text-xl">
              {item.localization.ko}
            </div>
            <div className="text-[#a8ffdc] font-bold">{cost}</div>
          </div>

          <div className={cn(descColor, "rounded-b-md p-4 text-white")}>
            {item.desc ? (
              <div className="text-sm text-gray-100 font-semibold mb-2">
                {item.desc.ko}
              </div>
            ) : (
              <></>
            )}
            {item.active_desc ? (
              <div className="text-sm text-gray-100 font-semibold mb-2">
                {item.active_desc.ko}
              </div>
            ) : (
              <></>
            )}

            {stats.map(([key, value]) => (
              <div key={key} className="flex flex-row gap-1">
                <div className="text-sm text-white font-semibold">{value}</div>
                <div className="text-sm text-gray-100">{key}</div>
              </div>
            ))}
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
