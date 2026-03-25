import "./Productcard.css";

function ProductCard({ product }) {
    return (
        <div className="product-container">
            <img src={product.image} className="product-img" alt={product.title} />

            <h1 className="produc-title">{product.title}</h1>
            <p className="product-price">price: ₹{product.price}</p>
            <p className="product-description">{product.description}</p>
        </div>
    );
}

export default ProductCard