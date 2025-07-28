import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './typography.css';
import 'react-photo-view/dist/react-photo-view.css';

function App() {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  return (
    <>
     {/* {!isLandingPage && <Header />}  */}
      <Header />
      {/* {!isLandingPage ? (
        <Container fluid>
          <Outlet />
        </Container>
      ) : (
        <Outlet />
      )} */}
      <Container fluid>
        <Outlet />
      </Container>
      {/* {!isLandingPage && <Footer />} */}\
      <Footer />
    </>
  );
}

export default App;
