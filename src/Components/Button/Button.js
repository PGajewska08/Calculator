import styles from './Button.module.scss'
import clsx from 'clsx';

const Button = ({className, children, onClick, ...rest}) => {
    return (
        <button className={clsx(styles.button, className)} onClick={onClick}{...rest}>
            {children}
        </button>)
}

export default Button;