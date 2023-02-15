import { useState, useContext, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { CartContext } from '../CartContext';
const SingleProduct = () => {
  const [product, setProduct] = useState({});
  const params = useParams();
  const history = useHistory();
  const [isAdding, setIsAdding] = useState(false);
  const { cart, setCart } = useContext(CartContext);
  useEffect(() => {
    fetch(`https://devmarket-nknv.onrender.com/api/products/${params._id}`)
      .then((res) => res.json())
      .then((product) => {
        setProduct(product);
      });
  }, [params._id]);
  
  const addToCart = (event, product) => {
    event.preventDefault();
    let _cart = {...cart};
    if (!_cart.items) {
        _cart.items = {}
    }
    if (_cart.items[product._id]) {
        _cart.items[product._id] += 1;
    } else {
        _cart.items[product._id] = 1;
    }

    if(!_cart.totalItems) {
        _cart.totalItems = 0;
    }
    _cart.totalItems += 1;
    setCart(_cart);
    setIsAdding(true);
    setTimeout(() => {
        setIsAdding(false);
    }, 1000);
}

function capitalize(s) {
  if(s === undefined){
    return;
  }
  return s[0].toUpperCase() + s.slice(1);
}

  return (
    <>
    <div style={{marginTop: "25px", marginLeft: "25px"}}>
        <button
        type="button"
        className="btn shadow-none btn-outline-dark"
        onClick={() => {
          history.goBack();
        }}
        
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
</svg>
      </button>
      </div>
    <div className = "container" style={{marginTop: "25px", marginBottom: "100px"}}>
      <div className="card border-0" style={{ minHeight: "100vh", borderRadius: "25px" }}>
      {product.bestseller ? (
          <span style={{position: "absolute", backgroundColor: "rgb(255, 132, 45)", color: "white", top: 20, left: 10, padding: 2, borderRadius: 5, fontSize: 16}}>Bestseller</span>
        ) : (
          <></>
        )}
        <div className="row g-0 my-auto">
          <div className="col-md-4 my-auto">
            <img
              src={product.image}
              className="img-fluid rounded-start singleProductImg"
              alt="Not found!"
            />
          </div>
          <div className="col-md-8 my-auto">
            <div className="card-body">
              <h3 className="card-title">{product.name}</h3>
              <p className="card-text mt-4">
                <b>DESCRIPTION</b>
              </p>
              <p className="card-text mb-3">{product.description}</p>
              <h5 className="card-title mb-2"><b>Price:</b> ₹{product.price}</h5>
              <p className="card-text mb-1">
                <small className="text-muted">
                  <b>Category:</b> {capitalize(product.productType)}
                </small>
              </p>
              <p className="card-text mb-1">
                <small className="text-muted">
                  <b>Brand:</b> {capitalize(product.brand)}
                </small>
              </p>
              <p className="card-text">
                <small className="text-muted">
                  <b>Free Delivery:</b> Delivery by Tomorrow
                </small>
              </p>
              <button type="button" disabled={isAdding} onClick={(e) => { addToCart(e, product) }} className={`${ isAdding ? 'btn-dark fw-bold border-0' : 'btn-outline-light fw-bold border-0'} btn-lg mt-1`} style={{borderRadius: "20px", backgroundColor: "rgb(255, 132, 45)"}}><span className="p-2">{isAdding ? 'ADDED': 'ADD TO BAG'}</span></button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    </>
  )
}

export default SingleProduct;
