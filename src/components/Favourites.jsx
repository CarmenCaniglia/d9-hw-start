import {
  Button,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Favourites = () => {
  const favouriteList = useSelector((state) => state.jobs.content);
  const dispatch = useDispatch();
  return (
    <Container>
      <h1>Favorite Companies</h1>
      <Row>
        <Col className="my-3">
          <ListGroup>
            {favouriteList.map((fav, i) => (
              <ListGroup.Item
                key={i}
                className="d-flex justify-content-between"
              >
                <Link to={`/${fav}`}>{fav}</Link>
                <Button
                  variant="danger"
                  onClick={() => {
                    dispatch({
                      type: "REMOVE_FROM_FAVOURITES",
                      payload: i,
                    });
                  }}
                >
                  DELETE
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};
export default Favourites;
