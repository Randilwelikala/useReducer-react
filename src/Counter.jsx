import { useReducer, useState } from "react";

const reducer = (state,action)=>{
    console.log('Reducer Function');

};


const Counter = ()=>{
    const[count,setCount] = useState(0);

    const[state,dispatch] = useReducer(reducer,{count:10});
    return(
        <div>
             {/* <h1>Count : {count}</h1> */}
             <h1>Count : {state.count}</h1>

{/* 
            <button onClick={()=>setCount(count+1)}>+</button>
            <br/>
            <button onClick ={()=>setCount(count-1)}>-</button>
            <br/>
            <button onClick={()=>setCount(0)}>Reset</button> */}
            <button onClick={()=>dispatch()}>+</button>
           
        </div>
    )
}

export default Counter;