import Chatbar from "../Chatbar/Chatbar";
import Settings from "../Settings/Settings";
import styles from "./Navbar.module.scss";

function Navbar() {
    const userAgent = navigator.userAgent || ''; 
    const isMobile = /android|ios|iphone|ipad|ipod/i.test(userAgent.toLowerCase());

    return ( 
        <div className={`${isMobile ? styles.mobile_navbar : styles.navbar}`}>
            <Settings/>
            <Chatbar/>
        </div>
    );
}

export default Navbar;