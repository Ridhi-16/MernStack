// function ProductCard(props) {
//     return(
//         <>
//         {props.name}
//         </>
//     )
// }
function ProductCard(props) {
  let { name,price,description } = props;
  return (
    <>
    <div className="product">
        
        <hr className="tab" />
        <label htmlFor="" id="name">Name:</label>{props.name}
        <br />
        <label htmlFor="">Price:</label>{props.price}
        <br />
        <label htmlFor="">Description:</label>{props.description}
    </div>
    </>
  )
}
export default ProductCard