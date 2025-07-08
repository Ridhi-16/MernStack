
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Picture from './components/Picture';

function App(){
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/pic" element={<Picture/>}/>

    </Routes>
    </BrowserRouter>


  </>
  )
} 
    

export default App
