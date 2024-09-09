"use client";

import ItemCard from "@/components/ItemCard";
import { items } from "./data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChangeEvent, useEffect, useState } from "react";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [itemList, setItemList] = useState(items);

  const weapons = itemList.filter((item) => item.type === "weapon");
  const armors = itemList.filter((item) => item.type === "armor");
  const techs = itemList.filter((item) => item.type === "tech");

  const search = (e) => {
    setKeyword(e.target.value);
  };

  useEffect(() => {
    setItemList(items.filter((item) => item.localization.ko.includes(keyword)));
  }, [keyword]);

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
          <Input type="search" className="w-72" />
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
