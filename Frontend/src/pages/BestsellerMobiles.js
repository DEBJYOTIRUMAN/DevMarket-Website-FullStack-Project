import image1 from '../images/bestsellerpage1.jpg';
import MobilesBestseller from './MobilesBestseller'
const BestsellerMobiles = () => {
    return (
        <>
        <div className="container">
            <img src={image1} className="img-fluid" alt="Not found!"></img>
            </div>
        <h3 className="text-center my-4 fw-bold">Bestsellers in Smartphones</h3>
        <MobilesBestseller/>
        </>
    )
}

export default BestsellerMobiles
