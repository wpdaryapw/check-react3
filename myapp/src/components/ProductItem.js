import Stars from "./Stars";

function ProductItem(props) {
    const { title, price, rating, image, id, deleteProd } = props
  
    return (
      <div className="card" onDoubleClick={() => deleteProd(id)}>
        <img src={image} alt={title} />
        <h2>Title: {title}</h2>
        <h3>Price: {price}</h3>
        <Stars rating={rating} />
      </div>
    )
  }
  
  export default ProductItem;