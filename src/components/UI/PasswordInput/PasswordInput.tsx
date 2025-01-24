import React, { useState } from 'react';
import styles from './PasswordInput.module.scss'
import CloseEye from "../../../../public/eye_close.svg"
import OpenEye from "../../../../public/eye_open.svg"

interface InputProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
}

function PasswordInput({value, onChange, placeholder}: InputProps) {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className={styles.input_wrapper}>
            <input
                type={showPassword ? 'text' : 'password'}
                value={value}
                onChange={onChange}
                placeholder="Пароль"
                className={styles.input}
            />
            <button className={styles.visibale_button} type="button" onClick={togglePasswordVisibility}>
                {showPassword ? <CloseEye/> : <OpenEye/>}
            </button>
        </div>
    );
};

export default PasswordInput;