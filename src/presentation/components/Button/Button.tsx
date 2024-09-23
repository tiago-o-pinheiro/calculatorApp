import {colors} from '@config/index';
import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles} from './styles';

type ButtonProps = {
  label: string;
  size?: 'small' | 'medium' | 'large';
  color?: string;
  labelColor?: string;
  onPress?: () => void;
};

const BUTTON_SIZE = {
  small: 80,
  medium: 180,
  large: 240,
};

const Button = ({
  label,
  size = 'small',
  color = colors.darkGray,
  labelColor = colors.textPrimary,
  onPress,
}: ButtonProps) => {
  const buttonSize = BUTTON_SIZE[size];
  return (
    <Pressable
      onPress={() => onPress && onPress()}
      style={({pressed}) => [
        styles.container,
        {width: buttonSize, backgroundColor: color, opacity: pressed ? 0.5 : 1},
      ]}>
      <Text style={{...styles.label, color: labelColor}}>{label}</Text>
    </Pressable>
  );
};

export default Button;
