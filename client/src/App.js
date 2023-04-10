import React from 'react';
import './App.css';

import Username from './components/Username';
import Reset from './components/Reset';
import Register from './components/Register';
import Recovery from './components/Recovery';
import Profile from './components/Profile';
import Password from './components/Password';
import PageNotFound from './components/PageNotFound';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

//root routes

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Username />} />
        <Route path='/reset' element={<Reset />} />
        <Route path='/register' element={<Register />} />
        <Route path='/recovery' element={<Recovery />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/password' element={<Password />} />
        <Route path='/pageNotFound' element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
