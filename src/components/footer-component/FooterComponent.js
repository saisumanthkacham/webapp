import "../footer-component/footer-component.css";

export default function FooterComponent() {
  return (
    <div>
      <div className="footer-container">
        <div className="footer-copyright">
          <div className="footer-subheading"> About Us</div>
          <div className="footer-subheading-content">
            Vasundhara Projects Pvt Ltd is a premier real estate development
            company with more than a decade of rich experience in execution of
            landmark projects across the length and breadth of Hyderabad.
            Founded in 2002 by Mr. K. V. Ramesh, Vasundhara has carved a
            permanent niche for itself by adopting quality system standards and
            meeting people's aspirations and desire for a comfortable lifestyle.
            Our goal is to provide quality plots with international standards
            and enhance the quality of life of our customers.
          </div>
        </div>
        <div className="footer-copyright">
          <div className="footer-subheading"> Contact Us</div>
          <div className="footer-subheading-content">
            <div className="footer-contact"> +91 40 66816622 </div>{" "}
            info@vasundharaprojects.com
          </div>
        </div>
        <div className="footer-copyright">
          <div className="footer-subheading"> Address </div>
          <div className="footer-subheading-content">
            #502 , Chaitanya Chambers Chaitanyapuri, Kothapet, Hyderabad -
            500060, Telangana Landmark - Beside HP Petrol Bunk
          </div>
        </div>
        <div className="footer-copyright">
          <div className="footer-subheading"> Disclaimer </div>{" "}
          <div>
            This website is only a conceptual presentation of the project and
            not a legal offering. The specification, plans, images and other
            details herein are only indicative and the developer/owner reserves
            the right to change any of these in the interest of the development
            as deemed fit.{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
