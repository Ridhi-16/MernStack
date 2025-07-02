export default function Students(){
    let students=["Ridhi","Siya","Priya","Tina","Isha","Meena"]
    return(
        <>
        {students.map((el,index)=>(
            <p className="text-light p-0 bg-secondary " key={index}>{index+1}.{el}</p>
        ))}
        </>
    )
}