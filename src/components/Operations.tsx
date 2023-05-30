import Calculate from './Calculate';

interface Props {
  prevValue: string;
  currentValue: string;
  currentOperation: string;
}

function Percent(value: string): string {
  const current = parseFloat(value);
  return (current / 100).toString();
}
export default Percent;
