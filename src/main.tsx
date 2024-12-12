import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Error from './components/ErrorPage/index.js';
import About from './components/About/index.js';
import Portfolio from './components/Portfolio/index.js';
import Contact from './components/Contact/index.js';
import Resume from './components/Resume/index.js';
import './index.css';

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
        path: 'portfolio',
        element: <Portfolio />,
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
  <StrictMode>
  <FluentProvider theme={webLightTheme}>
  <RouterProvider router={router} />
  </FluentProvider>
 
  </StrictMode>
);



