import Product from './Product';
import { useState, useEffect } from 'react';
import image1 from '../images/mipage1.jpg';
import image2 from '../images/mipage2.jpg';
import image3 from '../images/mipage3.jpg';
import image4 from '../images/mipage4.jpg';
import image5 from '../images/mipage5.jpg';
import image6 from '../images/mipage6.jpg';
const Xiaomi = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://devmarket-nknv.onrender.com/api/products/specific/category/mimobiles')
            .then(response => response.json())
            .then(products => {
                setProducts(products);
            });
    }, []);
    return (
        <>
        <div className="container">
        <img src={image1} className="img-fluid" alt="Not found!"></img>
        <img src={image2} className="img-fluid mt-2" alt="Not found!"></img>
        <img src={image3} className="img-fluid mt-2" alt="Not found!"></img>
        <img src={image4} className="img-fluid mt-2" alt="Not found!"></img>
        <img src={image5} className="img-fluid mt-2" alt="Not found!"></img>
        <img src={image6} className="img-fluid mt-2" alt="Not found!"></img>
        </div>
        <h3 className="text-center my-4 fw-bold">MI Smartphones</h3>
     
        <div className="container mb-4">
            <div className="row row-cols-auto gx-4 gy-4">
            {
               products.map(product => <div key={product._id} className="col mx-auto"><Product product={product}/></div>)
            }
  
            </div>
        </div>
        


    </>
    )
}

export default Xiaomi
