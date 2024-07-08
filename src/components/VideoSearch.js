import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useSearchParams } from 'react-router-dom'
import VideoCard from './VideoCard';
import Sidebar from './layout/Sidebar';
import { YOUTUBE_VIDEO_API } from '../utils/constant';
import axios from 'axios';
import { fetchVideo } from '../store/YouTubeVideoReducer';

 const VideoSearch = () => {
 const [searchQuery,setSearchQuery] = useSearchParams();
 const displayVideo = useSelector((state)=> state.youtube.videos)
 console.log(displayVideo,'video all on search')
 const filterData = displayVideo.filter((data)=> data.snippet?.title?.toLowerCase().includes(searchQuery.get('q').toLowerCase()))

 const dispatch = useDispatch();
 useEffect(()=>{
 getVideos();
 },[])

 const getVideos = async()=>{
 const video = await axios.get(YOUTUBE_VIDEO_API);
 dispatch(fetchVideo(video.data.items))
 // setVideo(video.data.items)
 }
  return (
    <div className="flex flex-wrap">
      <Sidebar />
    {filterData?.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
    <VideoCard info={video}/>
    </Link>
    ))}
    </div>
  )
}
export default VideoSearch