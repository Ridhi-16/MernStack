import axios from "axios"
import { useEffect, useState } from "react"
import Switch from "react-switch"
import { toast } from "react-toastify"
import Swal from "sweetalert2"
import ApiService from "../services/ApiService"

export default function ManageMember(){
    const[trainers,setTrainers]=useState([])

    const fetchData=()=>{
        ApiService.allMember()
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
          ApiService.changeStatusMember(data)
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

 
  <section className="class-timetable-section spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title">
            
            <h2 className="text-center">Members</h2>
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
                  <th> Name</th>
                  <th> Age</th>
                  <th>contact</th>
                  <th>Goal</th>
                  <th>Gender</th>
                  <th>Profile</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {trainers?.map((el,index)=>(
                  
                    <tr key={index}>
                        <td className="class-time text-white"><h2>{index+1}</h2></td>
                        <td className="dark-bg hover-b">
                            <h5>{el?.userId?.name}</h5>
                         </td>
                        <td className="hover-bg">
                           <h5> {el?.age}</h5>
                        </td>
                        <td className="dark-bg hover-bg">
                            <h5>{el?.contact}</h5>
                         </td>
                         <td className="hover-bg">
                           <h5> {el?.goal}</h5>
                        </td>
                        <td className="dark-bg hover-bg">
                            <h5>{el?.gender}</h5>
                         </td>
                         <td className="hover-bg">
                           <img src={el?.profile} alt="" /> 
                        </td>

                         
                         <td className="dark-bg">
                           <h5> {el?.status?"Active":"In-active"}</h5>
                        </td>
                        <td className=" hover-bg">
                          <button className="btn"><Switch
                           checked={el?.status}
                           onChange={()=>{
                            changeStatus(el?.userId?._id, el?.status)
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