import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import ApiService from "../services/ApiService"

export default function Login(){
    let nav=useNavigate()
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")

    const changeEmail=(e)=>{
        console.log(e.target.value)
        setEmail(e.target.value)

    }
    const changePassword=(e)=>{
        setPassword(e.target.value)
    }
    
    const handleForm=(e)=>{
    e.preventDefault()
    let data={
      email:email,
      password:password
    }
    ApiService.login(data)
    .then((res)=>{
      console.log(res);
      if(res.data.success){
        toast.success(res.data.message)
        sessionStorage.setItem("isLogin", true)
        
        sessionStorage.setItem("token", res.data.token)
        sessionStorage.setItem("name",res.data.data.name)
        sessionStorage.setItem("email",res.data.data.email)
        sessionStorage.setItem("userType",res.data.data.userType)
        sessionStorage.setItem("userId",res.data.data._id)
        if(res.data.data.userType==1){
          nav("/admin")
        }
        else{
          nav("/")
        }
      }else{
        toast.error(res.data.message)
      }
    })
    .catch((err)=>{
      toast.error(err.message)
    })
  }
    return(
        <>
        <div className="login-body">
            <div className="login-box">
                <h2>Login to FitTrack</h2>
                <form action="" method="POST" onSubmit={handleForm}>
                <div className="mb-3">
                    <label htmlFor="email" className="label">
                    Email address
                    </label>
                    <input
                    onChange={changeEmail}
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    required=""
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="label">
                    Password
                    </label>
                    <input
                    onChange={changePassword}
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Enter password"
                    required=""
                    />
                </div>
                <div className="">
                    <button type="submit" className="btn login-btn">
                    Login
                    </button>
                </div>
                <div className="text-center mt-3 login">
                    <a href="#">Forgot password?</a> | <Link to="/register">Sign up</Link>
                </div>
                </form>
            </div>
        </div>

      
        </>
    )
}