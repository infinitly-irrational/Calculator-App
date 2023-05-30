import { Button } from '@mui/material';
import React from 'react';

export const triggerMode = (mode: boolean = true) => {
  return (
    <>
      <Button variant="outlined" onClick={() => !mode}>
        Mode
      </Button>
    </>
  );
};
