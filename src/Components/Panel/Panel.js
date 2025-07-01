import Button from '../Button/Button';
import styles from './Panel.module.scss';
import buttonStyles from '../Button/Button.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Panel = () => {
    return (
        <div className={styles.container}>
        <Button className={buttonStyles.history}><FontAwesomeIcon icon={faBars} /></Button>
    </div>
    ) 
}

export default Panel;