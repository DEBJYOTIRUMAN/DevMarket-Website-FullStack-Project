import AboutPage1 from "../images/AboutPage1.jpg";
import AboutPage2 from "../images/AboutPage2.jpg";
import AboutPage3 from "../images/AboutPage3.jpg";
import AboutPage4 from "../images/AboutPage4.jpg";
import AboutPage5 from "../images/AboutPage5.jpg";
import MiniAbout from "./MiniAbout";
import Sponsor from "./Sponsor";
const About = () => {
  return (
    <div>
      <div className="container">
        <img src={AboutPage1} className="img-fluid w-100" alt="Not found!" />
        <h2 className="fw-bold text-center mt-4 headingSizeResponsive">
          There’s Goodness in Everything
        </h2>
      </div>
      <div className="mt-4">
        <MiniAbout />
      </div>
      <div className="container mt-4">
        <h2 className="fw-bold text-center mt-2">About Our Values</h2>
        {/* Our Story */}
        <div className="d-flex justify-content-between mt-5 aboutDiv">
          <div className="w-50 aboutText">
            <h3 className="fw-bold aboutHeading">Our Story</h3>
            <p className="mt-3">
              We believe in efforts and intention, in doing your best, and in
              celebrating the little wins. That’s why we created Boon Market, a
              marketplace of goods that do good—for you, your community, and the
              planet. Whether you’re passionate about reducing toxins at home,
              donating to your local school, or eliminating single use plastic,
              we support you. From waste-free options to cleaning, personal
              care, and lunch on the go, our goods are eco friendly, uplifting,
              and intended to make your life just a little bit better. We’ve
              teamed up with incredible partners from around the country to
              offer the best in each category. Because if we all do our parts,
              we’ll generate more goodness than any one of us could achieve
              alone. But the impact doesn’t stop there. Our platform makes it
              easy to give back to the cause of your choice. Shop well knowing
              that a percentage of your purchase will go directly toward the
              greater good. Boon was founded by Lily Kanter, co-founder of
              Serena & Lily, mother of three, and passionate social changemaker.
              We have been featured on The View, Good Morning America, The Today
              Show, Real Simple Magazine, Good Housekeeping, and more.
            </p>
          </div>
          <img src={AboutPage2} style={{width: '380px', height: '380px'}} className="my-auto img-fluid aboutImageSize" alt="Not found!" />
        </div>
        {/* Our Mission */}
        <div className="d-flex justify-content-between mt-5 aboutDiv">
        <img src={AboutPage3} style={{width: '380px', height: '380px'}} className="my-auto img-fluid aboutImageSize" alt="Not found!" />
          <div className="w-50 aboutText">
            <h3 className="fw-bold aboutHeading">Our Mission</h3>
            <p className="mt-3">
              We believe in efforts and intention, in doing your best, and in
              celebrating the little wins. That’s why we created Boon Market, a
              marketplace of goods that do good—for you, your community, and the
              planet. Whether you’re passionate about reducing toxins at home,
              donating to your local school, or eliminating single use plastic,
              we support you. From waste-free options to cleaning, personal
              care, and lunch on the go, our goods are eco friendly, uplifting,
              and intended to make your life just a little bit better. We’ve
              teamed up with incredible partners from around the country to
              offer the best in each category. Because if we all do our parts,
              we’ll generate more goodness than any one of us could achieve
              alone. But the impact doesn’t stop there. Our platform makes it
              easy to give back to the cause of your choice. Shop well knowing
              that a percentage of your purchase will go directly toward the
              greater good. Boon was founded by Lily Kanter, co-founder of
              Serena & Lily, mother of three, and passionate social changemaker.
              We have been featured on The View, Good Morning America, The Today
              Show, Real Simple Magazine, Good Housekeeping, and more.
            </p>
          </div>
          
        </div>
        {/* Our Team */}
        <div className="d-flex justify-content-between mt-5 aboutDiv">
          <div className="w-50 aboutText">
            <h3 className="fw-bold aboutHeading">Our Team</h3>
            <p className="mt-3">
              We believe in efforts and intention, in doing your best, and in
              celebrating the little wins. That’s why we created Boon Market, a
              marketplace of goods that do good—for you, your community, and the
              planet. Whether you’re passionate about reducing toxins at home,
              donating to your local school, or eliminating single use plastic,
              we support you. From waste-free options to cleaning, personal
              care, and lunch on the go, our goods are eco friendly, uplifting,
              and intended to make your life just a little bit better. We’ve
              teamed up with incredible partners from around the country to
              offer the best in each category. Because if we all do our parts,
              we’ll generate more goodness than any one of us could achieve
              alone. But the impact doesn’t stop there. Our platform makes it
              easy to give back to the cause of your choice. Shop well knowing
              that a percentage of your purchase will go directly toward the
              greater good. Boon was founded by Lily Kanter, co-founder of
              Serena & Lily, mother of three, and passionate social changemaker.
              We have been featured on The View, Good Morning America, The Today
              Show, Real Simple Magazine, Good Housekeeping, and more.
            </p>
          </div>
          <img src={AboutPage4} style={{width: '380px', height: '380px'}} className="my-auto img-fluid aboutImageSize" alt="Not found!" />
        </div>
        {/* Our Support */}
        <div className="d-flex justify-content-between mt-5 aboutDiv">
        <img src={AboutPage5} style={{width: '380px', height: '380px'}} className="my-auto img-fluid aboutImageSize" alt="Not found!" />
          <div className="w-50 aboutText">
            <h3 className="fw-bold aboutHeading">Our Support</h3>
            <p className="mt-3">
              We believe in efforts and intention, in doing your best, and in
              celebrating the little wins. That’s why we created Boon Market, a
              marketplace of goods that do good—for you, your community, and the
              planet. Whether you’re passionate about reducing toxins at home,
              donating to your local school, or eliminating single use plastic,
              we support you. From waste-free options to cleaning, personal
              care, and lunch on the go, our goods are eco friendly, uplifting,
              and intended to make your life just a little bit better. We’ve
              teamed up with incredible partners from around the country to
              offer the best in each category. Because if we all do our parts,
              we’ll generate more goodness than any one of us could achieve
              alone. But the impact doesn’t stop there. Our platform makes it
              easy to give back to the cause of your choice. Shop well knowing
              that a percentage of your purchase will go directly toward the
              greater good. Boon was founded by Lily Kanter, co-founder of
              Serena & Lily, mother of three, and passionate social changemaker.
              We have been featured on The View, Good Morning America, The Today
              Show, Real Simple Magazine, Good Housekeeping, and more.
            </p>
          </div>
          
        </div>
      </div>
      <div className="mt-5">
          <h3 className="fw-bold text-center mb-3 sponsorsText">Our Sponsors</h3>
        <Sponsor/>
      </div>
      
    </div>
  );
};

export default About;
