import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./pages/Navigation";
import Home from "./pages/Home";
import Samsung from "./pages/Samsung";
import Apple from "./pages/Apple";
import Xiaomi from "./pages/Xiaomi";
import OnePlus from "./pages/OnePlus";
import Oppo from "./pages/Oppo";
import Vivo from "./pages/Vivo";
import BestsellerMobiles from "./pages/BestsellerMobiles";
import MobilesAll from "./pages/MobilesAll";
import Tablets from "./pages/Tablets";
import Desktops from "./pages/Desktops";
import DesktopComponents from "./pages/DesktopComponents";
import Headphones from "./pages/Headphones";
import Monitors from "./pages/Monitors";
import BestsellerElectronics from "./pages/BestsellerElectronics";
import ElectronicsAll from "./pages/ElectronicsAll";
import BudgetLaptop from "./pages/BudgetLaptop";
import GamingLaptop from "./pages/GamingLaptop";
import StudentLaptop from "./pages/StudentLaptop";
import ProfessionalsLaptop from "./pages/ProfessionalsLaptop";
import BestsellerLaptops from "./pages/BestsellerLaptops";
import LaptopsAll from "./pages/LaptopsAll";
import Haircare from "./pages/Haircare";
import Skincare from "./pages/Skincare";
import Makeup from "./pages/Makeup";
import BestsellerBeauty from "./pages/BestsellerBeauty";
import BeautyAll from "./pages/BeautyAll";
import SingleProduct from "./pages/SingleProduct";
import { useEffect, useState } from "react";
import Cart from "./pages/Cart";
import { CartContext } from "./CartContext";
import Checkout from "./pages/Checkout";
import Account from "./pages/Account";
import SignIn from "./pages/SignIn";
import Success from "./pages/Success";
import PaymentSuccess from "./pages/PaymentSuccess";
import SearchPage from "./pages/SearchPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Support from "./pages/Support";
import Antivirus from "./pages/Antivirus";
import Games from "./pages/Games";
import ProSoftware from "./pages/ProSoftware";
import BestsellerSoftware from "./pages/BestsellerSoftware";
import SoftwareAll from "./pages/SoftwareAll";

const App = () => {
  const [cart, setCart] = useState({});
  const [products, setProducts] = useState([]);
  const [Token, setToken] = useState({});
  const [user, setUser] = useState({});
  const [search, setSearch] = useState("");

  //Cart Local Storage
  const getCart = () => {
    return new Promise((resolve, reject) => {
      const cart = window.localStorage.getItem("cart");
      resolve(cart);
    });
  };
  const storeCart = (cart) => {
    window.localStorage.setItem("cart", cart);
  };
  // Fetch Cart From Local Storage
  useEffect(() => {
    getCart().then((cart) => {
      if(!cart){
        return;
      }
      setCart(JSON.parse(cart));
    });
  }, []);

  useEffect(() => {
    storeCart(JSON.stringify(cart));
  }, [cart]);

  //Product Local Storage
  const getProducts = () => {
    return new Promise((resolve, reject) => {
      const products = window.localStorage.getItem("products");
      resolve(products);
    });
  };
  const storeProducts = (products) => {
    window.localStorage.setItem("products", products);
  };
  // Fetch Products From Local Storage
  useEffect(() => {
    getProducts().then((products) => {
      if(!products){
        return;
      }
      setProducts(JSON.parse(products));
    });
  }, []);

  useEffect(() => {
    storeProducts(JSON.stringify(products));
  }, [products]);
  // Token Store Local Storage
  const getToken = () => {
    return new Promise((resolve, reject) => {
      const Token = window.localStorage.getItem("Token");
      resolve(Token);
    });
  };
  const storeToken = (Token) => {
    window.localStorage.setItem("Token", Token);
  };
  // Fetch Token From Local Storage
  useEffect(() => {
    getToken().then((Token) => {
      if(!Token){
        return;
      }
      setToken(JSON.parse(Token));
    });
  }, []);

  useEffect(() => {
    storeToken(JSON.stringify(Token));
  }, [Token]);

  // User Data Local Storage
  const getUser = () => {
    return new Promise((resolve, reject) => {
      const user = window.localStorage.getItem("user");
      resolve(user);
    });
  };
  const storeUser = (user) => {
    window.localStorage.setItem("user", user);
  };
  // Fetch User From Local Storage
  useEffect(() => {
    getUser().then((user) => {
      if(!user){
        return;
      }
      setUser(JSON.parse(user));
    });
  }, []);

  useEffect(() => {
    storeUser(JSON.stringify(user));
  }, [user]);
  // Refresh Token Generate
  useEffect(() => {
    
    const intervalId = setInterval(() => {
        if (!("refresh_token" in Token)) {
            return;
        }  
    fetch("https://devmarket-nknv.onrender.com/api/refresh", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refresh_token: Token.refresh_token }),
      
      
    })
    .then((res) => res.json())
    .then((newToken) => {
    setToken(newToken);
       })
    }, 60000)
  
    return () => clearInterval(intervalId);
   
  }, [Token]);

  return (
    <>
    
      <Router>
        <CartContext.Provider
          value={{
            cart,
            setCart,
            products,
            setProducts,
            Token,
            setToken,
            user,
            setUser,
            search,
            setSearch,
          }}
        >
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact></Route>
            {/* Mobiles Routes */}
            <Route path="/Samsung" component={Samsung} exact></Route>
            <Route path="/Apple" component={Apple} exact></Route>
            <Route path="/Xiaomi" component={Xiaomi} exact></Route>
            <Route path="/OnePlus" component={OnePlus} exact></Route>
            <Route path="/Oppo" component={Oppo} exact></Route>
            <Route path="/Vivo" component={Vivo} exact></Route>
            <Route
              path="/BestsellerMobiles"
              component={BestsellerMobiles}
              exact
            ></Route>
            <Route path="/MobilesAll" component={MobilesAll} exact></Route>
            {/* Electronics Routes */}
            <Route path="/Tablets" component={Tablets} exact></Route>
            <Route path="/Desktops" component={Desktops} exact></Route>
            <Route
              path="/DesktopComponents"
              component={DesktopComponents}
              exact
            ></Route>
            <Route path="/Headphones" component={Headphones} exact></Route>
            <Route path="/Monitors" component={Monitors} exact></Route>
            <Route
              path="/BestsellerElectronics"
              component={BestsellerElectronics}
              exact
            ></Route>
            <Route
              path="/ElectronicsAll"
              component={ElectronicsAll}
              exact
            ></Route>
            {/* Laptop Routes */}
            <Route path="/BudgetLaptop" component={BudgetLaptop} exact></Route>
            <Route path="/GamingLaptop" component={GamingLaptop} exact></Route>
            <Route
              path="/StudentLaptop"
              component={StudentLaptop}
              exact
            ></Route>
            <Route
              path="/ProfessionalsLaptop"
              component={ProfessionalsLaptop}
              exact
            ></Route>
            <Route
              path="/BestsellerLaptops"
              component={BestsellerLaptops}
              exact
            ></Route>
            <Route path="/LaptopsAll" component={LaptopsAll} exact></Route>
            {/* Beauty Routes */}
            <Route path="/Haircare" component={Haircare} exact></Route>
            <Route path="/Skincare" component={Skincare} exact></Route>
            <Route path="/Makeup" component={Makeup} exact></Route>
            <Route
              path="/BestsellerBeauty"
              component={BestsellerBeauty}
              exact
            ></Route>
            <Route path="/BeautyAll" component={BeautyAll} exact></Route>

            {/* Software Routes */}
            <Route path="/Antivirus" component={Antivirus} exact></Route>
            <Route path="/Games" component={Games} exact></Route>
            <Route path="/ProSoftware" component={ProSoftware} exact></Route>
            <Route
              path="/BestsellerSoftware"
              component={BestsellerSoftware}
              exact
            ></Route>
            <Route path="/SoftwareAll" component={SoftwareAll} exact></Route>

            <Route path="/Cart" component={Cart} exact></Route>
            <Route path="/Checkout" component={Checkout} exact></Route>
            <Route path="/Account" component={Account} exact></Route>
            <Route path="/SignIn" component={SignIn} exact></Route>
            <Route path="/Success" component={Success} exact></Route>
            <Route
              path="/PaymentSuccess"
              component={PaymentSuccess}
              exact
            ></Route>
            <Route path="/SearchPage" component={SearchPage} exact></Route>
            <Route path="/About" component={About} exact></Route>
            <Route path="/Contact" component={Contact} exact></Route>
            <Route path="/Privacy" component={Privacy} exact></Route>
            <Route path="/Terms" component={Terms} exact></Route>
            <Route path="/Support" component={Support} exact></Route>
            <Route path="/:_id" component={SingleProduct}></Route>
          </Switch>
          <Footer />
        </CartContext.Provider>
      </Router>
      
    </>
  );
};

export default App;
