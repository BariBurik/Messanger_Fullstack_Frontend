import Chatbar from "../Chatbar/Chatbar";
import Settings from "../Settings/Settings";
import styles from "./Navbar.module.scss";

function Navbar() {
    const isMobile = __PLATFORM__ == "mobile"

    return ( 
        <div className={`${isMobile ? styles.mobile_navbar : styles.navbar}`}>
            <Settings/>
            <Chatbar/>
        </div>
    );
}

export default Navbar;