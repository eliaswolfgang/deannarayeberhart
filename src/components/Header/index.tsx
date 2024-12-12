import { ReactElement } from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';

const Header: React.FC<{children: ReactElement[]}> = ({children}) => {

  return (
    <header className="flex-row space-between px-1">
      <h1>Deanna Ray Eberhart</h1>
      <img src={coverImage} alt="wooden background"></img>
      {children}
    </header>
  );
}

export default Header;
