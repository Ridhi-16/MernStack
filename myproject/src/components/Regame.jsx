import { useState } from "react"

export default function Regame(){

    const [start,setStart]=useState(false)
    const[turn, setTurn]=useState(1)
    const [player1, setPlayer1]=useState(0)
    const [player2, setPlayer2]=useState(0)
    const gameStart=()=>{
        setStart(true)
    }
    const changeTurn=()=>{
        let num=Math.round(Math.random()*100)
        if(turn==1){
            setPlayer1(score)
            setTurn(2)
        }
        else if(turn==2){
            setPlayer2(score)
            setStart(false)
        }
    }

    return(
        <>
        <div className="container p-5">
            <div className="row">
                <div className="col">
                    <button className="btn btn-danger d-block mx-auto" onClick={gameStart}> Start</button>
                </div>    
               
            </div>
            <div className="row">
                <div className="col-md-6">
                    {
                        start==true?
                        <>
                         <p className="text-center">Game is running</p>
                          </>
                         :
                         ""
                       
                    }
                   
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                   <h3>Score Player1 : </h3>
                </div>
                <div className="col-md-6">
                   <h3>Score Player2 : </h3>
                </div>
            </div>
            <div className="row ">
                <div className="col d-bock mx-auto btn btn-group">
                    <button className="btn btn-warning" onClick={changeTurn}>Play</button>
                
                    <button className="btn btn-outline-success">Winner</button>
                </div>
            </div>

        </div>

        </>
    )
}