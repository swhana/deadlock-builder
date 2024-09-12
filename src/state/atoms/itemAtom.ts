//atom을 관리하는 파일
import { Item } from "@/config/types";
import { atom } from "recoil";

//선택된 아이템들
export const selectedItemAtom = atom<Item[]>({
  key: "selectedItemAtom",
  default: [],
});

export const weaponItemAtom = atom<Item[]>({
  key: "weaponItemAtom",
  default: [],
});
export const armorItemAtom = atom<Item[]>({
  key: "armorItemAtom",
  default: [],
});
export const techItemAtom = atom<Item[]>({
  key: "techItemAtom",
  default: [],
});
export const flexItemAtom = atom<Item[]>({
  key: "flexItemAtom",
  default: [],
});
