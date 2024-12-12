import { Container, Row, Col, Spinner } from 'react-bootstrap'; // Import necessary components



function UnderConstruction() {

  return (

    <Container className="d-flex flex-column align-items-center justify-content-center" style={{ height: '100vh' }}>

      <h1 className="text-center">Site Under Construction</h1>

      <Spinner animation="border" role="status" size='sm' className="mt-4" color='black' />

      <p className="text-center">This website is currently being built. Please check back soon!</p>

    </Container>

  );

}

export default UnderConstruction;