import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './typography.css';
import 'react-photo-view/dist/react-photo-view.css';

function App() {
  // const currentPage = useLocation().pathname;

  return (
    <>
      <Header />
      <Container fluid>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}

export default App;
