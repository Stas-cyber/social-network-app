import React from 'react';
import './profil.css';
import RibbonMenu from '../Menu/ribbonMenu';
import ProfileInfo from './profileInfo';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import News from '../../News/RibbonNews';
import {Friends} from '../../Friends/Friends';
import Messanges from '../../Messenger/Messanges';
import Sursribers from '../../Sursribers/Sursribers';
import Settings from '../../SettingsSite/Settings';

const Profil = (props) => {
  return (
    <BrowserRouter>
      <div className='container'>
        <div className="ribMenu"><RibbonMenu /></div>
        <Routes>
          <Route path='/profile' element={<ProfileInfo/>}/>
          <Route path='/messanges' element={<Messanges messanger={props.state.MessangePage}/>} />
          <Route path='/news' element={<News/>} />
          <Route path='/friends' element={<Friends/>} />
          <Route path='/sursribers' element={<Sursribers/>} />
          <Route path='/settings' element={<Settings/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Profil;
