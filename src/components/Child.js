import React, { memo } from 'react'

 const Child = ({getVal}) => {

    console.log("hello this is child")
  return (
    <div>Chield</div>
  )
}
export default memo(Child);