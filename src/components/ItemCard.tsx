import { Item } from "@/config/types";
import { colors } from "@/utils/colors";
import { cn } from "@/utils/utils";
import Image from "next/image";

export default function ItemCard(props: Item) {
  const bgColor =
    props.type === "weapon"
      ? colors.orange
      : props.type === "armor"
      ? colors.green
      : colors.purple;

  return (
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
      <div className="w-24 h-12 bg-zinc-100 flex items-center justify-center font-bold text-xs rounded-b-md">
        {props.localization.ko}
      </div>
    </div>
  );
}
