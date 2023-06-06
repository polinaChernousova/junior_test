import Card from "react-bootstrap/Card";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { NavLink } from "react-router-dom";
import avatar from "../assets/images/avatar.jpg";
import { useState } from "react";
import { Button } from "react-bootstrap";
import CommentsList from "./CommentsList";

function CardPost({ post }) {
  const [showComponent, setShowComponent] = useState(false);
  const { id: postId } = post;

  const handleClick = (isOpen) => {
    setShowComponent(isOpen);
  };
  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <NavLink to={`/details/`}>
        <OverlayTrigger overlay={<Tooltip id={"top"}>Подробнее</Tooltip>}>
          <Card.Img
            style={{ height: "200px", objectFit: "cover" }}
            variant="top"
            src={avatar}
          />
        </OverlayTrigger>
      </NavLink>
      <Card.Body style={{ height: "270px" }}>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.body}</Card.Text>
      </Card.Body>
      <Card.Body>
        <Button onClick={() => handleClick(true)}>комментарии</Button>
        {showComponent && (
          <CommentsList
            postId={postId}
            isShow={showComponent}
            handleOpenModal={handleClick}
          />
        )}
      </Card.Body>
    </Card>
  );
}

export default CardPost;
