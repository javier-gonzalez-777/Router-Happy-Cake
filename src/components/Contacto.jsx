import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Contacto = () => {
  return (
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Correo</Form.Label>
      <Form.Control type="email" placeholder="name@example.com" />
      <Form.Text className="text-muted">
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Descripcion</Form.Label>
      <Form.Control type="password" placeholder="Cuentanos..." />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
     
    </Form.Group>
    <Button variant="warning" type="submit">
      Enviar
    </Button>
  </Form>
  );
};
export default Contacto;
