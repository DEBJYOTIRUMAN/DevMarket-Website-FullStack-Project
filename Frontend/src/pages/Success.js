import { CartContext } from "../CartContext";
import { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
const Success = () => {
  const [myOrders, setMyOrders] = useState([]);
  const { Token, setToken } = useContext(CartContext);
  const { setUser } = useContext(CartContext);
  const { cart, setCart } = useContext(CartContext);
  const { setProducts } = useContext(CartContext);
  const [out, setOut] = useState(false);

  let history = useHistory();

  // Get Orders
  useEffect(() => {
    if (!Token.access_token) {
      return;
    }
    fetch("https://devmarket-nknv.onrender.com/api/order", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${Token.access_token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setMyOrders(data);
      });
  }, []);

  useEffect(() => {
    if (!cart.items) {
      return;
    }
    if (Object.keys(cart.items).length === 0) {
      return;
    }
    if (!out) {
      return;
    }
    if (!Token.access_token) {
      return;
    }
    fetch("https://devmarket-nknv.onrender.com/api/user-cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Token.access_token}`,
      },
      body: JSON.stringify({
        productId: Object.keys(cart.items),
        quantity: Object.values(cart.items),
      }),
    })
      .then((res) => res.json())
      .then(() => {
        window.alert("Sign out succesfully!");
        setUser({});
        setToken({});
        setProducts([]);
        setCart({});

        history.push("/");
      });
    setOut(false);
  }, [out, cart]);

  const clearData = () => {
    setOut(true);
    if (!cart.items || Object.keys(cart.items).length === 0) {
      window.alert("Sign out succesfully!");
      setUser({});
      setToken({});
      setProducts([]);
      setCart({});
      history.push("/");
    }
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
  return myOrders.length === 0 ? (
    <div className="container" style={{ marginTop: 30, minHeight: "100vh" }}>
      <div className="d-flex justify-content-between">
        <h5 className="my-auto fw-bold">Your Orders</h5>
        <div className="my-auto">
          <button
            type="button"
            className="btn btn btn-dark fw-bold"
            onClick={clearData}
          >
            Sign Out
          </button>
        </div>
      </div>
      <div style={{marginTop: '10%'}}>
        <h4 className="text-center fw-bold">No Orders Yet</h4>
        <small className="text-center d-block">Looks like you haven't any orders.</small>
        <button
            type="button"
            className="btn btn btn-dark fw-bold rounded-pill d-block mx-auto mt-4 py-2 px-4"
            onClick={() => history.push("/")}
          >
            GO HOME
          </button>
      </div>
    </div>
  ) : (
    <div className="container" style={{ marginTop: 30, minHeight: "100vh" }}>
      <div className="d-flex justify-content-between">
        <h5 className="my-auto fw-bold">Your Orders</h5>
        <div className="my-auto">
          <button
            type="button"
            className="btn btn btn-dark fw-bold"
            onClick={clearData}
          >
            Sign Out
          </button>
        </div>
      </div>
      <ul className="list-unstyled">
        {myOrders.map((order, index) => (
          <li className="my-4" key={index}>
            <div className="d-flex justify-content-between cartResponsive">
              <div className="w-50 d-flex cartResponsive2">
                <img
                  className="p-2 img-thumbnail cartImageResponsive"
                  style={{ width: "20%" }}
                  src={order.image}
                  alt="Not found!"
                  onClick={() => {
                    showProduct(order.productId);
                  }}
                />

                <div className="my-auto mx-3">
                  <Link
                    className="text-dark text-decoration-none"
                    to={`/${order.productId}`}
                  >
                    <span className="fw-bold">{order.name}</span>
                  </Link>

                  <span className="d-block mt-2">
                    <small className="text-muted">
                      <b>Brand:</b> {capitalize(order.brand)}
                    </small>
                  </span>
                </div>
              </div>
              <div className="my-auto">
                <b>₹{order.totalPrice}</b>
                <span>{` (${order.qty} items)`}</span>
              </div>
              <div className="my-auto">
                <span>{`Date: ${order.createdAt
                  .split("T")[0]
                  .split("-")
                  .reverse()
                  .join("/")}`}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Success;
