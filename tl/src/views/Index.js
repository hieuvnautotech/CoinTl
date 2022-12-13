import React from "react";
import { useState, useEffect } from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

// sections for this page
import Images from "./index-sections/Images.js";
import BasicElements from "./index-sections/BasicElements.js";
import Navbars from "./index-sections/Navbars.js";
import Tabs from "./index-sections/Tabs.js";
import Pagination from "./index-sections/Pagination.js";
import Notifications from "./index-sections/Notifications.js";
import Typography from "./index-sections/Typography.js";
import Javascript from "./index-sections/Javascript.js";
import Carousel from "./index-sections/Carousel.js";
import NucleoIcons from "./index-sections/NucleoIcons.js";
import CompleteExamples from "./index-sections/CompleteExamples.js";
import SignUp from "./index-sections/SignUp.js";
import Examples from "./index-sections/Examples.js";
import Download from "./index-sections/Download.js";
import CardListHieu from "../components/CardListHieu/index";
import AdminPage3 from "./examples/Admin3Page";
import axios from "axios";


const defaultImageSrc = "../img/cryptocurrency.png";

function Index() {
  

  

  return (
    <>
      {/* <IndexNavbar /> */}
      <div className="wrapper">
        <IndexHeader />
        <div className="main">
          {/* <Images /> */}
          {/* <BasicElements /> */}
          {/* <Navbars /> */}
          {/* <Tabs /> */}
          {/* <Pagination /> */}
          {/* <Notifications /> */}
          {/* <Typography /> */}
          {/* <Javascript /> */}
          {/* <Carousel /> */}
          {/* <NucleoIcons /> */}
          {/* <CompleteExamples /> */}
          {/* <SignUp /> */}
          {/* <Examples /> */}
          {/* <Download /> */}
          {/* <CardListHieu
            employeeList={employeeList}
            imageCard={imageCard}
            open={open}
            handleClose={handleClose}
            recordForEdit={recordForEdit}
          /> */}
          {/* <AdminPage3/> */}
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Index;
