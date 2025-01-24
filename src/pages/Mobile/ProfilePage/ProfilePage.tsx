import { useState } from "react";
import styles from "./ProfilePage.module.scss";
import Input from "@/components/UI/Input/Input";
import Button from "@/components/UI/Button/Button";

function ProfilePage() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return ( 
        <div className={styles.constainer}>
            <div className={styles.profile}>
                <div className={styles.header}>
                    <h2>Профиль</h2>  
                </div>
                <div className={styles.body}>
                    <Input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Имя пользователя"/>
                    <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Электронная почта"/>
                    <Input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Пароль"/>
                </div>
                <div className={styles.footer}>
                    <Button onClick={() => {}}>Сохранить</Button>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;