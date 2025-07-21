import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register(){
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [name,setName]=useState("");
  const [contact,setContact]=useState();
  const [goal,setGoal]=useState("");
  const [gender,setGender]=useState("");
  const [term,setTerm]=useState();

  


  const changeName=(e)=>{
    console.log(e.target.value)
    setName(e.target.value)
  }
  const changeEmail=(e)=>{
    console.log(e.target.value)
    setEmail(e.target.value)
  }

  const changePassword=(e)=>{
    console.log(e.target.value)
    setPassword(e.target.value)
  }
  const changeContact=(e)=>{
    console.log(e.target.value)
    setContact(e.target.value)
  }
  const changeGoal=(e)=>{
    console.log(e.target.value)
  }
   const changeGender=(e)=>{
    console.log(e.target.value)
    setGender(e.target.value)
  }
   const changeTerms=(e)=>{
    console.log(e.target.checked)

  }
  
    return(
        <>
        <div className="login-body">
          <div className="login-box container register">
            <h2>Signup to FitTrack</h2>
            <form action="" method="POST" className="row">
              <div className="mb-3 col-md-6 ">
                <label htmlFor="name" className="label">
                  Name
                </label>
                <input
                  onChange={changeName}
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Name"
                  required=""
                />
              </div>
              <div className="mb-3 col-md-6">
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
              <div className="mb-3 col-md-6">
                <label htmlFor="Contact" className="label">
                  Contact
                </label>
                <input
                onChange={changeContact}
                maxLength={10}
                minLength={10}
                  type="tel"
                  className="form-control"
                  id="Contact"
                  name="Contact"
                  placeholder="Enter Contact"
                  required=""
                />
              </div>
              <div className="mb-3 col-md-6">
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
             
              <div className="col-md-6 mb-3  "> 
                <label  className="label mr-3">
                  Goals 
                </label> 
                <select name="goals" id="goal"  onChange={changeGoal} className="form-control">
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
                <input type="file" className="" />

              </div> 
              <div className="col-md-4 mb-3 ">
                
                  <span className="mr-2">Gender</span>
                  <input type="radio" name="gender" className="mr-2"  value="male"   onChange={changeGender} />
                  <span className="mr-2">Male</span>
                  <input type="radio" name="gender" className="mr-2"  value="female"  onChange={changeGender}/>
                  <span>Female</span>
              </div>

             

              <div className="text-center  login col-12">
                <p>Terms & Conditions <input type="checkbox" name="" id="terms" onChange={changeTerms}/></p>
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