import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Loader from "./Loader";
import { fetchPostsRequest } from "../redux/actions";
import CardPost from "./CardPost";

const PostList = ({ posts, fetchPostsRequest, loading, error }) => {
  useEffect(() => {
    fetchPostsRequest();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (loading) {
    return <Loader />;
  }
  return (
    <Container>
      <Row
        style={{
          marginTop: "50px",
          justifyContent: "center",
        }}
        md={4}
      >
        {posts?.map((post) => (
          <Col key={post.id}>
            <CardPost key={post.id} post={post} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts,
  loading: state.loading,
  error: state.error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPostsRequest: () => dispatch(fetchPostsRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
