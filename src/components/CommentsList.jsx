import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCommentsRequest } from "../redux/actions";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Loader from "./Loader";

function CommentsList({
  comments,
  error,
  loading,
  postId,
  handleOpenModal,
  isShow,
  fetchCommentsRequest,
}) {
  useEffect(() => {
    if (!postId) {
      fetchCommentsRequest(postId);
    }
  }, [postId]);

  const individComments = comments.flatMap((commentArray) =>
    commentArray.filter((oneComm) => oneComm.postId === postId)
  );

  const onHide = () => {
    handleOpenModal(false);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Modal show={isShow} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title> Комментарии </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {loading ? (
            <Loader />
          ) : (
            <>
              {individComments.map((item) => (
                <ul key={item.id} style={{ listStyleType: "none" }}>
                  <li>
                    <strong>Автор:</strong> {item.email}
                  </li>
                  <li>
                    <strong> Комментарий: </strong>
                    {item.body}
                  </li>
                </ul>
              ))}
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

const mapStateToProps = (state) => ({
  comments: state.comments,
  loading: state.loading,
  error: state.error,
});

export default connect(mapStateToProps, {
  fetchCommentsRequest,
})(CommentsList);
