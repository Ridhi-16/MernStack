import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Blog from "./components/pages/Blog";
import Gallery from "./components/pages/Gallery";
import About from "./components/pages/About";
import Error from "./components/pages/Error";
import Contact from "./components/pages/Contact";
import BlogDetails from "./components/pages/BlogDetails";
import Bmi from "./components/pages/Bmi";
import ClassDetails from "./components/pages/ClassDetails";
import ClassTimetable from "./components/pages/ClassTimetable";
import Services from "./components/pages/Services";
import Team from "./components/pages/Team";
import Layout from "./components/layouts/Layout";

import { Bounce, ToastContainer } from "react-toastify";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import TrainerRegister from "./components/admin/trainer/TrainerRegister";
import AdminLayout from "./components/layouts/AdminLayout";
import ManageTrainer from "./components/admin/trainer/ManageTrainer";
import AddDiet from "./components/trainer/diet/AddDiet";
import AddCategory from "c:/Users/HP/Downloads/AddCategory";
import AddBatch from "./components/admin/trainer/AddBatch";
import Manage from "./components/admin/trainer/Manage";
import ManageDiet from "./components/trainer/diet/ManageDiet";
import TrainerLayout from "./components/layouts/TrainerLayout";
import ManageCategory from "c:/Users/HP/Downloads/ManageCategory";
import Input from "./components/pages/Input";
import UpdateTrainer from "./components/admin/trainer/UpdateTrainer";
import ManageBatch from "./components/member/ManageBatch";
import ManageMember from "./components/member/ManageMember";
import AddExercise from "./components/trainer/exercise/AddExercise";
import AddProgress from "./components/trainer/progress/AddProgress";
import ManageExercise from "./components/trainer/exercise/ManageExercise";
import UpdateExercise from "./components/trainer/exercise/UpdateExercise";
import UpdateDiet from "./components/trainer/diet/UpdateDiet";




function App(){
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="gallery" element={<Gallery/>}/>
        <Route path="services" element={<Services/>}/>
        <Route path="team" element={<Team/>}/>
        <Route path="blog" element={<Blog/>}/>
        <Route path="blogdetails" element={<BlogDetails/>}/>
        <Route path="bmi" element={<Bmi/>}/>
        <Route path="classdetails" element={<ClassDetails/>}/>
        <Route path="classtimetable" element={<ClassTimetable/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="member/manage" element={<ManageMember/>}/>
        <Route path="batch/manage" element={<ManageBatch/>}/>

      </Route>

      <Route path="/admin" element={<AdminLayout/>}>
       
       <Route path="trainer/manage" element={<ManageTrainer/>}/>
       <Route path="trainer/update/:id/:_id" element={<UpdateTrainer/>}/>


       <Route path="manage" element={<Manage/>}/>

       <Route path="batch/add" element={<AddBatch/>}/>

      </Route>
      
      <Route path="/trainer" element={<TrainerLayout/>}>
        <Route path="manage" element={<Manage/>}/>
        <Route path="diet/add" element={<AddDiet/>}/>
        <Route path="diet/manage" element={<ManageDiet/>}/>
        <Route path="diet/update/:id" element={<UpdateDiet/>}/>

        <Route path="exercise/add" element={<AddExercise/>}/>
        <Route path="exercise/manage" element={<ManageExercise/>}/>

       <Route path="exercise/update/:id" element={<UpdateExercise/>}/>


        <Route path="progress/add" element={<AddProgress/>}/>

      </Route>
      
      <Route path="/trainer/register" element={<TrainerRegister/>}/>
       <Route path="/register" element={<Register/>}/>
       <Route path="/login" element={<Login/>}/>
         <Route path="/input" element={<Input/>}/>


      
      
      <Route path="/*" element={<Error/>}/>

    </Routes>
    </BrowserRouter>
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Bounce}


    />
   
    </>
  )
}

export default App