import Introduction from "./components/Introduction"
import Div from "./components/Div"
import Employee from "./components/Employee"
import Shopping from "./components/Shopping"
import ProductCard from "./components/ProductCard"
import ContactCard from "./components/ContactCard"
import Weather from "./components/Weather"

function App(){
  // let {name,price}=obj
  return(
    <>
    {/* <Introduction/>
    <Div/>
     <table border="1px" cellPadding="5px" cellSpacing="1px" >
      <tr>
        <th>name</th>
        <th>department</th>
      </tr>
      
        <Employee  name="Ridhi"  department="React"/>
        <Employee   name="Siya"  department="JS"/>
        <Employee   name="Nidhi"  department="Node"/>
      
    </table>
    <br /> */}

    <h1 style={{textAlign:"center"}}>Shopping Cart</h1>
    <table border="1px" cellPadding="5px" cellSpacing="1px"  style={{marginLeft:"560PX"}}>
      <tr>
        <th>name</th>
        <th>Quantity</th>
        <th>price</th>
      </tr>
      
        <Shopping price="100" name="eyeliner"  quantity="2"/>
        <Shopping  price="200" name="shoes"  quantity="1"/>
        <Shopping  price="300" name="jewellery"  quantity="3"/>
      
    </table>
    <br />
    <br />

      
      <h1 className="heading">PRODUCTS</h1>
      <ProductCard name="roses" price="200" description="Beautiful red roses"/>
      <ProductCard name="lilac" price="400" description="Beautiful purple lilacs "/>
      <ProductCard name="lily" price="500" description="Beautiful pink lilys"/>
      

      <h1 style={{textAlign:" center",backgroundColor:" pink",fontWeight: "bolder"}}>contacts</h1>
      <ContactCard name="ridhi" phoneno="122222222" email="avbc"/>
      <ContactCard name="nidhi" phoneno="1255555" email="abc"/>
      <ContactCard name="siya" phoneno="12244565785" email="cgh"/>
      <ContactCard name="priya" phoneno="1278930345" email="klo"/>

      <br /><br />
      <h1 style={{textAlign:"center"}}>WEATHER</h1>
    <table border="1px" cellPadding="5px" cellSpacing="1px"  style={{marginLeft:"560PX"}}>
      <tr>
        <th>Place</th>
        <th>temperature</th>
        <th>humidity</th>
        
      </tr>
      
        <Weather place="jalandhar" temp="35" humidity="25"/>
        <Weather  place="ludhiana" temp="37" humidity="27"/>
        <Weather  place="agra" temp="40" humidity="20"/>
      
    </table>
  



    </>
  )
}

export default App
