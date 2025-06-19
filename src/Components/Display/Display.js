import React, { useEffect } from "react";
import styles from './Display.module.scss';
import { useSelector } from "react-redux";

const Display = () => {
    
    const value = useSelector((state) => state.calculator.currentInput);
    const result = useSelector((state) => state.calculator.result);
    useEffect(() => {
        console.log("current input: ", value);
        console.log("result ", result);
    }, [value,  result]);
    if((value==="0")&& (result!=null)){
        return <div className={styles.display}>{result}</div>
    }
    else if((result===null)||(value!=="0")){
        return (
        <div className={styles.display}>{value}</div>)
    }
    
    
}

export default Display;