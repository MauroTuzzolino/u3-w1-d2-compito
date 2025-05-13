import { Card, Container, Row, Col } from "react-bootstrap";
import books from "../books/fantasy.json";
import "../App.css";

function AllTheBooks() {
  return (
    <Container className="mt-4">
      <Row>
        {books.map((book) => (
          <Col key={book.asin} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card className="custom-card">
              <div className="card-img-container">
                <Card.Img variant="top" src={book.img} alt={book.title} className="card-img" />
              </div>
              <Card.Body className="custom-card-body">
                <Card.Title className="text-truncate">{book.title}</Card.Title>
                <Card.Text>Price: ${book.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default AllTheBooks;
