import coverImage from '../../assets/DSC_1982.jpg';
import NavBar from '../Nav';
import { Image } from 'react-bootstrap';

const Header: React.FC = () => {
  return (
    <header>
      <Image
        fluid
        className='cover-image'
        src={coverImage}
        alt='wooden background'
      />
      <NavBar />
    </header>
  );
};

export default Header;
