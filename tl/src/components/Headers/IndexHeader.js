/*eslint-disable*/
import React from "react";
import { useState, useEffect } from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

import CardListHieu from "../CardListHieu/index";
import axios from "axios";

const defaultImageSrc = "../img/cryptocurrency.png";

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  const [employeeList, setEmployeeList] = useState([]);
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });

  const imageCard = (data) => (
    <div
      className="card"
      onClick={() => {
        showRecordDetails(data);
        if (
          data?.imageName?.slice(
            data?.imageName?.length - 3,
            data?.imageName?.length
          ) !== "pdf"
        ) {
          handleOpen();
        } else {
          window.open(`${data?.imageSrc}`);
        }
      }}
    >
      <img src={defaultImageSrc} className="card-img-top rounded-circle" />
      <div className="card-body">
        <h5>{data.employeeName}</h5>
        <span>{data.occupation}</span> <br />
      </div>
    </div>
  );

  useEffect(() => {
    refreshEmployeeList();
  }, []);
  const employeeAPI = (url = "http://localhost:13484/api/Employee/") => {
    return {
      fetchAll: () => axios.get(url),
      create: (newRecord) => axios.post(url, newRecord),
      update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
      delete: (id) => axios.delete(url + id),
    };
  };

  function refreshEmployeeList() {
    employeeAPI()
      .fetchAll()
      .then((res) => {
        setEmployeeList(res.data);
      })
      .catch((err) => console.log(err));
  }

  const showRecordDetails = (data) => {
    setRecordForEdit(data);
  };

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/header.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            {/* <img
              alt="..."
              className="n-logo"
              src={require("assets/img/now-logo.png")}
            ></img> */}
            {/* <h1 className="h1-seo">Now UI Kit.</h1> */}
            {/* <h3>A beautiful Bootstrap 4 UI kit. Yours free.</h3> */}
          </div>
          {/* <h6 className="category category-absolute">
            Designed by{" "}
            <a href="http://invisionapp.com/?ref=creativetim" target="_blank">
              <img
                alt="..."
                className="invision-logo"
                src={require("assets/img/invision-white-slim.png")}
              ></img>
            </a>
            . Coded by{" "}
            <a
              href="https://www.creative-tim.com?ref=nukr-index-header"
              target="_blank"
            >
              <img
                alt="..."
                className="creative-tim-logo"
                src={require("assets/img/creative-tim-white-slim2.png")}
              ></img>
            </a>
            .
          </h6> */}

          <CardListHieu
            employeeList={employeeList}
            imageCard={imageCard}
            open={open}
            handleClose={handleClose}
            recordForEdit={recordForEdit}
          />
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
