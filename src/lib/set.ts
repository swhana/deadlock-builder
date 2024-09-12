import { Item } from "@/config/types";

class ObjSet {
  set;
  constructor(items: Item[]) {
    this.set = new Map<number, Item>();
    for (const item of items) {
      this.set.set(item.id, item);
    }
  }

  add(obj: Item[]) {
    for (const item of obj) {
      if (this.set.has(item.id)) continue;
      else this.set.set(item.id, item);
    }
  }

  size() {
    return this.set.size;
  }

  toArray() {
    const ret: Item[] = [];
    this.set.forEach((item) => ret.push(item));

    return ret;
  }
}

export default ObjSet;
