import { Item, ItemStats } from "@/config/types";
import { colors } from "@/utils/colors";
import { cn } from "@/utils/utils";
import Image from "next/image";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

const itemCost = (tier: number) => {
  if (tier === 1) return 500;
  else if (tier === 2) return 1250;
  else if (tier === 3) return 3000;
  else return 6300;
};

const itemStats = (stats: ItemStats) => {
  return Object.entries(stats);
};

export default function ItemCard(props: Item) {
  const bgColor =
    props.type === "weapon"
      ? colors.orange
      : props.type === "armor"
      ? colors.green
      : colors.purple;

  const cost = itemCost(props.tier);

  const stats = props.stats ? itemStats(props.stats) : [];

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div className="w-24 h-24 rounded-md flex flex-col shadow-md">
          <div
            className={cn(
              bgColor,
              "w-24 h-12 flex justify-center items-center rounded-t-md"
            )}
          >
            <Image
              key={props.id}
              src={props.image}
              alt={props.name}
              width={25}
              height={25}
              style={{
                filter: "invert(80%)",
              }}
            />
          </div>
          <div className="w-24 h-12 bg-zinc-100 flex flex-col items-center justify-center font-bold text-xs rounded-b-md">
            {props.localization.ko}
          </div>
        </div>
      </HoverCardTrigger>
      <HoverCardContent
        className={cn("w-full rounded-md flex flex-col", bgColor)}
        side="right"
      >
        <div>
          <div className="text-white font-extrabold text-lg">
            {props.localization.ko}
          </div>
          <div>{cost}</div>
          {stats.map(([key, value]) => (
            <div key={key}>{key + ": " + value}</div>
          ))}
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
