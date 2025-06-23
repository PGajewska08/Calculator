import styles from './Body.module.scss';

const Body = ({children}) => {
    return (
        <div className={styles.container}>
            <div className={styles.body}>
            {children}
        </div>
        </div>
        )
}

export default Body;