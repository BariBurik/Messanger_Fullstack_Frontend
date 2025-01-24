import styles from './Template.module.scss'

interface TemplateProps {
    children?: React.ReactNode
}

function Template({children}: TemplateProps) {
    return ( 
        <div className={styles.template_day}>
            {children}
        </div>
    );
}

export default Template;