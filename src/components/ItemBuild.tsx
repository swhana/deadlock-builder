import {
  armorItemAtom,
  flexItemAtom,
  itemBuildAtom,
  techItemAtom,
  totalItemSelector,
  weaponItemAtom,
} from "@/state";
import { useRecoilState, useRecoilValue } from "recoil";
import ItemCard from "./ItemCard";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";

const ItemBuild = () => {
  const [itemBuild, setItemBuild] = useRecoilState(itemBuildAtom);
  const totalItems = useRecoilValue(totalItemSelector);
  const selectedWeapons = useRecoilValue(weaponItemAtom);
  const selectedArmors = useRecoilValue(armorItemAtom);
  const selectedTechs = useRecoilValue(techItemAtom);
  const selectedFlexs = useRecoilValue(flexItemAtom);

  const [buildname, setBuildname] = useState("");

  const saveBuild = () => {
    setItemBuild((prev) => [
      ...prev,
      {
        name: buildname,
        build: totalItems,
      },
    ]);
    setBuildname("");
  };

  return (
    <div>
      <div className="w-[440px]">
        <div className="row flex flex-row gap-2 m-4">
          {selectedWeapons.map((item) => (
            <ItemCard key={item.id} item={item} border={false} />
          ))}
        </div>
        <div className="row flex flex-row gap-2 m-4">
          {selectedArmors.map((item) => (
            <ItemCard key={item.id} item={item} border={false} />
          ))}
        </div>
        <div className="row flex flex-row gap-2 m-4">
          {selectedTechs.map((item) => (
            <ItemCard key={item.id} item={item} border={false} />
          ))}
        </div>
        <div className="row flex flex-row gap-2 m-4">
          {selectedFlexs.map((item) => (
            <ItemCard key={item.id} item={item} border={false} />
          ))}
        </div>
        {totalItems.length ? (
          <div className="flex flex-row justify-end gap-1">
            <Dialog>
              <DialogTrigger asChild>
                <Button type="button">저장하기</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[440px]">
                <DialogHeader>
                  <DialogTitle>빌드 저장</DialogTitle>
                  <DialogDescription>
                    빌드를 저장하시려면 이름을 입력해주세요
                  </DialogDescription>
                </DialogHeader>
                <Input
                  id="buildname"
                  type="text"
                  value={buildname}
                  onChange={({ target: { value } }) => setBuildname(value)}
                />
                <DialogFooter>
                  <DialogClose asChild>
                    <Button type="submit" onClick={saveBuild}>
                      저장하기
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            {/* <Button type="button">불러오기</Button> */}
          </div>
        ) : (
          <></>
        )}
      </div>
      <div>{itemBuild.map((ib) => ib.name)}</div>
    </div>
  );
};

export default ItemBuild;
