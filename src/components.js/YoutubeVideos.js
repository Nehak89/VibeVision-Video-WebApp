import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import SingleVideo from "./SingleVideo";
import { playlistdata } from "../utils/usecontext";
import Shimmer from "./shimmer";

// const APIKEY = "AIzaSyALHt-CMEvAYETSqyySVOgbDu-3I5pdVj4";
// const APIKEY = "AIzaSyBcOLaYL08YnVNm8HpwIdwTmNYC0snz9a8";
const APIKEY = "AIzaSyBTGD1SP06pjn-vwFdBGD6GyryK-GN8ueA";
const channelid = "UCeVMnSShP_Iviwkknt83cww";
const fetchurl = `https://www.googleapis.com/youtube/v3/search?key=${APIKEY}&channelId=${channelid}&part=snippet,id&order=date&maxResults=16`;

const YoutubeVideo = () => {
  const { allvideos, setallvideos } = useContext(playlistdata);
  // console.log(allvideos);
  useEffect(() => {
    fetch(fetchurl)
      .then((response) => response.json())
      .then((resJson) => {
        const result = resJson.items.map((doc) => ({
          ...doc,
          Videolink: "https://www.youtube.com/embed/" + doc?.id?.videoId,
        }));
        setallvideos(result);
      });
  }, []);

  if (allvideos.length === 0) return <Shimmer />;
  return (
    <>
      {/* <h1 className="text-center mt-10 font-bold text-5xl text-blue-500">Welcome to Youtube</h1> */}
      <div className="flex justify-center gap-8  bg-white flex-wrap ">
        {allvideos?.map((item, index) => (
          <div className="w-96 mt-10" key={index}>
            <Link to={"/Videoid/" + item.id.videoId}>
              <SingleVideo item={item} key={item.id} />
            </Link>
          </div>
        ))}
        {/* <iframe
          width="560"
          height="315"
          // src="https://www.youtube.com/embed/LSoyxaymqUQ?si=z-ZWpxOdMpwVcw6q"
          src="https://www.youtube.com/embed/LSoyxaymqUQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        ; */}
      </div>
    </>
  );
};

export default YoutubeVideo;
