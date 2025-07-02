import Button from '../Button/Button';
import styles from './Panel.module.scss';
import buttonStyles from '../Button/Button.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {toggleHistoryModal} from '../../Redux/calculatorSlice';
import { useDispatch, useSelector } from 'react-redux';

const Panel = () => {
    const dispatch = useDispatch();
    const handleToggle = () => {
        dispatch(toggleHistoryModal());  
    }
    return (
        <div className={styles.container}>
        <Button className={buttonStyles.history}><FontAwesomeIcon icon={faBars} onClick={() => handleToggle()}/></Button>
    </div>
    ) 
}

export default Panel;