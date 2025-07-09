import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Error from "./components/Error";
import Services from "./components/Services";

function App(){
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/*" element={<Error/>}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App