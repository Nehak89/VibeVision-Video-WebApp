import React from "react";
import { useSelector } from "react-redux";
import Watchedlater from "./watchlater2";

const WatchLater = () => {
  const watchlaters = useSelector((store) => store.watchLater.videos);

  return (
    <>
      <h1 className="text-center mt-5 text-3xl font-semibold">
        Watch Later Videos : {watchlaters.length}
      </h1>
      <div className="mt-5 gap-10 flex-wrap flex">
        {watchlaters.map((item) => {
          const mappedItem = item === undefined ? null : item;
          return mappedItem !== null ? <Watchedlater key={mappedItem.id} {...mappedItem} /> : null;
        })}
      </div>
    </>
  );
};

export default WatchLater;
