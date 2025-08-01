import axios from "axios";
import { useEffect, useState } from "react"

export default function Places(){
const[places,setPlaces]=useState([])

var config = {
  method: 'get',
  url: 'https://api.geoapify.com/v2/places?categories=commercial.supermarket&filter=rect%3A10.716463143326969%2C48.755151258420966%2C10.835314015356737%2C48.680903341613316&limit=20&apiKey=6a37298176be4f74a1ea12e5206976b5',
  headers: { }
};

axios(config)
.then(function (response) {
 // console.log(response.data);
})
.catch(function (error) {
  console.log(error);
});
const fetchData=()=>{
        axios(config)
        .then((res)=>{
             console.log(res)
            if(res.data){
                setPlaces(res.data.features)
                fetchData()
            }
        })
        .catch((err)=>{
           console.log(err)
        })
    }
    useEffect(()=>{
        fetchData()

    },[])
    //console.log(places)

 return(
  <>
    <table className="table table-bordered">
        <tr>
            <th>sno</th>
            <th>places</th>
        </tr>
        <tbody>
            
                {places?.map((el,index)=>(
                    
                    <tr key={index}>
                        <td className=""><h2>{index+1}</h2></td>
                        <td className="">
                            <h5>{el?.properties.name}</h5>
                         </td>

                    </tr>
                ))}
          
              </tbody>
    </table>
  </>
 ) 
}