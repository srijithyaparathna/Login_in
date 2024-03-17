import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';
import Password from './components/Password';
import Profile from './components/Profile';
import Recovery from './components/Recovery';

import Register from './components/Register';
import Reset from './components/Reset';
import UserName from './components/UserName';






const routes = [
  {
    path: '/',
    element: <UserName></UserName>
  },
  {
    path: '/register',
    element: <Register></Register>
  },
  {
    path: '/profile',
    element: <Profile></Profile>
  },
  {
    path : '/recovery',
    element : <Recovery></Recovery>

  },

{
    path : '/password',
    element : <Password></Password>
},
{
    path : '/reset',
    element : <Reset></Reset>
  },
  {
    path: '*',
    element: <PageNotFound></PageNotFound>
}









];

export default function LoginApp() {
  return (
    <main>
      {/* sadad */}
      <Router>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={route.element}
            />
          ))}
        </Routes>
      </Router>
    </main>
  );
}
