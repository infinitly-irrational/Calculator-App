import React, {useReducer } from 'react';
import {Container} from '@mui/material';
import { Base } from './components/Base';
import CalculatorGrid from './components/CalculatorGrid';
import { initialState,} from './Reducer';
import reducer from './Reducer';


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Container
      maxWidth="sm"
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <Base elevation={3}>
        <CalculatorGrid state={state} dispatch={dispatch}/>
      </Base>
    </Container>
  );
}

export default App;
