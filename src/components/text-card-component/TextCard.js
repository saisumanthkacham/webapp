import "../text-card-component/text-card.css";
export default function TextCard(props) {
  return (
    <div className="container">
      <div className="wrapper">
        <h1>{props?.heading}</h1>

        <div className="wrapper-body">
          <span> {props?.subHeading}</span>
          <p>{props?.para}</p>
          <a className="read-page-link" href="#id1">
            {props?.link}
          </a>
        </div>
      </div>
      <img className="card-img" src={props?.img} />
    </div>
  );
}
