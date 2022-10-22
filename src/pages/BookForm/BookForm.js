import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const BookForm = () => {
  return (
    <div className="w-50 mx-auto py-5">
      <h3 className="text-primary">Fill Up The Form</h3>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicOrigin">
          <Form.Label>Origin</Form.Label>
          <Form.Control type="text" placeholder="Enter Origin" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDestination">
          <Form.Label>Destination</Form.Label>
          <Form.Control type="text" placeholder="Enter Destination" />
        </Form.Group>
        <div className="row row-cols-2">
          <Form.Group className="mb-3" controlId="formBasicFromDate">
            <Form.Label>From</Form.Label>
            <Form.Control type="date" placeholder="Enter Date" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicToDate">
            <Form.Label>To</Form.Label>
            <Form.Control type="date" placeholder="Enter Date" />
          </Form.Group>
        </div>
        <Link to="/bookingroom">
          <Button variant="primary" type="submit">
            Start Booking
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default BookForm;
