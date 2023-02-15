import Product from './Product';
import { useState, useEffect } from 'react';
import image1 from '../images/vivopage1.jpg';
import image2 from '../images/vivopage2.jpg';
import image3 from '../images/vivopage3.jpg';
import image4 from '../images/vivopage4.jpg';

const Vivo = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://devmarket-nknv.onrender.com/api/products/specific/category/vivomobiles')
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
           
            </div>
            <h3 className="text-center my-4 fw-bold">Vivo Smartphones</h3>
         
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

export default Vivo
