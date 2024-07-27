import { Link, withRotuer } from "react-router-dom";
import { getUser } from "../services/authorize";

const NavbarComponent = () => {
  return (
    <nav>
      <ul className="nav nav-tabs">
        <li className="nav-item pr-3 pt-3 pb-3">
          <Link to="/" className="nav-link">
            หน้าแรก
          </Link>
        </li>
        <li className="nav-item pr-3 pt-3 pb-3">
          <Link to="/create" className="nav-link">
            เขียนบทความ
          </Link>
        </li>
        {!getUser() && (
          <li className="nav-item pr-3 pt-3 pb-3">
            <Link to="/login" className="nav-link">
              เข้าสู่ระบบ
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavbarComponent;
