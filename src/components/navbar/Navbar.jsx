import './Navbar.scss';
import search from '../../assets/search.svg';
import app from '../../assets/app.svg';
import expand from '../../assets/expand.svg';
import notifications from '../../assets/notifications.svg';
import setting from '../../assets/setting.svg'

function Navbar(props) {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="" alt=""/>
        <span>Johan van der Klift</span>
      </div>
      <div className="icons">
        <img src={search} alt=""/>
        <img src={app} alt=""/>
        <img src={expand} alt=""/>
        <div className="notification">
          <img src={notifications} alt=""/>
          <span>1</span>
        </div>
        <div className="user">
          <img src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt=""/>
          <span>Jane</span>
        </div>
        <img src={setting} alt=""/>
      </div>
    </div>
  );
}

export default Navbar;