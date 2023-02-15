import image1 from '../images/electronicsbestseller.jpg';
import ElectronicsBestseller from './ElectronicsBestseller';
const BestsellerElectronics = () => {
    return (
        <>
        <div className="container">
            <img src={image1} className="img-fluid" alt="Not found!"></img>
            </div>
        <h3 className="text-center my-4 fw-bold">Bestsellers in Electronics</h3>
        <ElectronicsBestseller/>
        </>
    )
}

export default BestsellerElectronics
