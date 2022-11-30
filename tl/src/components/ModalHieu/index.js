import React from "react";
// reactstrap components
import { Form, FormGroup, Input } from "reactstrap";
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

// core components

function ModalHieu() {
    const url = "http://localhost:59755/api/News";
  const [modalTooltips, setModalTooltips] = React.useState(false);
  const [dataNews, setDataNews] = useState({
    article: "",
    sourceUrl: "",
  });

    
    
  const onFileChange = (event) => {
    console.log(event.target.files[0]);
    };
    

    const handle = (e) => {
        const newDataNews = {...dataNews}
        newDataNews[e.target.id] = e.target.value
        setDataNews(newDataNews)
        console.log("newDataNews", newDataNews);
    }

    const Submit = (e) => { 
        e.preventDefault();
        axios.post(url, {
          article: dataNews.article,
          sourceUrl: dataNews.sourceUrl,
        }).then(res => { 
            console.log(res.data);
            setModalTooltips(false)
        });
    }
  return (
    <>
      <Button color="info" type="button" onClick={() => setModalTooltips(true)}>
        Add News
      </Button>
      <Modal isOpen={modalTooltips} toggle={() => setModalTooltips(false)}>
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalPopoversLabel">
            Add News
          </h5>
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
          <Form>
            <FormGroup>
              <label htmlFor="inputAddress">Article</label>
              <Input
                id="article"
                placeholder="Article"
                type="text"
                onChange={(e) => handle(e)}
                value={dataNews.article}
              ></Input>
            </FormGroup>

            <FormGroup>
              <label htmlFor="inputAddress">Source</label>
              <Input
                id="sourceUrl"
                placeholder="Source"
                type="text"
                onChange={(e) => handle(e)}
                value={dataNews.sourceUrl}
              ></Input>
            </FormGroup>

            <FormGroup>
              <label htmlFor="inputAddress">Photo</label>

              <div>
                <input type="file" onChange={onFileChange} />
                <button onClick={onFileChange}>Upload!</button>
              </div>
            </FormGroup>
          </Form>
        </div>

        <div className="modal-footer">
          <Button
            color="secondary"
            type="button"
            onClick={() => setModalTooltips(false)}
          >
            Close
          </Button>
          <Button
            color="primary"
            type="button"
            onClick={(e) =>Submit(e)}
          >
            Save
          </Button>
        </div>
      </Modal>
    </>
  );
}

export default ModalHieu;
