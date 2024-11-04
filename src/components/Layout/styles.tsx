import {Dimensions, StyleSheet} from 'react-native';

import {COLORS} from 'constants/colors';

const {height: screenHeight} = Dimensions.get('window');

export const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    minHeight: screenHeight,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  topSection: {
    justifyContent: 'center',
  },
  lightBg: {
    backgroundColor: COLORS.white,
  },
  darkBg: {
    backgroundColor: COLORS.black,
  },
  bottomSection: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingVertical: 24,
    paddingHorizontal: 16,
    marginTop: -20,
  },
});
