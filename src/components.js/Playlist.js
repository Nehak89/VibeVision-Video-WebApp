import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { playlistdata } from "../utils/usecontext";

const Playlist = () => {
  const { data, setData } = useContext(playlistdata);
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("playlists")) || [];
    setData(storedData);
  }, []);


  const removed = (id) => {
    const update = data.filter((playlist) => playlist.id !== id);
    // Update local storage without the removed playlist
    localStorage.setItem("playlists", JSON.stringify(update));
    setData(update);
  };

  return (
    <>
      <div className="text-center bg-white">
        <h1 className="bg-white text-center text-3xl mt-4 font-semibold ">
          Total Playlists: {data.length}
        </h1>
        <ul className="flex flex-col mt-10 items-center gap-4">
          {data.map((item) => (
            <div className="flex gap-4" key={item.id}>
              <Link to={"/playlist/" + item.id}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 focus:outline-none focus:ring focus:border-blue-300">
                  {item.Playlist}
                </button>
              </Link>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 focus:outline-none focus:ring focus:border-red-300"
                onClick={() => removed(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </ul>
      </div>
      {/* <div>
        {data.map((item) => (
          <div>
            <span>{item?.videos?.kind}</span>
            {item?.videos?.map((video) => (
              <div>
                <img
                  className=""
                  src={video?.snippet?.thumbnails?.high?.url || ""}
                  alt="Video Thumbnail"
                />
                <span>{video.snippet.title}</span>
                <span>{video.snippet.publishedAt}</span>
              </div>
            ))}
          </div>
        ))}
      </div> */}
    </>
  );
};

export default Playlist;
