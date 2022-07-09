import './profil.css';
import RibbonMenu from '../Menu/ribbonMenu';
import RibbonPosts from '../Posts/ribbonPosts';

const Profil = () => {
  return (
    
    <div className='container'>
      <div className="ribMenu"><RibbonMenu /></div>
      <div className="ribPosts"><RibbonPosts/></div>
      <div className='profil-block'>
        <h3>Петр Петрович Петров</h3>
        <p>О себе: 28 лет, космонавт, живу в скафандре</p>
      </div>
    </div>

  );
}

export default Profil;
