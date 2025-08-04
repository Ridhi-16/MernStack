import axios from "axios"
import { useEffect, useState } from "react"
import Switch from "react-switch"
import { toast } from "react-toastify"
import Swal from "sweetalert2"

export default function Manage(){
    const[trainers,setTrainers]=useState([])

    const fetchData=()=>{
        axios.post("http://localhost:1415/api/trainer/all")
        .then((res)=>{
            console.log(res)
            if(res.data.success){
                setTrainers(res.data.data)

            }
            else{
                toast.error(res.data.essage)
            }
        })
        .catch((err)=>{
            toast.error(err.message)
        })
    }
    useEffect(()=>{
        fetchData()

    },[])

    const changeStatus=(id,status)=>{
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: `${!status?"Enable":"Disable"}`
      }).then((result) => {
      if (result.isConfirmed) {
        let data={
            userId:id,
            status:!status
          }
          let token=sessionStorage.getItem("token")
          let headers={
            Authorization:token
          }
          axios.post("http://localhost:1415/admin/trainer/changeStatus",data,{headers:headers})
          .then((res)=>{
            if(res.data.success){
            Swal.fire({
              title: res.data.message,
              // text: "Your file has been deleted.",
              icon: "success"
            });
            fetchData()
          }
          else{
            toast.error(res.data.message)
          }
        })
        .catch((err)=>{
          toast.error(err.message)
        })
    }})
  }

return(
    <>
    

    
    <section className="bmi-calculator-section ">
        <div className="container  ">
        <div className="row ">
            <div className="col header-margin">
                <h1 className="text-light text-center">Trainers</h1>
            </div>
        </div>
        <div className="row  ">

                {trainers?.map((el,index)=>(
                    <div className="col-md-4  my-4">
                    <div className=" card h-100"> 
                    <img src={el?.profile} style={{height:"200px"}} className="card-img-top img-fluid img-thumbnail" alt="..." />
                    <div className="card-body">
                        <h2 className="card-title">{el?.userId?.name}</h2>
                        <p class="card-text">{el?.about}</p>
                        
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{el?.contact}</li>
                        <li className="list-group-item">{el?.specialization}</li>
                        <li className="list-group-item">{el?.status?"Active":"In-active"}</li>
                    </ul>
                    {/* <div className="card-body">
                        <a href="#" className="card-link">
                        Card link
                        </a>
                        <a href="#" className="card-link">
                        Another link
                        </a>
                    </div> */}
                </div>
                </div>
                ))}

        
        </div>
    </div>
    </section>
    

    </>
)
}







// <div class="cd-trainer"><div class="row">
// <div class="col-md-6"><div class="cd-trainer-pic"><img alt="" 
// src="/assets/img/classes/class-details/trainer-profile.jpg">
// </div></div><div class="col-md-6"><div class="cd-trainer-text"><div class="trainer-title"><h4>Athart Rachel</h4><span>Gym Trainer</span></div><div class="trainer-social"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-youtube-play"></i></a><a href="#"><i class="fa fa-instagram"></i></a><a href="#"><i class="fa  fa-envelope-o"></i></a></div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua viverra maecenas lacus vel facilisis.</p><ul class="trainer-info"><li><span>Age</span>35</li><li><span>Weight</span>148lbs</li><li><span>Height</span>10' 2``</li><li><span>Occupation</span>no-founder</li></ul><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua viverra maecenas lacus vel facilisis. </p></div></div></div></div>