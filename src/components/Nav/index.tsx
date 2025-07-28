import { Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const { pathname } = useLocation();
  const isEberhartSubdomain = pathname.startsWith('/eberhart');
  const basePath = isEberhartSubdomain ? '/eberhart' : '';
  
  return (
    <Navbar expand='sm' className='justify-content-end'>
      <Navbar.Toggle aria-controls='dre-hamburger-nav' />
      <Navbar.Collapse id='dre-hamburger-nav'>
        <Nav>
          <Nav.Link className={pathname === `${basePath}/gallery` ? 'navActive' : ''}>
            <h3>
              <Link to={`${basePath}/gallery`}>Gallery</Link>
            </h3>
          </Nav.Link>
          <Nav.Link className={pathname === `${basePath}/media` ? 'navActive' : ''}>
            <h3>
              <Link to={`${basePath}/media`}>Media</Link>
            </h3>
          </Nav.Link>
          <Nav.Link className={pathname === `${basePath}/contact` ? 'navActive' : ''}>
            <h3>
              <Link to={`${basePath}/contact`}>Contact</Link>
            </h3>
          </Nav.Link>
          <Nav.Link className={pathname === `${basePath}/resume` ? 'navActive' : ''}>
            <h3>
              <Link to={`${basePath}/resume`}>Résumé</Link>
            </h3>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
