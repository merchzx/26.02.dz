import React from "react";

export function MyTimer()
{
    const [CurTime , SetCurTime] = React.useState("00000");
    
    let id =0;    

    React.useEffect(() => {    
     id = setTimeout(()=>{
            SetCurTime(new Date().toLocaleTimeString());    
        },1000);
      
    }); // эффект срабатывает
    
    return(
        <div> 
            <h1> Current time: {CurTime}</h1>
            <input type="button" value ="Stop" onClick={()=>{clearTimeout(id)}}/>

        </div>

);
}

