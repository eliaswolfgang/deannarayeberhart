import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation } from 'react-router-dom';
import { useRef } from 'react';

function Footer() {
  const { pathname } = useLocation();
  const isEberhartSubdomain = pathname.startsWith('/eberhart');
  const basePath = isEberhartSubdomain ? '/eberhart' : '';

  const listInnerRef = useRef<HTMLDivElement>(null);

  const onHoverOver = () => {
    if (listInnerRef.current) {
      listInnerRef.current.style.display = 'flex';
    }
  };

  const onHoverOut = () => {
    if (listInnerRef.current) {
      listInnerRef.current.style.display = 'none';
    }
  };

  return (
    <footer
      className='tw:bg-gray-900 tw:text-whiter tw:flex tw:justify-center'
      onMouseEnter={onHoverOver}
      onMouseLeave={onHoverOut}
      style={{
        fontSize: '2rem',
        padding: '0.5rem 0',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0.4, 0.8)',
        position: 'sticky',
        bottom: 0,
      }}
    >
      <div>
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
      <div className='links-and-copyright' ref={listInnerRef}>
        <div>
          <a
            href='https://www.instagram.com/deannaraymezzo'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon
              icon={faInstagram}
              size='sm'
              style={{ fontSize: '3rem', color: '#E1306C' }}
              className='mb-3'
            />
          </a>
          <a
            href='https://www.youtube.com/channel/UCNUl-w67MfvUavRJSKohhaA'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon
              icon={faYoutube}
              style={{ fontSize: '3rem', color: '#F4320B' }}
              size='sm'
              className='mb-3'
            />
          </a>
        </div>
        <p style={{ color: '#999' }}>
          © 2024 Deanna Ray Eberhart
        </p>
      </div>
    </footer>
  );
}

export default Footer;
