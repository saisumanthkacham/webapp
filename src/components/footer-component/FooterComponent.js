import "../footer-component/footer-component.css";

export default function FooterComponent() {
    return (
        <div>
            <div className="footer-container">
               
                <div className="footer-copyright">
                    <div className="footer-subheading"> About Us</div>
                    <div className="footer-subheading-content">
                        VASUNDARA PROJECTS PVT.LTD is a leading Realestate Company in South India Striving
                        for Quality and Perfection to Provide you with the best luxurious and
                        affordable Residential and Commercial Projects.
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="footer-subheading"> Contact Us</div>
                    <div className="footer-subheading-content">
                        <div className="footer-contact"> +91 9494256257 </div> vasundara
                        @gmail.com
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="footer-subheading"> Address </div>
                    <div className="footer-subheading-content">
                        401, Ratna Complex, Beside Image Hosptial, Ameerpet, Hyderabad - 500 073
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="footer-subheading"> Disclaimer </div>{" "}
                    <div>This website is only a conceptual presentation of the project and not a legal offering. The specification, plans, images and other details herein are only indicative and the developer/owner reserves the right to change any of these in the interest of the development as deemed fit. </div>{" "}
                </div>{" "}
            </div>{" "}
        </div>
    );
}
