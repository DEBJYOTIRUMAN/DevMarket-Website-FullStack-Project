
import { useContext, useState } from 'react';
import { CartContext } from '../CartContext';
import { Link } from 'react-router-dom';

const Product = (props) => {
  
    const [isAdding, setIsAdding] = useState(false);
    const { cart, setCart } = useContext(CartContext);
    const { product } = props;

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
  return (
    <Link className="text-decoration-none"to={`/${product._id}`}>
      <div className="card cardSize" style={{ width: "15rem"}}>
        <img src={product.image} className="card-img-top" alt="Not found!" />
        {product.bestseller ? (
          <span style={{position: "absolute", backgroundColor: "rgb(255, 132, 45)", color: "white", top: 4, left: 4, padding: 2, borderRadius: 5, fontSize: 15}}>Bestseller</span>
        ) : (
          <></>
        )}
        <div className="card-body cardBodySize">
          <h6 className="card-title text-center text-dark fontSizeSmall">{product.name}</h6>
          <div className="d-flex justify-content-between">
            <span className="h5 text-dark fontSizeSmall" style={{marginTop: "9px"}}>
              <b>₹{product.price}</b>
            </span>
            <button type="button" disabled={isAdding} onClick={(e) => { addToCart(e, product) }} className={`${ isAdding ? 'btn-dark fw-bold border-0' : 'btn-outline-light fw-bold border-0'} btn-sm fontSizeSmall`} style={{borderRadius: "20px", backgroundColor: "rgb(255, 132, 45)"}}><span className="px-2">{isAdding ? 'ADDED': 'ADD TO BAG'}</span></button>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Product;
