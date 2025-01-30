import { Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const { pathname } = useLocation();
  return (
    <Navbar expand='sm' className='justify-content-end'>
      <Navbar.Brand className={pathname === '/' ? 'navActive' : ''}>
        <h1>
          <Link to='/'>Deanna Ray Eberhart</Link>
        </h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='dre-hamburger-nav' />
      <Navbar.Collapse id='dre-hamburger-nav'>
        <Nav>
          <Nav.Link className={pathname === '/portfolio' ? 'navActive' : ''}>
            <h3>
              <Link to='/gallery'>Gallery</Link>
            </h3>
          </Nav.Link>
          <Nav.Link className={pathname === '/portfolio' ? 'navActive' : ''}>
            <h3>
              <Link to='/media'>Media</Link>
            </h3>
          </Nav.Link>
          <Nav.Link className={pathname === '/contact' ? 'navActive' : ''}>
            <h3>
              <Link to='/contact'>Contact</Link>
            </h3>
          </Nav.Link>
          <Nav.Link className={pathname === '/resume' ? 'navActive' : ''}>
            <h3>
              <Link to='/resume'>Résumé</Link>
            </h3>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
