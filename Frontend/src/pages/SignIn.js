import { useContext, useEffect, useRef, useState } from "react";
import { CartContext } from "../CartContext";
import signinImage from "../images/signin-image.jpg";
import { useHistory, Link } from "react-router-dom";

const SignIn = () => {
  const { Token, setToken } = useContext(CartContext);
  const { user, setUser } = useContext(CartContext);
  const [Submit, setSubmit] = useState(false);
  const [ready, setReady] = useState(false);
  const [redirect, setRedirect] = useState(true);
  const { cart, setCart } = useContext(CartContext);

  let history = useHistory();
  const emailRef = useRef();
  const passwordRef = useRef();

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
            setSubmit(true);
          }

          form.classList.add("was-validated");
          event.preventDefault();
          event.stopPropagation();
        },
        false
      );
    });
  };

  //Login
  useEffect(() => {
    if (!Submit) {
      return;
    }

    fetch("https://devmarket-nknv.onrender.com/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }),
    })
      .then((res) => res.json())
      .then((Token) => {
        setToken(Token);
        setSubmit(false);
        setReady(true);
      });
  }, [Submit]);

  //Who am I

  useEffect(() => {
    if (!ready) {
      return;
    }
    if (!Token.access_token) {
      window.alert("Username or password is wrong!");
      setReady(false);
      return;
    }
    
    fetch("https://devmarket-nknv.onrender.com/api/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${Token.access_token}`,
      },
    })
      .then((res) => res.json())
      .then((user) => {
        setUser(user);
        setReady(false);
      });
  }, [ready]);

  useEffect(() => {
    if (!Token.access_token) {
      return;
    }
    fetch("https://devmarket-nknv.onrender.com/api/user-cart", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${Token.access_token}`,
      },
    })
      .then((res) => res.json())
      .then(({ productId, quantity }) => {
        if (!cart.items) {
          const data = {};
          const obj = {};
          let total = 0;
          if (!productId) {
            return;
          }
          for (let i = 0; i < productId.length; i++) {
            total = total + quantity[i];
            Object.defineProperty(obj, productId[i], {
              value: quantity[i],
              enumerable: true,
              writable: true,
              configurable: true
            });
          }
          data.items = obj;
          data.totalItems = total;
          setCart(data);
        } else {
          let _cart = { ...cart };
          if (!productId) {
            return;
          }
          for (let i = 0; i < productId.length; i++) {
            if (_cart.items[productId[i]]) {
              _cart.items[productId[i]] += quantity[i];
              _cart.totalItems += quantity[i];
            } else {
              _cart.items[productId[i]] = quantity[i];
              _cart.totalItems += quantity[i];
            }
          }
          setCart(_cart);
        }
      });
  }, [user]);

  // Success Page Redirect
  useEffect(() => {
    if (!redirect) {
      return;
    }
    if (!Token.access_token) {
      return;
    }
    if (Object.keys(user).length === 0) {
      return;
    }
    history.push("/Success");
    setRedirect(false);
  }, [user]);

  return (
    <div>
      <div
        className="container d-flex justify-content-around border bg-white signInPosition"
        style={{
          marginTop: "50px",
          borderRadius: "20px",
          minHeight: "100vh",
          marginBottom: "50px",
        }}
      >
        <div className="d-flex flex-column my-auto clearMargin">
          <img src={signinImage} className="img-fluid noImg" alt="Not found!" />
          <Link
            to="/Account"
            className="mx-auto text-dark alreadyMemberMargin"
            style={{ marginTop: "50px" }}
          >
            Create an account
          </Link>
        </div>

        <div
          className="container mx-0 my-auto mainsignupDiv"
          style={{ width: "50%" }}
        >
          <div
            className="col-md-8 order-md-1 mx-auto signupDiv"
            style={{ width: "80%" }}
          >
            <h1 className="mb-3 fw-bold">Sign in</h1>
            <form className="needs-validation" noValidate>
              {/* Email */}
              <div className="mb-3">
                <label htmlFor="email">
                  <span className="text-muted"></span>
                </label>
                <div className="input-group mt-2">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        className="bi bi-envelope-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                      </svg>
                    </span>
                  </div>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    ref={emailRef}
                    placeholder="Your Email"
                    required
                  />
                  <div className="invalid-feedback">
                    {" "}
                    Please enter a valid email address for shipping updates.{" "}
                  </div>
                </div>
              </div>
              {/* Password */}
              <div className="mb-3">
                <label htmlFor="password">
                  <span className="text-muted"></span>
                </label>
                <div className="input-group mt-2">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        className="bi bi-lock-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                      </svg>
                    </span>
                  </div>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    ref={passwordRef}
                    placeholder="Password"
                    required
                  />
                  <div className="invalid-feedback">
                    {" "}
                    Please enter a password.{" "}
                  </div>
                </div>
              </div>

              <div className="mb-3 form-check mt-4">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label
                  className="form-check-label mx-2"
                  htmlFor="exampleCheck1"
                >
                  Remember me
                </label>
              </div>

              <button
                className="btn btn-primary mt-4"
                type="submit"
                onClick={formValidation}
              >
                Login
              </button>
              <div style={{ marginTop: "61px" }}>
                <span className="">Or login with</span>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ms-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-facebook"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ms-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-twitter"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </a>
                <a
                  href="https://gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ms-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-google"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                  </svg>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
