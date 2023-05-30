import React, { useState } from 'react';
import {Container} from '@mui/material';
import { Base } from './components/Base';
import Calculate from './components/Calculate';
import CalculatorGrid from './components/CalculatorGrid';


function App() {
  const [currentValue, setCurrentValue] = useState('0');
  const [currentOperation, setCurrentOperation] = useState('');
  const [prevValue, setPrevValue] = useState('');
  const [overwrite, setOverwrite] = useState(true);

  const setters = {
    setCurrentValue,
    setCurrentOperation,
    setPrevValue,
    setOverwrite,
  };

  const values = {
    currentValue,
    currentOperation,
    prevValue,
    overwrite,
  };

  const functions = {
    setDigit: (digit: string) => {
      if (currentValue[0] === '0' && digit === '0') return;
      if (currentValue.includes('.') && digit === '.') return;
      if (overwrite && digit !== '.') {
        setCurrentValue(digit);
      } else {
        setCurrentValue(`${currentValue}${digit}`);
      }
      setOverwrite(false);
    },
    selectOperation: (operation: string) => {
      if (prevValue) {
        const value = Calculate({ prevValue, currentValue, currentOperation });
        setCurrentValue(`${value}`);
        setPrevValue(`${value}`);
      } else {
        setPrevValue(currentValue);
      }
      setCurrentOperation(operation);
      setOverwrite(true);
    },
    Calculate,
    equals: () => {
      const value = Calculate({ prevValue, currentValue, currentOperation });
      setCurrentValue(`${value}`);
      setCurrentOperation('');
      setPrevValue('');
      setOverwrite(true);
    },
    clear: () => {
      setPrevValue('');
      setCurrentOperation('');
      setCurrentValue('0');
      setOverwrite(true);
    },
    del: () => {
      setCurrentValue('0');
      setOverwrite(true);
    },
    percent: (value:string) => {
      const current = parseFloat(value);
      return (current / 100).toString();
    },
  };

  return (
    <Container
      maxWidth="sm"
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <Base elevation={3}>
        <CalculatorGrid values={values} setters={setters} functions={functions}/>
      </Base>
    </Container>
  );
}

export default App;
