import { Container, ListGroup } from "react-bootstrap";

export default function EventDetails() {
  return (
    <Container className="my-5">
      <h2>Event Details</h2>
      <p>Join us for an exciting lineup of events:</p>

      <ListGroup>
        <ListGroup.Item>Hackathon — 24 Hour Coding Challenge</ListGroup.Item>
        <ListGroup.Item>Battle of Bands — Live Music Night</ListGroup.Item>
        <ListGroup.Item>Startup Pitch — Present to Investors</ListGroup.Item>
        <ListGroup.Item>DJ Night — Celebrate with Beats</ListGroup.Item>
      </ListGroup>
    </Container>
  );
}