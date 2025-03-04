import Avatar from '../UI/Avatar/Avatar';
import styles from './Settings.module.scss';
import Exit from '../../../public/exit.svg'
import { useState } from 'react';
import ProfileModal from '../ProfileModal/ProfileModal';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/hooks/redux';
import { RootState } from '@/store';
import { setUserLogout } from '@/store/ActionCreators/User';
import { guest } from '../../../public/guest.jpg'

function Settings() {

    const userAgent = process.env.USER_AGENT || ''; 
    const isMobile = /android|ios|iphone|ipad|ipod/i.test(userAgent.toLowerCase());
    const dispatch = useAppDispatch()

    const avatar = useSelector((state: RootState) => state.user.avatar)

    const [isOpen, setIsOpen] = useState(false)
    
    const handleAvatarOnClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (isMobile) {
            window.location.href = "/profile"
        }
        else {
            setIsOpen(true)
        }
    }

    const handleExit = () => {
        setUserLogout(dispatch)
        fetch('http://95.163.230.130:8000/delete-http-only-cookie/', 
            { 
                method: 'GET', 
                credentials: 'include' 
            })
            .then(response => response.json())
            .then(data => console.log(data.message))
            .catch(error => console.error('Error:', error));
    }

    return ( 
        <div className={styles.settings}>
            <div onClick={(e) => {handleAvatarOnClick(e)}} className={styles.user}>
                <Avatar avatar={avatar ? avatar : guest} />
            </div>
            <ProfileModal setIsOpen={setIsOpen} isOpen={isOpen}/>
            <div onClick={handleExit} className={styles.exit}><Exit className={styles.exit}/></div>
        </div>
    );
}

export default Settings;