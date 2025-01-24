import BottomChatsBar from "../BottomChatsBar/BottomChatsBar";
import MessageWindow from "../MessagesWindow/MessageWindow";
import styles from "./Chat.module.scss";

interface BottomChatsBarProps {
    value: string
    setValue: React.Dispatch<React.SetStateAction<string>>
}

function Chat({value, setValue}: BottomChatsBarProps) {
    return ( 
        <div className={styles.chat}>
            <MessageWindow/>
            <BottomChatsBar value={value} setValue={setValue} placeholder="Написать сообщение..." />
        </div>
     );
}

export default Chat;