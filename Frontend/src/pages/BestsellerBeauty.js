import image1 from '../images/bestsellerbeauty.jpg';
import BeautyBestseller from './BeautyBestseller';

const BestsellerBeauty = () => {
    return (
        <>
        <div className="container">
            <img src={image1} className="img-fluid" alt="Not found!"></img>
            </div>
        <h3 className="text-center my-4 fw-bold">Bestsellers in Beauty</h3>
        <BeautyBestseller/>
        </>
    )
}

export default BestsellerBeauty
