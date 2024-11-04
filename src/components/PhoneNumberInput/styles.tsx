import {COLORS} from 'constants/colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  resetDefaultStyle: {
    height: 44,
    paddingVertical: 0,
    paddingHorizontal: 0,
    backgroundColor: COLORS.white,
  },
  container: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.border,
    width: '100%',
  },
  textContainer: {
    borderRadius: 8,
    height: 42,
  },
  fontStyle: {
    fontSize: 16,
    color: COLORS.black,
    fontWeight: '500',
  },
  codeText: {
    paddingHorizontal: 0,
  },
});
