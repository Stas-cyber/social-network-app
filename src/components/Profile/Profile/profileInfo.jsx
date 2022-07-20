import { RibbonPosts } from "../Posts/ribbonPosts";


const ProfileInfo = () => {
    return (
        <div>
            <div className='profil-block'>
                <h3>Петр Петрович Петров</h3>
                <p>О себе: 28 лет, космонавт, живу в скафандре</p>
            </div>
            <div className="ribPosts"><RibbonPosts /></div>
        </div>


    );
}

export default ProfileInfo;