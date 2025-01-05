import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UseYoutubeVideo = () => {   
  const { id } = useParams();
  const [video, setVideo] = useState({});

  // const APIKEY = "AIzaSyC4sMaiAoC9FyPx8OTiujn-y1ENTRr07h4"
  // const APIKEY = "AIzaSyALHt-CMEvAYETSqyySVOgbDu-3I5pdVj4";
  const APIKEY = "AIzaSyBTGD1SP06pjn-vwFdBGD6GyryK-GN8ueA";
  // const APIKEY = "AIzaSyBcOLaYL08YnVNm8HpwIdwTmNYC0snz9a8";
  const fetchurl = `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${APIKEY}&part=snippet,contentDetails,statistics`;

  useEffect(() => {
    fetch(fetchurl)
      .then((response) => response.json())
      .then((resJson) => {
        const result = resJson.items.map((doc) => ({
          ...doc,
          Videolink: "https://www.youtube.com/embed/" + doc?.id,
        }));
        setVideo(result);
      });
  }, []);
  return video;
};

export default UseYoutubeVideo;
