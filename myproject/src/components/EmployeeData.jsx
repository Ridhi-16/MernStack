

export default function EmployeeData(){
    let data=[
        {name:"Ridhi", dept:"HR",salary:"1k"},
        {name:"Nidhi", dept:"Mangment",salary:"2k"},
        {name:"Isha", dept:"Head",salary:"5k"},
        {name:"Tina", dept:"HR",salary:"1k"},
        {name:"Riya", dept:"Mangment",salary:"2k"},
    ]
    return(
        <>
        {data.map((el,index)=>(
            <div class="card bg-dark shadow-lg p-3 mb-5  rounded" style={{width:"18rem"}}>
                <div class="card-body  ">
                    <div class="container  bg-light ">
                        <div class="row ">
                            <div class="col">
                                <hr className="tab " />
                                <label  id="name">Name: </label>  {el.name}
                                <br />
                                <label >Department: </label>  {el.dept}
                                <br />
                                <label >Salary: </label>  {el.salary}
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))}
        
        </>
    )
}