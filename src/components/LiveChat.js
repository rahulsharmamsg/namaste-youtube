import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { generateRendomName, generateString } from './Helper';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../store/LiveMessage';
import { jwtDecode } from 'jwt-decode';


const LiveChat = () => {
    const [liveMessage,setLiveMessage] = useState();
    const [user,setUser] = useState(jwtDecode(localStorage.getItem('genericToken')))
    const getMsg = useSelector((state)=> state.livemsg.message);
    const dispatch = useDispatch();
console.log(getMsg)
    useEffect(()=>{
const i = setInterval(()=>{
dispatch(addMessage({
    name:generateRendomName(),
    message:generateString(8)
}))

},[2000])
return ()=>clearInterval(i)
    },[])
  return (
    <>
    <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
{getMsg.map((value,index)=>{
   return(
<ChatMessage key={index} name={value.name} message={value.message}/>
   ) 
})}


        </div>
      </div>

      <form
        className="w-full p-2 ml-2 border border-black"
       onSubmit={
        (e)=>{
            e.preventDefault();
            dispatch(addMessage({
                name:user.fullname,
                message:liveMessage
            }))
            setLiveMessage("");
        }
       }
      >
        <input
          className="px-2 w-96"
          type="text"
          value={liveMessage}
          onChange={(e)=>setLiveMessage(e.target.value)}
        />
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
      </>
  )
}

export default LiveChat