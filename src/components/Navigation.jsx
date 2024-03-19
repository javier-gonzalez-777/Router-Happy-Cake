import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar
      bg="warning"
      variant="dark"
    >
      <Container className="justify-content-start">
        <Navbar.Brand className="text-dark">🍰 Hapy Cake</Navbar.Brand>
        <Link to="/" className="text-dark ms-3 text-decoration-none">🏠 Home</Link>
        <Link to="/Contacto" className="text-dark ms-3 text-decoration-none">📫 Contactos</Link>
      </Container>
    </Navbar>
  );
};
export default Navigation;
