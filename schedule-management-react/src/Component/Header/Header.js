import { Link } from "react-router-dom";
import "./Header.css";
export default function Header() {
  return (
    <nav>
      <div class='nav-brand'>
        <Link to='/'>
          <span class='text-primary'>Airave Schedule Management</span>
        </Link>
      </div>
      <ul>
        <li>
          <Link to='/users'>Users</Link>
        </li>
        <li>
          <Link to='/rooms'>Rooms</Link>
        </li>
        <li>
          <a href='/meeting'>Meetings </a>
        </li>
      </ul>
    </nav>
  );
}
