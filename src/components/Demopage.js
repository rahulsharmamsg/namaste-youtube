import { useEffect, useMemo, useState } from "react";
const Demopage = ()=>{
const [val,setVal] = useState();
const [check,setCheck] = useState(true);

// const memoVal = findNthPrime(val);

const isPrime = (num)=> {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
       return false;
      }
    }
    return true;
   }
  
   //Function to find the nth prime number
    const findNthPrime = (n)=> {
    let count = 0;
    let num = 2;
    while (count < n) {
      if (isPrime(num)) {
       count++;
      }
      num++;
    }
    return num - 1;
   }
    const memoVal =  useMemo(()=>{ return findNthPrime(val)},[val])


    return(<>

    <input type="text" placeholder="enter"  onChange={(e)=>setVal(e.target.value)}></input><br/>
    Prime num: {memoVal}
    <button onClick={()=>setCheck(!check)}>Click</button>
    <h2>Clik Value: {check?"true":"false"}</h2>
    </>)
 }
 export default Demopage