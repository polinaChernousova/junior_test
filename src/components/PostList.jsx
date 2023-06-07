import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  Button,
  Container,
  Form,
  InputGroup,
  Pagination,
} from "react-bootstrap";
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
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(false);
  const totalPages = Math.ceil(totalPosts / pageSize);

  useEffect(() => {
    fetchPostsRequest(page, pageSize);
  }, [page, pageSize]);

  // ! paginate
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  // ! live search

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    const filteredPosts = posts.filter((post) => {
      return post.title.toLowerCase().includes(value.toLowerCase());
    });
    setSearchResults(filteredPosts);
  };

  const handleClear = () => {
    setSearchTerm("");
    setSearchResults(posts);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (loading) {
    return <Loader />;
  }
  return (
    <Container>
      <Row md={6}>
        <Col>
          <InputGroup>
            <Form.Control
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search by title"
            />
            {searchTerm && (
              <Button onClick={handleClear}>
                <img
                  width="15"
                  src="https://img.icons8.com/?size=512&id=111057&format=png"
                  alt=""
                />
              </Button>
            )}
          </InputGroup>
        </Col>
      </Row>
      <Row
        style={{
          marginTop: "50px",
          justifyContent: "center",
        }}
        md={4}
      >
        {(searchResults || posts)?.map((post) => (
          <Col key={post.id}>
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
