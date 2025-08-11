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
    changeStatusExercise(data){
        return axios.post(BASEURL+"/trainer/exercise/changeStatus", data, {headers:this.getToken()})
    }
    changeStatusMember(data){
        return axios.post(BASEURL+"/admin/member/changeStatus", data, {headers:this.getToken()})
    }
    addDiet(data){
        return axios.post(BASEURL+ "/trainer/diet/add",data,{headers:this.getToken()})

    }
    addExercise(data){
        return axios.post(BASEURL+ "/trainer/exercise/add",data,{headers:this.getToken()})

    }
    addProgress(data){
        return axios.post(BASEURL+ "/trainer/progress/add",data,{headers:this.getToken()})

    }
    allDiet(data){
        return axios.post(BASEURL+"/api/diet/all", data )
    }
    allExercise(data){
        return axios.post(BASEURL+"/api/exercise/all", data )
    }
    allProgress(data){
        return axios.post(BASEURL+"/api/exercise/all", data )
    }
    allMember(data){
        return axios.post(BASEURL+"/api/member/all", data )
    }
    allBatch(data){
        return axios.post(BASEURL+"/api/batch/all", data )
    }
    updateTrainer(data){
        return axios.post(BASEURL+"/admin/trainer/update",data,{headers:this.getToken()})
    }
    updateExercise(data){
        return axios.post(BASEURL+"/trainer/exercise/update",data,{headers:this.getToken()})
    }
    updateDiet(data){
        return axios.post(BASEURL+"/trainer/diet/update",data,{headers:this.getToken()})
    }
    addBatch(data){
        return axios.post(BASEURL+"/admin/batch/add",data,{headers:this.getToken()})
    }
    singleTrainer(data){
        return axios.post(BASEURL+"/api/trainer/single",data)
    }
    singleDiet(data){
        return axios.post(BASEURL+"/api/diet/single",data)
    }
    singleExercise(data){
        return axios.post(BASEURL+"/api/exercise/single",data)
    }
    singleBatch(data){
        return axios.post(BASEURL+"/api/batch/single",data)
    }
}
export default new ApiServices