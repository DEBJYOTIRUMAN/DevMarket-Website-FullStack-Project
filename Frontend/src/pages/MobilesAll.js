import Product from './Product';
import { useState, useEffect } from 'react';
import image1 from '../images/mobilesall1.jpg';
const MobilesAll = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://devmarket-nknv.onrender.com/api/products/specific/mobiles')
            .then(response => response.json())
            .then(products => {
                setProducts(products);
            });
    }, []);

    return (
        <>
       <div className="container">
            <img src={image1} className="img-fluid" alt="Not found!"></img>
           
           
            </div>
            <h3 className="text-center my-4 fw-bold">Browse All Smartphones</h3>
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

export default MobilesAll
