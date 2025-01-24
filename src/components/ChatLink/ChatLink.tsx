import Avatar from "../UI/Avatar/Avatar";
import styles from "./ChatLink.module.scss";

interface ChatProps {
    avatar?: string
    username: string
    lastMessage: string
    time: string, 
    unread?: string,
}

function Chat({avatar, username, lastMessage, time, unread}: ChatProps) {
    const isMobile = __PLATFORM__ == "mobile"
    
    if (isMobile) {
        return ( 
            <div className={styles.mobile_chat}>
                <Avatar avatar={avatar !== undefined ? avatar : ""}/>
                <div className={styles.mobile_text}>
                    <div className={styles.mobile_top_row}>
                        <div className={styles.mobile_username}>{username}</div>
                        <div className={styles.mobile_time}>{time}</div>
                    </div>
                    <div className={styles.mobile_bottom_row}>
                        <div className={styles.mobile_last_message}>{lastMessage}</div>
                        <div className={styles.mobile_unread}>{unread !== "" ? unread : ""}</div>
                    </div>
                </div>
            </div>
        );
    } else {
        return ( 
            <div className={styles.chat}>
                <Avatar avatar={avatar !== undefined ? avatar : ""}/>
                <div className={styles.text}>
                    <div className={styles.top_row}>
                        <div className={styles.username}>{username}</div>
                        <div className={styles.time}>{time}</div>
                    </div>
                    <div className={styles.bottom_row}>
                        <div className={styles.last_message}>{lastMessage}</div>
                        <div className={styles.unread}>{unread !== "" ? unread : ""}</div>
                    </div>
                </div>
            </div>
        );
    }

    return null;
}

export default Chat;