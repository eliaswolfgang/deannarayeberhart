import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './typography.css';
import 'react-photo-view/dist/react-photo-view.css';

function App() {
  useEffect(() => {
    // Add a fake history event so that the back button does nothing if pressed once
    window.history.pushState('fake-route', document.title, window.location.href);

    addEventListener('popstate', () => console.log('popstate'));

    // Here is the cleanup when this component unmounts
    return () => {
      removeEventListener('popstate', () => console.log('popstate'));
      // If we left without using the back button, aka by using a button on the page, we need to clear out that fake history event
      if (window.history.state === 'fake-route') {
        window.history.back();
      }
    };
  }, []);

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
