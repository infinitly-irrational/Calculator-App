import { Button, Grid, styled } from '@mui/material';
import React from 'react';

interface Props {
  operation: string;
  selectOperation: (operation: string) => void;
  selectedOperation: string;
}

const StyledButton = styled(Button)<{ selected: boolean }>((props) => ({
  backgroundColor: 'rgba(254, 241, 73, .1)',
  borderColor: props.selected ? '#fff' : 'rgba(254, 241, 73, .1)',
}));

const OperationButton = ({
  operation,
  selectOperation,
  selectedOperation,
}: Props) => {
  return (
    <Grid item>
      <StyledButton
        fullWidth
        variant="outlined"
        selected={selectedOperation === operation}
        onClick={() => selectOperation(operation)}
      >
        {operation}
      </StyledButton>
    </Grid>
  );
};

export default OperationButton;
