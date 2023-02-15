import { useContext, useRef, useState, useEffect } from "react";
import { CartContext } from "../CartContext";
import { useHistory, Link } from "react-router-dom";

const Checkout = () => {
  const { products } = useContext(CartContext);
  const { cart } = useContext(CartContext);
  const { Token } = useContext(CartContext);
  const { user } = useContext(CartContext);
  const [ready, setReady] = useState(false);
  const [userAddress, setUserAddress] = useState({});
  const [userPayment, setUserPayment] = useState({});
  let total = 0;
  let history = useHistory();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const addressRef = useRef();
  const stateRef = useRef();
  const pincodeRef = useRef();
  const cardNumber = useRef();
  const cardValidity = useRef();
  const cardCvv = useRef();
  const cardName = useRef();

  const formValidation = () => {
    var forms = document.querySelectorAll(".needs-validation");
    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener(
        "submit",
        function (event) {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          } else {
            setReady(true);
          }

          form.classList.add("was-validated");
          event.preventDefault();
          event.stopPropagation();
        },
        false
      );
    });
  };
  // Address Get Request
  useEffect(() => {
    if (!Token.access_token) {
      return;
    }

    fetch("https://devmarket-nknv.onrender.com/api/address", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${Token.access_token}`,
      },
    })
      .then((res) => res.json())
      .then((getAddress) => {
        setUserAddress(getAddress);
      });
  }, []);

  // Get Saved Payment
  useEffect(() => {
    if (!Token.access_token) {
      return;
    }
    fetch("https://devmarket-nknv.onrender.com/api/payment", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${Token.access_token}`,
      },
    })
      .then((res) => res.json())
      .then((getPayment) => {
        setUserPayment(getPayment);
        history.push("/Checkout");
      });
  }, []);

  // Post Address
  useEffect(() => {
    if (!ready) {
      return;
    }
    if (!Token.access_token) {
      return;
    }
    fetch("https://devmarket-nknv.onrender.com/api/address", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Token.access_token}`,
      },
      body: JSON.stringify({
        name: `${firstNameRef.current.value} ${lastNameRef.current.value}`,
        email: emailRef.current.value,
        phone: phoneRef.current.value,
        address: addressRef.current.value,
        state: stateRef.current.value,
        pincode: pincodeRef.current.value,
      }),
    })
      .then((res) => res.json())
      .then(() => {});
  }, [ready]);
  // Save Payment
  useEffect(() => {
    if (!ready) {
      return;
    }
    if (!Token.access_token) {
      return;
    }
    fetch("https://devmarket-nknv.onrender.com/api/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Token.access_token}`,
      },
      body: JSON.stringify({
        number: cardNumber.current.value,
        validity: cardValidity.current.value,
        cvv: cardCvv.current.value,
        name: cardName.current.value,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        setReady(false);
        history.push("/PaymentSuccess");
      });
  }, [ready]);

  const getQty = (productId) => {
    return cart.items[productId];
  };
  const getSum = (productId, price) => {
    const sum = price * getQty(productId);
    total += sum;
    return sum;
  };
  function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1);
  }

  return (
    <>
      <div className="d-flex justify-content-around">
        <div
          className="container mt-4 checkoutSize"
          style={{ maxWidth: "50%" }}
        >
          <div className="col-md-10 order-md-1 mx-auto mt-4">
            <h5 className="mb-3">Shipping address</h5>
            <form className="needs-validation" noValidate>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="firstName">First name</label>
                  <input
                    type="text"
                    className="form-control mt-2"
                    id="firstName"
                    ref={firstNameRef}
                    placeholder={user.name.split(" ")[0]}
                    defaultValue={
                      userAddress.name ? userAddress.name.split(" ")[0] : ""
                    }
                    required
                  />
                  <div className="invalid-feedback">
                    {" "}
                    Valid first name is required.{" "}
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="lastName">Last name</label>
                  <input
                    type="text"
                    className="form-control mt-2"
                    id="lastName"
                    ref={lastNameRef}
                    placeholder={user.name.split(" ")[1]}
                    defaultValue={
                      userAddress.name ? userAddress.name.split(" ")[1] : ""
                    }
                    required
                  />
                  <div className="invalid-feedback">
                    {" "}
                    Valid last name is required.{" "}
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="email">
                  Email <span className="text-muted"></span>
                </label>
                <input
                  type="email"
                  className="form-control mt-2"
                  id="email"
                  placeholder={user.email}
                  ref={emailRef}
                  defaultValue={userAddress.email ? userAddress.email : ""}
                  required
                />
                <div className="invalid-feedback">
                  {" "}
                  Please enter a valid email address for shipping updates.{" "}
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  className="form-control mt-2"
                  id="address"
                  placeholder="Enter Your Address"
                  ref={addressRef}
                  defaultValue={userAddress.address ? userAddress.address : ""}
                  required
                />
                <div className="invalid-feedback">
                  {" "}
                  Please enter your shipping address.{" "}
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="address2">
                  Address 2 <span className="text-muted">(Optional)</span>
                </label>
                <input
                  type="text"
                  className="form-control mt-2"
                  id="address2"
                  placeholder="Apartment or suite"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="mobileNumber">Mobile Number</label>
                <input
                  type="number"
                  className="form-control mt-2"
                  id="mobileNumber"
                  placeholder="Enter Mobile Number"
                  ref={phoneRef}
                  defaultValue={userAddress.phone ? userAddress.phone : ""}
                  required
                />
                <div className="invalid-feedback">
                  {" "}
                  Please enter your mobile number.{" "}
                </div>
              </div>
              <div className="row">
                <div className="col-md-5 mb-3">
                  <label htmlFor="country">Country</label>
                  <select
                    className="form-select d-block w-100 form-control mt-2"
                    id="country"
                    required
                  >
                    <option value="">Choose...</option>
                    <option>India</option>
                  </select>
                  <div className="invalid-feedback">
                    {" "}
                    Please select a valid country.{" "}
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="state">State</label>
                  <select
                    className="form-select d-block w-100 form-control mt-2"
                    id="state"
                    ref={stateRef}
                    required
                  >
                    <option value="">Choose...</option>

                    <option>Andhra Pradesh</option>
                    <option>Arunachal Pradesh</option>
                    <option>Assam</option>
                    <option>Bihar</option>
                    <option>Chhattisgarh</option>
                    <option>Delhi</option>
                    <option>Goa</option>
                    <option>Gujarat</option>
                    <option>Haryana</option>
                    <option>Himachal Pradesh</option>
                    <option>Jharkhand</option>
                    <option>Karnataka</option>
                    <option>Kerala</option>
                    <option>Madhya Pradesh</option>
                    <option>Maharashtra</option>
                    <option>Manipur</option>
                    <option>Meghalaya</option>
                    <option>Mizoram</option>
                    <option>Nagaland</option>
                    <option>Odisha</option>
                    <option>Punjab</option>
                    <option>Rajasthan</option>
                    <option>Sikkim</option>
                    <option>Tamil Nadu</option>
                    <option>Telangana</option>
                    <option>Tripura</option>
                    <option>Uttar Pradesh</option>
                    <option>Uttarakhand</option>
                    <option>West Bengal</option>
                  </select>
                  <div className="invalid-feedback">
                    {" "}
                    Please provide a valid state.{" "}
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="zip">Zip</label>
                  <input
                    type="text"
                    className="form-control mt-2"
                    id="zip"
                    placeholder="Pincode"
                    ref={pincodeRef}
                    defaultValue={
                      userAddress.pincode ? userAddress.pincode : ""
                    }
                    required
                  />
                  <div className="invalid-feedback"> Zip code required. </div>
                </div>
              </div>
              <hr className="mb-4" />
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="same-address"
                />
                <label className="form-check-label" htmlFor="same-address">
                  Shipping address is the same as my billing address
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="our-store"
                />
                <label className="form-check-label" htmlFor="our-store">
                  Pick up your order from our local store
                </label>
              </div>
              <hr className="mb-4" />
              <h4 className="mb-3">Payment</h4>
              <div className="d-block my-3">
                <div className="form-check">
                  <input
                    id="credit"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    required
                  />
                  <label className="form-check-label" htmlFor="credit">
                    Credit card
                  </label>
                </div>
                <div className="form-check">
                  <input
                    id="debit"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    required
                  />
                  <label className="form-check-label" htmlFor="debit">
                    Debit card
                  </label>
                </div>
                <div className="form-check">
                  <input
                    id="paypal"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    required
                  />
                  <label className="form-check-label" htmlFor="paypal">
                    PayPal
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="cc-name">Name on Card</label>
                  <input
                    type="text"
                    className="form-control mt-2"
                    id="cc-name"
                    placeholder={user.name}
                    ref={cardName}
                    defaultValue={userPayment.name ? userPayment.name : ""}
                    required
                  />
                  <small className="text-muted">
                    Full name as displayed on card
                  </small>
                  <div className="invalid-feedback">
                    {" "}
                    Name on card is required{" "}
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="cc-number">Card Number</label>
                  <input
                    type="text"
                    className="form-control mt-2"
                    id="cc-number"
                    placeholder="XXXX-XXXX-XXXX-XXXX"
                    ref={cardNumber}
                    defaultValue={userPayment.number ? userPayment.number : ""}
                    required
                  />
                  <div className="invalid-feedback">
                    {" "}
                    Credit/Debit card number is required{" "}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 mb-3">
                  <label htmlFor="cc-expiration">Expiration</label>
                  <input
                    type="text"
                    className="form-control mt-2"
                    id="cc-expiration"
                    placeholder="12/2030"
                    ref={cardValidity}
                    defaultValue={
                      userPayment.validity ? userPayment.validity : ""
                    }
                    required
                  />
                  <div className="invalid-feedback">
                    {" "}
                    Expiration date required{" "}
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="cc-cvv">CVV</label>
                  <input
                    type="text"
                    className="form-control mt-2"
                    id="cc-cvv"
                    placeholder="123"
                    ref={cardCvv}
                    defaultValue={userPayment.cvv ? userPayment.cvv : ""}
                    required
                  />
                  <div className="invalid-feedback">
                    {" "}
                    Security code required{" "}
                  </div>
                </div>
              </div>
              <hr className="mb-4" />
              <button
                className="btn btn-primary btn-lg w-100"
                type="submit"
                onClick={formValidation}
              >
                Continue to checkout
              </button>
            </form>
          </div>
        </div>
        <div className="d-flex flex-column container mt-4 hideCheckout">
          <h5 className="mt-4">Checkout</h5>
          <div
            className="overflow-auto"
            style={{ maxHeight: "995px", maxWidth: "91%" }}
          >
            <ul className="list-unstyled">
              {products.map((product) => {
                return (
                  <li className="my-4 border" key={product._id}>
                    <div className="d-flex">
                      <div className="w-100 d-flex">
                        <img
                          className="p-2 img-thumbnail border-0 border-end"
                          style={{ width: "20%" }}
                          src={product.image}
                          alt="Not found!"
                        />
                        <div className="mx-2 my-auto">
                          <span className="fs-6">{product.name}</span>

                          <span className="d-block">
                            <small className="text-muted">
                              <b>Brand:</b> {capitalize(product.brand)}
                            </small>
                          </span>
                          <small>Qty: {getQty(product._id)}</small>
                        </div>
                      </div>

                      <span className="my-auto p-2">
                        <b>₹{getSum(product._id, product.price)}</b>
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div style={{ maxWidth: "91%" }}>
            <hr className="mt-2" />
            <div className="d-flex flex-column align-items-end">
              <div className="mt-3">
                <b>Grand Total: ₹{total}</b>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="my-5 pt-5 text-muted text-center text-small">
        <p className="mb-1">© 2020-2021 Powered by RumonPay</p>
        <ul className="list-inline">
          <li className="list-inline-item">
            <Link to="/Privacy" target="_blank">
              Privacy
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to="/Terms" target="_blank">
              Terms
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to="/Support" target="_blank">
              Support
            </Link>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Checkout;
