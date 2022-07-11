import Footer from "../src/components/footer-component/FooterComponent";
import Header from "./components/header-component/HeaderComponent";
import TextCard from "./components/text-card-component/TextCard";
import Form from "./components/form-component/FormComponent";
import SideBar from "./components/sideBar-component/SideBar";
import "./App.css";
import { useState } from "react";

//importing images
import Arch from "./images/Arch.jpg"
import entrance from "./images/Entrance.jpg"
import road from "./images/road.jpg"

function App() {
  const [footer, setFooter] = useState(false);
  const [burgerButton, setBurgerButton] = useState(true);
  return (
    <div className="App">
      <Header burgerButton={burgerButton} setBurgerButton={setBurgerButton} />

      {!burgerButton && <SideBar />}

      <div className="components" id={!burgerButton&&"no-scroll"}>
        <TextCard
          heading="legacy of craft"
          subHeading="from the world of palaces"
          para="Established in 2007 as an interior decoration firm in Hyderabad by Mr. K.V. Ramesh, Vasundara Projects has grown into one of the largest and most trusted names in real estate."
          link="read more ....."
          img={entrance}
        />

        <TextCard
          heading="PASSION FOR PERFECTION"
          subHeading="The Vision & DNA"
          para="Crafting a product that stands out entails attention to the finest of details. Ensuring exceptional quality, every time."
          link="read more ....."
          img={Arch}
        />

        <TextCard
          heading="VASUNDARA HARTLAND"
          subHeading="#HeartOfHyderabad"
          para="Sobha Hartland is an 8 million sq. ft. waterfront community of luxurious apartments, beautiful villas and high-end townhouses located in Hyderabad City."
          link="read more ....."
          img={road}
        />

        <Form />
        <div onClick={() => setFooter(!footer)} className="footer-text">
          {footer ? (
            <div>
              Less <i className="fas fa-angle-up "></i>
            </div>
          ) : (
            <div>
              More <i className="fas fa-angle-down"></i>
            </div>
          )}
        </div>
      </div>
      {footer && <Footer />}
    </div>
  );
}

export default App;
