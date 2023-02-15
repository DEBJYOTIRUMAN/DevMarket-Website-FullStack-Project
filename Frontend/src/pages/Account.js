import { useContext, useEffect, useRef, useState } from "react";
import { CartContext } from "../CartContext";
import signupImage from "../images/signup-image.jpg";
import { useHistory, Link } from 'react-router-dom';


const Account = () => {
  const { Token, setToken } = useContext(CartContext);
  const { user, setUser } = useContext(CartContext);
  const [Submit, setSubmit] = useState(false);
  const [ready, setReady] = useState(false);
  const [redirect, setRedirect] = useState(true);
  var history = useHistory();
  const fullNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const repeatPasswordRef = useRef();



  
  const formValidation = () => {
    var forms = document.querySelectorAll('.needs-validation');
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        
        form.addEventListener('submit', function (event) {
          
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
            
          }
  
          else {
            setSubmit(true);
          }
  
          form.classList.add('was-validated');
          event.preventDefault()
          event.stopPropagation()
        }, false)
      })
  }
  
  
  
  // Register
  useEffect(() => {

    if (!Submit) {
      return;
    }
    

    fetch("https://devmarket-nknv.onrender.com/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: fullNameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
        repeat_password: repeatPasswordRef.current.value,
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
      
      if(Token.message === `"repeat_password" must be [ref:password]`){
        window.alert("Password and Repeat Password must be same");
      }
      else if(Token.message === `"name" with value "${fullNameRef.current.value}" fails to match the required pattern: /^[a-zA-Z ]{3,30}$/`){
        if((fullNameRef.current.value).length < 3){
          window.alert("Your name must be at least three characters long");
        }
        else if((fullNameRef.current.value).length > 30){
          window.alert("Your name must be less than or equal to 30 characters long");
        }
        else{
          window.alert("Your name is invalid, Please try again");
        }
      }
      

      else if(Token.message === `"password" with value "${passwordRef.current.value}" fails to match the required pattern: /^[a-zA-Z0-9]{3,30}$/`){
        if((passwordRef.current.value).length < 3){
          window.alert("Password must be at least three characters long");
        }
        else if((passwordRef.current.value).length > 30){
          window.alert("Password must be less than or equal to 30 characters long");
        }
        else{
          window.alert("Password fails to match the required pattern, Please try again");
        }
      }
      else{
        window.alert(Token.message);
      }
      
      setReady(false);
      return;
    }
    fetch("https://devmarket-nknv.onrender.com/api/me", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${Token.access_token}`,
      },

    })
      .then((res) => res.json())
      .then((user) => {
        setUser(user);
        setReady(false);

      });

  }, [ready]);



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
    history.push('/Success');

    setRedirect(false);

  }, [user]);



  return (
    <>
      <div
        className="container d-flex justify-content-around border bg-white accountPosition"
        style={{ marginTop: "50px", borderRadius: "20px", minHeight: "100vh", marginBottom: "50px" }}
      >
        <div className="container mx-0 my-auto mainsignupDiv" style={{ width: "50%" }}>
          <div className="col-md-8 order-md-1 mx-auto signupDiv" style={{ width: "80%" }}>
            <h1 className="mb-3 fw-bold">Sign up</h1>
            <form className="needs-validation" noValidate>
              <div className="mb-3">
                <label htmlFor="fullName">
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
                        className="bi bi-person-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                      </svg>
                    </span>
                  </div>

                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    name="username"
                    
                    ref={fullNameRef}
                    placeholder="Your Name"
                    required
                  />
                  <div className="invalid-feedback">
                    {" "}
                    Please enter your name.{" "}
                  </div>
                </div>
              </div>
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
              {/* Repeat Password */}
              <div className="mb-3">
                <label htmlFor="repeatPassword">
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
                        className="bi bi-lock"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
                      </svg>
                    </span>
                  </div>
                  <input
                    type="password"
                    className="form-control"
                    id="repeatPassword"
                    name="password"
                    
                    ref={repeatPasswordRef}
                    placeholder="Repeat your password"
                    required
                  />
                  <div className="invalid-feedback">
                    {" "}
                    Repeat your password.{" "}
                  </div>
                </div>
              </div>
              <div className="mb-3 form-check mt-4">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label ms-1" htmlFor="exampleCheck1">
                  I agree all statements in{" "}
                  <Link to="/Terms" target="_blank" style={{ color: "black" }}>
                    {" "}
                    Terms of service
                  </Link>
                </label>
              </div>

              <button
                className="btn btn-primary mt-4 mb-4 py-2"
                type="submit"
                onClick={formValidation}
              >
                Register
              </button>
            </form>
          </div>
        </div>
        <div className="d-flex flex-column my-auto clearMargin">
          <img src={signupImage} className="img-fluid noImg" alt="Not found!"/>
          <Link to="/SignIn" className="mx-auto alreadyMemberMargin" style={{ marginTop: "140px", color: "black" }}>
            I am already member
          </Link>
        </div>
      </div>
    </>
  );
};

export default Account;
