import React from 'react'
import {Grid, Button} from '@mui/material'
import OperationButton from './OperationButton'
import DigitButton from './DigitButton'
import { Output } from './Output'
import Percent from './Operations'
import {Values, Setters, Functions} from './Interfaces'

interface Props {
    values:Values;
    setters:Setters;
    functions:Functions

}

const CalculatorGrid = ({values, setters, functions}:Props) => {
  const { currentValue, currentOperation } = values;
  const { setCurrentValue, setCurrentOperation, setPrevValue, setOverwrite } = setters;
  const { setDigit, selectOperation, clear, del, percent, equals } = functions;


    return (
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Output>{currentValue}</Output>
        </Grid>
        <Grid item container columnSpacing={1}>
          <OperationButton
            operation={'AC'}
            selectOperation={clear}
            selectedOperation={currentOperation}
          />
          <OperationButton
            operation={'C'}
            selectOperation={del}
            selectedOperation={currentOperation}
          />
          <OperationButton
            operation={'%'}
            selectOperation={() => {
              setCurrentValue(Percent(currentValue));
            }}
            selectedOperation={currentOperation}
          />
          <OperationButton
            operation={'÷'}
            selectOperation={selectOperation}
            selectedOperation={currentOperation}
          />
        </Grid>
        <Grid item container columnSpacing={1}>
          <DigitButton digit={'7'} enteredDigit={setDigit} />
          <DigitButton digit={'8'} enteredDigit={setDigit} />
          <DigitButton digit={'9'} enteredDigit={setDigit} />
          <OperationButton
            operation={'*'}
            selectOperation={selectOperation}
            selectedOperation={currentOperation}
          />
        </Grid>
        <Grid item container columnSpacing={1}>
          <DigitButton digit={'4'} enteredDigit={setDigit} />
          <DigitButton digit={'5'} enteredDigit={setDigit} />
          <DigitButton digit={'6'} enteredDigit={setDigit} />
          <OperationButton
            operation={'-'}
            selectOperation={selectOperation}
            selectedOperation={currentOperation}
          />
        </Grid>
        <Grid item container columnSpacing={1}>
          <DigitButton digit={'1'} enteredDigit={setDigit} />
          <DigitButton digit={'2'} enteredDigit={setDigit} />
          <DigitButton digit={'3'} enteredDigit={setDigit} />
          <OperationButton
            operation={'+'}
            selectOperation={selectOperation}
            selectedOperation={currentOperation}
          />
        </Grid>
        <Grid item container columnSpacing={1}>
          <DigitButton digit={'0'} enteredDigit={setDigit} xs={6} />
          <DigitButton digit={'.'} enteredDigit={setDigit} />
          <Grid item xs={3}>
            <Button fullWidth variant="contained" onClick={equals}>
              =
            </Button>
          </Grid>
        </Grid>
      </Grid>
    );

}

export default CalculatorGrid
