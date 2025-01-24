import Input from "../UI/Input/Input";
import styles from "./BottomChatsBar.module.scss";
import Send from "../../../public/send.svg";

interface BottomChatsBarProps {
    value: string
    setValue: React.Dispatch<React.SetStateAction<string>>
    placeholder: string
}

function BottomChatsBar({setValue, value, placeholder}: BottomChatsBarProps) {
    return ( 
        <div className={styles.bottom_chats_bar}>
            <Input size="send" value={value} onChange={(e) => setValue(e.target.value)} placeholder={placeholder}/>
            <Send className={styles.send}/>
        </div>
     );
}

export default BottomChatsBar;