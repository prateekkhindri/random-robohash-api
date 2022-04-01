import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { CustomCard } from "../card/CustomCard";

export const SearchForm = ({ addToFavList }) => {
  const [name, setName] = useState("");

  const [robot, setRobot] = useState("");

  const handleOnChange = (e) => {
    const { value } = e.target;
    setName(value);
    // console.log(e.target.value);
    console.log(value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setRobot(name);
    setName("");
    // console.log(e.target[0].value);
  };

  // 3. Removing the item searched when add to list is clicked
  const addAndResetRobo = (name) => {
    addToFavList(name);
    setRobot();
  };

  // console.log(robot);
  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <Row>
          <Col>
            <Form.Control
              placeholder="Search your name"
              value={name}
              onChange={handleOnChange}
              required
            />
          </Col>
          <Col>
            <Button variant="primary" type="submit">
              Search
            </Button>
          </Col>
        </Row>
      </Form>

      <Row className="mt-5">
        <Col>
          <CustomCard name={robot} fun={addAndResetRobo} />
        </Col>
      </Row>
    </div>
  );
};

// 1. The add to list button, change to remove/delete from favs when the button is clicked
