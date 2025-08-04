import axios from "axios"
const BASEURL="http://localhost:1415"
class ApiServices{
    getToken(){
        let token=sessionStorage.getItem("token")
        let headers={
                Authorization:token
            }
        return headers
    }
    login(data){
        return axios.post(BASEURL+"/api/user/login", data,{headers:this.getToken()})
    }
    register(data){
        return axios.post(BASEURL+"/api/member/register", data)
    }
    trainerRegister(data){
        return axios.post(BASEURL+"/api/trainer/register", data ,{headers:this.getToken()})
    }
    allTrainer(data){
        return axios.post(BASEURL+"/api/trainer/all",data )
    }
    changeStatusTrainer(data){
        return axios.post(BASEURL+"/admin/trainer/changeStatus", data, {headers:this.getToken()})
    }
    changeStatusDiet(data){
        return axios.post(BASEURL+"/admin/diet/changeStatus", data, {headers:this.getToken()})
    }
    addDiet(data){
        return axios.post(BASEURL+ "/trainer/diet/add",data,{headers:this.getToken()})

    }
    allDiet(data){
        return axios.post(BASEURL+"/api/diet/all", data )
    }
    addBatch(data){
        return axios.post(BASEURL+"/admin/batch/add",data,{headers:this.getToken()})
    }
    
}
export default new ApiServices