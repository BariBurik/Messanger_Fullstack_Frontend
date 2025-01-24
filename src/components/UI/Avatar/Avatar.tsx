import styles from "./Avatar.module.scss";
import guest from "../../../../public/guest.jpg"

interface AvatarProps {
    avatar?: string
}

function Avatar({avatar}: AvatarProps) {
    return ( 
        <img className={styles.avatar} src={avatar === undefined || avatar === null || avatar === "" ? guest : avatar} alt="" />
    );
}

export default Avatar;