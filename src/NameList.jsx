import { type } from "@testing-library/user-event/dist/type";
import { useReducer, useState } from "react";

function reducer(nameList,action){
    switch(action.type){
        case 'add':
            return {names:[...nameList.names,action.name]};
        default:
            return nameList;    
    }

};


const NameList = ()=>{
    const [name,setName]= useState('');

    const [nameList,dispatch] = useReducer(reducer,{names:[]});

    const handleSubmit = (event)=>{
        event.preventDefault();
        dispatch({type: 'add',name:name});
        setName('');
    };
    return(
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input onChange = {(event)=>setName(event.target.value)} type ="text" value={name}></input>
            </form>

            <p>
                {nameList.names.join(', ')}
            </p>
        </div>
    )
    
}
    

export default NameList;