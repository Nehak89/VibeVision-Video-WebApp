import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components.js/Header";
import Playlist from "./src/components.js/Playlist";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import NewPlaylistShow from "./src/components.js/newplaylist";
import YoutubeVideo from "./src/components.js/YoutubeVideos";
import { Provider } from "react-redux";
import store from "./src/utils/store";
import Playvideo from "./src/components.js/PlayVideo";
import WatchLater from "./src/components.js/WatchLater";
import LikedVideos from "./src/components.js/LikedVdeos";
import Context from "./src/utils/usecontext";



const Applaout = () => {


  return (
    <>
    <Context>
    <Provider store={store}>
      <Header />
      <Outlet />
    </Provider>
    </Context>
    </>
  );
};
const approuter = createBrowserRouter([

  {
    path: "/",
    element: <Applaout />,
    children: [
      {
        path: "/playlist",
        element: <Playlist />,
      },
      {
        path:'/playlist/:id',
        element: <NewPlaylistShow/>
      },
      {
        path: "/",
        element: <YoutubeVideo />
      },
      {
        path: "/Videoid/:id",
        element: <Playvideo  />
      },
      {
        path:"/watchlater",
        element: <WatchLater />
      },
      {
        path: "/LikedVideos",
        element: <LikedVideos />
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter} />);
