import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ApiService from "../../services/ApiService";

export default function AddExercise(){
  let nav=useNavigate()
  const{register,handleSubmit,reset,formState:{errors}}=useForm()
  const [userId, setUserId]=useState("")
  const [member,setMember]=useState([])
  console.log("memberdata",member);
 
  const fetchData=()=>{
            
            ApiService.allMember()
            .then((res)=>{
                console.log("memberdata",res)
                if(res.data.success){
                  
                  setMember(res.data.data)
                  console.log("memberdata",{member});
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
    data.userId=userId
    console.log("form Submitted",data);
    ApiService.addExercise(data)
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
                <label htmlFor="name" className="label">
                  Exercise Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="name"
                  required=""
                  {...register("name",{
                    required:{
                      value:true,
                      message:"name is req"
                    }
                  })}
                />
              </div>
              <div className="mb-3 col-md-6">
                <label htmlFor="videoUrl" className="label">
                 Exercise video
                </label>
                <input
                
                  type="text"
                  className="form-control"
                  id="videoUrl"
                  name="videoUrl"
                  placeholder=" video"
                  required=""
                  {...register("videoUrl",{
                    required:{
                      value:true,
                      message:"videoUrl is req"
                    }
                  })}
                />
              </div>
              <div className="mb-3 col-md-6">
                <label htmlFor="noOfSets" className="label">
                 No Of Sets
                </label>
                <input
    
                  type="number"
                  className="form-control"
                  id="noOfSets"
                  name="noOfSets"
                  placeholder="Enter noOfSets"
                  required=""
                  {...register("noOfSets",{
                    required:{
                      value:true,
                      message:"noOfSets is req"
                    }
                  })}
                />
              </div>
              <div className="mb-3 col-md-6">
                <label htmlFor="repetition" className="label">
                 Repetition
                </label>
                <input
             
                  type="text"
                  className="form-control"
                  id="repetition"
                  name="repetition"
                  placeholder="Enter repetition"
                  required=""
                  {...register("repetition",{
                    required:{
                      value:true,
                      message:"repetition is req"
                    }
                  })}
                />
              </div>
             
              {/* <div className="col-md-6 mb-3  "> 
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
              </div> */}        
              {/* <div className="mb-3 col-md-6">
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
              </div>  */}
              <div className="col-md-6 mb-4">
                <label htmlFor="">Trainer</label>
                <select value={userId} onChange={(e)=>{setUserId(e.target.value)}}>
                <option value={""} disabled selected>Choose one</option>
                {member?.map((el,index)=>(
                
                <option key={index} value={el?.userId?._id}>{el?.userId?.name}</option>
          
                ))}
              </select>
              </div>
              
              

              <div className="col-7 mx-auto" >
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