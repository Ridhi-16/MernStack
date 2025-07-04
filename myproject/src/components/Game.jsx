import { useState } from "react"

export default function Game(){
    
    var[turns,setTurn]=useState(null)
    var[scores1,setScore1]=useState(0)
    var[scores2,setScore2]=useState(0)
    

    const turn=()=>{
        setTurn("Player 1")
    }
    const score1=()=>{
        let num1=Math.round(Math.random()*100)
        setScore1(num1)
    }
    const score2=()=>{
        let num2=Math.round(Math.random()*100)
        setScore2(num2)
    }
    var[win,setWin]=useState(null)
    
    let winner=()=>{
        if(scores1>scores2){
            setWin("Player 1")
        }
        else if(scores1<scores2){
            setWin("Player 2")
        }
        else{
            setWin("Tie")
        }
    }

    return(
        <>
        <div className="  border border-dark border-4 p-4  main">
            <h1 className="text-center my-2  mb-3 py-0" >GAME</h1>
           
            <button className="btn btn-danger  d-block mx-auto " onClick={turn}>Start</button>
            <p className="text-center my-2 start"> {turns}</p>
            <div className=" d-flex justify-content-around my-2">
                
                <button className="btn btn-dark mx-5" onClick={score1}>Player1 <i class="bi bi-person"></i></button>
                
                <button className="btn btn-secondary mx-5" onClick={score2}>Player2 <i class="bi bi-person"></i></button>
            </div>
                <p className="text-center pl1">Player1 : Score   {scores1}</p>
                <p className="text-center pl2">Player2 : Score   {scores2}</p>
                
            
            <div className=" text-center">
                <button className="btn btn-success my-2" onClick={winner}>Winner <i class="bi bi-trophy-fill"></i></button>
                <p className="win mb-0">{win}</p>
            </div>
            
        </div>
        </>
    )
}