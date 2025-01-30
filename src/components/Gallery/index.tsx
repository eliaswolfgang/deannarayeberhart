import { Col, Container, Row } from 'react-bootstrap';
import FolkGallery from './FolkGallery';
import OperaGallery from './OperaGallery';

function Gallery() {
  return (
    <Container>
        <Row className='py-5'>
          <Col xs={12} md={6}>
            <OperaGallery />
          </Col>
          <Col xs={12} md={6}>
            <FolkGallery />
          </Col>
        </Row>
    </Container>
  );
}

export default Gallery;
