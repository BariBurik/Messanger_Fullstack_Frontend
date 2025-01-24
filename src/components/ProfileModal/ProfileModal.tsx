import { useState } from "react";
import Modal from "../UI/Modal/Modal";
import styles from "./ProfileModal.module.scss";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

function ProfileModal() {
    const [isOpen, setIsOpen] = useState(true);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return ( 
        <div>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
                <div className={styles.profile_modal}>
                    <div className={styles.header}>
                        <h2>Профиль</h2>  
                    </div>
                    <div className={styles.body}>
                        <Input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Имя пользователя"/>
                        <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Электронная почта"/>
                        <Input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Пароль"/>
                    </div>
                    <div className={styles.footer}>
                        <Button onClick={() => setIsOpen(false)}>Сохранить</Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default ProfileModal;