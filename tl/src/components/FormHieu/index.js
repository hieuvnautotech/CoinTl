import React from "react";
// reactstrap components
import { Form, FormGroup, Input, Button } from "reactstrap";
// core components

function FormHieu() {
  return (
    <>
      <Form>
        <div className="form-row">
          <FormGroup className="col-md-6">
            <label htmlFor="inputEmail4">Email</label>
            <Input id="inputEmail4" placeholder="Email" type="email"></Input>
          </FormGroup>
          <FormGroup className="col-md-6">
            <label htmlFor="inputPassword4">Password</label>
            <Input
              id="inputPassword4"
              placeholder="Password"
              type="password"
            ></Input>
          </FormGroup>
        </div>
        <FormGroup>
          <label htmlFor="inputAddress">Address</label>
          <Input
            id="inputAddress"
            placeholder="1234 Main St"
            type="text"
          ></Input>
        </FormGroup>
        <FormGroup>
          <label htmlFor="inputAddress2">Address 2</label>
          <Input
            id="inputAddress2"
            placeholder="Apartment, studio, or floor"
            type="text"
          ></Input>
        </FormGroup>
        <div className="form-row">
          <FormGroup className="col-md-6">
            <label htmlFor="inputCity">City</label>
            <Input id="inputCity" type="text"></Input>
          </FormGroup>
          <FormGroup className="col-md-4">
            <label htmlFor="inputState">State</label>
            <Input id="inputState" type="select">
              <option selected="">Choose...</option>
              <option>...</option>
            </Input>
          </FormGroup>
          <FormGroup className="col-md-2">
            <label htmlFor="inputZip">Zip</label>
            <Input id="inputZip" type="text"></Input>
          </FormGroup>
        </div>
        
        <Button color="primary" type="submit">
          Sign in
        </Button>
      </Form>
    </>
  );
}

export default FormHieu;
