//import './Counter.css';
import { useState } from "react";
export default function Counter(){
    const [count,setCount]=useState(0);
    const [value,setValue]=useState("type here!");

    function ontextChange(event){
        console.log("this function is called!"+event.target.value);
        console.error("This is error!!")
        setValue(event.target.value);
    }
    return( <> 
    <input value={value} onChange={(event)=>ontextChange(event)}/>
    <p>
        {value} elcius to {value*1.8+32} fahrenheit
    </p>
    <p>
        You typed {value.length} characters
    </p> 
    <p> 
        {value} vat {value*1.07}  include vat7%
    </p>
    
    <br></br>

    <button onClick={()=>setCount(count+1)}> 
     <img src="public/chikawa.png" ></img>  <h2>Attack</h2> 
    
     </button>
      <button onClick={()=>setCount(count-1)}>
        <img src="heal1.png" width={200} height={240} />
        <h2>heal</h2>
        </button> 
        <button onClick={()=>setCount(count==0)}>
             <img src="reset1.png" width={200} height={240} />
            <h2>Reset</h2> 
            </button>
    <p>
        <h1>attack {0+count} time </h1>
    </p>
    <p>
        <h1>HP {9999999-count}</h1>
    </p>

    </>);
}