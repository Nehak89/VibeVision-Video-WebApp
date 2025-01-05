  import React, {useReducer, useState } from 'react'
  import { createContext } from 'react'
  import { LikedVideos } from '../reducer/reducer'

  export const playlistdata  = createContext()

  const Context = ({children}) => {
      const[data , setData] = useState([])
      const [Search, setSearch] = useState("");
      const [allvideos, setallvideos] = useState([]);

      const [state, dispatched] = useReducer( LikedVideos, {
        Liked : [],
        Liked : JSON.parse(localStorage.getItem("likded")) || []
      })

      return (
      <playlistdata.Provider value={{Search , setSearch ,  data , setData , allvideos ,setallvideos ,state, dispatched}}>{children}</playlistdata.Provider>
    )
  }

  export default Context
