import React, { useContext } from "react";
import UseYoutubeVideo from "../utils/useYoutubeVideo";
import { Link, useParams } from "react-router-dom";
import { addToWatchLater } from "../utils/WatchLater";
import logos from "../components.js/like.jpg";
import logos2 from "../components.js/like1.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { playlistdata } from "../utils/usecontext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Playvideo = ({}) => {
  // const notify = () => toast("Wow so easy !");
  const { data, setData } = useContext(playlistdata);
  const [isLiked, setIsLiked] = useState(false);

  const {
    state: { Liked },
    dispatched,
  } = useContext(playlistdata);

  const { id } = useParams();
  const [dropdownStates, setDropdownStates] = useState([]);
  const [vidid, setVidId] = useState([]);
  const [inputvalue, setinputValue] = useState("");
  const [omibhai, setomibhai] = useState(undefined);
  // const [toggle , settoggle] = useState(false)
  const video = UseYoutubeVideo(id);
  // console.log(vidid);
  // console.log(dropdownStates);

  const watchlaters = useSelector((store) => store.watchLater.videos);

  const toggleDropdown = (videoobj) => {
    setDropdownStates((prevStates) => ({
      ...prevStates,
      [videoobj]: !prevStates[videoobj],
    }));
    setVidId(videoobj);
  };

  const videoitem = video[0];
  // console.log(videoitem);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newPlaylist = { Playlist: inputvalue, id: Date.now(), videos: [] };
    setData((prevData) => [...prevData, newPlaylist]);
    setinputValue("");
    // use to store a data in local storage
    const storedData = JSON.parse(localStorage.getItem("playlists")) || [];
    localStorage.setItem(
      "playlists",
      JSON.stringify([...storedData, newPlaylist])
    );
  };

  const handleInputChange = (e) => {
    setinputValue(e.target.value);
  };

  const Likdevi = () => {
    if (Liked.find((vim) => vim.id === videoitem?.id)) {
      dispatched({ type: "ADD_TO_LIKE", payload: undefined });
      toast("This Video is Already exists!");
    } else {
      dispatched({ type: "ADD_TO_LIKE", payload: videoitem });
      localStorage.setItem("likded", JSON.stringify([...Liked, videoitem]));
    }
    setIsLiked(!isLiked);
  };


  console.log(Liked);


  const addtothisPlaylist = (id) => {
    const playlistToUpdate = data.find((item) => item.id === id);

    if (
      data.some((element) => element.videos.some((vid) => vid.id === vidid.id))
    ) {
      const updatedPlaylist = {
        ...playlistToUpdate,
        videos: [...playlistToUpdate.videos, omibhai],
      };
      const updatedData = data.map((item) =>
        item.id === id ? updatedPlaylist : item
      );
      localStorage.setItem("playlists", JSON.stringify(updatedData));
      setData(updatedData);
      toast("This Video is Already exists!");
    } else {
      const updatedPlaylist = {
        ...playlistToUpdate,
        videos: [...playlistToUpdate.videos, vidid],
      };

      // for local storage
      const updatedData = data.map((item) =>
        item.id === id ? updatedPlaylist : item
      );
      localStorage.setItem("playlists", JSON.stringify(updatedData));
      setData(updatedData);
    }
  };

  // console.log(data);

  // console.log(data);
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("playlists")) || [];
    setData(storedData);
  }, []);

  const dispatch = useDispatch();
  // console.log(watchlaters);

  const add = () => {
    if (watchlaters.find((vid) => vid?.id === videoitem?.id)) {
      dispatch(addToWatchLater(undefined));
      toast("This Video is Already exists!");
    } else {
      dispatch(addToWatchLater(videoitem));
      localStorage.setItem(
        "watch",
        JSON.stringify([...watchlaters, videoitem])
      );
    }
  };

  return (
    <>
      <div className="  bg-black py-12">
        <div className="ml-12 ">
          <div className="">
            <iframe
              className="rounded-lg"
              style={{ height: "650px", width: "1350px" }}
              src={videoitem?.Videolink}
            ></iframe>
          </div>
          <div className="">
            <div className=" mt-4">
              <h1 className="font-medium text-white text-lg">
                {videoitem?.snippet?.title}
              </h1>
            </div>
            <div className="w-3/4 ">
              <div className="flex mt-4 justify-between">
                <div className="flex gap-5 items-center">
                  <img
                    className=" rounded-full w-12 h-12"
                    src={videoitem?.snippet?.thumbnails?.high?.default}
                  />
                  <h1 className="font-medium text-white text-lg">
                    {videoitem?.snippet?.channelTitle}
                  </h1>
                  <button className="border-2 px-4 py-1 rounded-full  text-white">
                    Join
                  </button>
                  <button className="bg-white p-2 rounded-full text-black">
                    Subscribe
                  </button>
                </div>
                <div className="flex gap-4 h-9 ">
                  <div className="bg-gray-700 flex  text-center   rounded-full gap-3">
                    <button className="ml-2" onClick={() => Likdevi()}>
                      {<img className="w-7" src={isLiked ? logos : logos2} />}
                      <ToastContainer />
                      {/* </img> ? <img  src={logos} className="w-6" /> : <img  src={logos} className="w-6" /> */}
                    </button>
                    <span className="text-white text-2xl">|</span>
                    <button className="mr-2">
                      {/* {
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAArklEQVR4nN3TuwkCURBG4UEMLMMGDGzAWFAwETQ2swM7sAdbsApdrMAO1jWwACOFIzfy+riyu8wv4gmHYb5ozP4iYMe9LJoPgIJyHcN+Cngomh+o1gloVQHqNFMDezUQ6qmBtRq4Am0lEFqqgUIN8FUgi+ZbJyB/+Yc3/5HXPQ70ywAj4JI4sjGPgHECOQNNNdJ1AT4gc/MMmDwhK1cgBEwjZGGKgA4wBBoS4Ke6AZghYYIOAgkvAAAAAElFTkSuQmCC"></img>
                      } */}
                      {<img src={logos} className="w-6" />}
                    </button>
                  </div>
                  <div>
                    <button
                      className=" inline-flex items-center px-4 py-2 text-white rounded-full bg-gray-700 text-sm font-medium  hover:bg-gray-600 focus:outline-none focus:ring focus:border-blue-300"
                      onClick={() => add(videoitem)}
                    >
                      Watch later
                    </button>
                    <ToastContainer />
                  </div>
                  <div className="relative inline-block text-left">
                    <button
                      type="button"
                      onClick={() => toggleDropdown(videoitem)}
                      className=" inline-flex items-center px-6 py-2 text-white rounded-full bg-gray-700 text-sm font-medium  hover:bg-gray-600 focus:outline-none focus:ring focus:border-blue-300"
                    >
                      Save
                    </button>
                    {dropdownStates[videoitem] && (
                      <div className="origin-top-right absolute right-96 w-52 h-60 bg-gray-800 -mt-96 rounded-md shadow-lg text-center  ring-1 ring-black ring-opacity-5">
                        <div className="flex justify-around">
                          <span className="text-white text-xl">
                            Save the to...
                          </span>
                          {/* <button className="text-white text-xl inline-block  focus:outline-none focus:ring focus:border-blue-300">x</button> */}
                        </div>
                        <div>
                          <ul>
                            {data.map((item) => (
                              <div key={item.id}>
                                {/* <Link to={"/playlist/" + item.id}> */}
                                <button
                                  onClick={() => addtothisPlaylist(item.id)}
                                  className="p-1 text-white text-center border-2 mt-1 "
                                  key={item.id}
                                >
                                  {item.Playlist}
                                  <ToastContainer />
                                </button>
                                {/* </Link> */}
                              </div>
                            ))}
                          </ul>
                        </div>
                        {/* create a playlist  */}
                        <div className="mt-1 text-center ">
                          <div className="text-left ml-6">
                            <label className="text-white">Name</label>
                          </div>
                          <input
                            className="w-40 border-0 bg-gray-800 text-white"
                            placeholder="+ Create New Playlist"
                            type="text"
                            value={inputvalue}
                            onChange={handleInputChange}
                          ></input>
                          <button
                            className=" text-white   "
                            onClick={handleFormSubmit}
                          >
                            Create
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Playvideo;
