import { Row, Col, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify, faApple } from '@fortawesome/free-brands-svg-icons';
import { SpinningCircles } from 'react-loading-icons';
import ReactPlayer from 'react-player/lazy';

const operaMedia = [
  {
    link: 'https://www.youtube.com/watch?v=yX2jG-OvyWM&ab_channel=DeannaRayEberhart%2CMezzo-soprano',
    description: (
      <span>
        <em>Vier Ernste Gesänge, Op. 121</em> - Johannes Brahms
      </span>
    ),
  },
  {
    link: 'https://www.youtube.com/watch?v=r4X3nrr57RQ&t=70s&ab_channel=DeannaRayEberhart%2CMezzo-soprano',
    description: (
      <span>
        "Se Romeo t'uccise un figlio" from Bellini's{' '}
        <em>Il Capuleti e i Montecchi</em> - masterclass with Joyce DiDonato
      </span>
    ),
  },
  {
    link: 'https://www.youtube.com/watch?v=_76MWXNfTvs&ab_channel=DeannaRayEberhart%2CMezzo-soprano',
    description: (
      <span>
        "Parto, ma tu ben mio" from Mozart's <em>La Clemenza di Tito</em>{' '}
        (2023)
      </span>
    ),
  },
  {
    link: 'https://www.youtube.com/watch?v=0oZdyZqgbdI&t=6s&ab_channel=DeannaRayEberhart%2CMezzo-soprano',
    description: (
      <span>
        "Sein wir wieder gut" from Strauss' <em>Ariadne auf Naxos</em>
      </span>
    ),
  },
];

const folkMedia = [
  {
    link: 'https://www.youtube.com/watch?v=FWRjwst_-os&ab_channel=DeannaRay-Topic',
  },
  {
    link: 'https://www.youtube.com/watch?v=_akP9b4IVR8&ab_channel=DeannaRay-Topic',
  },
  {
    link: 'https://www.youtube.com/watch?v=_-vclpGhGuw&ab_channel=CarolConduits',
  },
  {
    link: 'https://www.youtube.com/watch?v=s06RvHSSVCI&ab_channel=DeannaRayEberhart%2CMezzo-soprano',
  },
];

function Media() {
  return (
    <Container>
      <Row className='py-5'>
        <Col xs={12} md={6}>
          <h3>Operatic Performances</h3>
          <div className='d-flex flex-column justify-content-center'>
            {operaMedia.map(({ link, description }, i) => (
              <>
                <ReactPlayer
                  key={`operaMedia-${i}`}
                  url={link}
                  width='100%'
                  height='25rem'
                  controls
                  fallback={<SpinningCircles />}
                />
                <p>{description}</p>
              </>
            ))}
          </div>
        </Col>
        <Col xs={12} md={6}>
          <h3>Other Media</h3>
          <div className='d-flex justify-content-center'>
            <div style={{ fontSize: '5rem' }} className='m-3'>
              <a href='https://open.spotify.com/artist/1PBjY5FldJcRtTyBLYyj5L'>
                <FontAwesomeIcon icon={faSpotify} />
              </a>
            </div>
            <div style={{ fontSize: '5rem' }} className='m-3'>
              <a href='https://music.apple.com/us/artist/deanna-ray/1042687375'>
                <FontAwesomeIcon icon={faApple} />
              </a>
            </div>
          </div>
          <div className='d-flex flex-column justify-content-center'>
            {folkMedia.map(({ link }, i) => (
              <>
                <ReactPlayer
                  key={`folkMedia-${i}`}
                  url={link}
                  width='100%'
                  height='25rem'
                  controls
                  style={{ margin: '0.75rem 0rem' }}
                  fallback={<SpinningCircles />}
                />
              </>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Media;
