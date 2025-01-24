import Message from "../Message/Message";
import styles from "./MessageWindow.module.scss";

function MessageWindow() {
    return ( 
        <div className={styles.message_window}>
            <div className={styles.message_to}><Message time="10:00 AM" direction="for u">agrsgvEWFVEAFDAFSDGDSAGFDASVGSCVAFD</Message></div>
            <div className={styles.message_from}><Message time="10:00 AM" direction="from u">dsgsfgsdfgbefdgvdsgvds</Message></div>
        </div>
    );
}

export default MessageWindow;