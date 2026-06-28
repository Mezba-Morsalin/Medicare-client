import React from "react";
import HomeStats from "./HomeStats";

const Stats = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/home-stats`,
    {
      cache: "no-store",
    }
  );

  const { data } = await res.json();

  return (
    <div>
      <HomeStats stats={data} />
    </div>
  );
};

export default Stats;