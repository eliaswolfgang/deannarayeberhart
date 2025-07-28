import { Row, Col, Container } from 'react-bootstrap';
import { SpinningCircles } from 'react-loading-icons';
import ReactPlayer from 'react-player/lazy';
import OperaGallery from './OperaGallery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const operaMedia = [
  {
    link: 'https://www.youtube.com/watch?v=_76MWXNfTvs&ab_channel=DeannaRayEberhart%2CMezzo-soprano',
    description: (
      <span>
        "Parto, ma tu ben mio" from Mozart's <em>La Clemenza di Tito</em> (2023)
      </span>
    ),
  },
  {
    link: 'https://www.youtube.com/watch?v=yX2jG-OvyWM&ab_channel=DeannaRayEberhart%2CMezzo-soprano',
    description: (
      <span>
        <em>Vier Ernste Gesänge, Op. 121</em> - Johannes Brahms
      </span>
    ),
  },
];

function OperaMedia() {
  return (
    <Container>
      <div className='flex justify-around'>
        <a href='https://www.facebook.com/deannaraymezzo' target='_blank' rel='noopener noreferrer'>
        <FontAwesomeIcon
          icon={faFacebook}
          style={{ fontSize: '3rem', color: '#4267B2' }}
          className='mb-3'
        />
        </a>
        <a href='https://www.instagram.com/deannaraymezzo' target='_blank' rel='noopener noreferrer'>
        <FontAwesomeIcon
          icon={faInstagram}
          style={{ fontSize: '3rem', color: '#E1306C' }}
          className='mb-3'
        />
        </a>
        <a href='https://www.youtube.com/channel/UCNUl-w67MfvUavRJSKohhaA' target='_blank' rel='noopener noreferrer'>
        <FontAwesomeIcon
          icon={faYoutube}
          style={{ fontSize: '3rem', color: '#F4320B' }}
          className='mb-3'
        />
        </a>
      </div>
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
