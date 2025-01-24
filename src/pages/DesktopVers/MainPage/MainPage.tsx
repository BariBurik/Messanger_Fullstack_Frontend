import Chat from "@/components/Chat/Chat";
import Navbar from "@/components/Navbar/Navbar";
import styles from "./MainPage.module.scss";
import { useState } from "react";
import Template from "@/components/UI/Template/Template";

function MainPage() {
    return ( 
        <Template>
            <div className={styles.main_page}>
                <Navbar/>
            </div>
        </Template>
    );
}

export default MainPage;