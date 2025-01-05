import React, { useContext, useEffect, useState } from "react";
import { playlistdata } from "../utils/usecontext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const NewPlaylistShow = () => {
  const { data } = useContext(playlistdata);
  const { id } = useParams();
  const [value, setvalue] = useState();


  const matched = () => {
    const playlist = data.find((item) => item.id === parseInt(id, 10));
    setvalue(playlist);
    return playlist; 
  };

  useEffect(() => {
    matched();
  }, []);
console.log(value);

  // console.log(value);

  return (
    <>
      {value && (
        <div className="bg-white ml-10">  
          <h1 className="text-center font-bold text-black text-3xl mt-5">Playlist - {value.Playlist}</h1>
          <ul>
            <div className="cursor-pointe  gap-10 mt-10 flex-wrap flex">
              {value?.videos.map((item) => {
                const mapped = item === undefined || item === null ? null : item;
                return mapped ? 
                <div className="w-96 rounded-3xl   ">
                  <Link to={'/Videoid/' + item.id}>
                  <img
                    className="h-60 w-96   rounded-lg"
                    src={item?.snippet?.thumbnails?.high?.url}
                    alt="Video Thumbnail"
                    />
                  <span className="font-medium">{item.snippet.title}</span>
                  <p className="text-sm text-gray-500">{item.snippet.channelTitle}</p>
                    </Link>
                </div>
                : null
              }
              )}
            </div>
          </ul>
        </div>
      )}
    </>
  );
};

export default NewPlaylistShow;