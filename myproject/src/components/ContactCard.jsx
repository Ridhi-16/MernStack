function ContactCard(props){
    return(
        <>
        <div style={{display:"inline-block",width:"250px",backgroundColor:"aqua",margin:" 0 35px",height:"120px"}}>
        
        <hr style={{marginTop: "0", height:"40px",backgroundColor:"blue"}} />
        <label>Name:</label>{props.name}
        <br />
        <label htmlFor="">Phone No:</label>{props.phoneno}
        <br />
        <label htmlFor="">Email:</label>{props.email}
    </div>
        </>
    )
}
export default ContactCard