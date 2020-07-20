import React,{useState} from 'react';

let StatesInFunction=()=>{
        let initialValue=0;
        const [count,setCount]=useState(0);
        return(
                <div>
                        <h2>{count}</h2>
                        <button onClick={()=>{setCount(count-1)}}>Decrement</button>
                        <button onClick={()=>{setCount(count+1)}}>Increment</button>
                        
                </div>
        )
}
export default StatesInFunction;