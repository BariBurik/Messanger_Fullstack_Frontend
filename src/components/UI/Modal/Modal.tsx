import { useCallback, useEffect, useRef } from "react";
import styles from "./Modal.module.scss";
import Close from "../../../../public/close.svg";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/hooks/redux";

interface ModalProps {
    children?: React.ReactNode
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function Modal({children, isOpen, setIsOpen}: ModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleClick = useCallback((e: MouseEvent) => {
        if (isOpen && modalRef.current && !modalRef.current.classList.contains(styles.hidden) && !modalRef.current.contains(e.target as Node)) {
            setIsOpen(false); 
        }
    }, [isOpen, setIsOpen]);
    
    useEffect(() => { 
        if (isOpen) { 
            setTimeout(() => {
                document.addEventListener("click", handleClick);
            }, 1);
        } 

        return () => { 
            document.removeEventListener("click", handleClick); 
        }; 
    }, [isOpen]);
    
    useEffect(() => {
        containerRef.current?.classList.toggle(styles.hidden, !isOpen);
    }, [isOpen])

    return ( 
        <div ref={containerRef} className={styles.container}>
            <div ref={modalRef} className={styles.modal}>
                {children}
                <div className={styles.close} onClick={(e) => {e.stopPropagation(), setIsOpen(false)}}><Close height={"30px"} width={"30px"}/></div>
            </div>
        </div>
    );
}

export default Modal;