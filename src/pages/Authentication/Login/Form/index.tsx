import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import ButtonComponent from '@components/Button';
import PhoneNumberInput from 'components/PhoneNumberInput';
import {useTranslation} from 'react-i18next';

const LoginForm: React.FC = () => {
  const {t} = useTranslation();

  const [phoneNumber, setPhoneNumber] = useState<string>('');

  return (
    <>
      <Text style={styles.title}>{t('LOGIN_MESSAGE')}</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>{t('PHONE_NUMBER')}</Text>
        <PhoneNumberInput value={phoneNumber} onChange={setPhoneNumber} />
      </View>
      <ButtonComponent title="Login" variant="primary" />
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: '#353131',
    lineHeight: 28.8,
    fontWeight: '700',
  },
  inputContainer: {
    paddingTop: 24,
    paddingBottom: 32,
  },
  label: {
    fontSize: 14,
    color: '#344054',
    marginBottom: 8,
  },
});
export default LoginForm;
