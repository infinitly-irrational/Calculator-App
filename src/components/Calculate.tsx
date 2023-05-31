export interface CalculateProps {
  prevValue: string;
  currentValue: string;
  currentOperation: string;
}

function Calculate({ prevValue, currentValue, currentOperation }: CalculateProps): string {
  if (!prevValue || !currentOperation) return currentValue;
  const current = parseFloat(currentValue);
  const prev = parseFloat(prevValue);
  let result;

  switch (currentOperation) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '÷':
      result = prev / current;
      break;
    default:
      result = currentValue; 
  }
  return result.toString();
}

export default Calculate;
