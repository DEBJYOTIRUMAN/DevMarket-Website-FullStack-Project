import image1 from '../images/bestsellersoftware.jpg';
import SoftwareBestseller from './SoftwareBestseller';
const BestsellerSoftware = () => {
    return (
        <>
        <div className="container">
            <img src={image1} className="img-fluid" alt="Not found!"></img>
            </div>
        <h3 className="text-center my-4 fw-bold">Bestsellers in Softwares</h3>
        <SoftwareBestseller/>
        </>
    )
}

export default BestsellerSoftware
