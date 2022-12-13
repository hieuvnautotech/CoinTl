import React, { useState, useEffect } from "react";
import Employee from "../../components/Employee";
import axios from "axios";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Navhieu from "../../components/Navbars/NavHieu"
import CardListHieu from "../../components/CardListHieu/index"
import ModalHieu from "../../components/ModalHieu/index2";


const defaultImageSrc = "../img/cryptocurrency.png";

export default function EmployeeList() {
  const [employeeList, setEmployeeList] = useState([]);
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

  const addOrEdit = (formData, onSuccess) => {
    if (formData.get("employeeID") === "0")
      employeeAPI()
        .create(formData)
        .then((res) => {
          onSuccess();
          refreshEmployeeList();
        })
        .catch((err) => console.log(err));
    else
      employeeAPI()
        .update(formData.get("employeeID"), formData)
        .then((res) => {
          onSuccess();
          refreshEmployeeList();
        })
        .catch((err) => console.log(err));
  };

  const showRecordDetails = (data) => {
    setRecordForEdit(data);
  };

  const onDelete = (e, id) => {
    e.stopPropagation();
    if (window.confirm("Are you sure to delete this record?"))
      employeeAPI()
        .delete(id)
        .then((res) => refreshEmployeeList())
        .catch((err) => console.log(err));
  };

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
        <button
          className="btn btn-light delete-button"
          onClick={(e) => onDelete(e, parseInt(data.employeeID))}
        >
          <i className="far fa-trash-alt"></i>
        </button>
      </div>
    </div>
  );

  return (
    <div className="row">
      <Navhieu />
      {/* <Employee addOrEdit={addOrEdit} recordForEdit={recordForEdit} /> */}
      <ModalHieu addOrEdit={addOrEdit} recordForEdit={recordForEdit} />
      <CardListHieu
        employeeList={employeeList}
        imageCard={imageCard}
        open={open}
        handleClose={handleClose}
        recordForEdit={recordForEdit}
      />
    </div>
  );
}

