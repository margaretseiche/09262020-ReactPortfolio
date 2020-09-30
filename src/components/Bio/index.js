import React from "react";

function Bio(props) {
  return <div className="container" style={props.style}>{props.children}</div>;
}

export default Bio;
