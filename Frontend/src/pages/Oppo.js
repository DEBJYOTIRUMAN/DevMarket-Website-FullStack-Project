import Product from './Product';
import { useState, useEffect } from 'react';
import image1 from '../images/oppopage1.jpg';
import image2 from '../images/oppopage2.jpg';
import image3 from '../images/oppopage3.jpg';
import image4 from '../images/oppopage4.jpg';
import image5 from '../images/oppopage5.jpg';

const Oppo = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://devmarket-nknv.onrender.com/api/products/specific/category/oppomobiles')
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
            </div>
            <h3 className="text-center my-4 fw-bold">Oppo Smartphones</h3>
         
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

export default Oppo
