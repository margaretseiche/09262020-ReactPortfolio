import React from "react";
import "./style.css";

function PortfolioCard(props) {
  return (
    <div>

      <div className="content">{props.title}
        <a href={props.deployed} target="_blank" rel="noopener noreferrer">
          <img id="social" src={props.image} alt={props.alt}  />
        </a>
      </div>

    </div>
  );
}

export default PortfolioCard;
