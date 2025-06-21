import { useState } from "react";
export default function Counter(){
    const [count,setCount]=useState(0);
    return( <> 
    <button onClick={()=>setCount(count+1)}> 
     <img src="chikawa.png" ></img>  Click me
    
     </button>
      <button onClick={()=>setCount(count-1)}>
        <h2>heal</h2>
        </button> 
        <button onClick={()=>setCount(count==0)}>
            <h2>Reset</h2> 
            </button>
    <p>
        attack {0+count} time 
    </p>
    <p>
        HP {9999999-count}
    </p>
    <p>
        Reset{0+count}
    </p>
    </>);
}