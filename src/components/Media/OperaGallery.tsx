import valhalla from '../../assets/valhalla.jpg';
import r_and_j from '../../assets/RJ1_0828.jpg';
import valkyries from '../../assets/valkyries.jpg';
import traviata from '../../assets/traviata.jpg';

const operaPhotos = [
  {
    image: valkyries,
    role: 'Rossweisse',
    name: 'valkyries',
    description: 'Die Walküre',
    credits: 'Santa Fe Opera (photo by Curtis Brown)',
  },
  {
    image: valhalla,
    role: 'Flosshilde',
    name: 'valhalla',
    description: 'Journey to Valhalla',
    credits: 'Lyric Opera of Kansas City (photo by Andy Newbegin)',
  },
  {
    image: r_and_j,
    role: 'Gertrude',
    name: 'romeo_et_juliette',
    description: 'Romeo et Juliette',
    credits: 'Lyric Opera of Kansas City (photo by Don Ipock)',
  },
  {
    image: traviata,
    role: 'Chorus',
    name: 'traviata',
    description: 'La Traviata',
    credits: 'Lyric Opera of Kansas City (photo by Don Ipock)',
  },
];

function OperaGallery(): JSX.Element {
  return (
    <div className='my-5'>
      <div className='flex flex-wrap justify-content-center'>
        {operaPhotos.map((photo, index) => (
          <div style={{ width: '50vw' }} key={index}>
            <img
              src={photo.image}
              alt={photo.name}
              className='img-fluid rounded'
              style={{ maxWidth: '100%', height: '', objectFit: 'contain' }}
            />

            <p className='mt-2 text-center'>
              {photo.role}, <i>{photo.description}</i>
            </p>

            <p className='text-center text-muted'>{photo.credits}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OperaGallery;
