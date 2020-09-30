import React from "react";
import "./style.css";

function PortfolioCard(props) {
  return (
    <div className="card">
      <div className="content">
      <img id="social" src={props.image} alt={props.alt}  />
        <h4>{props.title}</h4>
        <p>{props.text}</p>
        <a href={props.deployed} target="_blank" rel="noopener noreferrer">
          Deployed
        </a>
        <a href={props.github} target="_blank" rel="noopener noreferrer">
          Github
          </a>
      </div>

    </div>
  );
}

export default PortfolioCard;

{/* <div className="card"> */}


{/* <div className="img-container"> */}


  {/* <img alt={props.name} src={props.image} /> */}


// </div>
// <div className="content">
//   <ul>
//     <li>
//       <strong>Name:</strong> {props.name}
//     </li>
//     <li>
//       <strong>Occupation:</strong> {props.occupation}
//     </li>
//     <li>
//       <strong>Location:</strong> {props.location}
//     </li>
//   </ul>
// </div>
// </div>
