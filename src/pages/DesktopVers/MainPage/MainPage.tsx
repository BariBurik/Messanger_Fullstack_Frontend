import Chat from "@/components/Chat/Chat";
import Navbar from "@/components/Navbar/Navbar";
import styles from "./MainPage.module.scss";
import { useState } from "react";
import Template from "@/components/UI/Template/Template";

function MainPage() {
    const [query, setQuery] = useState('');
    const [messageText, setMessageText] = useState('');

    return ( 
        <Template>
            <div className={styles.main_page}>
                <Navbar query={query} setQuery={setQuery}/>
                <Chat value={messageText} setValue={setMessageText}/>
            </div>
        </Template>
    );
}

export default MainPage;