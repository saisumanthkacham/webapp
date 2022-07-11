
import { useState } from "react";
import "../sideBar-component/sideBar.css";
export default function SideBar() {
  const data = [
    {
      title: "ABOUT US",
      state:false,
      data: [{ VALUE: "https://google.com", KEY: "About Vasundara Projects" }],
    },
    {
      title: "COMPLETED PROJECTS",
      state:false,
      data: [
        { KEY: "Tirumula Enclave", VALUE: "https://google.com" },
        { KEY: "Angel Hills  @ Ghatkesar", VALUE: "https://google.com" },
        { KEY: "Lorven's Enclave  @ Ghatkesar", VALUE: "https://google.com" },
        { KEY: "Victoria Valley  @ Ghatkesar", VALUE: "https://google.com" },
        { KEY: "Lorven's Hiland", VALUE: "https://google.com" },
        { KEY: "Vensai Township", VALUE: "https://google.com" },
      
        
      ],
    },
    {
      title: "ON GOING PROJECTS",
      state:false,
      data: [
        { KEY: "Lorven's Paradise", VALUE: "https://google.com" },
        { KEY: "Lorven City", VALUE: "https://google.com" },
        { KEY: "Lorven's Gold Leaf", VALUE: "https://google.com" },
        { KEY: "Lorven's Fortune Club", VALUE: "https://google.com" },
        { KEY: "Lorven's Fortune Homes", VALUE: "https://google.com" },
        { KEY: "Lorven's Fortune Castle", VALUE: "https://google.com" },
        { KEY: "Jubilee Hills @ Nalgonda", VALUE: "https://google.com" },
        { KEY: "Kalwakurthy", VALUE: "https://google.com" },
      ],
    }
  ];
  const [refresh,setRefresh]=useState(false)

  return (
    <div className="sidebar-wrapper">
    
      {data.map((item, id) => (
        <div className="sidebar-list" key={id}>
             <div style={{color:"white"}}>{refresh}</div>
          <div className="sidebar-list-title" onClick={()=>{item.state=(!item.state);setRefresh(!refresh)}}>
            {item.title} <i className="fas fa-angle-down"></i>
          </div>
          <br />
          <div className="sidebar-list-content">
            {refresh&&item?.data?.map((ite,id) => (
              <a key={id} className="sidebar-list-item" href={ite?.VALUE}>
                {ite.KEY}
                <br />
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
