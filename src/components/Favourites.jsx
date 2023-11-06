import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const Favourites = () => {
  const favourites = useSelector((state) => state.Favourites);
  return (
    <Container>
      <h1>Favorite Companies</h1>
      <Row>
        <Col>
          <ul>
            {favourites.map((company, index) => (
              <li key={index}>{company}</li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};
export default Favourites;
