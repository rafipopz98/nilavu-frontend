import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const objectFind = (a: any, key: string, select: any) => {
  const res = a.find((i: any) => i[key] === select);
  if (res) {
    return res;
  }
  return {};
};
