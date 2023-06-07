import { connect } from "react-redux";
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
}) {
  const individComments = comments.flatMap((commentArray) =>
    commentArray.filter((oneComm) => oneComm.postId === postId)
  );

  const onHide = () => {
    handleOpenModal(false);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Modal show={isShow} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title> Комментарии </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            {individComments.map((item) => (
              <ul key={item.id} style={{ listStyleType: "none" }}>
                <li>
                  <strong>Автор:</strong> {item.email}
                </li>
                <li>
                  <strong>Комментарий: </strong>
                  {item.body}
                </li>
              </ul>
            ))}
          </>
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

export default connect(mapStateToProps, {})(CommentsList);
