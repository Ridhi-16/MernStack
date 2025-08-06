import axios from "axios"
import { useEffect, useState } from "react"
import Switch from "react-switch"
import { toast } from "react-toastify"
import Swal from "sweetalert2"
import ApiService from "../../services/ApiService"
import { Link } from "react-router-dom"

export default function ManageTrainer(){
    const[trainers,setTrainers]=useState([])

    const fetchData=()=>{
        ApiService.allTrainer()
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
          ApiService.changeStatusTrainer(data)
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
        <>

  {/* Header End */}
  {/* Breadcrumb Section Begin */}
  <section
    className="breadcrumb-section set-bg"
   style={{background:'url("/assets/img/breadcrumb-bg.jpg")'}}
  >
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <div className="breadcrumb-text">
            <h2>Manage Trainers</h2>
            <div className="bt-option">
              <a href="./index.html">Home</a>
              <a href="#">Pages</a>
              <span>Services</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Breadcrumb Section End */}
  {/* Class Timetable Section Begin */}
  <section className="class-timetable-section spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="section-title">
            
            <h2>Find Your Trainer</h2>
          </div>
        </div>
        
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="class-timetable">
            <table className="table table-bordered">
              <thead>
                <tr>
                  
                  <th>sno</th>
                  <th>NAME</th>
                  <th>contact</th>
                  <th>profile</th>
                  <th>specialization</th>
                  <th>about</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {trainers?.map((el,index)=>(
                    <tr key={index}>
                        <td className="class-time text-white"><h2>{index+1}</h2></td>
                        <td className="dark-bg hover-bg">
                            <h5>{el?.userId?.name}</h5>
                         </td>
                        <td className="hover-bg">
                           <h5> {el?.contact}</h5>
                        </td>
                        <td className="dark-bg hover-bg">
                            <img src={el?.profile} alt="" style={{height:"100px", width:"100px"}} />
                         </td>
                         <td className="hover-bg">
                           <h5> {el?.specialization}</h5>
                        </td>
                        <td className="dark-bg hover-bg">
                            <h5>{el?.about}</h5>
                         </td>
                         <td className="hover-bg">
                           <h5> {el?.status?"Active":"In-active"}</h5>
                        </td>
                        <td className="dark-bg hover-bg">
                          <button className="btn"><Switch
                           checked={el?.status}
                           onChange={()=>{
                            changeStatus(el?.userId?._id, el?.status)
                           }}
                          /></button>
                          <Link  to={`/admin/trainer/update/${el.userId._id}/${el._id}`} className="btn btn-success mx-2"> <i className="fa fa-edit"></i></Link>
                        </td>
                    </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
  </>
  </>
    )
}