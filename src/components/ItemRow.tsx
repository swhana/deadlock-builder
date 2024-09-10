import { Item } from "@/config/types";
import ItemCard from "./ItemCard";

interface Props {
  types: Item[];
  tier: number;
}

const ItemRow = ({ types, tier }: Props) => {
  const filtered = types.filter((type) => type.tier === tier);

  return (
    <>
      <div className={styles.row}>
        {filtered
          .sort((a, b) => (a.localization.ko > b.localization.ko ? 1 : -1))
          .map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
      </div>
      {filtered.length !== 0 ? <hr /> : <></>}
    </>
  );
};

export default ItemRow;

const styles = {
  row: "row flex flex-row gap-2 max-w-[60vw] flex-wrap m-4",
};
