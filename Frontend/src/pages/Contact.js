import ContactPage from "../images/Contact.jpg";
import { useHistory } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
const Contact = () => {
  let history = useHistory();
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const [ submit, setSubmit ] = useState(false);
  useEffect(() => {
    if (!submit) {
      return;
    }
    fetch("https://devmarket-nknv.onrender.com/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: nameRef.current.value,
        email: emailRef.current.value,
        message: messageRef.current.value,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        window.alert("Submit Succesfully");
        setSubmit(false);
        history.push("/");
      });
  }, [submit]);

  return (
    <>
      <div
        className="container"
        style={{ minHeight: "100vh", marginBottom: "50px" }}
      >
        <img src={ContactPage} className="image-fluid w-100" alt="Not found!" />
        <h2 className="text-center fw-bold my-4">Contact Us</h2>
        <div className="d-flex mt-4 justify-content-between">
          <div className="container w-50 mt-4 border p-4">
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput" className="form-label">
                Your Name
              </label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Rohit Sharma"
                ref={nameRef}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                ref={emailRef}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                How Can We Help?
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="8"
                ref={messageRef}
              ></textarea>
            </div>
            <button
              className="btn btn-dark btn-lg w-100 rounded-pill mb-4"
              onClick={() => setSubmit(true)}
              type="submit"
            >
              Submit
            </button>
          </div>

          <div className="container w-50 mt-4 border p-4 d-flex flex-column">
            <div className="my-auto text-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-geo-alt mb-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>

                <span className="fs-5 fw-bold ms-2 contactSpanSize">
                  Address
                </span>
                <p className="mt-2 contactText">
                  Dev Cart Store Center 8th floor, 30 Hudson St, English Bazar,
                  Malda, India
                </p>
              </div>

              <div className="mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-telephone mb-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                </svg>
                <span className="fs-5 fw-bold ms-2 contactSpanSize">
                  Lets Talk
                </span>
                <p className="mt-2 contactText">+91 82504469610</p>
              </div>

              <div className="mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-envelope mb-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                </svg>
                <span className="fs-5 fw-bold ms-2 contactSpanSize">
                  Sale Support
                </span>
                <p className="mt-2 contactText">contact@rumon.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
