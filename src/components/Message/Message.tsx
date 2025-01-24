import styles from "./Message.module.scss";
type Direction = "for u" | "from u";

interface MessageProps {   
    children?: string
    direction?: Direction,
    time: string
}

function Message({children, direction, time}: MessageProps) {

    if (direction === "for u") {
        return ( 
            <div className={styles.message_container}> 
                <div className={styles.message_tail}></div>
                <div className={styles.message_time}>{time}</div>
                <p>{children}</p>
            </div>
        );
    } else {
        return ( 
            <div className={styles.message_reverse_container}> 
                <div className={styles.message_reverse_tail}>
                </div>
                <div className={styles.message_reverse_time}>{time}</div>
                <p>{children}</p>
            </div>
        );
    }
}

export default Message;