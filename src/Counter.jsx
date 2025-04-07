import { useReducer, useState } from "react";

const reducer = (state,action)=>{
    // console.log('Reducer Function');
    switch(action.type){
        case 'increment':
            return {count:state.count+1}

        case 'decrement' :
                return {count:state.count-1}

        case 'reset' :
                return {count:state.count=0}    
        default:
            return state;  
        
               
    }

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
            <button onClick={()=>dispatch({type:'increment'})}>+</button>
            <br/>
            <br/>

            <button onClick={()=>dispatch({type:'decrement'})}>-</button>
            <br/>
            <br/>

            <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
            <br/>
            <br/>
            
           
        </div>
    )
}

export default Counter;