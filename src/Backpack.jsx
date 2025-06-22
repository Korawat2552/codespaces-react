import './back pack.css'
import { useState } from 'react';
function Item({name}){
    const [pack,setPack]=useState(false)
    function RandomDice(){
        let num=Math.round(Math.random()*6)+1;
        setPack(num);
    }
    if(pack%5==0)
    return (<li onClick={RandomDice}>{name} 🔥 </li>);
if(pack%5==1)
    return (<li onClick={RandomDice}>{name} 🌪 </li>);
if(pack%5==2)
    return (<li onClick={RandomDice}>{name} 💧 </li>);
if(pack%5==3)
    return (<li onClick={RandomDice}>{name} ☄️</li>);
if(pack%5==4)
    return (<li onClick={RandomDice}>{name} ⚡️</li>);
}
export default function Backpack(){
    const Items=["money","Phone","Poewrbank","water","Sunglasses"];
    const filterList=Items.filter(i=>i.includes("P"));
    return(<>
        <h5>
            Backpack list
        </h5>
        <ol>
        {
        filterList.map(i=> < Item name={i}/>)
    }
            
        </ol>
    </>);
}