import Input from "../UI/Input/Input";
import styles from "./BottomChatsBar.module.scss";
import Send from "../../../public/send.svg";
import { useEffect } from "react";

interface BottomChatsBarProps {
    value: string
    setValue: React.Dispatch<React.SetStateAction<string>>
    placeholder: string
    callback: () => void
}

function BottomChatsBar({setValue, value, placeholder, callback}: BottomChatsBarProps) {
    return ( 
        <div className={styles.bottom_chats_bar}>
            <Input size="send" value={value} onChange={(e) => setValue(e.target.value)} placeholder={placeholder}/>
            <Send onClick={() => value.length > 0 ? callback() : null} className={styles.send}/>
        </div>
     );
}

export default BottomChatsBar;