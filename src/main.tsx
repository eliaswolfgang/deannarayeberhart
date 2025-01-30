import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Error from './components/ErrorPage/index.js';
import About from './components/About/index.js';
import Gallery from './components/Gallery/index.js';
import Contact from './components/Contact/index.js';
import Resume from './components/Resume/index.js';
import Media from './components/Media/index.js';
// import UnderConstruction from './components/UnderConstruction/index.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: '/gallery',
        element: <Gallery />,
      },
      {
        path: '/media',
        element: <Media />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/resume',
        element: <Resume />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
