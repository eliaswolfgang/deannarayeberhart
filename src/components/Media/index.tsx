import { Row, Col, Container } from 'react-bootstrap';
import { SpinningCircles } from 'react-loading-icons';
import ReactPlayer from 'react-player/lazy';
import OperaGallery from './OperaGallery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

const operaMedia = [
  {
    link: 'https://www.youtube.com/watch?v=ygI_tGrTl80&feature=youtu.be&themeRefresh=1',
    description: (
      <span>
       "When I'm laid in earth" from <em>Dido and Aeneas</em> (Purcell)  (2025)
      </span>
    ),
  },
  {
    link: 'https://www.youtube.com/watch?v=yX2jG-OvyWM&ab_channel=DeannaRayEberhart%2CMezzo-soprano',
    description: (
      <span>
        <em>Vier Ernste Gesänge, Op. 121</em> (Johannes Brahms) (2024)
      </span>
    ),
  },
];

function OperaMedia() {
  return (
    <Container>
      
      <Row className='py-5'>
          {operaMedia.map(({ link, description }, i) => (
            <Col xs={12} md={6} className='my-2' key={i}>
              <ReactPlayer
                key={`operaMedia-${i}`}
                url={link}
                width='100%'
                height='30rem'
                controls
                fallback={<SpinningCircles />}
              />
              <p>{description}</p>
            </Col>
          ))}
      </Row>
      <Row>
        <Col xs={12}>
          <OperaGallery />
        </Col>
      </Row>
    </Container>
  );
}

export default OperaMedia;
