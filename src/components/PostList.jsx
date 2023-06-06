import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Container, Pagination } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Loader from "./Loader";
import { fetchPostsRequest, setPage, setPageSize } from "../redux/actions";
import CardPost from "./CardPost";

const PostList = ({
  posts,
  fetchPostsRequest,
  loading,
  error,
  totalPosts,
  pageSize,
  page,
  setPage,
}) => {
  const totalPages = Math.ceil(totalPosts / pageSize);

  useEffect(() => {
    fetchPostsRequest(page, pageSize);
  }, [page, pageSize]);

  // ! paginate
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (loading) {
    return <Loader />;
  }
  return (
    <Container>
      <Row>
        {posts?.map((post) => (
          <Col
            md={4}
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
            key={post.id}
          >
            <CardPost key={post.id} post={post} />
          </Col>
        ))}
      </Row>
      <Pagination
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <Pagination.First
          onClick={() => handlePageChange(1)}
          disabled={page === 1}
        />
        <Pagination.Prev
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
        />

        {Array.from({ length: totalPages }).map((_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === page}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}

        <Pagination.Next
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages}
        />
        <Pagination.Last
          onClick={() => handlePageChange(totalPages)}
          disabled={page === totalPages}
        />
      </Pagination>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts,
  loading: state.loading,
  error: state.error,
  page: state.page,
  pageSize: state.pageSize,
  totalPosts: state.totalPosts,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPostsRequest: (page, pageSize) =>
    dispatch(fetchPostsRequest(page, pageSize)),
  setPage: (page) => dispatch(setPage(page)),
  setPageSize: (pageSize) => dispatch(setPageSize(pageSize)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
