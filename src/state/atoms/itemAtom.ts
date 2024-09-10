//atom을 관리하는 파일
import { Item } from "@/config/types";
import { atom } from "recoil";

//선택된 아이템들
export const selectedItemAtom = atom<Item[]>({
  key: "selectedItemAtom",
  default: [],
});
