import axios from "axios";

import { useFieldArray, useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import ApiService from "../../services/ApiService";
import { useEffect, useState } from "react";

export default function UpdateTrainer(){
    let {id,_id}=useParams()
    const [previousImg, setPreviousImg]=useState("")
    
  let nav=useNavigate()
const {register,handleSubmit, reset, setValue ,formState:{errors}}=useForm()
useEffect(()=>{
    fetchData()
},[]) 



const fetchData=()=>{
    let data={
        userId:id
    }
    ApiService.singleTrainer(data)
    .then((res)=>{
        if(res.data.success){
            setPreviousImg(res.data.data.profile)
           setValue("name", res.data.data.userId.name);
            setValue("contact", res.data.data.contact );
            setValue("about", res.data.data.about );
            setValue("experience", res.data.data.experience );
            setValue("specialization", res.data.data.specialization);
            
        }else{
            toast.error(res.data.message)
        }
    })
    .catch((err)=>{
        toast.error(err.message)
    })
    
}

const handleForm=(data)=>{
  console.log("input data",data)
 
  const formData = new FormData();  
  const file = data?.profile?.[0];
  if (!!file) {
    console.log(file);
    formData.append("profile", file);
  } 

  formData.append("name", data.name);
  formData.append("about", data.about);
  formData.append("email", data.email);
  formData.append("password", data.password);
  formData.append("contact", data.contact);
  formData.append("experience", data.experience);
  formData.append("specialization", data.specialization);
  formData.append("_id",_id)
  
  ApiService.updateTrainer(formData)
  
    .then((res)=>{
        if(res.data.success){
            console.log(res)
            toast.success(res.data.message)
            nav("/admin/trainer/manage")
        }
        else{
            toast.error(res.data.message)
        }
    })
    .catch((err)=>{
        toast.error(err.message)
    })
}
  const handleError=(error)=>{
    console.log("err", error);
    
  }
    return(

        <>
        <div className="login-body">
          <div className="login-box container register">
            <h2>Update trainer</h2>
            <form action="" method="POST" className="row" onSubmit={handleSubmit(handleForm,handleError)}>
              <div className="mb-3 col-md-6 ">
                <label htmlFor="name" className="label">
                  Name
                </label>
                <input
                  
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Name"
                  required=""
                  {...register("name", {
                  required:{
                    value:true,
                    message:"Name is required"
                  }
                })}
                
                />
                {errors?.name?.message}
              </div>
              
              
              <div className="mb-3 col-md-6">
                <label htmlFor="Contact" className="label">
                  Contact
                </label>
                <input
                maxLength={10}
                minLength={10}
                  type="tel"
                  className="form-control"
                  id="Contact"
                  name="Contact"
                  placeholder="Enter Contact"
                  required=""
                  {...register("contact", {
                     required:{
                      value:true,
                      message:"contact is req"
                    },
                   minLength:{
                    value:10,
                    message:"Length must be 10"
                    },
                    maxLength:{
                    value:10,
                    message:"Length must be 10"
                    }
                    })}
                />
                {errors?.contact?.message}
              </div>
              
              
              <div className="col-md-6 mb-3  "> 
                <label  className="label mr-3">
                  Specialization 
                </label> 
                <select name="goals" id="goal"   className="form-control"
                    {...register("specialization", {
                      required:{
                      value:true,
                      message:"specialization is required"
                    }
                  })}
                >
                  <option value="select" disabled selected>Select</option>
                  <option value="WeightLoss">WeightLoss</option>
                  <option value="WeightGain">WeightGain</option>
                  <option value="Bodyshape">Bodyshape</option>
                  <option value="Training">Training</option>
                </select>
              </div>
              <div className="mb-3 col-md-6 ">
                <label htmlFor="about" className="label">
                  About
                </label>
                <input
                  
                  type="text"
                  className="form-control"
                  id="about"
                  name="about"
                  placeholder="About"
                  required=""
                  {...register("about", {
                  required:{
                    value:true,
                    message:"About is required"
                  }
                })}
                
                />
                {errors?.about?.message}
              </div>
              <div className="mb-3 col-md-6 ">
                <label htmlFor="experience" className="label">
                  Experience
                </label>
                <input
                  
                  type="text"
                  className="form-control"
                  id="experience"
                  name="experience"
                  placeholder="Experience"
                  required=""
                  {...register("experience", {
                  required:{
                    value:true,
                    message:"Experience is required"
                  }
                })}
                
                />
                {errors?.experience?.message}
              </div>
              <div className="col-md-6  mb-3   mt-2">
                <label  className="label ">
                  Profile
                </label>
                <input type="file" className=""
                name="profile"
                {...register("profile")}  
                // onChange={changeImage}
                />
                <div className="div ">
                <img src={previousImg} style={{width:"50px",height:"50px"}} alt="" />
                </div>

              </div> 
              <div className="text-center  login col-12">
                <p>Terms & Conditions <input type="checkbox" name="" id="terms" /></p>
              </div>

              <div className="col-6 mx-auto">
                  <button type="submit" className="btn btn-success login-btn">
                    Submit
                  </button>
              </div>
              <div className="text-center mt-3 login col-12">
                <a href="#">Already have a account</a> |<Link to="/login" className="ml-1 text-danger">Sign in</Link>
              </div>
            </form>
          </div>
        </div>


        </>
    )
}