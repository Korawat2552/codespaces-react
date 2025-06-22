import { useState } from "react"
function Item({name}){
    const [Star,setStar]=useState(0);
    function Randomdice(){
        let num=Math.round(Math.random()*6)+1;
        setPack(num);
    }
}
export default function 001()