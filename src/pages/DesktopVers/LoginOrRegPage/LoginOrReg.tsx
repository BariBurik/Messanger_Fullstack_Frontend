import Input from "@/components/UI/Input/Input";
import styles from "./LoginOrReg.module.scss";
import { useState } from "react";
import Button from "@/components/UI/Button/Button";

function LoginOrRegPage() {
    
    const [value, setValue] = useState('');
    const [isReg, setIsReg] = useState(false);

    return (
        <div className={styles.container}>
            <div className={styles.login_or_reg}>
                {isReg ? <Input value={value} onChange={(e) => setValue(e.target.value)} placeholder="Имя пользователя"/> : <></>}
                <Input value={value} onChange={(e) => setValue(e.target.value)} placeholder="Электронная почта"/>
                <Input value={value} onChange={(e) => setValue(e.target.value)} placeholder="Пароль"/>
                {isReg ? <Input value={value} onChange={(e) => setValue(e.target.value)} placeholder="Повторите пароль"/> : <></>}
                {<p className={styles.switch} onClick={() => setIsReg(!isReg)}>{isReg ? "Уже есть аккаунт?" : "Еще нет аккаунта?"}</p>}
                <div className={styles.button}><Button>{isReg ? "Зарегистрироваться" : "Войти"}</Button></div>
            </div>
        </div>
    );
}

export default LoginOrRegPage;