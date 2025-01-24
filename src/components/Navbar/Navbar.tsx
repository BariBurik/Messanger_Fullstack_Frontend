import Chatbar from "../Chatbar/Chatbar";
import Settings from "../Settings/Settings";
import styles from "./Navbar.module.scss";

interface NavbarProps {
    query: string
    setQuery: React.Dispatch<React.SetStateAction<string>>
}

function Navbar({query, setQuery}: NavbarProps) {
    const isMobile = __PLATFORM__ == "mobile"

    return ( 
        <div className={`${isMobile ? styles.mobile_navbar : styles.navbar}`}>
            <Settings/>
            <Chatbar query={query} setQuery={setQuery}/>
        </div>
    );
}

export default Navbar;