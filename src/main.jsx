import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // Correct import
import './index.css';
import App from './App.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Blogs from './pages/Blogs.jsx';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import SingleBlog from './pages/SingleBlog.jsx';

// Define the router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/blogs",
        element:<Blogs/>
      },
      {
        path:"/Contact",
        element:<Contact/>
      },
      {
        path:"/About",
        element:<About/>
      },
      {
        path:"/Services",
        element:<Services/>
      },
      {
       path:"/blogs/:id",
       element: <SingleBlog/>,
       loader:({params}) => fetch(`http://localhost:5000/blogs/${params.id}`)
      }
    ]
  },
]);

// Get the root element
const rootElement = document.getElementById('root');

// Create the root and render
createRoot(rootElement).render( // Use `createRoot` correctly
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
