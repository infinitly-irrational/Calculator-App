import { Grid, Button } from '@mui/material';

interface Props {
  digit: string;
  enteredDigit: (number: string) => void;
  xs?: number;
}

const DigitButton = ({ digit, enteredDigit, xs = 3 }: Props) => {
  return (
    <Grid item xs={xs}>
      <Button fullWidth variant="outlined" onClick={() => enteredDigit(digit)}>
        {digit}
      </Button>
    </Grid>
  );
};

export default DigitButton;
