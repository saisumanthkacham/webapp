// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "../header-component/header-component.css";

import { useEffect, useState } from "react";

export default function HeaderComponent({burgerButton,setBurgerButton}) {
    const [screen, setScreen] = useState(0);
    
    let resizeWindow = () => {
        setScreen(window.innerWidth);
    };
    useEffect(() => {
        resizeWindow();
        window.addEventListener("resize", resizeWindow);
        return () => window.removeEventListener("resize", resizeWindow);
    }, []);

    const locationLink =
        "https://app.lapentor.com/sphere/golden-heights-aerial?scene=629340da6d91ccc868034b6a";
    return (
        <div className="header-container">

            <div className="burger-button" onClick={()=>setBurgerButton(!burgerButton)}>
           { burgerButton?<i class="fas fa-bars"></i>:<i class="fas fa-times-circle"></i>}
            </div>
          
            <div className="header-logo">Vasundara Projects Pvt.Ltd</div>
            <div className="header-right-icons-container">
                {screen > 480 ? (
                    <div className="header-icon-phone header-right-icon">
                        <i class="fas fa-phone-alt"></i> mobile phone
                    </div>
                ) : (
                    <a href="tel:[9494256257]" className="header-icon-phone header-right-icon">
                        <i class="fas fa-phone-alt"></i>{" "}
                    </a>
                )}

                <a href={locationLink} className="header-right-icon ">
                <i class="fas fa-map-marker-alt" ></i>
                </a>
            </div>
        </div>
    );
}
