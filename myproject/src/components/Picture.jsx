import { useState } from "react"

export default function Picture(){
    let data=["pic1.jpeg","pic2.jpeg","pic3.jpeg","pic4.jpeg"]


    const [start,setStart]=useState(false)

    var[num1,setNum1]=useState()
    var[num2,setNum2]=useState()
    var[num3,setNum3]=useState()
    var[num4,setNum4]=useState()
    var[num0,setNum0]=useState()

    var[show,setShow]=useState(false)
    const[win,setWinner]=useState("")

    const shows=()=>{
        setStart(true)
        setShow(true)
        let num0 =Math.round((Math.random()*10)/3)
        let num1 =Math.round((Math.random()*10)/3)
        let num2=Math.round((Math.random()*10)/3)
        let num3=Math.round((Math.random()*10)/3)
        let num4=Math.round((Math.random()*10)/3)
        console.log(num0)
        console.log(num1)
        console.log(num2)
        console.log(num3)
        console.log(num4)



        setNum0(num0)
        setNum1(num1)
        setNum2(num2)
        setNum3(num3)
        setNum4(num4)

    }
    let winner=(no)=>{
        if(num0==no){
            setWinner(`WINNER-${no}`)
        }
        else{
            setWinner("LOSE")
            console.log("no")
        }
    }

    return(
        <>

        <button className="btn btn-primary d-block mx-auto " onClick={shows}> show</button>
        <div>
            {
                        start==true?
                        <>
                         <p className="text-center">Game is running</p>
                          </>
                         :
                         ""
                       
            }
        </div>
            <div className="container "  id="img">
                <div className="row d-block mx-auto">
                    <div className="col-3 d-block mx-auto  mb-5">
                        <img src={data[num0]}  alt="" />
                    </div>
                </div>
                <div class="row">
                    <div className="col d-flex justify-content-between w-50">
                        <div style={{width:"200px"}}>
                           <img src={data[num1]}onClick={() => winner(num1)} alt="" />
                        </div>
                        <div style={{width:"200px"}}>
                           <img src={data[num2]}onClick={() => winner(num2)} alt="" />
                        </div>
                        <div style={{width:"200px"}}>
                           <img src={data[num3]}onClick={() => winner(num3)} alt="" />
                         </div>
                        <div style={{width:"200px"}}>  
                           <img src={data[num4]}onClick={() => winner(num4)} alt="" />
                        
                        </div>
                    </div>
                </div>
                <h3 className="text-center winner mt-3">{win}</h3>
            </div>
       
        </>
    )
}