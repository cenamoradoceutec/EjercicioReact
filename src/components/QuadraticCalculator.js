import React, { useState } from 'react';
import { Alert, Form, Button, Container, Row, Col } from 'react-bootstrap';

function QuadraticCalculator() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [roots, setRoots] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validaciones
    if (a === '' || b === '' || c === '') {
      setError('Por favor, llene todos los campos.');
      setRoots(null);
      return;
    }

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      setError('Los valores deben ser números.');
      setRoots(null);
      return;
    }

    setError('');
    const aNum = parseFloat(a);
    const bNum = parseFloat(b);
    const cNum = parseFloat(c);

    // Cálculo de la fórmula cuadrática
    const discriminant = bNum * bNum - 4 * aNum * cNum;

    if (discriminant > 0) {
      const root1 = (-bNum + Math.sqrt(discriminant)) / (2 * aNum);
      const root2 = (-bNum - Math.sqrt(discriminant)) / (2 * aNum);
      setRoots(`Raíces reales: x1 = ${root1.toFixed(2)}, x2 = ${root2.toFixed(2)}`);
    } else if (discriminant === 0) {
      const root = -bNum / (2 * aNum);
      setRoots(`Raíz única: x = ${root.toFixed(2)}`);
    } else {
      setRoots('No hay raíces reales.');
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md="6">
          <h3>Calculadora de Fórmula Cuadrática</h3>
          {error && <Alert variant="danger">{error}</Alert>}
          {roots && <Alert variant="success">{roots}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Coeficiente a</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el valor de a"
                value={a}
                onChange={(e) => setA(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Coeficiente b</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el valor de b"
                value={b}
                onChange={(e) => setB(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Coeficiente c</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el valor de c"
                value={c}
                onChange={(e) => setC(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Calcular
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default QuadraticCalculator;
