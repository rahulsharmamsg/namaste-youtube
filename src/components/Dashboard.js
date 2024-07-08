import { useSelector } from "react-redux"
import Sidebar from "./layout/Sidebar"
import VideoContainer from "./VideoContainer"

 const Dashboard = ()=>{
  
    return(
    <div className="flex">
   <Sidebar />
   <VideoContainer />
    </div>)
 }
 export default Dashboard