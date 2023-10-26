import { Outlet, Link } from "react-router-dom";

const Layout2 = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/al">Home2</Link>
          </li>
          <li>
            <Link to="/al/about">About us</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout2;
