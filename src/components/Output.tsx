import { styled } from '@mui/material';
import theme from '../components/Theme';

export const Output = styled('div')(({ theme }) => ({
  width: '100%',
  textAlign: 'right',
  height: '2em',
  padding: theme.spacing(2),
  fontSize: '3em',
  overflow: 'hidden',
}));
