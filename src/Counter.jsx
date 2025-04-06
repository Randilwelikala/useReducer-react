import { useState } from "react";

const Counter = ()=>{
    const[count,setCount] = useState(0);
    return(
        <div>
            <h1>Count : {count}</h1>
        </div>
    )
}

export default Counter;