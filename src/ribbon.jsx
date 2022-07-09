import '../css/header.css';
import RibbonMenu from './ribbonMenu';
import RibbonPosts from './ribbonPosts';

const Header = () => {
  return (
    <div>
      <RibbonMenu/>
      <RibbonPosts/>
    </div>
  );
}

export default Header;
