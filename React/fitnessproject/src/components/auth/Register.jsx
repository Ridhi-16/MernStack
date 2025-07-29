import axios from "axios";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Register(){
  let nav=useNavigate()
  const{register,handleSubmit,reset,formState:{errors}}=useForm()
 
  const handleForm=(data)=>{
    const formData=new FormData();
    const file=data?.memberDataprofile[0];
    formData.append("name",data?.memberDataname);
    formData.append("email",data?.memberDataemail);
    formData.append("password",data?.memberDatapassword);
    formData.append("contact",data?.memberDatacontact);
    formData.append("age",data?.memberDataage);
    formData.append("goal",data?.memberDatagoal);
    formData.append("profile",file);
    formData.append("gender",data?.memberDatagender);

    console.log("form Submitted",data);
    axios.post("http://localhost:1415/api/member/register",formData)
    .then((res)=>{
      console.log(res)
      
      if(res.data.success){
          let login={
          email:data.email,
        
          password:data.password
      }
      axios.post("http://localhost:1415/api/user/login", login)
    
      console.log(res);
        toast.success(res.data.message)
        sessionStorage.setItem("isLogin", true)
        
        sessionStorage.setItem("token", res.data.token)
        sessionStorage.setItem("name",res.data.data.name)
        sessionStorage.setItem("email",res.data.data.email)
        sessionStorage.setItem("userType",res.data.data.userType)
        sessionStorage.setItem("userId",res.data.data._id)
        console.log(res.data)

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
        <div className="login-body">
          <div className="login-box container register">
            <h2>Signup to FitTrack</h2>
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
                  {...register("name",{
                    required:{
                      value:true,
                      message:"name is req"
                    }
                  })}
                />
              </div>
              <div className="mb-3 col-md-6">
                <label htmlFor="email" className="label">
                  Email address
                </label>
                <input
                
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  required=""
                  {...register("email",{
                    required:{
                      value:true,
                      message:"email is req"
                    }
                  })}
                />
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
                  {...register("contact",{
                    required:{
                      value:true,
                      message:"contact is req"
                    }
                  })}
                />
              </div>
              <div className="mb-3 col-md-6">
                <label htmlFor="password" className="label">
                  Password
                </label>
                <input
             
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Enter password"
                  required=""
                  {...register("password",{
                    required:{
                      value:true,
                      message:"password is req"
                    }
                  })}
                />
              </div>
             
              <div className="col-md-6 mb-3  "> 
                <label  className="label mr-3">
                  Goals 
                </label> 
                <select name="goal" id="goal"  className="form-control"
                {...register("goal",{
                    required:{
                      value:true,
                      message:"goal is req"
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

               <div className="col-md-6  mb-3   mt-2">
                <label  className="label ">
                  Profile
                </label>
                <input type="file" className=""
                {...register("profile")}
                 />

              </div>
              <div className="mb-3 col-md-6">
                <label htmlFor="age" className="label">
                  Age
                </label>
                <input
    
               
                  type="number"
                  className="form-control"
                  id="age"
                  name="age"
                  placeholder="Enter Age"
                  required=""
                  {...register("age",{
                    required:{
                      value:true,
                      message:"age is req"
                    }
                  })}
                />
              </div> 
              <div className="col-md-4 mb-3 mt-5">
                
                  <span className="mr-2">Gender</span>
                  <input type="radio" name="gender" className="mr-2"  value="male"  
                  {...register("gender",{
                    required:{
                      value:true,
                      message:"gender is req"
                    }
                  })} />
                  <span className="mr-2">Male</span>
                  <input type="radio" name="gender" className="mr-2"  value="female"  
                  {...register("gender",{
                    required:{
                      value:true,
                      message:"gender is req"
                    }
                  })}  />
                  <span>Female</span>
              </div>

             

              <div className="text-center  login col-12">
                <p>Terms & Conditions <input type="checkbox" name="" id="terms"  /></p>
              </div>

              <div className="col-6 mx-auto" >
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