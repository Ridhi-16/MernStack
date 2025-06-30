import "./Div.css"
function Div(){
    return(
        <>
        <div className="div">
            <h1>Creating a  div</h1>
            <p>This div is created by using direct link from <strong>public folder</strong> </p>
            <p>It has border color yellow with background color red and border radius as 20px</p>
            <img src="vite.svg" alt="" />
        </div>

        <div className="divv">
           
            <h1>Creating a  div</h1>
            <p>This div is created by using <strong>source</strong> by importing Div.css</p>
            <p>It has border color yellow with background color red and border radius as 20px here border width is 10px</p>
            
        </div>

        <div style={{border:"solid 15px yellow",backgroundColor: "red",borderRadius:"20px",textAlign: "left",margin: "20px 0 10px 0"}}>
            <h1>Creating a  div</h1>
            <p>This div is created by using <strong>inline css</strong></p>
            <p>It has border color yellow with background color red and border radius as 20px here border width is 15px</p>
            
        </div>
        
        </>
    )
}


export default Div