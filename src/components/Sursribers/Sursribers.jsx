import { Avatar } from "../Friends/Friends"
import s from '../Friends/Friends.module.css'



const Sursribers = (props) => {
    return (
        <div className={s.container}>
            {props.store.SurscribersPage.users.map(user=> <Avatar avatar={user.img} name={user.name}/>)}
        </div>
        
    )
}

export default Sursribers;