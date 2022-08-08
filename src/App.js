import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Profil from './components/Profile/Profile/profil';

const App = (props) => {
  return (
    <div className="App">
      <Header/>
      <Profil state={props.state} dispatch={props.dispatch}/>
    </div>
  );
}

export default App;
