import React from 'react';
import { Link } from 'react-router-dom';
import { addMessActionCreate, onMessActionCreate } from '../../redux/dialogsReducer';
import { AvatarMini } from '../Profile/Avatar/avatar';
import s from './Messanges.module.css';



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
  return <div className={s.blockMess}><Avatar avatar={props.img}/><p className={s.item}>{props.mess}</p></div>
} 

const Messanges = (props) => {
  let newMessIn = React.createRef(); 
    
  let onMessChange = () => {
      let text = newMessIn.current.value;
       props.dispatch(onMessActionCreate(text));
   } 

  let addMess = () => {
      props.dispatch(addMessActionCreate());
      newMessIn.current.value = '';
      props.messanger.newMess = '';
  }
  return (
        <div className={s.container}>
          <div className= {s.users}>
            {props.messanger.users.map(user => <User id={user.id} img={user.img} name={user.name}/>)}
          </div>
          <div className={s.dialog}>
            <div className={s.chat}>
              <div className={s.messang}>
                {props.messanger.usersMessanges.map(mess=> <Item img={mess.img} mess={mess.mess}/>)}
              </div>
            </div>
            <div className={s.input}>
              <textarea onChange={onMessChange} ref={newMessIn} className={s.messangeIn} placeholder='Введите сообщение'/>
              <button onClick={addMess} className= {s.messangeBtn}>&#10148;</button>
            </div>
          </div>
        </div>
  );
}


export default Messanges;