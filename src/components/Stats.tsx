import { totalItemStatsSelector } from "@/state";
import { useRecoilValue } from "recoil";

const Stats = () => {
  const totalStats = useRecoilValue(totalItemStatsSelector);

  return (
    <div className="m-12">
      {Object.entries(totalStats).map((stat) => {
        const name = stat[1][0];
        const value = stat[1][1];
        if (value === "0" || value === "0%") return;

        return (
          <div key={stat[0]} className="flex flex-row gap-2 w-[300px]">
            <div className="">{name}</div>
            <div className="font-bold">{value}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Stats;
