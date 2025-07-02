

export default function EmployeeData(){
    let data=[
        {name:"Ridhi", dept:"hr",salary:"1k"},
        {name:"Nidhi", dept:"mangment",salary:"2k"},
        {name:"Isha", dept:"head",salary:"5k"},
        {name:"Tina", dept:"hr",salary:"1k"},
        {name:"Riya", dept:"mangment",salary:"2k"},
    ]
    return(
        <>
        {data.map((el,index)=>(
            <tr key={index}>
                <td>{index+1}</td>
                  <td>  {el.name}</td>
                    <td> {el.dept}</td>
                   <td>  {el.salary}</td>
                
            </tr>
        ))}
        
        </>
    )
}