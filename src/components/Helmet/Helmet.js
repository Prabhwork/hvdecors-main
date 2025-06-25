import React from "react";

const Helmet = (props) => {
  // Set the document title to reflect the HV DECORS website's page
  document.title = "HV DECORS ";

  return <div className="w-100">{props.children}</div>;
};

export default Helmet;
