import Button from '../Button/Button';
import styles from './Keyboard.module.scss';
import buttonStyles from '../Button/Button.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { inputDigit, clear } from '../../Redux/calculatorSlice';
import userEvent from '@testing-library/user-event';
import { useEffect } from 'react';

const Keyboard = () => {
    const currentNumber = useSelector( (state) => state.calculator.currentInput );

    useEffect(( )=> {
            console.log("Kliknięto ", currentNumber);
        }, [currentNumber]);

    const dispatch = useDispatch();

    const handleClickNumber = (number) => {
        dispatch(inputDigit(number));
    }

    const handleClear = () => {
        dispatch(clear());
    }

    return <div className={styles.container}>
        <div>
            <Button className={buttonStyles.action} onClick={() => handleClickNumber(7)}>UNDO</Button>
            <Button className={buttonStyles.action} onClick={() => handleClear()}>CLEAR</Button>
            <Button className={buttonStyles.action} onClick={() => handleClickNumber(9)}>REDO</Button>
        </div>
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