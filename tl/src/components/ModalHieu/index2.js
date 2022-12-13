import React from "react";
// reactstrap components
import { Alert, Form, FormGroup, Input } from "reactstrap";
import { useState, useEffect } from "react";
import {
  Button,
  Modal,
  UncontrolledTooltip,
  UncontrolledPopover,
  PopoverHeader,
  PopoverBody,
} from "reactstrap";
import { postNews } from "../apis/index";
import axios from "axios";
// import "../assets/admin2/admin2.css";

// core components

const defaultImageSrc = "../img/cryptocurrency.png";

const initialFieldValues = {
  employeeID: 0,
  employeeName: "",
  Occupation: "",
  imageName: "",
  imageSrc: defaultImageSrc,
  imageFile: null,
};

function ModalHieu(props) {
  const { addOrEdit, recordForEdit } = props;
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState(initialFieldValues);

  const url = "http://localhost:59755/api/News";
  const urlSaveFile = "http://localhost:59755/api/News/SaveFile";
  const [modalTooltips, setModalTooltips] = React.useState(false);
  const [dataNews, setDataNews] = useState({
    article: "",
    sourceUrl: "",
  });
  const [images, setImages] = useState();

  const onFileChange = (event) => {
    setImages(event.target.files[0]);
    console.log(event.target.files[0]);
  };

  const handle = (e) => {
    const newDataNews = { ...dataNews };
    newDataNews[e.target.id] = e.target.value;
    setDataNews(newDataNews);
    console.log("newDataNews", newDataNews);
  };

  const config = {
    headers: { "content-type": "multipart/form-data" },
  };
  const Submit = (e) => {
    e.preventDefault();
    axios
      .post(url, {
        article: dataNews.article,
        sourceUrl: dataNews.sourceUrl,
      })
      .then((res) => {
        if (res.data == "Added Successfully!!") {
          var bodyFormData = new FormData();
          bodyFormData.append("image", images);
          axios
            .post(urlSaveFile, bodyFormData, config)
            .then((res) => Alert("Success!"));
        }
        setModalTooltips(false);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setValues({ ...values, [name]: value });
  };

  const showPreview = (e) => {
    if (e.target.files && e.target.files[0]) {
      let imageFile = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (x) => {
        setValues({
          ...values,
          imageFile,
          imageSrc: x.target.result,
        });
      };
      reader.readAsDataURL(imageFile);
    } else {
      setValues({
        ...values,
        imageFile: null,
        imageSrc: defaultImageSrc,
      });
    }
  };

  const validate = () => {
    let temp = {};
    // temp.employeeName = values.employeeName === "" ? "employNameNull" : false;
    // temp.Occupation = values.Occupation === "" ? true : false;
    // temp.imageSrc = values.imageSrc === defaultImageSrc ? true : false;
    temp.employeeName = values.employeeName === "" ? false : true;
    temp.imageSrc = values.imageSrc === defaultImageSrc ? false : true;
    setErrors(temp);
    return Object.values(temp).every((x) => x === true);
  };

  const resetForm = () => {
    console.log("reset");
    setValues(initialFieldValues);
    document.getElementById("image-uploader").value = null;
    setErrors({});
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("NhanRoisubmit");
    if (validate()) {
      const formData = new FormData();
      formData.append("employeeID", values.employeeID);
      formData.append("employeeName", values.employeeName);
      formData.append("occupation", values.occupation);
      formData.append("imageName", values.imageName);
      formData.append("imageFile", values.imageFile);
      console.log("ValidateSubmit");
      addOrEdit(formData, resetForm);
    }
  };

  const applyErrorClass = (field) =>
    field in errors && errors[field] === false ? "invalid-field" : "";
  
  return (
    <>
      <Button color="info" type="button" onClick={() => setModalTooltips(true)}>
        Add News
      </Button>
      <Modal isOpen={modalTooltips} toggle={() => setModalTooltips(false)}>
        <div className="modal-header">
          <Button>
            Add News
          </Button>
          <button
            aria-label="Close"
            className="close"
            type="button"
            onClick={() => setModalTooltips(false)}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>

        <div className="modal-body">
          <form autoComplete="off" noValidate onSubmit={handleFormSubmit}>
            <div className="card">
              <img src={values.imageSrc} className="card-img-top" />
              <div className="card-body">
                <input
                  type="file"
                  accept="image/*"
                  className={"form-control-file" + applyErrorClass("imageSrc")}
                  onChange={showPreview}
                  id="image-uploader"
                />

                <div className="form-group">
                  <input
                    className={"form-control" + applyErrorClass("employeeName")}
                    placeholder="Employee Name"
                    name="employeeName"
                    value={values.employeeName}
                    onChange={handleInputChange}
                  />
                  {/* <TextField
                error={errors.employeeName ? true : false}
                label="Employee Name"
                onChange={(e) => {
                  setValues({ ...values, employeeName: e.target.value });
                }}
                helperText={errors.employeeName}
              /> */}
                </div>

                <div className="form-group">
                  <input
                    className="form-control"
                    placeholder="Occupation"
                    name="occupation"
                    value={values.occupation}
                    onChange={handleInputChange}
                  ></input>
                  {/* <TextField
                error={errors.Occupation ? true : false}
                label="Occupation"
                onChange={(e) => {
                  setValues({ ...values, Occupation: e.target.value });
                }}
              /> */}
                </div>
                <div className="form-group text-center">
                  <Button
                    color="secondary"
                    type="button"
                    onClick={() => setModalTooltips(false)}
                  >
                    Close
                  </Button>

                  <Button
                    color="primary"
                    type="submit"
                    className="btn btn-light"
                  >
                    Submit
                  </Button>

                </div>
              </div>
            </div>
          </form>
        </div>

        {/* <div className="modal-footer">
          <Button
            color="secondary"
            type="button"
            onClick={() => setModalTooltips(false)}
          >
            Close
          </Button>
          <Button color="primary" type="button" onClick={(e) => Submit(e)}>
            Save
          </Button>
        </div> */}
      </Modal>
    </>
  );
}

export default ModalHieu;
