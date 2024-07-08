import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../store/NavSlice";
import axios from "axios";
import { YOUTUBE_SEARCH_API } from "../../utils/constant";
import { addCache } from "../../store/Search";
import { fetchVideo } from "../../store/YouTubeVideoReducer";
import { useNavigate } from "react-router-dom";

const Head = ({ name }) => {
  const [searchQuery,setSearchQuery] = useState();
  const [suggestions,setSuggections] = useState([]);
  const [showSuggestions,setShowSuggection] = useState(false)
  const disPatch = useDispatch();
  const cacheResult = useSelector((state)=> state.searchslice);
  const displayVideo = useSelector((state)=> state.youtube.videos)
  console.log(suggestions)
  const navigate = useNavigate();
  useEffect(()=>{

  const timer = setTimeout(()=> {
    if(cacheResult[searchQuery]){
      setSuggections(cacheResult[searchQuery])
    }else{
    getSearchSuggection()
    }
  }, 200)
   return ()=>{
    clearTimeout(timer)
   }
  },[searchQuery])
  const getSearchSuggection = async()=>{
const data = await axios.get(YOUTUBE_SEARCH_API+searchQuery);
  setSuggections(data.data[1])

disPatch(addCache({
  [searchQuery]:data.data[1]
}))
  }
    
    const toggleMenuHandler = ()=>{
        disPatch(toggleMenu())
    }
    const handleFilter = (s)=>{
      setSearchQuery(s)
      
      const filterData = displayVideo.filter((data)=> data.snippet?.title?.toLowerCase().includes(searchQuery.toLowerCase()))
navigate('search?q='+s,{ state: { filterData } })
// if(filterData.length>0){
//   disPatch(fetchVideo(filterData))
// }
setShowSuggection(false)

    }
  
    const handleChange = (e)=>{
      console.log("hihihi")
      setSearchQuery(e.target.value)
      if(suggestions[0] == "undefined"){
        setShowSuggection(false) 
      }else{
        setShowSuggection(true) 
      }
      
      
    }
  return (
    
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
    <div className="flex col-span-1">
      <img
      onClick={()=>toggleMenuHandler()}
        className="h-8 cursor-pointer"
        alt="menu"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
      />
      <a href="/">
        <img
          className="h-8 mx-2"
          alt="youtube-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
        />
      </a>
    </div>
    <div className="col-span-10 px-10">
      <div>
        <input
          className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
          value={searchQuery}
          onChange={handleChange}
          // onBlur={()=>setShowSuggection(false)}
        />
        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
          🔍
        </button>
      </div>
      {showSuggestions && (
        <div className="fixed bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100">
          <ul>
            {suggestions.map((s) => (
              <li 
              key={s} 
              className="py-2 px-3 shadow-sm hover:bg-gray-100" 
              onClick={()=>handleFilter(s)}>
                🔍 {s}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
    <div className="col-span-1">
      <img
        className="h-8"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
    </div>
  </div>
  );
};

export default Head;
