import axios from "axios";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function AddBatch(){
  let nav=useNavigate()
  const{register,handleSubmit,reset,formState:{errors}}=useForm()
 
  const handleForm=(data)=>{
    const formData=new FormData();
   
    formData.append("dietName",data.batchName);
    formData.append("dietType",data.dietType);
    formData.append("calorieIntake",data.calorieIntake);
    formData.append("mealPlan",data.mealPlan);
    formData.append("restrictions",data.restrictions);
    formData.append("carbs",data.carbs);
    formData.append("proteins",data.proteins);
    formData.append("fats",data.fats);

    console.log("form Submitted",data);
    axios.post("http://localhost:1415/api/batch/add",formData)
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
                  Meal Plan 
                </label> 
                <select name="mealPlan" id="mealPlan"  className="form-control"
                {...register("mealPlan",{
                    required:{
                      value:true,
                      message:"mealPlan is req"
                    }
                  })}
                  >
                  <option value="select" disabled selected>Select</option>
                  <option value="Breakfast">Breakfast</option>
                  <option value="Lunch">Lunch</option>
                  <option value="Dinner">Dinner</option>
                  
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