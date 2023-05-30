import { CalculateProps } from "./Calculate";

export interface Values {
  currentValue: string;
  currentOperation: string;
  prevValue: string;
  overwrite: boolean;
}

export interface Setters {
  setCurrentValue: React.Dispatch<React.SetStateAction<string>>;
  setCurrentOperation: React.Dispatch<React.SetStateAction<string>>;
  setPrevValue: React.Dispatch<React.SetStateAction<string>>;
  setOverwrite: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface Functions {
  setDigit: (digit: string) => void;
  selectOperation: (operation: string) => void;
  Calculate: (props:CalculateProps) => string | number | undefined;
  equals: () => void;
  clear: () => void;
  del: () => void;
  percent: (value:string) => string;
}
