import React, {useEffect} from 'react';

enum Operator {
  add = '+',
  subtract = '-',
  multiply = 'x',
  divide = '÷',
}

export const useCalculator = () => {
  const [number, setNumber] = React.useState('0');
  const [formula, setFormula] = React.useState('');
  const [prevNumber, setPrevNumber] = React.useState('0');
  const lastOperator = React.useRef<Operator>();

  useEffect(() => {
    if (lastOperator.current) {
      const firstFormulaPart = formula.split(' ').at(0);
      setFormula(`${firstFormulaPart} ${lastOperator.current} ${number}`);
    } else {
      setFormula(number);
    }
  }, [number]);

  useEffect(() => {
    setPrevNumber(calculateSubResult().toString());
  }, [formula]);

  const buildNumber = (digit: string) => {
    if (number.includes('.') && digit === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      if (digit === '.') {
        return setNumber(number + digit);
      }

      if (digit === '0' && number.includes('.')) {
        return setNumber(number + digit);
      }

      if (digit !== '0' && !number.includes('.')) {
        return setNumber(digit);
      }
      if (digit === '0' && !number.includes('.')) {
        return;
      }
      setNumber(number + digit);
    }

    if (number.startsWith('-')) {
      return setNumber(number + digit);
    }

    setNumber(number + digit);
  };

  const del = () => {
    if (number.length === 1) {
      return setNumber('0');
    }
    if (number.length === 2 && number.includes('-')) {
      return setNumber('0');
    }
    setNumber(number.slice(0, -1));
  };

  const clear = () => {
    setNumber('0');
    setPrevNumber('0');
    lastOperator.current = undefined;
    setFormula('');
  };

  const toggleSign = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber(`-${number}`);
    }
  };

  const setLastNumber = () => {
    const tempResult = calculateSubResult();
    setFormula(`${tempResult}`);

    if (number.endsWith('.')) {
      return setPrevNumber(number.slice(0, -1));
    } else {
      setPrevNumber(number);
    }
    setNumber('0');
  };

  const divideOperation = () => {
    setLastNumber();
    lastOperator.current = Operator.divide;
  };

  const subtractOperation = () => {
    setLastNumber();
    lastOperator.current = Operator.subtract;
  };

  const addOperation = () => {
    setLastNumber();

    lastOperator.current = Operator.add;
  };

  const multiplyOperation = () => {
    setLastNumber();
    lastOperator.current = Operator.multiply;
  };

  const calculateResult = () => {
    const result = calculateSubResult();
    setFormula(`${result}`);
    lastOperator.current = undefined;
    setPrevNumber('0');
  };

  const calculateSubResult = (): number => {
    const [firstValue, operator, secondValue] = formula.split(' ');
    const num1 = Number(firstValue);
    const num2 = Number(secondValue);

    if (isNaN(num2)) return num1;

    switch (operator) {
      case Operator.add:
        return num1 + num2;

      case Operator.subtract:
        return num1 - num2;

      case Operator.multiply:
        return num1 * num2;

      case Operator.divide:
        return num1 / num2;

      default:
        throw new Error('Invalid operator');
    }
  };
  return {
    number,
    prevNumber,
    formula,
    clear,
    del,
    toggleSign,
    buildNumber,
    divideOperation,
    subtractOperation,
    addOperation,
    multiplyOperation,
    calculateResult,
  };
};
