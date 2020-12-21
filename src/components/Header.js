import logo from '../img/logo.png';


function Header() {
  return (
    <div className="Header">
      <div className="banner-box">
        <div className="logo"><img src={logo} alt="" /></div>
      </div>
    </div>

  );
}

export default Header;
