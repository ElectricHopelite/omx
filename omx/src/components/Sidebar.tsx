import { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <nav className={sidebar ? "sidebar active" : "sidebar"}>
      <button className="hamburger" type="button" onClick={showSidebar}>
        <div><MenuIcon/></div>
      </button>
      <ul className="list-none" onClick={showSidebar}>
        <li className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-200"><Link to="/"><HomeIcon/> Home</Link></li>
        <li><Link to="/event"><SportsScoreIcon/>Events</Link></li>
        <li><Link to="/profile"><AccountCircleIcon/>Profile</Link></li>
        <li><Link to="/admin"><AdminPanelSettingsIcon/>Admin</Link></li>

      </ul>
    </nav>
  );
}

export default Sidebar;