import {sizes} from '@config/index';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 80,
    width: 80,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: sizes.m,
  },
});
