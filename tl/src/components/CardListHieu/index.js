import React, { useState, useEffect } from "react";
import Employee from "../../components/Employee";
import axios from "axios";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Navhieu from "../../components/Navbars/NavHieu";

const defaultImageSrc = "../img/cryptocurrency.png";

export default function CardListHieu({
  employeeList,
  imageCard,
  open,
  handleClose,
  recordForEdit,
}) {
  return (
    <div className="row">
      
      <div className="col-md-12">
        <table>
          <tbody>
            {
              //tr > 3 td
              [...Array(Math.ceil(employeeList.length / 5))].map((e, i) => (
                <tr key={i}>
                  <td>{imageCard(employeeList[5 * i])}</td>
                  <td>
                    {employeeList[5 * i + 1]
                      ? imageCard(employeeList[5 * i + 1])
                      : null}
                  </td>
                  <td>
                    {employeeList[5 * i + 2]
                      ? imageCard(employeeList[5 * i + 2])
                      : null}
                  </td>
                  <td>
                    {employeeList[5 * i + 3]
                      ? imageCard(employeeList[5 * i + 3])
                      : null}
                  </td>
                  <td>
                    {employeeList[5 * i + 4]
                      ? imageCard(employeeList[5 * i + 4])
                      : null}
                  </td>
                  <td>
                    {employeeList[5 * i + 5]
                      ? imageCard(employeeList[5 * i + 5])
                      : null}
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <img src={recordForEdit?.imageSrc} className="card-img-top" />
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
