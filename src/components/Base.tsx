import { Paper, styled } from '@mui/material';
import theme from '../components/Theme';

export const Base = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginTop: theme.spacing(2),
  borderRadius: 15,
}));
