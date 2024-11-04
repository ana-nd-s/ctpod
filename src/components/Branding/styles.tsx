import {Dimensions, StyleSheet} from 'react-native';

import { COLORS } from 'constants/colors';

const {height: screenHeight} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: screenHeight - 315,
    paddingHorizontal: 16,
  },
  logoImg: {
    marginTop: 32,
  },
  title: {
    color: COLORS.white,
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 48,
    lineHeight: 40,
  },
});
