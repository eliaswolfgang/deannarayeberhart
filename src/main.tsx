import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Error from './components/ErrorPage/index.js';
import About from './components/About/index.js';
// import Landing from './components/Landing/index.js';
import Contact from './components/Contact/index.js';
import Resume from './components/Resume/index.js';
import Media from './components/Media/index.js';
// import UnderConstruction from './components/UnderConstruction/index.js';
import OperaMedia from './components/Media/index.js';
import Upcoming from './components/Upcoming/index.js';
import FolkPage from './components/Folk/index.js';

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
        path: '/media',
        element: <Media />,
      },
      {
        path: '/upcoming',
        element: <Upcoming />,
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
  {
    path: '/deannaray',
    element: <FolkPage />,
  },
  {
    path: '/eberhart',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: 'upcoming',
        element: <Upcoming />,
      },
      {
        path: 'media',
        element: <OperaMedia />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'resume',
        element: <Resume />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <div className='list'>
    <RouterProvider router={router} />
  </div>
);
