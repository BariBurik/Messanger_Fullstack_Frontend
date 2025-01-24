import { useEffect, useRef } from 'react'
import styles from './Search.module.scss'


interface SearchProps {
    value: string | number
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
}

function Search({value, onChange, placeholder}: SearchProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    const placeholderRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const inputFocus = () => {
            placeholderRef.current?.classList.add(styles.placeholder_focus);
        }

        const inputBlur = () => {
            placeholderRef.current?.classList.remove(styles.placeholder_focus);
        }

        const input = inputRef.current;

        input?.addEventListener('focus', inputFocus);
        input?.addEventListener('blur', inputBlur);

        return () => {
            input?.removeEventListener('focus', inputFocus);
            input?.removeEventListener('blur', inputBlur);
        }
    }, [])

    return ( 
        <div className={styles.input_wrapper}>
            <input ref={inputRef} type="text" className={styles.input} value={value} onChange={onChange}/>
            <p ref={placeholderRef} className={styles.placeholder}>{placeholder}</p>
        </div>
    );
}

export default Search;