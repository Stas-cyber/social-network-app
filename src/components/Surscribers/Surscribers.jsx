import { Avatar } from "../Friends/Friends"
import s from '../Friends/Friends.module.css'



const Surscribers = (props) => {
    return (
        <div className={s.container}>
            {props.surscribers.map(user=> <Avatar avatar={user.img} name={user.name}/>)}
        </div>
        
    )
}

export default Surscribers;