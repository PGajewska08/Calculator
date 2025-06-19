import { createSlice } from "@reduxjs/toolkit";
import { evaluate } from "mathjs";

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
    addFloat,
    calculate,
    clear,
    undo,
    redo,
} = calculatorSlice.actions;

export default calculatorSlice.reducer;