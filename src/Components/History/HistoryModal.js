import styles from './HistoryModal.module.scss';

const HistoryModal = ({history}) => {
    return (
        
        <div className={styles.modal}>
            { (history.length===0) && <p>Brak historii</p>}
            <ul>
                {history.map((item, index) => (
                    <li key={index}
                    className={index=== history.length -1 ? styles.last : ""}
                    >
                        {item}
                    </li>
                ))}
            </ul>
           
        </div>
    );
}

export default HistoryModal;