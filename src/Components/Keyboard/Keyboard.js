import Button from '../Button/Button';
import styles from './Keyboard.module.scss';
import buttonStyles from '../Button/Button.module.scss';

const Keyboard = () => {
    const handleClickNumber = (number) => {
        console.log("Kliknięto ", number);
    }
    return <div className={styles.container}>
        <div>
            <Button className={buttonStyles.number} onClick={() => handleClickNumber(7)}>7</Button>
            <Button className={buttonStyles.number} onClick={() => handleClickNumber(8)}>8</Button>
            <Button className={buttonStyles.number} onClick={() => handleClickNumber(9)}>9</Button>
            <Button className={buttonStyles.operator}>+</Button>
        </div>
        <div>
            <Button className={buttonStyles.number} onClick={() => handleClickNumber(4)}>4</Button>
            <Button className={buttonStyles.number} onClick={() => handleClickNumber(5)}>5</Button>
            <Button className={buttonStyles.number} onClick={() => handleClickNumber(6)}>6</Button>
            <Button className={buttonStyles.operator}>-</Button>
        </div>
        <div>
            <Button className={buttonStyles.number} onClick={() => handleClickNumber(1)}>1</Button>
            <Button className={buttonStyles.number} onClick={() => handleClickNumber(2)}>2</Button>
            <Button className={buttonStyles.number} onClick={() => handleClickNumber(3)}>3</Button>
            <Button className={buttonStyles.operator}>X</Button>
        </div>
        <div>
            <Button className={buttonStyles.operator}>+/-</Button>
            <Button className={buttonStyles.number} onClick={() => handleClickNumber(0)}>0</Button>
            <Button className={buttonStyles.operator}>,</Button>
            <Button className={buttonStyles.operator}>/:</Button>
        </div>  
        <div><Button className={buttonStyles.operator}>=</Button></div>
    </div>
    
}

export default Keyboard;