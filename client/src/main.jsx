import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './components/App';
import Home from './components/Home.jsx';
import RestaurantList from './components/RestaurantList';
import RestaurantPage from './components/RestaurantPage';
import Signup from './components/Signup/Signup.jsx';

import { restaurantListLoader } from './loaders.js';

const router = createBrowserRouter([
  {
    path: '/', // this is the path for our route
    element: <App />, // component we want to render for this route
    loader: restaurantListLoader,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/restaurants',
        element: <RestaurantList />,
      },
      {
        path: '/restaurants/:id',
        element: <RestaurantPage />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
