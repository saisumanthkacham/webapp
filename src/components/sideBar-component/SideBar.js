
import { useState } from "react";
import "../sideBar-component/sideBar.css";
export default function SideBar() {
  const data = [
    {
      title: "VASUNDARA PROJECTS",
      state:false,
      data: [
        { KEY: "PROJECT 1", VALUE: "https://google.com" },
        { KEY: "PROJECT 2", VALUE: "https://google.com" },
        { KEY: "PROJECT 3", VALUE: "https://google.com" },
        { KEY: "PROJECT 4", VALUE: "https://google.com" },
      ],
    },
    {
      title: "ABOUT US",
      state:false,
      data: [{ VALUE: "https://google.com", KEY: "ABOUT VASUNDARA" }],
    },
    {
      title: "CONTACT US",
      state:false,
      data: [{ VALUE: "https://google.com", KEY: "ABOUT VASUNDARA" }],
    },
  ];
  const [refresh,setRefresh]=useState(true)

  return (
    <div className="sidebar-wrapper">
    
      {data.map((item, id) => (
        <div className="sidebar-list" key={id}>
             <div style={{color:"white"}}>{refresh}</div>
          <div className="sidebar-list-title" onClick={()=>{item.state=(!item.state);setRefresh(!refresh)}}>
            {item.title} <i class="fas fa-angle-down"></i>
          </div>
          <br />
          <div className="sidebar-list-content">
            {item.state&&item.data.map((ite) => (
              <a className="sidebar-list-item" href={ite.VALUE}>
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
