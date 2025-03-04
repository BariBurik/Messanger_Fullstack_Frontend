import { useNavigate } from 'react-router-dom';
import { ChangeChatModal } from '../ChangeChatModal/ChangeChatModal';
import styles from './TopChatsBar.module.scss'
import Back from '../../../public/back.svg'

interface TopChatsBarProps {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    chatsName: string
}


function TopChatsBar({isOpen, setIsOpen, chatsName}: TopChatsBarProps) {
    const userAgent = navigator.userAgent || ''; 
    const isMobile = /android|ios|iphone|ipad|ipod/i.test(userAgent.toLowerCase());

    const navigate = useNavigate()

    const handleClickToBack = () => {
        navigate("/")
    }
    
    return ( 
        <div onClick={() => setIsOpen(true)} className={`${isMobile ? styles.mobile_top_chats_bar : styles.top_chats_bar}`}>
            {isMobile && <button onClick={handleClickToBack} className={styles.back_button}><Back/></button>}
            <p className={styles.chats_name}>{chatsName}</p>
            <ChangeChatModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    );
}

export default TopChatsBar;