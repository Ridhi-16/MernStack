
function ProductCard(props) {
  let { name,price,description } = props;
  return (
    <>
    <div className="product">
        
        <hr className="tab" />
        <label  id="name">Name:</label>{name}
        <br />
        <label >Price:</label>{price}
        <br />
        <label >Description:</label>{description}
    </div>
    </>
  )
}
export default ProductCard