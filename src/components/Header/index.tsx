import coverImage from '../../assets/cover/cover-image.jpg';

const Header: React.FC = () => {

  return (
    <header className="flex-row space-between px-1">
      <h1>Deanna Ray Eberhart</h1>
      <img src={coverImage} alt="wooden background"></img>
    </header>
  );
}

export default Header;
