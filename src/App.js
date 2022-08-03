import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Profil from './components/Profile/Profile/profil';

const App = (props) => {
  return (
    <div className="App">
      <Header/>
      <Profil state={props.state} addPost={props.addPost} updateNewPost={props.updateNewPost}/>
    </div>
  );
}

export default App;
