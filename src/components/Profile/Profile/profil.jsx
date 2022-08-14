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
          <Route path='/' element={<ProfileInfoContainer store={props.store} state={props.state}/>}/>
          <Route path='/messanges/*' element={<MessangesContainer store={props.store} state={props.state}/>}/>
          <Route path='/news' element={<News news={props.state.NewsPage}/>} />
          <Route path='/friends' element={<Friends friends={props.state.FriendsPage}/>} />
          <Route path='/sursribers' element={<Sursribers surscribers={props.state.SurscribersPage}/>} />
          <Route path='/music' element={<Music/>} />
          <Route path='/fotos' element={<Fotos/>} />
          <Route path='/videos' element={<Videos/>} />
          <Route path='/settings' element={<Settings/>} />
        </Routes>
      </div>
  );
}

export default Profil;
