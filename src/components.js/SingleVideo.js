import React from "react";

const SingleVideo = ({ item }) => {
  // console.log(item);

  return (
    <div>
      <div className="cursor-pointer">
        <img
          className="w-full rounded-lg h-60 cursor-pointer "
          src={item?.snippet?.thumbnails?.high?.url}
        ></img>
        <div className="text-black">
          <p className="font-medium">{item.snippet.title}</p>
          <p className="text-sm text-gray-500">{item.snippet.channelTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleVideo;
