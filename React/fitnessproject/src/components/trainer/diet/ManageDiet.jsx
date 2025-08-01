import axios from "axios"
import { useEffect, useState } from "react"
import Switch from "react-switch"
import { toast } from "react-toastify"
import Swal from "sweetalert2"
import ApiService from "../../services/ApiService"

export default function ManageDiet(){
    const[trainers,setTrainers]=useState([])

    const fetchData=()=>{
        ApiService.allDiet()
        .then((res)=>{
            console.log(res)
            if(res.data.sucess){
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
            _id:id,
            status:!status
          }
          let token=sessionStorage.getItem("token")
          let headers={
            Authorization:token
          }
          ApiService.changeStatusDiet(data)
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
  {/* <section
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
  </section> */}
  {/* Breadcrumb Section End */}
  {/* Class Timetable Section Begin */}
  <section className="class-timetable-section spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title">
            
            <h2 className="text-center">Diets</h2>
          </div>
        </div>
        
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="class-timetable">
            <table className="table table-bordered">
              <thead>
                <tr>
                  
                  <th>S.No</th>
                  <th> Diet Name</th>
                  <th>Diet Type</th>
                  <th>Meal Plan</th>
                  <th>Restrictions</th>
                  <th>Protein</th>
                  <th>Carbohyfrates</th>
                  <th>Fats</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {trainers?.map((el,index)=>(
                    <tr key={index}>
                        <td className="class-time text-white"><h2>{index+1}</h2></td>
                        <td className="dark-bg hover-b">
                            <h5>{el?.dietName}</h5>
                         </td>
                        <td className="hover-bg">
                           <h5> {el?.dietType}</h5>
                        </td>
                        <td className="dark-bg hover-bg">
                            <h5>{el?.mealPlan}</h5>
                         </td>
                         <td className="hover-bg">
                           <h5> {el?.restrictions}</h5>
                        </td>
                        <td className="dark-bg hover-bg">
                            <h5>{el?.protein}</h5>
                         </td>
                         <td className="hover-bg">
                           <h5> {el?.carbs}</h5>
                        </td>
                        <td className="dark-bg hover-bg">
                            <h5>{el?.fats}</h5>
                         </td>
                         
                         <td className="hover-bg">
                           <h5> {el?.status?"Active":"In-active"}</h5>
                        </td>
                        <td className="dark-bg hover-bg">
                          <button><Switch
                           checked={el?.status}
                           onChange={()=>{
                            changeStatus(el?._id, el?.status)
                           }}
                          /></button>
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