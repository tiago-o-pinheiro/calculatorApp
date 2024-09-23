import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import Button from '@components/Button/Button';
import {colors} from '@config/index';
import {useCalculator} from '@hooks/useCalculator';

export const CalculatorScreen = () => {
  const {
    number,
    formula,
    prevNumber,
    buildNumber,
    clear,
    del,
    toggleSign,
    divideOperation,
    subtractOperation,
    addOperation,
    multiplyOperation,
    calculateResult,
  } = useCalculator();
  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text
          style={styles.resultDisplay}
          adjustsFontSizeToFit
          numberOfLines={1}>
          {formula}
        </Text>
        {prevNumber === formula ? (
          <Text style={styles.subResultDisplay}></Text>
        ) : (
          <Text style={styles.subResultDisplay}>{prevNumber}</Text>
        )}
      </View>

      <View style={styles.buttonContainer}>
        <Button label="C" color={colors.lightGray} onPress={clear} />
        <Button label="+/-" color={colors.lightGray} onPress={toggleSign} />
        <Button label="del" color={colors.lightGray} onPress={del} />
        <Button label="÷" color={colors.orange} onPress={divideOperation} />
      </View>
      <View style={styles.buttonContainer}>
        <Button label="7" onPress={() => buildNumber('7')} />
        <Button label="8" onPress={() => buildNumber('8')} />
        <Button label="9" onPress={() => buildNumber('9')} />
        <Button label="x" color={colors.orange} onPress={multiplyOperation} />
      </View>
      <View style={styles.buttonContainer}>
        <Button label="4" onPress={() => buildNumber('4')} />
        <Button label="5" onPress={() => buildNumber('5')} />
        <Button label="6" onPress={() => buildNumber('7')} />
        <Button label="-" color={colors.orange} onPress={subtractOperation} />
      </View>
      <View style={styles.buttonContainer}>
        <Button label="1" onPress={() => buildNumber('1')} />
        <Button label="2" onPress={() => buildNumber('2')} />
        <Button label="3" onPress={() => buildNumber('3')} />
        <Button label="+" color={colors.orange} onPress={addOperation} />
      </View>
      <View style={styles.buttonContainer}>
        <Button label="0" size="medium" onPress={() => buildNumber('0')} />
        <Button label="." onPress={() => buildNumber('.')} />
        <Button label="=" color={colors.orange} onPress={calculateResult} />
      </View>
    </View>
  );
};
