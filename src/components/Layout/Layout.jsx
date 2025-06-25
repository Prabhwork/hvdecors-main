import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";

const Layout = () => {
  const location = useLocation();

 
  return (
    <Fragment>
      {  <Header />}
      <div>
        <Routers />
      </div>
      { <Footer />}
    </Fragment>
  );
};

export default Layout;
