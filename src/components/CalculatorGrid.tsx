import React from 'react'
import {Grid, Button} from '@mui/material'
import OperationButton from './OperationButton'
import DigitButton from './DigitButton'
import { Output } from './Output'
import { State, Action, ActionType } from '../Reducer'

interface Props {
  state: State;
  dispatch: React.Dispatch<Action>;
}

const CalculatorGrid = ({state, dispatch}:Props) => {
  const {currentValue, currentOperation} = state

    return (
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Output>{currentValue}</Output>
        </Grid>
        <Grid item container columnSpacing={1}>
          <OperationButton
            operation={'AC'}
            selectOperation={() => {
              dispatch({ type: ActionType.CLEAR, payload:'AC' });
            }}
            selectedOperation={currentOperation}
          />
          <OperationButton
            operation={'C'}
            selectOperation={() => {
              dispatch({ type: ActionType.DELETE, payload:'C' });
            }}
            selectedOperation={currentOperation}
          />
          <OperationButton
            operation={'%'}
            selectOperation={() => {
              dispatch({ type: ActionType.PERCENT, payload:'%' });
            }}
            selectedOperation={currentOperation}
          />
          <OperationButton
            operation={'÷'}
            selectOperation={() => {
              dispatch({ type: ActionType.SELECT_OPERATION, payload:'÷' });
            }}
            selectedOperation={currentOperation}
          />
        </Grid>
        <Grid item container columnSpacing={1}>
          <DigitButton
            digit={'7'}
            enteredDigit={() => {
              dispatch({ type: ActionType.SET_DIGIT, payload: '7' });
            }}
          />
          <DigitButton
            digit={'8'}
            enteredDigit={() => {
              dispatch({ type: ActionType.SET_DIGIT, payload: '8' });
            }}
          />
          <DigitButton
            digit={'9'}
            enteredDigit={() => {
              dispatch({ type: ActionType.SET_DIGIT, payload: '9' });
            }}
          />
          <OperationButton
            operation={'*'}
            selectOperation={() => {
              dispatch({ type: ActionType.SELECT_OPERATION, payload:'*' });
            }}
            selectedOperation={currentOperation}
          />
        </Grid>
        <Grid item container columnSpacing={1}>
          <DigitButton
            digit={'4'}
            enteredDigit={() => {
              dispatch({ type: ActionType.SET_DIGIT, payload:'4' });
            }}
          />
          <DigitButton
            digit={'5'}
            enteredDigit={() => {
              dispatch({ type: ActionType.SET_DIGIT, payload: '5' });
            }}
          />
          <DigitButton
            digit={'6'}
            enteredDigit={() => {
              dispatch({ type: ActionType.SET_DIGIT, payload: '6' });
            }}
          />
          <OperationButton
            operation={'-'}
            selectOperation={() => {
              dispatch({ type: ActionType.SELECT_OPERATION , payload:"-"});
            }}
            selectedOperation={currentOperation}
          />
        </Grid>
        <Grid item container columnSpacing={1}>
          <DigitButton
            digit={'1'}
            enteredDigit={() => {
              dispatch({ type: ActionType.SET_DIGIT, payload: '1' });
            }}
          />
          <DigitButton
            digit={'2'}
            enteredDigit={() => {
              dispatch({ type: ActionType.SET_DIGIT, payload: '2' });
            }}
          />
          <DigitButton
            digit={'3'}
            enteredDigit={() => {
              dispatch({ type: ActionType.SET_DIGIT, payload: '3' });
            }}
          />
          <OperationButton
            operation={'+'}
            selectOperation={() => {
              dispatch({ type: ActionType.SELECT_OPERATION, payload:'+' });
            }}
            selectedOperation={currentOperation}
          />
        </Grid>
        <Grid item container columnSpacing={1}>
          <DigitButton
            digit={'0'}
            enteredDigit={() => {
              dispatch({ type: ActionType.SET_DIGIT, payload: '0' });
            }}
            xs={6}
          />
          <DigitButton
            digit={'.'}
            enteredDigit={() => {
              dispatch({ type: ActionType.SET_DIGIT, payload:'.' });
            }}
          />
          <Grid item xs={3}>
            <Button
              fullWidth
              variant="contained"
              onClick={() => {
                dispatch({ type: ActionType.EQUALS });
              }}
            >
              =
            </Button>
          </Grid>
        </Grid>
      </Grid>
    );

}

export default CalculatorGrid
