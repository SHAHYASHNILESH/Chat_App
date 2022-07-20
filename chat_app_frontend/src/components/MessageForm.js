import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { GrSend } from "react-icons/gr";
import './MessageForm.css';

const MessageForm = () => {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <>
      <div className="messages-output"></div>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={11}>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="Your message" />
            </Form.Group>
          </Col>
          <Col md={1}>
            <Button
              variant="primary"
              type="submit"
              style={{ width: "100%", backgroundColor: "orange" }}
            >
              <GrSend />
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default MessageForm;
