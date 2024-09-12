import { ItemBuild } from "@/config/types";
import { atom } from "recoil";

export const itemBuildAtom = atom<ItemBuild[]>({
  key: "itemBuildAtom",
  default: [],
});
