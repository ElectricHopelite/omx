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
      <button className="m-4 " type="button" onClick={showSidebar}>
        <div><MenuIcon/></div>
      </button>
      <ul className="list-none w-3xs" onClick={showSidebar}>
        <li className="inline-block rounded-sm m-1 bg-red-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:ring-3 focus:outline-hidden"><Link to="/"><HomeIcon/> Home</Link></li>
        <li className="inline-block rounded-sm m-1 bg-red-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:ring-3 focus:outline-hidden"><Link to="/event"><SportsScoreIcon/>Events</Link></li>
        <li className="inline-block rounded-sm m-1 bg-red-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:ring-3 focus:outline-hidden"><Link to="/profile"><AccountCircleIcon/>Profile</Link></li>
        <li className="inline-block rounded-sm m-1 bg-red-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:ring-3 focus:outline-hidden"><Link to="/admin"><AdminPanelSettingsIcon/>Admin</Link></li>

      </ul>
    </nav>
  );
}

export default Sidebar;