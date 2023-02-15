import { CartContext } from "../CartContext";
import { useContext, useEffect } from "react";
import OrderPlaced from "../images/orderplaced2.jpg";
import { Link, useHistory } from "react-router-dom";
const PaymentSuccess = () => {
  let history = useHistory();
  const styleTag = {
    position: "absolute",
    top: "10%",
    right: "20%",
  };
  const { cart, setCart } = useContext(CartContext);
  const { products, setProducts } = useContext(CartContext);
  const { Token } = useContext(CartContext);

  const sendData = products.map((pro) => {
    pro.qty = cart.items[pro._id];
    pro.totalPrice = pro.price * cart.items[pro._id];
    delete pro.category;
    delete pro.productType;
    delete pro.description;
    delete pro.bestseller;
    delete pro.createdAt;
    delete pro.productType;
    return pro;
  });

  //   Post Orders
  useEffect(() => {
    if (!Token.access_token) {
      return;
    }
    if(!cart.items){
      return;
    }
    fetch("https://devmarket-nknv.onrender.com/api/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Token.access_token}`,
      },
      body: JSON.stringify(sendData),
    })
      .then((res) => res.json())
      .then(() => {});
  }, []);

  useEffect(() => {
    if (!Token.access_token) {
      setCart({});
      setProducts([]);
      return;
    }
    if(!cart.items){
      return;
    }
    fetch("https://devmarket-nknv.onrender.com/api/user-cart/delete", {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${Token.access_token}`,
      },
    })
      .then((res) => res.json())
      .then(() => {});
    setCart({});
    setProducts([]);
    setTimeout(() => {
      history.push("/");
    }, 5000);
  }, []);

  return (
    <div className="position-relative">
      <img
        className="img-fluid"
        style={{ minHeight: "100vh", minWidth: "100vw" }}
        src={OrderPlaced}
        alt="Not found!"
      />
      <Link
        to="/"
        className="btn btn-dark rounded-pill py-2 px-3 fw-bold"
        style={styleTag}
        type="button"
      >
        GO HOME
      </Link>
    </div>
  );
};

export default PaymentSuccess;
