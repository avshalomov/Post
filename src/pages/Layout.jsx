import { Outlet, Link } from "react-router-dom";

// Layout of the menu bar.
const Layout = () => {
  return (
    <>
      <nav className="navBar">
        <ul className="container">
          <li className="col-2 col-s-2">
            <Link to="/About">About</Link>
          </li>
          <li className="col-2 col-s-2">
            <Link to="/Profile">Profile</Link>
          </li>
          <li className="col-4 col-s-4">
            <Link to="/">Home</Link>
          </li>
          <li className="col-2 col-s-2">
            <Link to="/Register">Register</Link>
          </li>
          <li className="col-2 col-s-2">
            <Link to="/Login">Login</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
