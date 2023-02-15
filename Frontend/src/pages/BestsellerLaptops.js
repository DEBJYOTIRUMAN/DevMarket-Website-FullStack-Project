import image1 from '../images/bestsellerpagelaptop1.jpg';
import LaptopsBestseller from './LaptopsBestseller';

const BestsellerLaptops = () => {
    return (
        <>
        <div className="container">
            <img src={image1} className="img-fluid" alt="Not found!"></img>
            </div>
        <h3 className="text-center my-4 fw-bold">Bestsellers in Laptops</h3>
        <LaptopsBestseller/>
        </>
    )
}

export default BestsellerLaptops
