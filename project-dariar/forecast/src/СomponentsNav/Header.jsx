import "./header.css"
import navlogo from './7forest.png'
import navwhoweare from './Who we are.png'
import navcontscts from './Contacts.png'
import navmenu from './Menu.png'
import navuser from './usernav.png'

function Header() {
  return (
    <header className="header">
      <div className="header-container">
      
       
         <img src={navlogo} alt="Logo" className="header-logo" />

     
        <nav className="header-nav">
          <img src={navwhoweare} alt="" className="header-whoweare" />
          <img src={navcontscts} alt="" className="header-contacts" />
          <img src={navmenu} alt="" className="header-menu" />
        </nav>

   
        <div className="header-right">
          <button className="header-btn">Sign Up</button>
          <img src={navuser} alt="" className="header-user" />
        </div>
      </div>
    </header>
  );
}
export default Header