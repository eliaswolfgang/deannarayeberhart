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
    header: true,
  },
  { image: traviata, name: 'traviata', description: '' },
  { image: valhalla, name: 'valhalla', description: '' },
  { image: valhalla_close, name: 'valhalla_close', description: '' },
];

function OperaGallery(): JSX.Element {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };
  return (
    <PhotoProvider>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {operaPhotos.map(({ image, name, header, description }) => (
          <Carousel.Item className='photo-parent'>
            <PhotoView src={image}>
              <Image
                className='photo'
                src={image}
                alt={removeHyphensAndCapitalize(name)}
              />
            </PhotoView>
            {!header && (
              <Carousel.Caption>
                <p>{description}</p>
              </Carousel.Caption>
            )}
          </Carousel.Item>
        ))}
      </Carousel>
    </PhotoProvider>
  );
}

export default OperaGallery;
