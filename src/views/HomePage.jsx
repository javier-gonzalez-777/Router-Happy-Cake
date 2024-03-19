import { Container } from "react-bootstrap";

const HomePage = () => {
  return (
    <Container className="text-center">
      <h1 className="pt-5">
        Bienvenido a <span className="fw-bold">Happy Cake</span> <br/>
        <img src="./src/assets/Torta2.jpg" width="100px" height="100px" ></img>

      </h1>
      <h6> El Lugar de los pasteles felices </h6>
    </Container>
  );
};
export default HomePage;
