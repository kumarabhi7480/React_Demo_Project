
import Navbar from "./Navbar";
const Header = ()=>{
    return (
   <header className="header container_fluid">
  <nav className="navbar container">
    <div className="nav_list">
      <a className="logo" href="#">
        <img src="./assets/images/white-logo.svg" alt =""/>
      </a>
  <Navbar/>
    </div>
    <a className="toggle_btn">
      <i className="fa-solid fa-grip-lines fa-2x" />
    </a>
  </nav>
</header>

    );
}

export default Header;