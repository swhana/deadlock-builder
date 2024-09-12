"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ItemRow from "@/components/ItemRow";
import { items } from "@/app/data";

import Stats from "./Stats";
import ItemBuild from "./ItemBuild";

export default function Item() {
  const [keyword, setKeyword] = useState("");
  const [tc, setTc] = useState("title");
  const [itemList, setItemList] = useState(items);
  const searchInputRef = useRef(null);

  const weapons = itemList.filter((item) => item.type === "weapon");
  const armors = itemList.filter((item) => item.type === "armor");
  const techs = itemList.filter((item) => item.type === "tech");

  let debounceTimer: NodeJS.Timeout | null;

  const search = (e) => {
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }

    debounceTimer = setTimeout(() => {
      setKeyword(e.target.value);
    }, 250);
  };

  document.addEventListener("input", (e) => {
    if (searchInputRef.current === e.target) search(e);
    else return;
  });

  useEffect(() => {
    //검색어가 없으면 전체 리스트 리턴
    if (keyword === "") {
      setItemList(items);
    }
    //제목
    else if (tc === "title")
      setItemList(
        items.filter((item) => item.localization.ko.includes(keyword))
      );
    //내용
    else if (tc === "content") {
      const desc = items.filter((item) => item.desc?.ko.includes(keyword));

      const active = items.filter((item) =>
        item.active_desc?.ko.includes(keyword)
      );

      const ret = [...desc, ...active].filter(
        (value, index, self) =>
          index === self.findIndex((e) => value.id === e.id)
      );

      // const ret = new ObjSet([...desc, ...active]).toArray();
      setItemList(ret);
    }
    //제목+내용
    else {
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

      // const ret = new ObjSet([...title, ...desc, ...active]).toArray();
      setItemList(ret);
    }
  }, [keyword, tc]);

  return (
    <div className="flex justify-center w-full h-[100vh]">
      <Tabs defaultValue="weapon" className="w-[60vw] mt-12">
        <div className="flex flex-row justify-between">
          <TabsList className="grid grid-cols-4 w-[30vw]">
            <TabsTrigger value="build" className="font-semibold">
              빌드
            </TabsTrigger>
            <TabsTrigger value="weapon" className="font-semibold">
              무기
            </TabsTrigger>
            <TabsTrigger value="armor" className="font-semibold">
              생명력
            </TabsTrigger>
            <TabsTrigger value="tech" className="font-semibold">
              스피릿
            </TabsTrigger>
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
            <Input className="w-72" ref={searchInputRef} />
          </div>
        </div>

        <TabsContent value="build">
          <ItemBuild />
        </TabsContent>
        <TabsContent value="weapon">
          <ItemRow types={weapons} tier={1} />
          <ItemRow types={weapons} tier={2} />
          <ItemRow types={weapons} tier={3} />
          <ItemRow types={weapons} tier={4} />
        </TabsContent>
        <TabsContent value="armor">
          <ItemRow types={armors} tier={1} />
          <ItemRow types={armors} tier={2} />
          <ItemRow types={armors} tier={3} />
          <ItemRow types={armors} tier={4} />
        </TabsContent>
        <TabsContent value="tech">
          <ItemRow types={techs} tier={1} />
          <ItemRow types={techs} tier={2} />
          <ItemRow types={techs} tier={3} />
          <ItemRow types={techs} tier={4} />
        </TabsContent>
      </Tabs>

      <Stats />
    </div>
  );
}
