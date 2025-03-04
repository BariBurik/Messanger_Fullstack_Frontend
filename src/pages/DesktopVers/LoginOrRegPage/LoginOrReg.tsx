import Input from "@/components/UI/Input/Input";
import styles from "./LoginOrReg.module.scss";
import { useEffect, useRef, useState } from "react";
import Button from "@/components/UI/Button/Button";
import { useUserLoginMutation, useUserRegisterMutation } from "@/store";
import PasswordInput from "@/components/UI/PasswordInput/PasswordInput";
import ErrorPopup from "@/components/UI/ErrorPopup/ErrorPopup";

function LoginOrRegPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [checkPassword, setCheckPassword] = useState("");
    const [isReg, setIsReg] = useState(false);
    const [errorVisibale, setErrorVisibale] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const nameWrongRef = useRef(null);
    const emailWrongRef = useRef(null);
    const passwordWrongRef = useRef(null);
    const checkPasswordWrongRef = useRef(null);

    const [userLogin, userLogData] = useUserLoginMutation();
    const [userRegister, userRegData] = useUserRegisterMutation();

    const handleRegOrLogin = () => {
        if (isReg) {
            if (name && email && password && checkPassword && password === checkPassword) {
                userRegister({name, email, password});
            } else {
                setErrorVisibale(true)
                setErrorMessage("Заполните все поля")
            }
        } else {
            if (email && password) {
                userLogin({email, password});
            } else {
                setErrorVisibale(true)
                setErrorMessage("Заполните все поля")
            }
        }
    }


    useEffect(() => {
        if (!name && isReg) {
            nameWrongRef.current.classList.remove(styles.hidden);
        } else {
            nameWrongRef.current.classList.add(styles.hidden);
        }
        if (!email) {
            emailWrongRef.current.classList.remove(styles.hidden);
        } else {
            emailWrongRef.current.classList.add(styles.hidden);
        }
        if (!password) {
            passwordWrongRef.current.classList.remove(styles.hidden);
        } else {
            passwordWrongRef.current.classList.add(styles.hidden);
        }
        if (password !== checkPassword && isReg) {
            checkPasswordWrongRef.current.classList.remove(styles.hidden);
        } else {
            checkPasswordWrongRef.current.classList.add(styles.hidden);
        }
        if (userLogData.isError || userRegData.isError) {
            setErrorVisibale(true)
            setErrorMessage(userLogData.error?.message || userRegData.error?.message)
        }
    }, [name, email, password, checkPassword, userLogData, userRegData])

    useEffect(() => {
        if (userLogData.isSuccess || userRegData.isSuccess) {
            window.location.reload(); 
        }
    }, [userLogData.isSuccess, userRegData.isSuccess]);

    return (
        <div className={styles.container}>
            <div className={styles.login_or_reg}>
                <h1>{isReg ? "Регистрация" : "Вход"}</h1>
                {isReg ? <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Имя пользователя"/> : <></>}
                <p ref={nameWrongRef} className={`${styles.warning} ${styles.hidden}`}>Введите имя пользователя</p>
                <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Электронная почта"/>
                <p ref={emailWrongRef} className={`${styles.warning} ${styles.hidden}`}>Введите почту</p>
                <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Пароль"/>
                <p ref={passwordWrongRef} className={`${styles.warning} ${styles.hidden}`}>Введите пароль</p>
                <p ref={checkPasswordWrongRef} className={`${styles.warning} ${styles.hidden}`}>Пароли не совпадают</p>
                {isReg ? <PasswordInput value={checkPassword} onChange={(e) => setCheckPassword(e.target.value)} placeholder="Повторите пароль"/> : <></>}
                <p ref={checkPasswordWrongRef} className={`${styles.warning} ${styles.hidden}`}>Пароли не совпадают</p> 
                {<p className={styles.switch} onClick={() => setIsReg(!isReg)}>{isReg ? "Уже есть аккаунт?" : "Еще нет аккаунта?"}</p>}
                <div className={styles.button}><Button onClick={handleRegOrLogin}>{isReg ? "Зарегистрироваться" : "Войти"}</Button></div>
                <ErrorPopup visible={errorVisibale} setVisible={setErrorVisibale} message={errorMessage} setMessage={setErrorMessage} />
            </div>
        </div>
    );
}

export default LoginOrRegPage;