import { useState } from 'react';
import { Carousel, Image } from 'react-bootstrap';
import { PhotoView, PhotoProvider } from 'react-photo-view';
import folk_headshot1 from '../../assets/DSC_1950.jpg';
import folk_headshot2 from '../../assets/folk_headshot.jpg';
import guitar from '../../assets/guitar.jpg';
import leaf from '../../assets/DSC_1982.jpg';
import { removeHyphensAndCapitalize } from '../../utils/helpers';

const folkPhotos = [
  {
    image: folk_headshot1,
    name: 'folk_headshot1',
    description: '',
    header: true,
  },
  { image: leaf, name: 'leaf', description: '' },
  { image: folk_headshot2, name: 'folk_headshot2', description: '' },
  { image: guitar, name: 'guitar', description: '' },
];

function FolkGallery(): JSX.Element {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };
  return (
    <PhotoProvider>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {folkPhotos.map(({ image, name, header, description }) => (
          <Carousel.Item className='photo-parent'>
            <PhotoView src={image}>
              <Image
                className='photo'
                fluid
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

export default FolkGallery;
