import { createSlice } from "@reduxjs/toolkit";

const calculateSlice = createSlice ( {
    name: 'calculator',
    initialState: {
        currentInput: '0', //bieżący input
        expression: '', // działanie
        result: null, // wynik
        history: [], // historia działań
        undoStack: [], //stos do cofania operacji
        redoStack: [], //stos do ponownia operacji
    },
    reducers: {
        akcja1(state, action) {

        },
        akcja2(state,action) {

        },
    }
})