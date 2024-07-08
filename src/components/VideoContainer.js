import  axios from "axios";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_VIDEO_API } from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { fetchVideo } from "../store/YouTubeVideoReducer";


const VideoContainer = ()=>{
    // const [videos,setVideo] = useState([]);
    const videoData = useSelector((state)=> state.youtube.videos);
const dispatch = useDispatch();
useEffect(()=>{
getVideos();
},[])
const getVideos = async()=>{
const video = await axios.get(YOUTUBE_VIDEO_API);
dispatch(fetchVideo(video.data.items))
// setVideo(video.data.items)
}
    return(<>
    <div className="flex flex-wrap">
    {videoData?.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
    <VideoCard info={video}/>
    </Link>
    ))}
    </div>
    </>)
}
export default VideoContainer