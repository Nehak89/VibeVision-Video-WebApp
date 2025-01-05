import React from "react";
import { Link } from "react-router-dom";


const Watchedlater = ({snippet ,Videolink , id}) => {

    return(
        <>
        <div>
        <div className="w-96 bg-white ml-10">
        <Link to={'/Videoid/:id' + id} >
        <iframe className="border-2 rounded-lg bg-white " style={{height: '250px', width: '400px',}} src={Videolink}></iframe>
        <span className="font-medium">{snippet.title}</span>
        <p className="text-sm text-gray-500">{snippet.channelTitle}</p>
        </Link>
        </div>
        </div>
        </>
    )
}

export default Watchedlater;