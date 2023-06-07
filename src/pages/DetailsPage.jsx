import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { fetchOnePostRequest } from "../redux/actions";
import Loader from "../components/Loader";
import avatar from "../assets/images/avatar.jpg";

const DetailPage = ({
  onePost,
  loading,
  error,
  fetchOnePostRequest,
  oneUser,
}) => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      fetchOnePostRequest(id);
    }
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Container>
      <Button onClick={() => navigate(-1)}>Назад</Button>
      <Card
        style={{
          width: "300px",
          marginTop: "20px",
        }}
      >
        <Card.Img variant="top" src={avatar} />
        <Card.Body>
          <Card.Title>User Info:</Card.Title>
          <Card.Text>
            <strong>Name:</strong> {oneUser.name}
          </Card.Text>
          <Card.Text>
            <strong>Email:</strong> {oneUser.email}
          </Card.Text>
        </Card.Body>
      </Card>
      <Row style={{ marginTop: "50px", justifyContent: "center" }} md={4}>
        {onePost?.map((item) => (
          <Col md={3} key={item.id} style={{ margin: "10px" }}>
            <Card>
              <Card.Img variant="top" src={avatar} />
              <Card.Body
                style={{
                  height: "250px",
                  whiteSpace: "wrap",
                  overflow: "hidden",
                  textOverflow: "clip",
                }}
              >
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.body}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  onePost: state.onePost,
  oneUser: state.oneUser,
  loading: state.loading,
  error: state.error,
});

export default connect(mapStateToProps, { fetchOnePostRequest })(DetailPage);
