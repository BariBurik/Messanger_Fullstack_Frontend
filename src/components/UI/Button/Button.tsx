import styles from './Button.module.scss'

type Color = 'primary' | 'secondary'

interface ButtonProps {
    color?: Color
    children: string
    onClick?: () => void
}


function Button({ color, children, onClick }: ButtonProps) {

    const buttonsColor = {
        primary: 'rgb(121, 176, 238)',
        secondary: 'rgb(250, 250, 250)'
    }

    return ( 
        <button onClick={() => onClick()} style={{backgroundColor: buttonsColor[color], color: color === "primary" || color === undefined ? "rgb(228, 228, 228)" : "rgb(47, 116, 196)" }} className={styles.button}>{children}</button>
     );
}

export default Button;