import s from './Friends.module.css';
  

  const Avatar = (props) => {
    return (
      <div className={s.avatarBlock}>
        <img src={props.avatar} alt=""/>
        <div className={s.name}>
        <p>{props.name}</p>
        </div>
      </div>)}

const Friends = (props) => {
 return (
    <div className={s.container}>
            {props.FriendsPage.users.map(user => <Avatar avatar={user.img} name={user.name}/>)}
    </div>
 )
}

export  {Friends, Avatar};