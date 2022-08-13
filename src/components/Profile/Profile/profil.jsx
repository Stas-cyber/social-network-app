import React from 'react';
import './profil.css';
import RibbonMenu from '../Menu/ribbonMenu';
import ProfileInfo from './profileInfo';
import { Routes, Route } from 'react-router-dom';
import News from '../../News/RibbonNews';
import { Friends } from '../../Friends/Friends';
import Messanges from '../../Messenger/Messanges';
import Sursribers from '../../Sursribers/Sursribers';
import Settings from '../../SettingsSite/Settings';
import Videos from '../../VideosSite/Videos';
import Music from '../../Music/Music';
import Fotos from '../../Fotos/Fotos';

const Profil = (props) => {
  return (
    
      <div className='container'>
        <div className="ribMenu"><RibbonMenu /></div>
        <Routes>
          
          <Route path='/' element={<ProfileInfo posts={props.state.PostPage }   
                                                      newPost={props.state.PostPage.newPost}
                                                      dispatch={props.dispatch}/>}/>
          <Route path='/messanges/*' element={<Messanges messanger={props.state.MessangePage} dispatch={props.dispatch} />} 
                                                        />
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
