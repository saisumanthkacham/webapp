
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
        "https://google.com";
    return (
        <div className="header-container">

            <div className="burger-button" onClick={()=>setBurgerButton(!burgerButton)}>
           { burgerButton?<i className="fas fa-bars"></i>:<i className="fas fa-times-circle"></i>}
            </div>
          
            <div className="header-logo">Vasundara Projects Pvt.Ltd</div>
            <div className="header-right-icons-container">
                {screen > 480 ? (
                    <div className="header-icon-phone header-right-icon">
                        <i className="fas fa-phone-alt"></i> mobile phone
                    </div>
                ) : (
                    <a href="tel:[9494256257]" className="header-icon-phone header-right-icon">
                        <i className="fas fa-phone-alt"></i>{" "}
                    </a>
                )}

                <a href={locationLink} className="header-right-icon ">
                <i className="fas fa-envelope"></i>
                </a>
            </div>
        </div>
    );
}
