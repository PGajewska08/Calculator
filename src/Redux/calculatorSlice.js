import { createSlice } from "@reduxjs/toolkit";
import { evaluate, exp } from "mathjs";

const initialState = {
    currentInput: "0", //bieżący input
    expression: '', // działanie
    result: null, // wynik
    history: [], // historia działań
    undoStack: [], //stos do cofania operacji
    redoStack: [], //stos do ponownia operacji
};

export const calculatorSlice = createSlice ( {
    name: 'calculator',
    initialState,
    reducers: {
        inputDigit: (state, action) => {    // wprowadzanie liczby
            const digit = action.payload.toString();
            if(state.currentInput==="0"){
                state.currentInput = digit;
                state.expression += digit;
            }
            else if(state.currentInput.length<=9) {
                state.currentInput += digit;
                state.expression += digit;
            }
        },
        
        inputOperator: (state, action) => {    // wprowadzanie operatora matematycznego
            const operator = action.payload;  
            
            if((operator === "*")||(operator === "/")){
                state.expression = "("+state.expression+")";
            }
            const expression = state.expression;
            state.result = evaluate(expression);
            state.expression += action.payload;
            // state.result = state.currentInput;
            state.currentInput = "0";
        },

        changeSign: (state) => {
            const currentInput = state.currentInput;

            if(currentInput === "0"){
                return;
            }

            let newInput;

            if(currentInput.startsWith("-")) {
                newInput = currentInput.slice(1);
            }
            else {
                newInput = "-" + currentInput;
            }
            state.currentInput = newInput;
            // znajdź pozycję ostatniego wystąpienia currentInput w expression i zamień
            const lastIndex = state.expression.lastIndexOf(currentInput);
            if(lastIndex !== -1){
                state.expression = state.expression.slice(0,lastIndex) + newInput + state.expression.slice(lastIndex + currentInput.length);
            }
    
            //oblicz bieżący wynik
            const expression = state.expression;
            state.result = evaluate(expression);
        },

        addFloat: (state) => {
            if(state.currentInput<=9){
                state.currentInput += ".";
                state.expression += ".";
            }
        },

        calculate: (state) => {    // wykonanie działania
            const expression = state.expression;
            state.result = evaluate(expression);
            state.currentInput = "0";
        },

        clear: (state) => {    // wyczyść
            state.currentInput = "0";
            state.expression = '';
            state.result = null;
        },

        undo: (state) => {    // cofnij

        },

        redo: (state) => {    // ponów

        },

    }
});

export const {
    inputDigit,
    inputOperator,
    changeSign,
    addFloat,
    calculate,
    clear,
    undo,
    redo,
} = calculatorSlice.actions;

export default calculatorSlice.reducer;