import styles from './Body.module.scss';

const Body = ({children}) => {
    return (
        <div className={styles.container}>
            <div className={styles.body}>
            <h1>To jest ciało kalkulatora</h1>
            {children}
        </div>
        </div>
        )
}

export default Body;