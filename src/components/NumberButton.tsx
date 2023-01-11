import { Button } from '@mui/material';
import React from 'react';

interface Props {
  number: number | string;
}

const NumberButton = ({ number }: Props) => {
  return (
    <Button
      variant="contained"
      color="info"
      onClick={() => console.log(number)}
      sx={{ borderRadius: 0, border: 'none' }}
    >
      {number}
    </Button>
  );
};

export default NumberButton;
