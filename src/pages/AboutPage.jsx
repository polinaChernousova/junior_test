import React from "react";
import { Container, NavLink } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const AboutMe = () => {
  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title>Frontend Developer</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Черноусова Полина
          </Card.Subtitle>
          <hr />
          <Card.Subtitle className="mb-2">Skills:</Card.Subtitle>
          <ListGroup variant="flush">
            <ListGroup.Item>- HTML. CSS. JavaScript</ListGroup.Item>
            <ListGroup.Item>- Sass. БЭМ</ListGroup.Item>
            <ListGroup.Item>- MUI. Bootstrap. Antd</ListGroup.Item>
            <ListGroup.Item>- JQuery</ListGroup.Item>{" "}
            <ListGroup.Item>
              - React. Немного самостоятельно изучила Vue.js
            </ListGroup.Item>
            <ListGroup.Item>
              - Redux. Redux-Saga. Redux-Toolkit. MobX.
            </ListGroup.Item>
            <ListGroup.Item>- TypeScript</ListGroup.Item>
            <ListGroup.Item>- Ajax</ListGroup.Item>{" "}
            <ListGroup.Item>- MVC</ListGroup.Item>
            <ListGroup.Item>- FireBase</ListGroup.Item>
            <ListGroup.Item>- JSON API. REST API</ListGroup.Item>
            <ListGroup.Item>- Git</ListGroup.Item>
            <ListGroup.Item>- Scrum. Agile</ListGroup.Item>
            <ListGroup.Item></ListGroup.Item>
          </ListGroup>
          <Card.Subtitle className="mb-2">Experience:</Card.Subtitle>
          <Card.Text>
            - <strong>[makers]</strong> Frontend Developer (2021-2023) <br />
            &emsp;- JS-разработчик. Ментор.
            <br />
            &emsp;- Создание платформы "mentor-profile", написание видеоуроков
            для студентов на Native JS, React, Firebase, создание проектов для
            обучения студентов <br />
            &emsp;- Проведение код-ревью и конструктивная обратная связь со
            студентами.
          </Card.Text>
          <Card.Subtitle className="mb-2">Project</Card.Subtitle>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <NavLink
                target="_blank"
                href="https://github.com/polinaChernousova/project_makers_platforma"
              >
                marketplace
              </NavLink>
            </ListGroup.Item>
            <ListGroup.Item>
              <NavLink
                target="_blank"
                href="https://makers.courses/houses/KvEVKzaW7mTDQ4bkAiaR"
              >
                makers platform
              </NavLink>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AboutMe;
