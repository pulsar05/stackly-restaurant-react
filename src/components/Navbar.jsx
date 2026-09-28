import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);
  const { dark, toggleTheme } = useTheme();

  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        <span>SPICE</span> & SAVOR
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/reservation">Reservation</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/admin">Admin</Link>
      </div>

      <div className="nav-actions">

        <button onClick={toggleTheme} className="theme-btn">
          {dark ? "☀️" : "🌙"}
        </button>

        <Link to="/menu" className="cart">
          🛒
          <span>{cartItems.length}</span>
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;