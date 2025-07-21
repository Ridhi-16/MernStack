import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

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
        if(email=="admin@gmail.com" && password=="2025"){
            toast.success("login succesfully")
            nav("/")
        }
        else{
            toast.error("invalid")
        }
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