import React,{useState} from 'react';

let StatesInFunction=(props)=>{
        let initialValue=0;
        const [count,setCount]=useState(0);
        return(
                <div>
                        <h2> {props.name} is {props.age} old</h2>
                        <h2>{count}</h2>
                        <button onClick={()=>{setCount(count-1)}}>Decrement</button>
                        <button onClick={()=>{setCount(count+1)}}>Increment</button>
                        <button onClick={()=>{setCount(initialValue)}}>Initial</button>
                        
                </div>
        )
}
export default StatesInFunction;