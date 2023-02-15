import SponsorsLogo1 from "../images/SponsorsLogo1.png";
import SponsorsLogo2 from "../images/SponsorsLogo2.png";
import SponsorsLogo3 from "../images/SponsorsLogo3.png";
import SponsorsLogo4 from "../images/SponsorsLogo4.png";
import SponsorsLogo5 from "../images/SponsorsLogo5.png";
import SponsorsLogo6 from "../images/SponsorsLogo6.png";
import SponsorsLogo7 from "../images/SponsorsLogo7.png";
import SponsorsLogo8 from "../images/SponsorsLogo8.png";
const Sponsor = () => {
    const styleImages = {
        width: "12%",
        height: "auto",
        position: "relative",
        bottom: "18px"
   
    }
    return (
        <>
            <div className="container d-flex justify-content-between">
               
                    <img src={SponsorsLogo1} style={styleImages} alt="Not found!" />
                   
                    <img src={SponsorsLogo2} style={styleImages} alt="Not found!" />
       
                    <img src={SponsorsLogo3} style={styleImages} alt="Not found!" />

                    <img src={SponsorsLogo4} style={styleImages} alt="Not found!" />

                    <img src={SponsorsLogo5} style={styleImages} alt="Not found!" />

                    <img src={SponsorsLogo6} style={styleImages} alt="Not found!" />

                    <img src={SponsorsLogo7} style={styleImages} alt="Not found!" />

                    <img src={SponsorsLogo8} style={styleImages} alt="Not found!" />
                    
                

            </div>
        </>
    )
}

export default Sponsor
