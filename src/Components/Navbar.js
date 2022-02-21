//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaReact } from "react-icons/fa";
import { BiUser, BiMap} from "react-icons/bi";
import {AiFillDashboard} from "react-icons/ai";
import {IoMdNotifications} from "react-icons/io";
import {HiPuzzle, HiOutlineMenuAlt1} from "react-icons/hi";



//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./Navbar.css";


const Header = () => {
  
    //create initial menuCollapse state using useState hook
    

    //create a custom function that will change menucollapse state from false to true and true to false
  
  return (
    <>
      <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar >
          <SidebarHeader > 
          
              {/* small and big change using menucollapse state */}
              
              <div className="logotext">
              <p>ReactTrim</p>
            </div>
            
          </SidebarHeader>
          <SidebarContent>
            <Menu className="menu">
              <MenuItem icon={<AiFillDashboard />}>Dashboard</MenuItem>
              <MenuItem icon={<FaReact />}>Icons</MenuItem>
              <MenuItem icon={<BiMap />}>Map</MenuItem>
              <MenuItem icon={<BiUser />}>User Profile</MenuItem>
              <MenuItem icon={<IoMdNotifications />}>Notification</MenuItem>
              <MenuItem icon={<HiPuzzle />}>Table List</MenuItem> 
              <MenuItem icon={<HiOutlineMenuAlt1 />}>Typography</MenuItem>   
            </Menu>
          </SidebarContent>
        </ProSidebar>
      </div>
    </>
  );
};

export default Header;