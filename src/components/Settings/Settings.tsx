import Avatar from '../UI/Avatar/Avatar';
import styles from './Settings.module.scss';
import Exit from '../../../public/exit.svg'

function Settings() {
    return ( 
        <div className={styles.settings}>
            <div onClick={() => {window.location.href = "/profile"}} className={styles.user}><Avatar /></div>
            <div onClick={() => {}} className={styles.exit}><Exit className={styles.exit}/></div>
        </div>
    );
}

export default Settings;