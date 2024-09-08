import { colors } from "@/utils/colors";
import { cn } from "@/utils/utils";
import Image from "next/image";

type ItemProps = {
  id: number;
  name: string;
  localization?: string;
  tier?: number;
  type: string;
  image: string;
};

export default function Icon({ id, name, type, image }: ItemProps) {
  if (image === "") return;
  return (
    <Image
      key={id}
      src={image}
      alt={name}
      width={50}
      height={50}
      className={cn(
        type === "weapon"
          ? colors.deeporange
          : type === "armor"
          ? colors.deepgreen
          : colors.deeppurple,
        "rounded-md"
      )}
    />
  );
}
