import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const AboutMe = () => {
  return (
    <Container>
      <Card style={{ marginBottom: "50px" }}>
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
              <strong>marketplace</strong> - проект для студентов <br />
              Интернет магазин с полным функционалом - авторизация и регистрация
              на Firebase. CRUD - для админской части. Корзина на localStorage.
              Фильтрация. Пагинация. Живой поиск. Переиспользование компонентов{" "}
              <br />
              <strong>Стек:</strong> React. Firebase. Context. Axios. MUI
              <br />
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>makers platform</strong> - образовательная платформа
              <br />
              Разработка и поддержка платформы для обучения программированию.
              <br />
              <strong>Стек:</strong> React, Redux-Toolkit, TypeScript, Material
              UI,GIT.
              <br />
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>mentor profile</strong> - платформа для сотрудников
              <br />
              Выполняла функционал для стягивания всех юзеров, на главную
              страницу со всеми данными о менторе <br />
              <strong>Стек:</strong> TypeScript/React, HTML/CSS, Sass/Less,
              StoryBook, Redux Toolkit
              <br />
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AboutMe;
