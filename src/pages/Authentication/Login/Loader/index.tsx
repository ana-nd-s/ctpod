import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

import {COLORS} from 'constants/colors';
import React from 'react';
import {useTranslation} from 'react-i18next';

const OTPLoader: React.FC = () => {
  const {t} = useTranslation();
  return (
    <View style={styles.loaderContainer}>
      <ActivityIndicator size="large" color={COLORS.primaryGreen} />
      <Text style={styles.loaderText}>{t('OTP_LOADER')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  loaderText: {
    fontSize: 16,
    color: COLORS.labelSecondary,
    marginTop: 12,
  },
});

export default OTPLoader;
