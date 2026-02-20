import { Container, Button } from "react-bootstrap";

export default function HeroSection() {
  return (
    <div className="bg-light text-center py-5">
      <Container>
        <h1>Welcome to CU Fest 2026</h1>
        <p>Music • Tech • Innovation</p>
        <Button variant="primary" size="lg">
          Register Now
        </Button>
      </Container>
    </div>
  );
}