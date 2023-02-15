import { useContext, useEffect, useState } from "react";
import { CartContext } from "../CartContext";
import { Link, useHistory } from "react-router-dom";

import empty from "../images/CartEmpty2.jpg";

const Cart = () => {
  let total = 0;
  let history = useHistory();

  const { cart, setCart } = useContext(CartContext);
  const { products, setProducts } = useContext(CartContext);
  const { Token } = useContext(CartContext);
  const [priceFetched, togglePriceFetched] = useState(false);

  useEffect(() => {
    if (!cart.items) {
      return;
    }
    if (Object.keys(cart.items).length === 0) {
      return;
    }

    if (priceFetched) {
      return;
    }

    fetch("https://devmarket-nknv.onrender.com/api/products/cart-items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ids: Object.keys(cart.items) }),
    })
      .then((res) => res.json())
      .then((products) => {
        setProducts(products);
        togglePriceFetched(true);
      });
  }, [cart, priceFetched]);

  const getQty = (productId) => {
    return cart.items[productId];
  };

  const increment = (productId) => {
    const existingQty = cart.items[productId];
    const _cart = { ...cart };
    _cart.items[productId] = existingQty + 1;
    _cart.totalItems += 1;
    setCart(_cart);
  };

  const decrement = (productId) => {
    const existingQty = cart.items[productId];
    if (existingQty === 1) {
      return;
    }
    const _cart = { ...cart };
    _cart.items[productId] = existingQty - 1;
    _cart.totalItems -= 1;
    setCart(_cart);
  };

  const getSum = (productId, price) => {
    const sum = price * getQty(productId);
    total += sum;
    return sum;
  };

  const handleDelete = (productId) => {
    const _cart = { ...cart };
    const qty = _cart.items[productId];
    delete _cart.items[productId];
    _cart.totalItems -= qty;
    setCart(_cart);
    const updatedProductsList = products.filter(
      (product) => product._id !== productId
    );
    setProducts(updatedProductsList);
  };

  function capitalize(s) {
    if (s === undefined) {
      return;
    }
    return s[0].toUpperCase() + s.slice(1);
  }
  const showProduct = (val) => {
    history.push(`/${val}`);
  };

  const redirect = () => {
    if(!Token.access_token){
      history.push("SignIn");
    }
    else{
      history.push("/Checkout");
    }
  }
  return !products.length ? (
    <div>
      <img
        className="img-fluid"
        style={{ minHeight: "100vh", minWidth: "100vw" }}
        src={empty}
        alt="Not found!"
      />
    </div>
  ) : (
    <div
      className="container"
      style={{ minHeight: "100vh", marginBottom: "50px", marginTop: "50px" }}
    >
      <h4 className="mt-4 fw-bold">Cart items</h4>
      <ul className="list-unstyled">
        {products.map((product) => {
          return (
            <li className="my-4" key={product._id}>
              <div className="d-flex justify-content-around cartResponsive">
                <div className="w-50 d-flex cartResponsive2">
                  <img
                    className="p-2 img-thumbnail cartImageResponsive"
                    style={{ width: "25%" }}
                    src={product.image}
                    alt="Not found!"
                    onClick={() => {
                      showProduct(product._id);
                    }}
                  />

                  <div className="my-auto mx-3">
                    <Link
                      className="text-dark text-decoration-none"
                      to={`/${product._id}`}
                    >
                      <span className="fw-bold">{product.name}</span>
                    </Link>

                    <span className="d-block mt-2">
                      <small className="text-muted">
                        <b>Brand:</b> {capitalize(product.brand)}
                      </small>
                    </span>
                  </div>
                </div>
                <div className="w-50 d-flex justify-content-evenly cartBetween">
                  <div className="d-flex align-items-center">
                    <button
                      type="button"
                      onClick={() => {
                        decrement(product._id);
                      }}
                      className="btn shadow-none"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="bi bi-arrow-left-circle"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
                        />
                      </svg>
                    </button>
                    <b className="my-auto">{getQty(product._id)}</b>
                    <button
                      type="button"
                      onClick={() => {
                        increment(product._id);
                      }}
                      className="btn shadow-none"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="bi bi-arrow-right-circle"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                        />
                      </svg>
                    </button>
                  </div>
                  <span className="my-auto">
                    <b>₹{getSum(product._id, product.price)}</b>
                  </span>
                  <button
                    onClick={() => {
                      handleDelete(product._id);
                    }}
                    className="btn shadow-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="bi bi-trash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                      <path
                        fillRule="evenodd"
                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <hr className="mt-2" />
      <div className="d-flex flex-column align-items-end">
        <div className="mt-3">
          <b>Grand Total: ₹{total}</b>
        </div>
        <div className="mt-3">
          <button type="button" className="btn btn-dark" onClick={redirect}>
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
