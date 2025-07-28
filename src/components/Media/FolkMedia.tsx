import { Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify, faApple } from '@fortawesome/free-brands-svg-icons';
import { SpinningCircles } from 'react-loading-icons';
import ReactPlayer from 'react-player';

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

const FolkMedia = () => {
  return (
    <Col xs={12}>
      <div className='d-flex justify-content-center'>
        <div style={{ fontSize: '5rem' }} className='m-3'>
          <a
            href='https://open.spotify.com/artist/1PBjY5FldJcRtTyBLYyj5L'
            target='_blank'
          >
            <FontAwesomeIcon icon={faSpotify} style={{ color: 'limegreen' }} />
          </a>
        </div>
        <div style={{ fontSize: '5rem' }} className='m-3'>
          <a
            href='https://music.apple.com/us/artist/deanna-ray/1042687375'
            target='_blank'
          >
            <FontAwesomeIcon icon={faApple} />
          </a>
        </div>
      </div>
      <div className='d-flex flex-column justify-content-center'>
        {folkMedia.map(({ link }, i) => (
            <ReactPlayer
              key={`folkMedia-${i}`}
              url={link}
              width='100%'
              height='25rem'
              controls
              style={{ margin: '0.75rem 0rem' }}
              fallback={<SpinningCircles />}
            />
        ))}
      </div>
    </Col>
  );
};

export default FolkMedia;
