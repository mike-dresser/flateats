import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './components/App';
import RestaurantList from './components/RestaurantList';
import RestaurantPage from './components/RestaurantPage';

import { restaurantListLoader, restaurantLoader } from './loaders.js';

const router = createBrowserRouter([
  {
    path: '/', // this is the path for our route
    element: <App />, // component we want to render for this route
    loader: restaurantListLoader,
  },
  {
    path: '/restaurants',
    element: <RestaurantList />,

    loader: restaurantListLoader,
  },
  {
    path: '/restaurants/:id',
    element: <RestaurantPage />,
    loader: restaurantLoader,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
