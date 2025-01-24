import styles from "./Input.module.scss";

type Size = "default" | "send";

interface InputProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    size?: Size;  
}

function Input({value, onChange, placeholder, size}: InputProps) {
    if (size === "send") {
        return ( 
            <input className={styles.input_send} placeholder={placeholder} value={value} onChange={onChange}/>
        );
    }
    return ( 
        <input className={styles.input} value={value} onChange={onChange} placeholder={placeholder}/>
    );
}

export default Input;