import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Profil from './components/Profile/Profile/profil';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Profil/>
    </div>
  );
}

export default App;
