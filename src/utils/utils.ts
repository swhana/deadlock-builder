import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

//tailwind css를 합치기 위한 유틸함수
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
