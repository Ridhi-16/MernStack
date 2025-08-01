import axios from "axios";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function AddDiet(){
  let nav=useNavigate()
  const{register,handleSubmit,reset,formState:{errors}}=useForm()
 
  const handleForm=(data)=>{
    console.log("data entered",data)
    let userId=sessionStorage.getItem("userId")
    // const formData=new FormData();
    // formData.append("userId",userId)
    // formData.append("dietName",data?.dietName);
    // formData.append("dietType",data?.dietType);
    // formData.append("calorieIntake",data?.calorieIntake);
    // formData.append("mealPlan",data?.mealPlan);
    // formData.append("restrictions",data?.restrictions);
    // formData.append("carbs",data?.carbs);
    // formData.append("protein",data?.protein);
    // formData.append("fats",data?.fats);
    
    let token=sessionStorage.getItem("token")
    let Data={
      ...data,
      userId:userId
    } 
   console.log("form Submitted",data);

    let headers={
         Authorization:token
    }
    axios.post("http://localhost:1415/trainer/diet/add",Data,{headers:headers})
    .then((res)=>{
      console.log(res)
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
     <section
    className="breadcrumb-section set-bg"
    data-setbg="/assets/img/breadcrumb-bg.jpg"
    style={{background:'url("/assets/img/breadcrumb-bg.jpg")'}}
  >
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <div className="breadcrumb-text">
            <h2>BMI calculator</h2>
            <div className="bt-option">
              <a href="./index.html">Home</a>
              <a href="#">Pages</a>
              <span>BMI calculator</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
     <div className="div spad bmi-calculator-section" >
          <div className="container "  >
            <div className="row justify-content-center" >
              <div className="col-md-10 p-5" style={{boxShadow:"0px 0px 10px ",backgroundColor:"rgb(250,250,250)"}} >
                <div className="row">
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
                </div>
                <div className="row">
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
                </div>
              
                <div className="row">
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
                </div>
               <div className="row">
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
                </div> 

             

              <div className="text-center  login col-12">
                <p>Terms & Conditions <input type="checkbox" name="" id="terms"  /></p>
              </div>

              <div className="col-6 mx-auto" >
                  <button type="submit" className="btn btn-secondary w-100">
                    Submit
                  </button>
              </div>
              

              </div>
              {/* <div className="col-md-5 d-flex align-items-stretch">
                <div
                  className="info-wrap w-100 p-5 img"
                  style={{ backgroundImage: "url(/assets/images/img.jpg)" }}
                ></div>
              </div> */}
            </div>
          </div>
     </div>
            
      </>
    )
    
  }

  