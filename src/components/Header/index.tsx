import { Link } from 'react-router-dom';
// import Folk_BG from '../../assets/DSC_1982.jpg';
// import Opera_BG from '../../assets/opera_headshot2.jpg';

const Header: React.FC = () => {
  return (
    <header
      className='relative flex justify-center items-center flex-column'
      style={{ padding: '1rem 0' }}
    >
      <div className='flex gap-2'>
        <div>
          <h1
            className='font-bold folk-link text-gray-800 inline-block'
            style={{
              // backgroundImage: `url(${Folk_BG})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'black',
              backgroundClip: 'text',
              fontSize: '1.75rem',
              margin: 0,
              padding: 0,
            }}
          >
            <Link
              to='/'
              className='text-blue-400 hover:text-blue-300 hover:italic transition-all duration-200 font-serif'
              style={{ padding: 0, margin: 0 }}
            >
              Deanna Ray Eberhart
            </Link>
          </h1>
        </div>
      </div>
      <p
        className='flex gap-3 text-gray-600 text-md mt-2'
        style={{ fontFamily: 'Calisto MT, serif', fontStyle: 'italic' }}
      >
        mezzo-soprano
      </p>
    </header>
  );
};

export default Header;
