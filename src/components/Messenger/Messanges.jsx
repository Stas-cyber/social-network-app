import { keyboard } from '@testing-library/user-event/dist/keyboard';
import React from 'react';
import { Link } from 'react-router-dom';
import { AvatarMini } from '../Profile/Avatar/avatar';
import s from './Messanges.module.css';

const img = [ 
  'https://rus.team/images/article/4883/2019-07-09-330_15688-2_859650.webp',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpJIW9gwPxKACtL0y3fDqpdfFYeFOjubquyA&usqp=CAU',
  'https://st2.depositphotos.com/1011081/8226/i/600/depositphotos_82267700-stock-photo-astronaut-in-outer-space.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Yuri_Gagarin_with_awards.jpg/274px-Yuri_Gagarin_with_awards.jpg',
  'https://testpilot.ru/review/isplii/parachutist/img/danilovich.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDAJPNMPPdDJU3M_7jQioFOcK59-7yuKaFnEYla6FfTS6rAcBkOMJ39S8mVplxMleApc8&usqp=CAU',
  'https://www.peoples.ru/military/cosmos/kovalenok/CxEszNcT3wBuP.jpeg',
  'https://cdnn11.img.sputnik.by/img/102740/32/1027403224_469:0:2516:2047_1920x0_80_0_0_3fe82994d9234f9dc9f29d7ae8c39d3d.jpg',
  'https://knowhistory.ru/sites/default/files/styles/event/public/images/1284237450_tereshkova.jpg?itok=7faDVbIP',
  'https://wallpaperengine.info/wp-content/uploads/2018/09/previewfile_1493910771.jpg'
]

const users = [
  {id:1, img: img[0], name:"Петр Климук"},
  {id:2, img: img[1], name:"Веселый космонавт"},
  {id:3, img: img[2], name:"Веселый космонавт"},
  {id:4, img: img[3], name:"Юрий Гагарин"},
  {id:5, img: img[4], name:"Валентин Данилович"},
  {id:6, img: img[5], name:"Веселый космонавт"},
  {id:7, img: img[6], name:"Владимир Ковалёнок"},
  {id:8, img: img[7], name:"Олег Новицкий"},
  {id:9, img: img[8], name:"Валентина Терешкова"},
]
const usersMessanges = [
  {class: s.item1, img: img[3], mess:"Привет"},
  {class: s.item2, mess:"Привет"},
  {class: s.item1, img: img[3], mess:"Как дела?"},
  {class: s.item2, mess:"Плохо"},
  {class: s.item1, img: img[3], mess:"Что случилось?"},
]

const User = (props) => {
  let path = '/messanges/'+ props.id;
  return <div className={s.user}><AvatarMini avatar={props.img}/><Link to={path}>{props.name}</Link></div>
  
}

const Avatar = (props) => {
  return (
    <div className={s.avatarBlock}>
      <img src={props.avatar} alt=""/>
    </div>
);
}

const Item = (props) => {
  return <div className={s.blockMess}><Avatar avatar={props.img}/><p className={props.class}>{props.mess}</p></div>
} 

const Messanges = () => {
  return (
        <div className={s.container}>
          <div className= {s.users}>
            {users.map(user => <User id={user.id} img={user.img} name={user.name}/>)}
          </div>
          <div className={s.dialog}>
            <div className={s.chat}>
              <div className={s.messang}>
                {usersMessanges.map(mess=> <Item img={mess.img} class={mess.class} mess={mess.mess}/>)}
              </div>
            </div>
            <div className={s.input}>
              <input className={s.messangeIn} type={keyboard} placeholder='Введите сообщение'/>
              <button className= {s.messangeBtn}>&#10148;</button>
            </div>
          </div>
        </div>
  );
}

export default Messanges;