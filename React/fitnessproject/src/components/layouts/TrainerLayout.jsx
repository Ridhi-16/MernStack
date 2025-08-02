import { Outlet } from "react-router-dom";
import Footer from "./Footer";

import TrainerHeader from "./TrainerHeader";


export default function TrainerLayout(){
    return(
        <>
        <TrainerHeader/>
        <Outlet/>
        <Footer/>
        </>
    )
}