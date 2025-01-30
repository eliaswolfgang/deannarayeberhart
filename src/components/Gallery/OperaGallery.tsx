import { useState } from 'react';
import { Carousel, Image } from 'react-bootstrap';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { removeHyphensAndCapitalize } from '../../utils/helpers';
import opera_headshot1 from '../../assets/opera_headshot1.jpg';
import valhalla from '../../assets/valhalla.jpg';
import valhalla_close from '../../assets/valhalla_close.jpg';
import traviata from '../../assets/traviata.jpg';

const operaPhotos = [
  {
    image: opera_headshot1,
    name: 'opera_headshot1',
    description: '',
  },
  {
    image: traviata,
    name: 'traviata',
    description: 'La Traviata, Lyric Opera of Kansas City',
    credits: 'Image courtesy of Don Ipock at the Lyric Opera of Kansas City',
  },
  {
    image: valhalla,
    name: 'valhalla',
    description: 'Journey to Valhalla, Lyric Opera of Kansas City',
    credits:
      'Image courtesy of Andy Newbegin at the Lyric Opera of Kansas City',
  },
  {
    image: valhalla_close,
    name: 'valhalla_close',
    description: 'Journey to Valhalla, Lyric Opera of Kansas City',
    credits:
      'Image courtesy of Andy Newbegin at the Lyric Opera of Kansas City',
  },
];

function OperaGallery(): JSX.Element {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };
  return (
    <PhotoProvider>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {operaPhotos.map(({ image, name, credits, description }) => (
          <Carousel.Item className='photo-parent'>
            <PhotoView src={image}>
              <Image
                className='photo'
                src={image}
                alt={removeHyphensAndCapitalize(name)}
              />
            </PhotoView>
            <Carousel.Caption
              style={
                credits
                  ? {
                      backgroundColor: 'white',
                      opacity: 0.5,
                      margin: 0,
                      padding: '0.2rem',
                    }
                  : { margin: 0, padding: '0.2rem' }
              }
            >
              <p style={{ fontWeight: 'bolder' }}>{description}</p>
              {credits && <p style={{ fontStyle: 'italic' }}>{credits}</p>}
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </PhotoProvider>
  );
}

export default OperaGallery;
