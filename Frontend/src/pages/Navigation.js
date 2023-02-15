import logo from "../images/logo2.png";
import account from "../images/account.svg";
import bag from "../images/bag.svg";
import { useContext, useRef } from "react";
import { CartContext } from "../CartContext";
import { useHistory, Link } from "react-router-dom";
const Navigation = () => {
  const { cart } = useContext(CartContext);
  const { user } = useContext(CartContext);
  const { setSearch } = useContext(CartContext);
  const searchRef = useRef();
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchRef.current.value === "") {
      return;
    }
    setSearch(searchRef.current.value);
    history.push("/SearchPage");
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top noSticky navBgColor"
        style={{ minWidth: "100%" }}
      >
        <div className="container-fluid d-flex">
          <div className="d-flex ms-2" style={{ width: "40%" }}>
            <Link className="navbar-brand" to="/" style={{ margin: "0" }}>
              <img
                src={logo}
                alt="Logo"
                width="30"
                height="30"
                className="d-inline-block align-text-top brandLogo"
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mb-2 mb-lg-0 ms-2 ulStyle">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>

                {/* Mobiles Section */}
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Mobiles
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="/Samsung">
                        Samsung
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Apple">
                        Apple
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Xiaomi">
                        Xiaomi
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/OnePlus">
                        OnePlus
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Oppo">
                        Oppo
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Vivo">
                        Vivo
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/BestsellerMobiles">
                        Best Sellers
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/MobilesAll">
                        Browse All Brands
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* Electronics Section */}
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Electronics
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="/Tablets">
                        Tablets
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Desktops">
                        Desktops
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/DesktopComponents">
                        Desktop Components
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Headphones">
                        Headphones
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Monitors">
                        Monitors
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/BestsellerElectronics"
                      >
                        Best Sellers
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/ElectronicsAll">
                        Browse All Electronics
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* Laptops Sections */}
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Laptop
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="/BudgetLaptop">
                        Budget Laptops
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/GamingLaptop">
                        Gaming Laptops
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/StudentLaptop">
                        Student Laptops
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/ProfessionalsLaptop">
                        Professionals Laptops
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/BestsellerLaptops">
                        Best Sellers
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/LaptopsAll">
                        Browse All Laptops
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* Beauty Section */}
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Beauty
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="/Haircare">
                        Hair Care
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Skincare">
                        Skin Care
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Makeup">
                        Make-Up
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/BestsellerBeauty">
                        Best Sellers
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/BeautyAll">
                        Show All Products
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* Software Section */}
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Software
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="/Antivirus">
                        Antivirus
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Games">
                        Games
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/ProSoftware">
                        Professional Software
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/BestsellerSoftware">
                        Best Sellers
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/SoftwareAll">
                        Browse All Softwares
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* Contact Page */}
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/Contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="devTitle text-center" style={{ width: "20%" }}>
            <Link to="/About" className="text-decoration-none">
              <span
                className="fs-3 fw-bold titleHover"
                style={{
                  border: "2px solid white",
                  borderRadius: "20px",
                  padding: "4px",
                  color: "white",
                }}
              >
                Dev Market
              </span>
            </Link>
          </div>
          <div
            className="me-2 lastDiv lastDivPosition"
            style={{ width: "40%" }}
          >
            <form className="d-flex">
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <div className="d-flex" style={{ width: "100%" }}>
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    ref={searchRef}
                  />
                  <button
                    className="btn btn-outline-light fw-bold buttonSize"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Search
                  </button>
                </div>
                <div className="d-flex iconPosition">
                  {/* Accounts Login */}

                  <Link
                    className="d-flex ms-4 text-decoration-none iconLink iconLink2 me-4"
                    to="/Account"
                  >
                    <img
                      src={account}
                      alt="Icon"
                      width="25"
                      height="25"
                      className="d-inline-block align-text-top my-auto iconSize"
                      style={{ filter: "invert(1)" }}
                    />
                    <small className="my-auto ms-1 iconText" style={{color: "white"}}>
                      {user["name"] ? user["name"].split(" ")[0] : "Account"}
                    </small>
                  </Link>
                  {/* Cart Icon */}
                  <Link
                    className="d-flex text-decoration-none iconLink"
                    to="/Cart"
                  >
                    <small className="my-auto" style={{color: "white"}}>
                      {cart.totalItems ? cart.totalItems : 0}
                    </small>
                    <img
                      src={bag}
                      alt="Icon"
                      width="25"
                      height="25"
                      className="d-inline-block align-text-top my-auto ms-1 iconSize"
                      style={{ filter: "invert(1)" }}
                    />
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
