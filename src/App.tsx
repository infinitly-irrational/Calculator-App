import React, { useState } from 'react';
import { Button, Container, Grid } from '@mui/material';
import { Output } from './components/Output';
import { Base } from './components/Base';
import OperationButton from './components/OperationButton';
import DigitButton from './components/DigitButton';

function App() {
  const [currentValue, setCurrentValue] = useState('0');
  const [currentOperation, setCurrentOperation] = useState('');
  const [prevValue, setPrevValue] = useState('');
  const [overwrite, setOverwrite] = useState(true);

  const setDigit = (digit: string) => {
    if (currentValue[0] === '0' && digit === '0') return;
    if (currentValue.includes('.') && digit === '.') return;
    if (overwrite && digit !== '.') {
      setCurrentValue(digit);
    } else {
      setCurrentValue(`${currentValue}${digit}`);
    }
    setOverwrite(false);
  };

  const selectOperation = (operation: string) => {
    setPrevValue(currentValue);
    setCurrentOperation(operation);
    setOverwrite(true);
  };

  const calculate = () => {
    if (!prevValue || !currentOperation) return currentValue;
    const current = parseFloat(currentValue);
    const prev = parseFloat(prevValue);
    let result;

    switch (currentOperation) {
      case '+':
        result = prev + current;
        break;
      case '-':
        result = prev - current;
        break;
      case '*':
        result = prev * current;
        break;
      case '÷':
        result = prev / current;
        break;
    }
    return result;
  };

  const equals = () => {
    const value = calculate();
    setCurrentValue(`${value}`);
    setCurrentOperation('');
    setPrevValue('');
    setOverwrite(true);
  };

  const clear = () => {
    setPrevValue('');
    setCurrentOperation('');
    setCurrentValue('0');
    setOverwrite(true);
  };

  const del = () => {
    setCurrentValue('0');
    setOverwrite(true);
  };

  const percent = () => {
    const current = parseFloat(currentValue);
    setCurrentValue((current / 100).toString());
  };

  return (
    <Container maxWidth="sm">
      <Base elevation={3}>
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
              selectOperation={percent}
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
      </Base>
    </Container>
  );
}

export default App;
