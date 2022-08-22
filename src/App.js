import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/header';
import Profil from './components/Profile/Profile/profil';

const App = () => {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Profil/>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
