import React, { useState } from 'react';
import { Container, Grid } from '@mui/material';
import { Output } from './components/Output';
import { Base } from './components/Base';

function App() {
  const [currentValue, setCurrentValue] = useState('0');
  const [operation, setOperatio] = useState('');

  const setDigit = (digit: string) => {
    setCurrentValue(digit);
  };
  const selectOperation = (operation: string) => {
    setOperatio(operation);
  };
  return (
    <Container maxWidth="sm">
      <Base elevation={3}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Output>{currentValue}</Output>
          </Grid>
        </Grid>
      </Base>
    </Container>
  );
}

export default App;
