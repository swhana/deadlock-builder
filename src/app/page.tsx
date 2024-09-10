"use client";

import ItemCard from "@/components/ItemCard";
import { items } from "./data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChangeEvent, useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [tc, setTc] = useState("title");
  const [itemList, setItemList] = useState(items);

  const weapons = itemList.filter((item) => item.type === "weapon");
  const armors = itemList.filter((item) => item.type === "armor");
  const techs = itemList.filter((item) => item.type === "tech");

  let debounceTimer;

  const search = (e) => {
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }

    debounceTimer = setTimeout(() => {
      setKeyword(e.target.value);
      console.log(e.target.value);
    }, 250);
  };

  useEffect(() => {
    if (tc === "title")
      setItemList(
        items.filter((item) => item.localization.ko.includes(keyword))
      );
    else if (tc === "content") {
      const desc = items.filter((item) => item.desc?.ko.includes(keyword));

      const active = items.filter((item) =>
        item.active_desc?.ko.includes(keyword)
      );

      const ret = [...desc, ...active].filter(
        (value, index, self) =>
          index === self.findIndex((e) => value.id === e.id)
      );

      setItemList(ret);
    } else {
      const title = items.filter((item) =>
        item.localization.ko.includes(keyword)
      );

      const desc = items.filter((item) => item.desc?.ko.includes(keyword));

      const active = items.filter((item) =>
        item.active_desc?.ko.includes(keyword)
      );

      const ret = [...title, ...desc, ...active].filter(
        (value, index, self) =>
          index === self.findIndex((e) => value.id === e.id)
      );

      setItemList(ret);
    }
  }, [keyword, tc]);

  window.addEventListener("input", search);

  return (
    <div className="flex justify-center w-full h-[100vh]">
      <Tabs defaultValue="weapon" className="w-[60vw] mt-12">
        <div className="flex flex-row justify-between">
          <TabsList className="grid grid-cols-3 w-[30vw]">
            <TabsTrigger value="weapon">무기</TabsTrigger>
            <TabsTrigger value="armor">생명력</TabsTrigger>
            <TabsTrigger value="tech">스피릿</TabsTrigger>
          </TabsList>
          <div className="flex flex-row gap-2">
            <Select onValueChange={(value) => setTc(value)}>
              <SelectTrigger className="w-28">
                <SelectValue placeholder="제목" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="title">제목</SelectItem>
                <SelectItem value="content">내용</SelectItem>
                <SelectItem value="titlecontent">제목+내용</SelectItem>
              </SelectContent>
            </Select>
            <Input type="search" className="w-72" />
          </div>
        </div>

        <TabsContent value="weapon">
          <div className={styles.row}>
            {weapons
              .filter((weapon) => weapon.tier === 1)
              .sort((a, b) => (a.localization.ko > b.localization.ko ? 1 : -1))
              .map((item) => (
                <ItemCard
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  localization={item.localization}
                  tier={item.tier}
                  type={item.type}
                  stats={item.stats}
                />
              ))}
          </div>
          <div className={styles.row}>
            {weapons
              .filter((weapon) => weapon.tier === 2)
              .sort((a, b) => (a.localization.ko > b.localization.ko ? 1 : -1))
              .map((item) => (
                <ItemCard
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  localization={item.localization}
                  tier={item.tier}
                  type={item.type}
                  stats={item.stats}
                />
              ))}
          </div>
          <div className={styles.row}>
            {weapons
              .filter((weapon) => weapon.tier === 3)
              .sort((a, b) => (a.localization.ko > b.localization.ko ? 1 : -1))
              .map((item) => (
                <ItemCard
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  localization={item.localization}
                  tier={item.tier}
                  type={item.type}
                  stats={item.stats}
                />
              ))}
          </div>
          <div className={styles.row}>
            {weapons
              .filter((weapon) => weapon.tier === 4)
              .sort((a, b) => (a.localization.ko > b.localization.ko ? 1 : -1))
              .map((item) => (
                <ItemCard
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  localization={item.localization}
                  tier={item.tier}
                  type={item.type}
                  stats={item.stats}
                />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="armor">
          <div className={styles.row}>
            {armors
              .filter((armor) => armor.tier === 1)
              .sort((a, b) => (a.localization.ko > b.localization.ko ? 1 : -1))
              .map((item) => (
                <ItemCard
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  localization={item.localization}
                  tier={item.tier}
                  type={item.type}
                />
              ))}
          </div>
          <div className={styles.row}>
            {armors
              .filter((armor) => armor.tier === 2)
              .sort((a, b) => (a.localization.ko > b.localization.ko ? 1 : -1))
              .map((item) => (
                <ItemCard
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  localization={item.localization}
                  tier={item.tier}
                  type={item.type}
                />
              ))}
          </div>
          <div className={styles.row}>
            {armors
              .filter((armor) => armor.tier === 3)
              .sort((a, b) => (a.localization.ko > b.localization.ko ? 1 : -1))
              .map((item) => (
                <ItemCard
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  localization={item.localization}
                  tier={item.tier}
                  type={item.type}
                />
              ))}
          </div>
          <div className={styles.row}>
            {armors
              .filter((armor) => armor.tier === 4)
              .sort((a, b) => (a.localization.ko > b.localization.ko ? 1 : -1))
              .map((item) => (
                <ItemCard
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  localization={item.localization}
                  tier={item.tier}
                  type={item.type}
                />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="tech">
          <div className={styles.row}>
            {techs
              .filter((tech) => tech.tier === 1)
              .sort((a, b) => (a.localization.ko > b.localization.ko ? 1 : -1))
              .map((item) => (
                <ItemCard
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  localization={item.localization}
                  tier={item.tier}
                  type={item.type}
                />
              ))}
          </div>
          <div className={styles.row}>
            {techs
              .filter((tech) => tech.tier === 2)
              .sort((a, b) => (a.localization.ko > b.localization.ko ? 1 : -1))
              .map((item) => (
                <ItemCard
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  localization={item.localization}
                  tier={item.tier}
                  type={item.type}
                />
              ))}
          </div>
          <div className={styles.row}>
            {techs
              .filter((tech) => tech.tier === 3)
              .sort((a, b) => (a.localization.ko > b.localization.ko ? 1 : -1))
              .map((item) => (
                <ItemCard
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  localization={item.localization}
                  tier={item.tier}
                  type={item.type}
                />
              ))}
          </div>
          <div className={styles.row}>
            {techs
              .filter((tech) => tech.tier === 4)
              .sort((a, b) => (a.localization.ko > b.localization.ko ? 1 : -1))
              .map((item) => (
                <ItemCard
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  localization={item.localization}
                  tier={item.tier}
                  type={item.type}
                />
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

const styles = {
  row: "row flex flex-row gap-2 max-w-[60vw] flex-wrap m-4",
};
