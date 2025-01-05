import React, { useContext } from "react";
import { playlistdata } from "../utils/usecontext";
import { Link } from "react-router-dom";

const LikedVideos = () => {
  const {
    state: { Liked },
  } = useContext(playlistdata);

  return (
    <>
      <h1 className=" text-center mt-5 text-3xl font-semibold ">Like Videos : {Liked.length} </h1>
      <div className="flex gap-10 flex-wrap ">
        {Liked.map((item) => {
          const mapped = item === undefined || item === null ? null : item
          return mapped != null ?
          <div className="w-96 rounded-3xl mt-10 ml-10">
            <Link to={"/Videoid/" + item.id}>
              <img
                className="h-60 w-96   rounded-lg"
                src={item?.snippet?.thumbnails?.high?.url}
                alt="Video Thumbnail"
              />
              <span className="font-medium">{item.snippet.title}</span>
              <p className="text-sm text-gray-500">
                {item.snippet.channelTitle}
              </p>
            </Link>
          </div>
          : null
        }
        )}
      </div>
    </>
  );
};

export default LikedVideos;
