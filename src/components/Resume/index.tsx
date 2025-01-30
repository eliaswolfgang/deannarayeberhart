import { Row, Col, Container } from 'react-bootstrap';
import Resume_PDF from '../../assets/Resume_2025.pdf';
import CV_PDF from '../../assets/CV_2025.pdf';

function Resume() {
  return (
      <Row className='my-5 mx-5'>
        <Col xs={12} md={6}>
          <div className='d-flex flex-column justify-content-center mt-3'>
            <h3>CV</h3>
            <object style={{ height: '80vh' }} data={CV_PDF}></object>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className='d-flex flex-column justify-content-center mt-3'>
            <h3>Résumé</h3>
            <object style={{ height: '80vh' }} data={Resume_PDF}></object>
          </div>
        </Col>
      </Row>
  );
}

export default Resume;
