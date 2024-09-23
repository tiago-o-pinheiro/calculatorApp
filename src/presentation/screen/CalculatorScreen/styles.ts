import {StyleSheet} from 'react-native';
import {gaps, sizes, theme} from '@config/index';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.background.color,
    flex: 1,
    justifyContent: 'flex-end',
    padding: gaps.s,
  },
  resultContainer: {
    paddingHorizontal: gaps.s,
    paddingVertical: gaps.xs,
  },
  resultDisplay: {
    color: theme.textPrimary.color,
    fontSize: sizes.xxxxl,
    textAlign: 'right',
    marginBottom: gaps.xxxs,
    fontWeight: '300',
  },
  subResultDisplay: {
    color: theme.textSecondary.color,
    fontSize: sizes.xxl,
    textAlign: 'right',
    marginBottom: gaps.s,
    fontWeight: '300',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: gaps.s,
    marginBottom: gaps.s,
  },
});
