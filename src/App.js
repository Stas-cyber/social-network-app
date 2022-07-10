import React from 'react';
import './App.css';
import Header from './Header/header';
import BackgroundImg from './Profile/Avatar/backgroundImg';
import {Avatar} from './Profile/Avatar/avatar';
import Profil from './Profile/Profile/profil';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <BackgroundImg/>
      <Profil/>
      
    </div>
  );
}

export default App;
