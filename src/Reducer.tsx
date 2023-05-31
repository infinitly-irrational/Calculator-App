import React from 'react';
import Calculate from './components/Calculate';

const setDigit = (state: State, digit: string): State => {
    const { currentValue, overwrite } = state;
    if (currentValue[0] === '0' && digit === '0') return state;
    if (currentValue.includes('.') && digit === '.') return state;
    let newValue;
    if (overwrite && digit !== '.') {
        newValue = digit;
    } else {
        newValue = `${currentValue}${digit}`;
    }
    return { ...state, currentValue: newValue, overwrite: false };
};

const selectOperation = (state: State, operation: string): State => {
    const { prevValue, currentValue, currentOperation, overwrite } = state;
    let currentVal = currentValue;
    let prevVal;
    let newCurrentOperation;

    if (prevValue) {
        const value = Calculate({ prevValue, currentValue, currentOperation });
        currentVal = `${value}`;
        prevVal = `${value}`;
    } else {
        prevVal = currentValue;
    }
    newCurrentOperation = operation;
    return {
        ...state,
        currentValue: currentVal,
        prevValue: prevVal,
        currentOperation: newCurrentOperation,
        overwrite: true,
    };
};

const equals = (state: State): State => {
    const { prevValue, currentValue, currentOperation } = state;
    const value = Calculate({ prevValue, currentValue, currentOperation });
    return {
    ...state,
    currentValue: `${value}`,
    currentOperation: '',
    prevValue: '',
    overwrite: true,
    };
};


const clear = (state:State):State => {
    return {...state, prevValue:'', currentOperation:'', currentValue:'0', overwrite:true}
};
const del = (state:State):State => {
    return {...state, currentValue:'0', overwrite:true}

};

const percent = (state: State): State => {
    const {currentValue} = state
    const current = parseFloat(currentValue);
    const newValue = (current / 100).toString();
    return {...state, currentValue:newValue}
};


export type State = {
    currentValue: string;
    currentOperation: string;
    prevValue: string;
    overwrite: boolean;
};
export enum ActionType {
    SET_DIGIT = 'SET_DIGIT',
    SELECT_OPERATION = 'SELECT_OPERATION',
    CALCULATE = 'CALCULATE',
    EQUALS = 'EQUALS',
    CLEAR = 'CLEAR',
    DELETE = 'DELETE',
    PERCENT = 'PERCENT',
}

export type Action = {
    type: ActionType;
    payload?: any;
};

export const initialState = {
    currentValue: '0',
    currentOperation: '',
    prevValue: '',
    overwrite: true,
};

export default function reducer(state: State, action:Action):State {
    switch (action.type) {
        case ActionType.SET_DIGIT:
            return setDigit(state, action.payload);
        case ActionType.SELECT_OPERATION:
            return selectOperation(state, action.payload)
        case ActionType.CALCULATE:
            const {prevValue, currentValue, currentOperation} = state
            const result = Calculate({ prevValue, currentValue, currentOperation });
            return {...state, currentValue: result, prevValue:'', currentOperation:'', overwrite:true }
        case ActionType.EQUALS:
            return equals(state)
        case ActionType.CLEAR:
            return clear(state)
        case ActionType.DELETE:
            return del(state)
        case ActionType.PERCENT:
            return percent(state)
        default:
            return state;
    }
}

