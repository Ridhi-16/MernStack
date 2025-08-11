import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ApiService from "../../services/ApiService";

export default function AddBatch(){
  let nav=useNavigate()
  const{register,handleSubmit,reset,formState:{errors}}=useForm()
  const [trainerId, setTrainerId]=useState("")
  const [trainer,setTrainer]=useState([])
  console.log("trainerdata",trainer);
 
  const fetchData=()=>{
            
            ApiService.allTrainer()
            .then((res)=>{
                // console.log("trainerdata",res)
                if(res.data.success){
                  
                  setTrainer(res.data.data)
                  console.log("trainerdata",{trainer});
                }else{
                    toast.error(res.data.message)
                }
            })
            .catch((err)=>{
                toast.error(err.message)
            })
        }
  useEffect(()=>{
    fetchData()
  },[])
  
  const handleForm=(data)=>{
    data.trainerId=trainerId
    console.log("form Submitted",data);
    ApiService.addBatch(data)
    .then((res)=>{
      if(res.data.success){
        console.log(res.data)
        toast.success(res.data.message)
        
        if(res.data.userType==3){
          nav("/")
        }
      }
      else{
        toast.error(res.data.message)
      }

    })
    .catch((err)=>{
      toast.error(err.message);

    })

  }
   const handleError=(error)=>{
    console.log("err", error);
    
  }


  
    return(
        <>
        <div className="add-body  " >
          <div className=" add-box login-box  container  add  ">
            <h2 className="text-dark">ADD BATCH</h2>
            <form action="" method="POST" className="row " onSubmit={handleSubmit(handleForm,handleError)}>
              <div className="mb-3 col-md-6 ">
                <label htmlFor="batchName" className="label">
                  Batch Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="batchName"
                  name="batchName"
                  placeholder="batchName"
                  required=""
                  {...register("batchName",{
                    required:{
                      value:true,
                      message:"batchName is req"
                    }
                  })}
                />
              </div>
              <div className="mb-3 col-md-6">
                <label htmlFor="startDate" className="label">
                  Start Date
                </label>
                <input
                
                  type="text"
                  className="form-control"
                  id="startDate"
                  name="startDate"
                  placeholder=""
                  required=""
                  {...register("startDate",{
                    required:{
                      value:true,
                      message:"startDate is req"
                    }
                  })}
                />
              </div>
              <div className="mb-3 col-md-6">
                <label htmlFor="noOfSlots" className="label">
                 No Of Slots
                </label>
                <input
    
                  type="number"
                  className="form-control"
                  id="noOfSlots"
                  name="noOfSlots"
                  placeholder="Enter noOfSlots"
                  required=""
                  {...register("noOfSlots",{
                    required:{
                      value:true,
                      message:"noOfSlots is req"
                    }
                  })}
                />
              </div>
              <div className="mb-3 col-md-6">
                <label htmlFor="session" className="label">
                 Session
                </label>
                <input
             
                  type="text"
                  className="form-control"
                  id="session"
                  name="session"
                  placeholder="Enter session"
                  required=""
                  {...register("session",{
                    required:{
                      value:true,
                      message:"session is req"
                    }
                  })}
                />
              </div>
             
              <div className="col-md-6 mb-3  "> 
                <label  className="label mr-3">
                  Time
                </label> 
                <select name="time" id="time"  className="form-control"
                {...register("time",{
                    required:{
                      value:true,
                      message:"time is req"
                    }
                  })}
                  >
                  <option value="" disabled selected>Select</option>
                  <option value="9-11">9-11</option>
                  <option value="11-12">11-12</option>
                  <option value="12-2">12-2</option>
                  <option value="4-6">4-6</option>
                  <option value="6-8">6-8</option>
                  <option value="8-10">8-10</option>

                  
                </select>
              </div>

               
              <div className="mb-3 col-md-6">
                <label htmlFor="fees" className="label">
                 Fees
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="fees"
                  name="fees"
                  placeholder=""
                  required=""
                  {...register("fees",{
                    required:{
                      value:true,
                      message:"fees is req"
                    }
                  })}
                />
              </div> 
              <div className="col-md-6 mb-3">
                <label htmlFor="">Trainer</label>
                <select value={trainerId} onChange={(e)=>{setTrainerId(e.target.value)}}>
                <option value={""} disabled selected>Choose one</option>
                {trainer?.map((el,index)=>(
                
                <option key={index} value={el?._id}>{el?.userId?.name}</option>
          
                ))}
              </select>
              </div>
               

              <div className="col-6 mx-auto" >
                  <button type="submit" className="btn btn-success submit-btn">
                    Submit
                  </button>
              </div>
            </form>
          </div>
        </div>
        

        </>
    )
}