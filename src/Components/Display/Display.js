import React from "react";
import styles from './Display.module.scss';
import { useDispatch, useSelector } from "react-redux";

const Display = ({props=0}) => {
    const value = useSelector((state) => state.calculator.currentInput);
    return (
        <div className={styles.display}>{value}</div>)
}

export default Display;