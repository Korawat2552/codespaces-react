import './BMI.css'
import { useState,useRef } from 'react';
function BMIText({BMI}){
     if (BMI<18.5)
         return (<><h1>Underweight <br></br><img src="ผอม.jpg" width={200}/></h1></>);
    if (BMI>30)
        return (<><h1>Overweight <br></br><img src="อ้วน.jpg" width={200}/></h1></>);
    return (<><h1>Normalweight <br></br><img src="กลางๆ.png" width={200}/></h1></>);
}


export default function BMI(){
    const w_inputRef=useRef(null);
    const h_inputRef=useRef(null);
    const [BMI,setBMI]=useState(0);
    function calBMI({}){
        let w=w_inputRef.current.value;
        let h=h_inputRef.current.value/100;
            setBMI(w/(h*h));
           
     
    }
    
    return (<>
        <h1>
            BMI calculator
        </h1>
        Weight <input ref={w_inputRef}/> Kg. <br></br>
        Height <input ref={h_inputRef}/> cm.<br></br>
        <button onClick={calBMI}>
            <img src="0011.jpg" height={30}/><br></br>
            Calculate!</button><br/>
            BMI: {BMI.toFixed(2)} <br></br>
            <BMIText BMI={BMI}/>
          
    </>);
}