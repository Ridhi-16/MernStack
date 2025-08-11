import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import ApiService from "../../services/ApiService";


export default function UpdateDiet(){
    let {id}=useParams()
  let nav=useNavigate()
  const{register,handleSubmit,setValue,reset,formState:{errors}}=useForm()

 useEffect(()=>{
     fetchData()
 },[])

  const fetchData=()=>{
      let data={
          _id:id
      }
      console.log(data);
      
      ApiService.singleDiet(data)
      .then((res)=>{
        console.log(res);
        
          if(res.data.success){
              
             setValue("dietName", res.data.data.dietName);
              setValue("dietType", res.data.data.dietType);
              setValue("calorieIntake", res.data.data.calorieIntake );
              setValue("restrictions", res.data.data.restrictions );
              setValue("MealPlan", res.data.data.MealPlan );
              setValue("fats", res.data.data.fats);
              setValue("protein", res.data.data.protein);
              setValue("carbs", res.data.data.fats);
              
              
          }else{
              toast.error(res.data.message)
          }
      })
      .catch((err)=>{
          toast.error(err.message)
      })
      
  }
  const handleForm=(data)=>{
    console.log("data entered",data)
   console.log("form Submitted",data);

    data._id=id
    ApiService.updateDiet(data)
    .then((res)=>{
      console.log(res)
      if(res.data.success){
        console.log(res.data)
        toast.success(res.data.message)
        
          nav("/trainer/diet/manage")
       
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
            <h2 className="text-dark">Update Diet</h2>
            <form action="" method="POST" className="row " onSubmit={handleSubmit(handleForm,handleError)}>
              <div className="mb-3 col-md-6 ">
                <label htmlFor="dietName" className="label">
                  Diet Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="dietName"
                  name="dietName"
                  placeholder="dietName"
                  required=""
                  {...register("dietName",{
                    required:{
                      value:true,
                      message:"dietName is req"
                    }
                  })}
                />
              </div>

              <div className="mb-3 col-md-6">
                  <label htmlFor="dietType" className="label">
                    Diet type
                  </label>
                  <input
                  
                    type="text"
                    className="form-control"
                    id="dietType"
                    name="dietType"
                    placeholder=""
                    required=""
                    {...register("dietType",{
                      required:{
                        value:true,
                        message:"dietType is req"
                      }
                    })}
                  />
              </div>
                
              <div className="mb-3 col-md-6">
                  <label htmlFor="calorieIntake" className="label">
                  Calorie Intake
                  </label>
                  <input
      
                  maxLength={10}
                  minLength={10}
                    type="number"
                    className="form-control"
                    id="calorieIntake"
                    name="calorieIntake"
                    placeholder="Enter calorieIntake"
                    required=""
                    {...register("calorieIntake",{
                      required:{
                        value:true,
                        message:"calorieIntake is req"
                      }
                    })}
                  />
              </div>

              <div className="mb-3 col-md-6">
                  <label htmlFor="restrictions" className="label">
                    Restrictions
                  </label>
                  <input
              
                    type="text"
                    className="form-control"
                    id="restrictions"
                    name="restrictions"
                    placeholder="Enter restrictions"
                    required=""
                    {...register("restrictions",{
                      required:{
                        value:true,
                        message:"restrictions is req"
                      }
                    })}
                  />
              </div>
                
              <div className="mb-3 col-md-6">
                  <label htmlFor="protein" className="label">
                    Protein
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="protein"
                    name="protein"
                    placeholder=""
                    required=""
                    {...register("protein",{
                      required:{
                        value:true,
                        message:"protein is req"
                      }
                    })}
                  />
              </div> 

              <div className="mb-3 col-md-6">
                  <label htmlFor="carbs" className="label">
                    Carbs
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="carbs"
                    name="carbs"
                    placeholder=""
                    required=""
                    {...register("carbs",{
                      required:{
                        value:true,
                        message:"carbs is req"
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
                <label htmlFor="fats" className="label">
                    Fats
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="fats"
                    name="fats"
                    placeholder=""
                    required=""
                    {...register("fats",{
                      required:{
                        value:true,
                        message:"fats is req"
                      }
                    })}
                  />
              </div>
              {/* <Input/> */}

  
              
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
                    