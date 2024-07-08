import React, { useCallback, useState } from 'react'
import Child from './Child'

const Parent = () => {
const [getVal,setVal] = useState();
const [showVal,setShowVal] = useState(true)
  const handleClick = ()=>{
setShowVal(!showVal);
  }
  const handleChnage = useCallback((e)=>{
    setVal(e.target.value)
  },[getVal])
  return (
    <>
    <Child getVal={getVal}/>
    <input type='text' placeholder='Type Here' onChange={handleChnage} /><br />
<p>Click val: {showVal?"true":"False"}</p>
    <button onClick={handleClick}>Click</button>
    </>
    
  )
}
export default Parent
