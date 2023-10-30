import React, { useRef, useState } from 'react'
import "./Tiktaktoe.css"
import x_icon from "../Assets/x.png"
import o_icon from "../Assets/o.png"

let data =["","","","","","","","",""]

export const Tiktaktoe = () => {
let [count,setcount]=useState(0);
let [lock,setLock]=useState(false);
let titleref=useRef(null);

const toggle = (e,num) => {
    if (lock) {
        return 0;
    }
    if (count%2===0) {
        e.target.innerHTML = `<img src='${x_icon}' alt='x'/>`;

        data[num]="x";
        setcount(++count);
       
    }
    else{
        e.target.innerHTML = `<img src='${o_icon}' alt='o'/>`;

        data[num]="o";
        setcount(++count);
        
    }
checkWin();

}
const checkWin = () =>{
    if (data[0]===data[1] && data[1]===data[2] && data[2]!="") {
        won(data[2]);
    }
    else if (data[3]===data[4] && data[4]===data[5] && data[5]!="") {
        won(data[5]);
    }
    else if (data[6]===data[7] && data[7]===data[8] && data[8]!="") {
        won(data[8]);
    }
    else if (data[0]===data[3] && data[3]===data[6] && data[6]!="") {
        won(data[6]);
    }
    else if (data[1]===data[4] && data[4]===data[7] && data[7]!="") {
        won(data[7]);
    }
    else if (data[2]===data[5] && data[5]===data[8] && data[8]!="") {
        won(data[8]);
    }
    else if (data[0]===data[4] && data[4]===data[8] && data[8]!="") {
        won(data[8]);
    }
    else if (data[0]===data[1] && data[1]===data[2] && data[2]!="") {
        won(data[2]);
    }
    else if (data[2]===data[4] && data[4]===data[6] && data[6]!="") {
        won(data[6]);
    }
}
const won = (winner) =>{
    setLock(true);
    if (winner==="x") {
        titleref.current.innerHTML = `Fuck You  : <img src='${x_icon}' alt='x'/>You Won` ;
    }
    else{
        titleref.current.innerHTML = `Fuck You  : <img src='${o_icon}' alt='o'/> You Won`;
    }
}
const reset = () => {
    setLock(false);
    setcount(0); // Reset the move count
    data = ["", "", "", "", "", "", "", "", ""]; // Reset the data array
    titleref.current.innerHTML = `Tik Tak Toe <span>.By LTD</span>`;

const boxes = document.querySelectorAll(".boxes");
boxes.forEach((box) => {
    box.innerHTML = "";
});
}



  return (
    <div className='container'>
        <h1 className='title' ref={titleref}>Tik Tak Toe <span>.By LTD</span></h1>
        <div className='board'>
            <div className='row1'>
                <div className="boxes" onClick={(e)=>{toggle(e,0)}}></div>
                <div className="boxes" onClick={(e)=>{toggle(e,1)}}></div>
                <div className="boxes" onClick={(e)=>{toggle(e,2)}}></div>
            </div>
            <div className='row2'>
                <div className="boxes" onClick={(e)=>{toggle(e,3)}} ></div>
                <div className="boxes" onClick={(e)=>{toggle(e,4)}}></div>
                <div className="boxes" onClick={(e)=>{toggle(e,5)}}></div>
            </div>
            <div className='row3'>
                <div className="boxes" onClick={(e)=>{toggle(e,6)}}></div>
                <div className="boxes" onClick={(e)=>{toggle(e,7)}}></div>
                <div className="boxes" onClick={(e)=>{toggle(e,8)}}></div>
            </div>

        </div>
        <button className='reset' onClick={() => reset()}>Reset</button>


    </div>
  )
}
