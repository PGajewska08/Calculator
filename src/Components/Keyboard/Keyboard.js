import Button from '../Button/Button';
import styles from './Keyboard.module.scss';
import buttonStyles from '../Button/Button.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { inputDigit, clear, inputOperator, calculate, addFloat, changeSign} from '../../Redux/calculatorSlice';
import userEvent from '@testing-library/user-event';
import { useEffect } from 'react';

const Keyboard = () => {
    const currentNumber = useSelector( (state) => state.calculator.currentInput );
    const expression = useSelector( (state) => state.calculator.expression);

    useEffect( () => {
        console.log(expression);
    },[expression]);

    const dispatch = useDispatch();

    const handleClickNumber = (number) => {
        dispatch(inputDigit(number));
    }
    const handleClickOperator = (operator) => {
        dispatch(inputOperator(operator));
    }
    const handleAddFloat = () => {
        dispatch(addFloat());
    }
    const handleCalculate = () => {
        dispatch(calculate());
    }

    const handleClear = () => {
        dispatch(clear());
    }

    const handleChangeSign = () => {
        dispatch(changeSign());
    }

    return <div className={styles.container}>
        <div className={styles.row}>
            <Button className={buttonStyles.action} onClick={() => handleClickNumber(7)}>UNDO</Button>
            <Button className={buttonStyles.action} onClick={() => handleClear()}>CLEAR</Button>
            <Button className={buttonStyles.action} onClick={() => handleClickNumber(9)}>REDO</Button>
        </div>
        <div className={styles.row}>
            <Button className={buttonStyles.number} onClick={() => handleClickNumber(7)}>7</Button>
            <Button className={buttonStyles.number} onClick={() => handleClickNumber(8)}>8</Button>
            <Button className={buttonStyles.number} onClick={() => handleClickNumber(9)}>9</Button>
            <Button className={buttonStyles.add} onClick={() => handleClickOperator("+")}>+</Button>
        </div>
        <div className={styles.row}>
            <Button className={buttonStyles.number} onClick={() => handleClickNumber(4)}>4</Button>
            <Button className={buttonStyles.number} onClick={() => handleClickNumber(5)}>5</Button>
            <Button className={buttonStyles.number} onClick={() => handleClickNumber(6)}>6</Button>
            <Button className={buttonStyles.substr} onClick={() => handleClickOperator("-")}>-</Button>
        </div>
        <div className={styles.row}>
            <Button className={buttonStyles.number} onClick={() => handleClickNumber(1)}>1</Button>
            <Button className={buttonStyles.number} onClick={() => handleClickNumber(2)}>2</Button>
            <Button className={buttonStyles.number} onClick={() => handleClickNumber(3)}>3</Button>
            <Button className={buttonStyles.multiply} onClick={() => handleClickOperator("*")}>x</Button>
        </div>
        <div className={styles.row}>
            <Button className={buttonStyles.operator} onClick={() => handleChangeSign()}>+/-</Button>
            <Button className={buttonStyles.number} onClick={() => handleClickNumber(0)}>0</Button>
            <Button className={buttonStyles.operator} onClick={()=>handleAddFloat()}>,</Button>
            <Button className={buttonStyles.divide} onClick={() => handleClickOperator("/")}>/:</Button>
        </div>  
        <div><Button className={buttonStyles.equal} onClick={() => handleCalculate()}>=</Button></div>
    </div> 
}

export default Keyboard;