function Weather(props){
    
    return(
        <>
        <tr>
                
            <td>{props.place}</td>
            <td>{props.temp}</td>
            <td>{props.humidity}</td>
        </tr>


        </>
    )
}
export default Weather
