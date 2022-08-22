import React from 'react';
import './profil.css';
import RibbonMenu from '../Menu/ribbonMenu';
import { Routes, Route } from 'react-router-dom';
import Settings from '../../SettingsSite/Settings';
import Videos from '../../VideosSite/Videos';
import Music from '../../Music/Music';
import Fotos from '../../Fotos/Fotos';
import ProfileInfoContainer from './profileInfoContainer';
import MessangesContainer from '../../Messenger/MessangesContainer';
import ContainerRibbonNews from '../../News/ContainerRibbonNews';
import ContainerFriends from '../../Friends/ContainerFriends';
import ContainerSurcribers from '../../Sursribers/ContainerSurscribers';

const Profil = (props) => {
  return (
      <div className='container'>
        <div className="ribMenu"><RibbonMenu /></div>
        <Routes>
          <Route path='/' element={<ProfileInfoContainer/>}/>
          <Route path='/messanges/*' element={<MessangesContainer/>}/>
          <Route path='/news' element={<ContainerRibbonNews/>} />
          <Route path='/friends' element={<ContainerFriends/>} />
          <Route path='/sursribers' element={<ContainerSurcribers/>} /> 
          <Route path='/music' element={<Music/>} />
          <Route path='/fotos' element={<Fotos/>} />
          <Route path='/videos' element={<Videos/>} />
          <Route path='/settings' element={<Settings/>} />
        </Routes>
      </div>
  );
}

export default Profil;
