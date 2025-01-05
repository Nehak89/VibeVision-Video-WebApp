import React, { useContext, useEffect, useState } from "react";
import logo from "../components.js/download.jpg";
// import like from "../components.js/"
import { Link } from "react-router-dom";
import { playlistdata } from "../utils/usecontext";

const Header = () => {
  // const [Search, setSearch] = useState("");
  const {Search , setSearch} = useContext(playlistdata)

  // Your YouTube video URL
  // const searchfunction = (Search) => {
      var youtubeUrl = Search;
      var regex = /[?&]v=([^&]+)/;
      var match = regex.exec(youtubeUrl);
      const vValue = match && match[1];
      // return   setvalue(vValue) || null;
    // }
   
    // console.log(value);

  // console.log(allvideos);

  return (
    <>
      <div className="bg-blue-600 h-28 flex justify-center gap-40 items-center">
        <div>
          <Link to="/">
          {<img src={logo} className="w-24 rounded-full bg-blue-600" onClick={() => setSearch(e.target.value)} />}
          </Link>
          </div>
        <div className="flex justify-center items-center">
          <div className="flex items-center h-10 rounded-full shadow-md">
            <input
              type="text"
              placeholder="Paste the Youtube video url"
              className=" h-10 p-4 shadow-md outline-none w-96 text-black rounded-l-full bg-white"
              onChange={(e) => setSearch(e.target.value)}
              />
            <Link to={"/Videoid/" + vValue} >
            <button className="p-2 w-14 h-10  bg-blue-500  rounded-r-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 30 30"
                >
                <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
              </svg>
            </button>
                </Link>
          </div>
        </div>
        <div className="list-none text-white items-center flex gap-12">
          <Link to="/playlist">
            <div onClick={() => setSearch(e.target.value)} className="flex items-center gap-2" >
            <li className="font-semibold">
            Playlists
            </li>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                id="playlist"
                >
                <path fill="none" d="M0 0h48v48H0z"></path>
                <path d="M28 20H4v4h24v-4zm0-8H4v4h24v-4zm8 16v-8h-4v8h-8v4h8v8h4v-8h8v-4h-8zM4 32h16v-4H4v4z"></path>
              </svg>
            </span>
                </div>
          </Link>
          <Link to="/watchlater">
            <div className="flex items-center gap-2">
            <li onClick={() => setSearch(e.target.value)} className="font-semibold" >
            Watch later
            </li>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
                id="watch-later"
              >
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7z"></path>
              </svg>
            </span>
            </div>
          </Link>
          <Link to="/likedVideos" >
            <div className="flex items-center gap-2">
            <li className="font-semibold" onClick={() => setSearch(e.target.value)}>
              Like videos
            </li>
            <span>
              <svg
                width="40px"
                height="40px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.0501 7.04419C15.4673 5.79254 14.5357 4.5 13.2163 4.5C12.5921 4.5 12.0062 4.80147 11.6434 5.30944L8.47155 9.75H5.85748L5.10748 10.5V18L5.85748 18.75H16.8211L19.1247 14.1428C19.8088 12.7747 19.5406 11.1224 18.4591 10.0408C17.7926 9.37439 16.8888 9 15.9463 9H14.3981L15.0501 7.04419ZM9.60751 10.7404L12.864 6.1813C12.9453 6.06753 13.0765 6 13.2163 6C13.5118 6 13.7205 6.28951 13.627 6.56984L12.317 10.5H15.9463C16.491 10.5 17.0133 10.7164 17.3984 11.1015C18.0235 11.7265 18.1784 12.6814 17.7831 13.472L15.8941 17.25H9.60751V10.7404ZM8.10751 17.25H6.60748V11.25H8.10751V17.25Z"
                  fill="#080341"
                  />
              </svg>
            </span>
                  </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
