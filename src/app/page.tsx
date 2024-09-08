import ItemCard from "@/components/ItemCard";
import { items } from "./data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  const weapons = items.filter((item) => item.type === "weapon");
  const armors = items.filter((item) => item.type === "armor");
  const techs = items.filter((item) => item.type === "tech");

  return (
    <div className="flex">
      <Tabs defaultValue="weapon" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="weapon">무기</TabsTrigger>
          <TabsTrigger value="armor">생명력</TabsTrigger>
          <TabsTrigger value="tech">스피릿</TabsTrigger>
        </TabsList>
        <TabsContent value="weapon">
          <div className="grid grid-rows-4 grid-flow-col gap-4">
            <div className="row flex flex-row gap-2">
              {weapons
                .filter((weapon) => weapon.tier === 1)
                .sort((a, b) =>
                  a.localization.ko > b.localization.ko ? 1 : -1
                )
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
            <div className="row flex flex-row gap-2">
              {weapons
                .filter((weapon) => weapon.tier === 2)
                .sort((a, b) =>
                  a.localization.ko > b.localization.ko ? 1 : -1
                )
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
            <div className="row flex flex-row gap-2">
              {weapons
                .filter((weapon) => weapon.tier === 3)
                .sort((a, b) =>
                  a.localization.ko > b.localization.ko ? 1 : -1
                )
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
            <div className="row flex flex-row gap-2">
              {weapons
                .filter((weapon) => weapon.tier === 4)
                .sort((a, b) =>
                  a.localization.ko > b.localization.ko ? 1 : -1
                )
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
          </div>
        </TabsContent>
        <TabsContent value="armor">
          <div className="grid grid-rows-4 grid-flow-col gap-4">
            <div className="row flex flex-row gap-2">
              {armors
                .filter((armor) => armor.tier === 1)
                .sort((a, b) =>
                  a.localization.ko > b.localization.ko ? 1 : -1
                )
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
            <div className="row flex flex-row gap-2">
              {armors
                .filter((armor) => armor.tier === 2)
                .sort((a, b) =>
                  a.localization.ko > b.localization.ko ? 1 : -1
                )
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
            <div className="row flex flex-row gap-2">
              {armors
                .filter((armor) => armor.tier === 3)
                .sort((a, b) =>
                  a.localization.ko > b.localization.ko ? 1 : -1
                )
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
            <div className="row flex flex-row gap-2">
              {armors
                .filter((armor) => armor.tier === 4)
                .sort((a, b) =>
                  a.localization.ko > b.localization.ko ? 1 : -1
                )
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
          </div>
        </TabsContent>
        <TabsContent value="tech">
          <div className="grid grid-rows-4 grid-flow-col gap-4">
            <div className="row flex flex-row gap-2">
              {techs
                .filter((tech) => tech.tier === 1)
                .sort((a, b) =>
                  a.localization.ko > b.localization.ko ? 1 : -1
                )
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
            <div className="row flex flex-row gap-2">
              {techs
                .filter((tech) => tech.tier === 2)
                .sort((a, b) =>
                  a.localization.ko > b.localization.ko ? 1 : -1
                )
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
            <div className="row flex flex-row gap-2">
              {techs
                .filter((tech) => tech.tier === 3)
                .sort((a, b) =>
                  a.localization.ko > b.localization.ko ? 1 : -1
                )
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
            <div className="row flex flex-row gap-2">
              {techs
                .filter((tech) => tech.tier === 4)
                .sort((a, b) =>
                  a.localization.ko > b.localization.ko ? 1 : -1
                )
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
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
