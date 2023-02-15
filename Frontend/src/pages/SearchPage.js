import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../CartContext';
import Product from './Product';
import { Link, useHistory } from 'react-router-dom';
import NotFound from "../images/NotFound3.jpg";

const SearchPage = () => {

    const { search } = useContext(CartContext);
    const [products, setProducts] = useState([]);
    let history = useHistory();
    const styleTag = {
        position: "absolute",
        top: "10%",
        right: "20%",
        color: "red",
        fontWeight: "bold",
        
        
        
      }

    useEffect(() => {
        if (search.toLowerCase().trim() === 'samsung smartphone' || search.toLowerCase().trim() === 'samsung smartphones' || search.toLowerCase().trim() === 'samsung mobile' || search.toLowerCase().trim() === 'samsung mobiles' || search.toLowerCase().trim() === 'samsung phone' || search.toLowerCase().trim() === 'samsung phones') {
            history.push('/Samsung');
            return;
        }
        else if (search.toLowerCase().trim() === 'apple smartphone' || search.toLowerCase().trim() === 'apple smartphones' || search.toLowerCase().trim() === 'apple mobile' || search.toLowerCase().trim() === 'apple mobiles' || search.toLowerCase().trim() === 'apple phone' || search.toLowerCase().trim() === 'apple phones') {
            history.push('/Apple');
            return;
        }
        else if (search.toLowerCase().trim() === 'xiaomi' || search.toLowerCase().trim() === 'mi' || search.toLowerCase().trim() === 'xiaomi smartphone' || search.toLowerCase().trim() === 'xiaomi smartphones' || search.toLowerCase().trim() === 'xiaomi mobile' || search.toLowerCase().trim() === 'xiaomi mobiles' || search.toLowerCase().trim() === 'xiaomi phone' || search.toLowerCase().trim() === 'xiaomi phones' || search.toLowerCase().trim() === 'mi smartphone' || search.toLowerCase().trim() === 'mi smartphones' || search.toLowerCase().trim() === 'mi mobile' || search.toLowerCase().trim() === 'mi mobiles' || search.toLowerCase().trim() === 'mi phone' || search.toLowerCase().trim() === 'mi phones') {
            history.push('/Xiaomi');
            return;
        }
        else if (search.toLowerCase().trim() === 'oneplus' || search.toLowerCase().trim() === 'oneplus smartphone' || search.toLowerCase().trim() === 'oneplus smartphones' || search.toLowerCase().trim() === 'oneplus mobile' || search.toLowerCase().trim() === 'oneplus mobiles' || search.toLowerCase().trim() === 'oneplus phone' || search.toLowerCase().trim() === 'oneplus phones') {
            history.push('/OnePlus');
            return;
        }
        else if (search.toLowerCase().trim() === 'oppo' || search.toLowerCase().trim() === 'oppo smartphone' || search.toLowerCase().trim() === 'oppo smartphones' || search.toLowerCase().trim() === 'oppo mobile' || search.toLowerCase().trim() === 'oppo mobiles' || search.toLowerCase().trim() === 'oppo phone' || search.toLowerCase().trim() === 'oppo phones') {
            history.push('/Oppo');
            return;
        }
        else if (search.toLowerCase().trim() === 'vivo' || search.toLowerCase().trim() === 'vivo smartphone' || search.toLowerCase().trim() === 'vivo smartphones' || search.toLowerCase().trim() === 'vivo mobile' || search.toLowerCase().trim() === 'vivo mobiles' || search.toLowerCase().trim() === 'vivo phone' || search.toLowerCase().trim() === 'vivo phones') {
            history.push('/Vivo');
            return;
        }
        else if (search.toLowerCase().trim() === 'smartphone' || search.toLowerCase().trim() === 'smartphones' || search.toLowerCase().trim() === 'mobile' || search.toLowerCase().trim() === 'mobiles' || search.toLowerCase().trim() === 'phone' || search.toLowerCase().trim() === 'phones') {
            history.push('/MobilesAll');
            return;
        }
        else if (search.toLowerCase().trim() === 'bestseller smartphone' || search.toLowerCase().trim() === 'bestseller smartphones' || search.toLowerCase().trim() === 'bestseller mobile' || search.toLowerCase().trim() === 'bestseller mobiles' || search.toLowerCase().trim() === 'bestseller phone' || search.toLowerCase().trim() === 'bestseller phones' || search.toLowerCase().trim() === 'bestsellers smartphone' || search.toLowerCase().trim() === 'bestsellers smartphones' || search.toLowerCase().trim() === 'bestsellers mobile' || search.toLowerCase().trim() === 'bestsellers mobiles' || search.toLowerCase().trim() === 'bestsellers phone' || search.toLowerCase().trim() === 'bestsellers phones') {
            history.push('/BestsellerMobiles');
            return;
        }
        else if (search.toLowerCase().trim() === 'tablets' || search.toLowerCase().trim() === 'tab' || search.toLowerCase().trim() === 'tablet') {
            history.push('/Tablets');
            return;
        }
        else if (search.toLowerCase().trim() === 'desktops' || search.toLowerCase().trim() === 'desktop' || search.toLowerCase().trim() === 'computer' || search.toLowerCase().trim() === 'pc' || search.toLowerCase().trim() === 'computers') {
            history.push('/Desktops');
            return;
        }
        else if (search.toLowerCase().trim() === 'components' || search.toLowerCase().trim() === 'desktop components' || search.toLowerCase().trim() === 'component' || search.toLowerCase().trim() === 'desktops component' || search.toLowerCase().trim() === 'desktops components' || search.toLowerCase().trim() === 'desktop component' || search.toLowerCase().trim() === 'computer component' || search.toLowerCase().trim() === 'computer components' || search.toLowerCase().trim() === 'computers components' || search.toLowerCase().trim() === 'computers component' || search.toLowerCase().trim() === 'pc component' || search.toLowerCase().trim() === 'pc components') {
            history.push('/DesktopComponents');
            return;
        }
        else if (search.toLowerCase().trim() === 'headphone' || search.toLowerCase().trim() === 'headphones' || search.toLowerCase().trim() === 'headset' || search.toLowerCase().trim() === 'headsets' || search.toLowerCase().trim() === 'earphone' || search.toLowerCase().trim() === 'earphones') {
            history.push('/Headphones');
            return;
        }
        else if (search.toLowerCase().trim() === 'monitor' || search.toLowerCase().trim() === 'monitors' || search.toLowerCase().trim() === 'pc monitor' || search.toLowerCase().trim() === 'pc monitors' || search.toLowerCase().trim() === 'computer monitor' || search.toLowerCase().trim() === 'computer monitors' || search.toLowerCase().trim() === 'computers monitor' || search.toLowerCase().trim() === 'computers monitors' || search.toLowerCase().trim() === 'desktop monitor' || search.toLowerCase().trim() === 'desktop monitors' || search.toLowerCase().trim() === 'desktops monitor' || search.toLowerCase().trim() === 'desktops monitors') {
            history.push('/Monitors');
            return;
        }
        else if (search.toLowerCase().trim() === 'electronics' || search.toLowerCase().trim() === 'electronic' || search.toLowerCase().trim() === 'accessories') {
            history.push('/ElectronicsAll');
            return;
        }
        else if (search.toLowerCase().trim() === 'bestseller electronics' || search.toLowerCase().trim() === 'bestseller electronic' || search.toLowerCase().trim() === 'bestseller accessories' || search.toLowerCase().trim() === 'bestsellers electronics' || search.toLowerCase().trim() === 'bestsellers electronic' || search.toLowerCase().trim() === 'bestsellers accessories') {
            history.push('/BestsellerElectronics');
            return;
        }
        else if (search.toLowerCase().trim() === 'budget laptop' || search.toLowerCase().trim() === 'budget laptops' || search.toLowerCase().trim() === 'starter laptop' || search.toLowerCase().trim() === 'starter laptops' || search.toLowerCase().trim() === 'basic laptop' || search.toLowerCase().trim() === 'basic laptops') {
            history.push('/BudgetLaptop');
            return;
        }
        else if (search.toLowerCase().trim() === 'gaming laptop' || search.toLowerCase().trim() === 'gaming laptops' || search.toLowerCase().trim() === 'gamer laptop' || search.toLowerCase().trim() === 'gamer laptops' || search.toLowerCase().trim() === 'gamers laptop' || search.toLowerCase().trim() === 'gamers laptops' || search.toLowerCase().trim() === 'gaming') {
            history.push('/GamingLaptop');
            return;
        }
        else if (search.toLowerCase().trim() === 'student laptop' || search.toLowerCase().trim() === 'student laptops' || search.toLowerCase().trim() === 'students laptop' || search.toLowerCase().trim() === 'college students laptops' || search.toLowerCase().trim() === 'college student laptop' || search.toLowerCase().trim() === 'college student laptops' || search.toLowerCase().trim() === 'college students laptop' || search.toLowerCase().trim() === 'college laptop' || search.toLowerCase().trim() === 'college laptops' || search.toLowerCase().trim() === 'students laptops') {
            history.push('/StudentLaptop');
            return;
        }
        else if (search.toLowerCase().trim() === 'professionals laptop' || search.toLowerCase().trim() === 'professionals laptops' || search.toLowerCase().trim() === 'professional laptop' || search.toLowerCase().trim() === 'professional laptops' || search.toLowerCase().trim() === 'content creation laptop' || search.toLowerCase().trim() === 'content creation laptops' || search.toLowerCase().trim() === 'video editing laptop' || search.toLowerCase().trim() === 'video editing laptops' || search.toLowerCase().trim() === 'creative professionals laptop' || search.toLowerCase().trim() === 'creative professionals laptops') {
            history.push('/ProfessionalsLaptop');
            return;
        }
        else if (search.toLowerCase().trim() === 'laptop' || search.toLowerCase().trim() === 'laptops') {
            history.push('/LaptopsAll');
            return;
        }
        else if (search.toLowerCase().trim() === 'bestseller laptop' || search.toLowerCase().trim() === 'bestseller laptops' || search.toLowerCase().trim() === 'bestsellers laptop' || search.toLowerCase().trim() === 'bestsellers laptops') {
            history.push('/BestsellerLaptops');
            return;
        }
        else if (search.toLowerCase().trim() === 'hair care' || search.toLowerCase().trim() === 'hair styling' || search.toLowerCase().trim() === 'hair style' || search.toLowerCase().trim() === 'hair styles' || search.toLowerCase().trim() === 'hair' || search.toLowerCase().trim() === 'hair product' || search.toLowerCase().trim() === 'hair products' || search.toLowerCase().trim() === 'hair cares') {
            history.push('/Haircare');
            return;
        }
        else if (search.toLowerCase().trim() === 'skin care' || search.toLowerCase().trim() === 'skin' || search.toLowerCase().trim() === 'skin product' || search.toLowerCase().trim() === 'skin products' || search.toLowerCase().trim() === 'skin cares' || search.toLowerCase().trim() === 'face care' || search.toLowerCase().trim() === 'face cares' || search.toLowerCase().trim() === 'face product' || search.toLowerCase().trim() === 'face products') {
            history.push('/Skincare');
            return;
        }
        else if (search.toLowerCase().trim() === 'makeup' || search.toLowerCase().trim() === 'nails' || search.toLowerCase().trim() === 'skin makeup' || search.toLowerCase().trim() === 'make up' || search.toLowerCase().trim() === 'makeup sets' || search.toLowerCase().trim() === 'makeup set' || search.toLowerCase().trim() === 'makeup kits' || search.toLowerCase().trim() === 'makeup kit' || search.toLowerCase().trim() === 'face makeup') {
            history.push('/Makeup');
            return;
        }
        else if (search.toLowerCase().trim() === 'beauty' || search.toLowerCase().trim() === 'beauty product' || search.toLowerCase().trim() === 'beauty products') {
            history.push('/BeautyAll');
            return;
        }
        else if (search.toLowerCase().trim() === 'bestseller beauty' || search.toLowerCase().trim() === 'bestsellers beauty' || search.toLowerCase().trim() === 'bestseller beauty product' || search.toLowerCase().trim() === 'bestseller beauty products' || search.toLowerCase().trim() === 'bestsellers beauty product' || search.toLowerCase().trim() === 'bestsellers beauty products') {
            history.push('/BestsellerBeauty');
            return;
        }
        else if (search.toLowerCase().trim() === 'antivirus' || search.toLowerCase().trim() === 'security' || search.toLowerCase().trim() === 'antivirus software' || search.toLowerCase().trim() === 'security software' || search.toLowerCase().trim() === 'privacy software' || search.toLowerCase().trim() === 'internet security' || search.toLowerCase().trim() === 'anti-virus') {
            history.push('/Antivirus');
            return;
        }
        else if (search.toLowerCase().trim() === 'game' || search.toLowerCase().trim() === 'games' || search.toLowerCase().trim() === 'video games' || search.toLowerCase().trim() === 'pc games' || search.toLowerCase().trim() === 'ps4 games' || search.toLowerCase().trim() === 'ps5 games' || search.toLowerCase().trim() === 'all games' || search.toLowerCase().trim() === 'all video games' || search.toLowerCase().trim() === 'video game') {
            history.push('/Games');
            return;
        }
        else if (search.toLowerCase().trim() === 'office software' || search.toLowerCase().trim() === 'business software' || search.toLowerCase().trim() === 'paid software' || search.toLowerCase().trim() === 'pro software' || search.toLowerCase().trim() === 'professional software' || search.toLowerCase().trim() === 'premium apps') {
            history.push('/ProSoftware');
            return;
        }
        else if (search.toLowerCase().trim() === 'bestseller software' || search.toLowerCase().trim() === 'bestseller softwares' || search.toLowerCase().trim() === 'bestselling software' || search.toLowerCase().trim() === 'bestselling softwares' || search.toLowerCase().trim() === 'best software') {
            history.push('/BestsellerSoftware');
            return;
        }
        else if (search.toLowerCase().trim() === 'software' || search.toLowerCase().trim() === 'softwares' || search.toLowerCase().trim() === 'software store' || search.toLowerCase().trim() === 'apps' || search.toLowerCase().trim() === 'app') {
            history.push('/SoftwareAll');
            return;
        }
        else {
            fetch(`https://devmarket-nknv.onrender.com/api/products/search/${search.trim()}`)
            .then((res) => res.json())
            .then((products) => {
                setProducts(products);
            });
        }
    }, [search]);

    return !products.length ? (
        <div className="position-relative">
            <img className="img-fluid" style={{minHeight: "100vh", minWidth: "100vw"}} src={NotFound} alt="Not found!" />
            <Link style={styleTag} to="/">Go to Home</Link>
        </div>
    ) : (




        <div className="container" style={{minHeight: "100vh", marginBottom: "50px", marginTop: "50px"}}>
            
            <div className="row row-cols-auto gx-4 gy-4">
                {
                    products.map(product => <div key={product._id} className="col mx-auto"><Product product={product} /></div>)
                }

            </div>
        </div>


    )
}

export default SearchPage
