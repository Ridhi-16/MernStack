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
import AddDiet from "./components/pages/AddDiet";
import ManageTrainer from "./components/admin/trainer/ManageTrainer";




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
      </Route>

      <Route path="/admin" element={<AdminLayout/>}>
       <Route path="trainer/register" element={<TrainerRegister/>}/>
       <Route path="trainer/manage" element={<ManageTrainer/>}/>

      
      </Route>
       <Route path="register" element={<Register/>}/>
       <Route path="login" element={<Login/>}/>
       <Route path="addDiet" element={<AddDiet/>}/>

      
      
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