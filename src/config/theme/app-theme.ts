import {StyleSheet} from 'react-native';

export const colors = {
  darkGray: '#333333',
  lightGray: '#A5A5A5',
  orange: '#FF9427',

  textPrimary: '#FFFFFF',
  textSecondary: '#5c5c5c',
  background: '#000000',
};

export const sizes = {
  xxxs: 8,
  xxs: 12,
  xs: 16,
  s: 20,
  m: 24,
  l: 28,
  xl: 32,
  xxl: 36,
  xxxl: 40,
  xxxxl: 60,
};

export const gaps = {
  xxxs: 8,
  xxs: 12,
  xs: 16,
  s: 20,
  m: 24,
  l: 28,
  xl: 32,
  xxl: 36,
  xxxl: 40,
};

export const theme = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  background: {
    color: colors.background,
  },
  textPrimary: {
    color: colors.textPrimary,
  },
  textSecondary: {
    color: colors.textSecondary,
  },
});
