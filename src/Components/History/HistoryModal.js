import styles from './HistoryModal.module.scss';

const HistoryModal = ({history}) => {
    return (
        <div className={styles.modal}>
            <ul>
                {history.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
           
        </div>
    );
}

export default HistoryModal;