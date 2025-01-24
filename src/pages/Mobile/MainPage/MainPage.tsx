import Navbar from "@/components/Navbar/Navbar";
import styles from "./MainPage.module.scss";

function MainPage() {
    return ( 
        <div className={styles.main_page}>
            <Navbar/>
        </div>
    );
}

export default MainPage;