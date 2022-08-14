import React from 'react';
import './profil.css';
import RibbonMenu from '../Menu/ribbonMenu';
import { Routes, Route } from 'react-router-dom';
import News from '../../News/RibbonNews';
import { Friends } from '../../Friends/Friends';
import Messanges from '../../Messenger/Messanges';
import Sursribers from '../../Sursribers/Sursribers';
import Settings from '../../SettingsSite/Settings';
import Videos from '../../VideosSite/Videos';
import Music from '../../Music/Music';
import Fotos from '../../Fotos/Fotos';
import ProfileInfoContainer from './profileInfoContainer';
import MessangesContainer from '../../Messenger/MessangesContainer';

const Profil = (props) => {
  return (
      <div className='container'>
        <div className="ribMenu"><RibbonMenu /></div>
        <Routes>
          <Route path='/' element={<ProfileInfoContainer store={props.store}/>}/>
          <Route path='/messanges/*' element={<MessangesContainer store={props.store}/>}/>
          <Route path='/news' element={<News store={props.store.getState()}/>} />
          <Route path='/friends' element={<Friends store={props.store.getState()}/>} />
          <Route path='/sursribers' element={<Sursribers store={props.store.getState()}/>} />
          <Route path='/music' element={<Music/>} />
          <Route path='/fotos' element={<Fotos/>} />
          <Route path='/videos' element={<Videos/>} />
          <Route path='/settings' element={<Settings/>} />
        </Routes>
      </div>
  );
}

export default Profil;
