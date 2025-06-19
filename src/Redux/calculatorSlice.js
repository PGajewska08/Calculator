import { createSlice } from "@reduxjs/toolkit";

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
            }
            else {
                state.currentInput += digit;
            }
            
        },
        
        inputOperator: (state, action) => {    // wprowadzanie operatora matematycznego

        },

        inputOperator: (state, action) => {    // wprowadzanie operatora matematycznego

        },

        calculate: (state) => {    // wykonanie działania

        },

        clear: (state) => {    // wyczyść

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
    calculate,
    clear,
    undo,
    redo,
} = calculatorSlice.actions;

export default calculatorSlice.reducer;