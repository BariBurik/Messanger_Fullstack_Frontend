import { useEffect, useRef } from "react";
import styles from "./Modal.module.scss";
import Close from "../../../../public/close.svg";

interface ModalProps {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    children?: React.ReactNode
}

function Modal({children, isOpen, setIsOpen}: ModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleClick = (e: MouseEvent) => { 
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
            setIsOpen(false); 
            console.log(isOpen);
        }
    }

    useEffect(() => { 
        if (isOpen) { 
            document.addEventListener("click", handleClick); 
        } 

        return () => { 
            document.removeEventListener("click", handleClick); 
        }; 
    }, [isOpen]);

    console.log(isOpen);

    if (!isOpen) {
        return null;
    }

    return ( 
        <div  className={styles.container}>
            <div ref={modalRef} className={styles.modal}>
                {children}
                <div className={styles.close} onClick={() => setIsOpen(false)}><Close height={"30px"} width={"30px"}/></div>
            </div>
        </div>
    );
}

export default Modal;