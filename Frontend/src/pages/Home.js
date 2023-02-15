import slider1 from '../images/budgetlaptoppage1.jpg';
import slider2 from '../images/slider2.jpg';
import slider3 from '../images/oppopage2.jpg';
import slider4 from '../images/haircarepage1.jpg';
import slider5 from '../images/slider5.jpg';
import slider6 from '../images/slider6.jpg';
import slider7 from '../images/slider7.jpg';
import MobilesBestseller from './MobilesBestseller';
import ElectronicsBestseller from './ElectronicsBestseller';
import LaptopsBestseller from './LaptopsBestseller';
import BeautyBestseller from './BeautyBestseller';
import SoftwareBestseller from './SoftwareBestseller';
import MiniAbout from './MiniAbout';
import Sponsor from './Sponsor';
const Home = () => {
    return (
        <>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={slider1} className="d-block w-100" alt="Not found!"/>
    </div>
    <div className="carousel-item">
      <img src={slider2} className="d-block w-100" alt="Not found!"/>
    </div>
    <div className="carousel-item">
      <img src={slider3} className="d-block w-100" alt="Not found!"/>
    </div>
    <div className="carousel-item">
      <img src={slider4} className="d-block w-100" alt="Not found!"/>
    </div>
    <div className="carousel-item">
      <img src={slider5} className="d-block w-100" alt="Not found!"/>
    </div>
    <div className="carousel-item">
      <img src={slider6} className="d-block w-100" alt="Not found!"/>
    </div>
    <div className="carousel-item">
      <img src={slider7} className="d-block w-100" alt="Not found!"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon bg-secondary rounded-circle" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon bg-secondary rounded-circle" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

<div>
<h3 className="text-center my-4 fw-bold">How We Work</h3>
<MiniAbout/>
</div>
{/* Render Bestseller Smartphones */}
<div className="mt-4">
<h4 className="text-center my-4 fw-bold headingSizeResponsive">Top Deals on Bestselling Smartphones</h4>
<MobilesBestseller/>
</div>
{/* Render Bestseller Electronics */}
<div>
<h4 className="text-center my-4 fw-bold headingSizeResponsive">Top Offers on Bestselling Electronics</h4>
<ElectronicsBestseller/>
</div>
{/* Render Bestseller Laptops */}
<div>
<h4 className="text-center my-4 fw-bold headingSizeResponsive">Best Deals on Bestselling Laptops</h4>
<LaptopsBestseller/>
</div>
{/* Render Bestseller Beauty */}
<div>
<h4 className="text-center my-4 fw-bold headingSizeResponsive">Best Price on Bestsellers in Beauty</h4>
<BeautyBestseller/>
</div>
{/* Render Bestseller Software */}
<div>
<h4 className="text-center my-4 fw-bold headingSizeResponsive">Top Deals on Bestselling Software</h4>
<SoftwareBestseller/>
</div>
{/* Render Sponsor Page */}
<div className="mt-5">
<h3 className="text-center fw-bold sponsorsText mb-3">Our Sponsors</h3>
<Sponsor/>
</div>
        </>
    )
}

export default Home
