import Footer from "../src/components/footer-component/FooterComponent"
import Header from "./components/header-component/HeaderComponent"
import TextCard from "./components/text-card-component/TextCard";
import Form from "./components/form-component/FormComponent";

import './App.css';
import { useState } from "react";

function App() {
  const [footer,setFooter]=useState(false)
  return (
    <div className="App">
      <Header/>

      <TextCard 
      heading="legacy of craft"
      subHeading="from the world of palaces"
      para="Established in 1976 as an interior decoration firm in Oman by Mr. PNC Menon, Sobha Realty has grown into one of the largest and most trusted names in real estate."
      link= "read more ....."
      img="https://www.sobharealty.com/uploads/home_content/123.jpg"
      />
      

      <TextCard 
      heading="PASSION FOR PERFECTION"
      subHeading='The Vision & DNA'
      para="Crafting a product that stands out entails attention to the finest of details. Ensuring exceptional quality, every time."
      link= "read more ....."
      img="https://www.sobharealty.com/uploads/home_content/1-1.jpg"
      />

    <TextCard 
      heading="SOBHA HARTLAND"
      subHeading='#HeartOfDubai'
      para="Sobha Hartland is an 8 million sq. ft. waterfront community of luxurious apartments, beautiful villas and high-end townhouses located in MBR City."
      link= "read more ....."
      img="https://www.sobharealty.com/uploads/home_content/11.jpg"
      />
      
      <Form/>
      <div onClick={()=>setFooter(!footer)} className="footer-text">
        {footer?<div>Less</div>:<div>More</div>}
        </div>
        
       {footer && <Footer/>}
        
    </div>
  );
}

export default App;
