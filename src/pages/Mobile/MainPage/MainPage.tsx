import Navbar from "@/components/Navbar/Navbar";
import styles from "./MainPage.module.scss";
import { useState } from "react";

function MainPage() {
    const [query, setQuery] = useState('');
    return ( 
        <div className={styles.main_page}>
            <Navbar query={query} setQuery={setQuery}/>
        </div>
    );
}

export default MainPage;