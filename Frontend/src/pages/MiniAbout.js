import MiniAbout1 from "../images/MiniAbout1.jpg";
import MiniAbout2 from "../images/MiniAbout2.jpg";
import MiniAbout3 from "../images/MiniAbout3.jpg";
import MiniAbout4 from "../images/MiniAbout4.jpg";

const MiniAbout = () => {
    const styleImages = {
        width: "80%",
        height: "auto",
        border: "2px solid rgb(230, 238, 255)",
    }
 
    return (
        <>
        
            <div className="container d-flex justify-content-around miniAbout">
                <div className="container setWidth">
                    <img src={MiniAbout1} style={styleImages} className="d-block mx-auto rounded-circle img-fluid" alt="Not found!" />
                    <h4 className="fw-bold text-center mt-3 headingSize">Best For Everybody</h4>
                    <small className="text-muted d-block text-center mt-2 aboutSmallTag">We feature clever, beautiful products that are zero-waste, non-GMO, and toxin-free.</small>
                </div>

                <div className="container setWidth">
                    <img src={MiniAbout2} className="d-block mx-auto rounded-circle img-fluid" style={styleImages} alt="Not found!" />
                    <h4 className="fw-bold text-center mt-3 headingSize">Best Price Guarantee</h4>
                    <small className="text-muted d-block text-center mt-2 aboutSmallTag">We provide the best wholsale price all over the india, our price is very competitive.</small>
                </div>

                <div className="container setWidth">
                    <img src={MiniAbout3} style={styleImages} className="d-block mx-auto rounded-circle img-fluid" alt="Not found!" />
                    <h4 className="fw-bold text-center mt-3 headingSize">Same Day Delivery</h4>
                    <small className="text-muted d-block text-center mt-2 aboutSmallTag">We provide the same day delivery all over the india, we have the fastest courier.</small>
                </div>
                <div className="container setWidth">
                    <img src={MiniAbout4} style={styleImages} className="d-block mx-auto rounded-circle img-fluid" alt="Not found!" />
                    <h4 className="fw-bold text-center mt-3 headingSize">Contactless Delivery</h4>
                    <small className="text-muted d-block text-center mt-2 aboutSmallTag">The ongoing covid-19 pandemic, we provide contactless delivery all over india.</small>
                </div>

            </div>
            
        </>
    )
}

export default MiniAbout;
