import { Container } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

export default function Loader() {
  return (
    <>
      <Container style={{ display: "flex", justifyContent: "center" }}>
        <Spinner animation="border" variant="secondary" />
      </Container>
    </>
  );
}
