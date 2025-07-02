import data from "./zomatodata"

export default function Zomato(){

    return(
        <>
        {data.map((el,index)=>(
            <tr key={index}>
                <td>{index+1}</td>
                  <td>  {el.info.name}</td>
                    <td> {el.info.rating.rating_text}</td>
                   <td>  {el.info.image.url}</td>
                
            </tr>
        ))}
        </>
    )
}