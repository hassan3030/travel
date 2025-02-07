import { Link } from "react-router-dom";

const Navbar = ({toggle, setToggle}) => {
    return ( 
      <nav style={{ clipPath: toggle && "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }} className="navbar">
        {/* 
        
        <nav style={{clipPath: toggle && "polygon(0 0, 100% 0, 100% 100%, 0 100%)"}} className="navbar">
        note: clipPath is a css property that allows you to clip an element to a 
        basic shape (circle, ellipse, polygon, or inset), or to an SVG source.
        
         */}
    <ul className="navbar-links">
      <Link to="/" onClick={() => setToggle(false)} className="navbar-link home-link" >
        <i className="bi bi-house-fill"> Home</i>
        
      </Link>
      <Link to="/about" onClick={() => setToggle(false)}  className="navbar-link">
        <i className="bi bi-bank2"> About</i>
        
      </Link>
      <Link to="/login" onClick={() => setToggle(false)}  className="navbar-link">
        <i className="bi bi-arrow-right-square-fill"> Login</i>
        
      </Link>
      <Link to="/register" onClick={() => setToggle(false)}  className="navbar-link">
        <i className="bi bi-person-plus-fill"> Register</i>
        
      </Link>
    </ul>
  </nav> );
}
 
export default Navbar;