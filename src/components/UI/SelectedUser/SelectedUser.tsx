import styles from './SelectedUser.module.scss'

interface SelectedUserProps {
    id: number
    username: string
    callback: (id: number) => void
}

function SelectedUser({username, callback, id}: SelectedUserProps) {
    return ( 
        <div className={styles.selected_user}>
            <p className={styles.username}>{username}</p>
            <button className={styles.close_button} onClick={(event) => {event.stopPropagation(), callback(id)}}>
                &times;
            </button>
        </div>
    );
}

export default SelectedUser;