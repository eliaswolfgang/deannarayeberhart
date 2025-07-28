import { Link, useLocation } from 'react-router-dom';

function Footer() {
  const { pathname } = useLocation();
  const isEberhartSubdomain = pathname.startsWith('/eberhart');
  const basePath = isEberhartSubdomain ? '/eberhart' : '';

  return (
    <footer
      className='d-flex justify-content-center align-items-center'
      style={{
        fontSize: '2rem',
        padding: '0.5rem 0',
        backgroundColor: 'rgba(0, 0, 0.4, 0.8)',
        position: 'sticky',
        bottom: 0,
      }}
    >
      <div className='d-flex'>
        <Link
          to={`${basePath}/media`}
          className={`hover-italic transition-all duration-200 ${
            pathname === `${basePath}/media` ? 'navActive' : ''
          }`}
          style={{
            color: pathname === `${basePath}/media` ? '#DBC9C9' : '#999',
            textDecoration: 'none',
            fontWeight: pathname === `${basePath}/media` ? 'bold' : 'normal',
          }}
        >
          Media
        </Link>
        <Link
          to={`${basePath}/upcoming`}
          className={`hover-italic transition-all duration-200 ${
            pathname === `${basePath}/upcoming` ? 'navActive' : ''
          }`}
          style={{
            color: pathname === `${basePath}/upcoming` ? '#DBC9C9' : '#999',
            textDecoration: 'none',
            fontWeight: pathname === `${basePath}/upcoming` ? 'bold' : 'normal',
          }}
        >
          Upcoming
        </Link>
        <Link
          to={`${basePath}/resume`}
          className={`hover-italic transition-all duration-200 ${
            pathname === `${basePath}/resume` ? 'navActive' : ''
          }`}
          style={{
            color: pathname === `${basePath}/resume` ? '#DBC9C9' : '#999',
            textDecoration: 'none',
            fontWeight: pathname === `${basePath}/resume` ? 'bold' : 'normal',
          }}
        >
          Résumé
        </Link>
        <Link
          to={`${basePath}/contact`}
          className={`hover-italic transition-all duration-200 ${
            pathname === `${basePath}/contact` ? 'navActive' : ''
          }`}
          style={{
            color: pathname === `${basePath}/contact` ? '#DBC9C9' : '#999',
            textDecoration: 'none',
            fontWeight: pathname === `${basePath}/contact` ? 'bold' : 'normal',
          }}
        >
          Contact
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
